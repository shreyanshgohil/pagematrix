import React, { createContext, useContext, useState, useCallback } from "react";
import {
  PAGESPEED_CONFIG,
  buildPageSpeedUrl,
  getScoreColor,
  getScoreLabel,
} from "../config/pagespeed";

const PageSpeedContext = createContext();

export const usePageSpeed = () => {
  const context = useContext(PageSpeedContext);
  if (!context) {
    throw new Error("usePageSpeed must be used within a PageSpeedProvider");
  }
  return context;
};

export const PageSpeedProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);
  const [analysisHistory, setAnalysisHistory] = useState([]);

  // Analyze a URL using PageSpeed Insights API
  const analyzeUrl = useCallback(async (url, options = {}) => {
    if (!url) {
      setError("Please provide a valid URL");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const apiUrl = buildPageSpeedUrl(url, options);
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(
          `API request failed: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();

      // Process the results
      const processedResults = processPageSpeedResults(data);
      setResults(processedResults);

      // Add to history
      const newAnalysis = {
        id: Date.now(),
        url: url,
        timestamp: new Date().toISOString(),
        results: processedResults,
        options: options,
      };

      setAnalysisHistory((prev) => [newAnalysis, ...prev.slice(0, 9)]); // Keep last 10 analyses

      return processedResults;
    } catch (err) {
      setError(err.message);
      console.error("PageSpeed analysis error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Process raw PageSpeed API results into a more usable format
  const processPageSpeedResults = (data) => {
    const lighthouse = data.lighthouseResult;
    const categories = lighthouse.categories;

    // Extract scores for each category
    const scores = {};
    Object.keys(categories).forEach((categoryKey) => {
      const category = categories[categoryKey];
      scores[categoryKey] = {
        score: Math.round(category.score * 100),
        title: category.title,
        description: category.description,
        color: getScoreColor(Math.round(category.score * 100)),
        label: getScoreLabel(Math.round(category.score * 100)),
      };
    });

    // Extract performance metrics
    const performanceMetrics = {
      firstContentfulPaint:
        lighthouse.audits["first-contentful-paint"]?.displayValue || "N/A",
      largestContentfulPaint:
        lighthouse.audits["largest-contentful-paint"]?.displayValue || "N/A",
      firstInputDelay:
        lighthouse.audits["max-potential-fid"]?.displayValue || "N/A",
      cumulativeLayoutShift:
        lighthouse.audits["cumulative-layout-shift"]?.displayValue || "N/A",
      speedIndex: lighthouse.audits["speed-index"]?.displayValue || "N/A",
    };

    // Extract opportunities for improvement
    const opportunities =
      lighthouse.categories.performance?.auditRefs
        ?.filter((audit) => audit.group === "load-opportunities")
        ?.map((audit) => ({
          id: audit.id,
          title: lighthouse.audits[audit.id]?.title || audit.id,
          description: lighthouse.audits[audit.id]?.description || "",
          score: lighthouse.audits[audit.id]?.score
            ? Math.round(lighthouse.audits[audit.id].score * 100)
            : null,
          displayValue: lighthouse.audits[audit.id]?.displayValue || "",
          details: lighthouse.audits[audit.id]?.details || null,
        }))
        ?.filter((opp) => opp.score !== null && opp.score < 90) || [];

    // Extract diagnostics
    const diagnostics =
      lighthouse.categories.performance?.auditRefs
        ?.filter((audit) => audit.group === "diagnostics")
        ?.map((audit) => ({
          id: audit.id,
          title: lighthouse.audits[audit.id]?.title || audit.id,
          description: lighthouse.audits[audit.id]?.description || "",
          score: lighthouse.audits[audit.id]?.score
            ? Math.round(lighthouse.audits[audit.id].score * 100)
            : null,
          displayValue: lighthouse.audits[audit.id]?.displayValue || "",
          details: lighthouse.audits[audit.id]?.details || null,
        })) || [];

    return {
      url: data.id,
      finalUrl: lighthouse.finalUrl,
      userAgent: lighthouse.userAgent,
      fetchTime: lighthouse.fetchTime,
      environment: lighthouse.environment,
      configSettings: lighthouse.configSettings,
      categories: scores,
      performanceMetrics,
      opportunities,
      diagnostics,
      rawData: data, // Keep raw data for advanced users
    };
  };

  // Clear current results
  const clearResults = useCallback(() => {
    setResults(null);
    setError(null);
  }, []);

  // Clear analysis history
  const clearHistory = useCallback(() => {
    setAnalysisHistory([]);
  }, []);

  // Get analysis by ID from history
  const getAnalysisById = useCallback(
    (id) => {
      return analysisHistory.find((analysis) => analysis.id === id);
    },
    [analysisHistory]
  );

  const value = {
    loading,
    error,
    results,
    analysisHistory,
    analyzeUrl,
    clearResults,
    clearHistory,
    getAnalysisById,
  };

  return (
    <PageSpeedContext.Provider value={value}>
      {children}
    </PageSpeedContext.Provider>
  );
};
