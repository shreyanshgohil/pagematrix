// PageSpeed Insights API Configuration
export const PAGESPEED_CONFIG = {
  // Google PageSpeed Insights API endpoint
  API_BASE_URL: "https://www.googleapis.com/pagespeedonline/v5/runPagespeed",

  // API key (you'll need to get this from Google Cloud Console)
  API_KEY: process.env.NEXT_PUBLIC_PAGESPEED_API_KEY || "",

  // Default parameters for PageSpeed API
  DEFAULT_PARAMS: {
    strategy: "mobile", // 'mobile' or 'desktop'
    category: ["performance", "accessibility", "best-practices", "seo"],
    locale: "en_US",
  },

  // Performance score thresholds
  SCORE_THRESHOLDS: {
    GOOD: 90,
    NEEDS_IMPROVEMENT: 50,
    POOR: 0,
  },

  // Score colors for UI
  SCORE_COLORS: {
    GOOD: "#0F9D58", // Green
    NEEDS_IMPROVEMENT: "#FF9800", // Orange
    POOR: "#F44336", // Red
  },

  // Available strategies
  STRATEGIES: [
    { value: "mobile", label: "Mobile" },
    { value: "desktop", label: "Desktop" },
  ],

  // Available categories
  CATEGORIES: [
    { value: "performance", label: "Performance" },
    { value: "accessibility", label: "Accessibility" },
    { value: "best-practices", label: "Best Practices" },
    { value: "seo", label: "SEO" },
  ],
};

// Helper function to get score color based on value
export const getScoreColor = (score) => {
  if (score >= PAGESPEED_CONFIG.SCORE_THRESHOLDS.GOOD) {
    return PAGESPEED_CONFIG.SCORE_COLORS.GOOD;
  } else if (score >= PAGESPEED_CONFIG.SCORE_THRESHOLDS.NEEDS_IMPROVEMENT) {
    return PAGESPEED_CONFIG.SCORE_COLORS.NEEDS_IMPROVEMENT;
  } else {
    return PAGESPEED_CONFIG.SCORE_COLORS.POOR;
  }
};

// Helper function to get score label based on value
export const getScoreLabel = (score) => {
  if (score >= PAGESPEED_CONFIG.SCORE_THRESHOLDS.GOOD) {
    return "Good";
  } else if (score >= PAGESPEED_CONFIG.SCORE_THRESHOLDS.NEEDS_IMPROVEMENT) {
    return "Needs Improvement";
  } else {
    return "Poor";
  }
};

// Helper function to build PageSpeed API URL
export const buildPageSpeedUrl = (url, options = {}) => {
  const params = new URLSearchParams({
    url: url,
    key: PAGESPEED_CONFIG.API_KEY,
    ...PAGESPEED_CONFIG.DEFAULT_PARAMS,
    ...options,
  });

  return `${PAGESPEED_CONFIG.API_BASE_URL}?${params.toString()}`;
};
