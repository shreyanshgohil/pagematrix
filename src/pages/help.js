import Head from "next/head";
import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {
  FaQuestionCircle,
  FaRocket,
  FaChartLine,
  FaCog,
  FaShieldAlt,
  FaArrowLeft,
  FaSearch,
  FaBook,
  FaVideo,
  FaEnvelope,
  FaPhone,
  FaComments,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaLightbulb,
  FaUser,
  FaCreditCard,
  FaGlobe,
} from "react-icons/fa";
import { useState } from "react";

export default function Help() {
  const [openSections, setOpenSections] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const faqCategories = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: FaRocket,
      color: "from-blue-500 to-cyan-500",
      faqs: [
        {
          question: "How do I analyze a website's performance?",
          answer:
            "Simply enter the URL you want to analyze in the search box on our homepage, select whether you want mobile or desktop analysis, and click 'Analyze'. Our system will use Google's PageSpeed Insights API to provide comprehensive performance metrics including Core Web Vitals, loading times, and optimization recommendations.",
        },
        {
          question: "What is PageMatrix and how does it work?",
          answer:
            "PageMatrix is a web performance analysis tool that uses Google's official PageSpeed Insights API to provide detailed insights about your website's speed, accessibility, SEO, and best practices. We help you understand your Core Web Vitals and provide actionable recommendations to improve your site's performance.",
        },
        {
          question: "Do I need to create an account to use PageMatrix?",
          answer:
            "No account is required for basic analysis. You can analyze any public URL immediately. However, creating a free account gives you access to additional features like analysis history, detailed reports, and advanced metrics.",
        },
        {
          question: "What types of websites can I analyze?",
          answer:
            "You can analyze any publicly accessible website. This includes business websites, e-commerce sites, blogs, portfolios, and any other web page that's accessible via HTTP or HTTPS. Private or password-protected sites cannot be analyzed.",
        },
      ],
    },
    {
      id: "performance-metrics",
      title: "Performance Metrics",
      icon: FaChartLine,
      color: "from-green-500 to-emerald-500",
      faqs: [
        {
          question: "What are Core Web Vitals?",
          answer:
            "Core Web Vitals are a set of three specific metrics that Google considers important for user experience: Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). These metrics measure loading performance, interactivity, and visual stability respectively.",
        },
        {
          question: "What is a good performance score?",
          answer:
            "Performance scores are rated on a scale of 0-100. A score of 90-100 is considered 'Good', 50-89 is 'Needs Improvement', and 0-49 is 'Poor'. We recommend aiming for scores above 90 for optimal user experience and SEO benefits.",
        },
        {
          question: "How often should I check my website's performance?",
          answer:
            "We recommend checking your website's performance monthly or after making significant changes to your site. For high-traffic websites, weekly monitoring is ideal. PageMatrix provides historical data to help you track performance trends over time.",
        },
        {
          question: "Why do mobile and desktop scores differ?",
          answer:
            "Mobile and desktop scores differ because they simulate different devices, network conditions, and user behaviors. Mobile analysis uses slower network conditions and smaller screens, which typically results in lower scores. It's important to optimize for both experiences.",
        },
      ],
    },
    {
      id: "account-billing",
      title: "Account & Billing",
      icon: FaUser,
      color: "from-purple-500 to-indigo-500",
      faqs: [
        {
          question: "How do I create an account?",
          answer:
            "Click the 'Get Started' button in the top navigation, fill out the registration form with your email and password, and verify your email address. You'll then have access to all premium features and analysis history.",
        },
        {
          question: "What's included in the free plan?",
          answer:
            "The free plan includes basic performance analysis, Core Web Vitals metrics, and general optimization recommendations. You can analyze up to 10 URLs per month and access basic performance reports.",
        },
        {
          question: "How do I upgrade my plan?",
          answer:
            "Go to your account settings and click 'Upgrade Plan'. Choose the plan that best fits your needs and follow the payment process. Your new plan will be activated immediately after successful payment.",
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer:
            "Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access to premium features until the end of your current billing period.",
        },
      ],
    },
    {
      id: "technical-issues",
      title: "Technical Issues",
      icon: FaCog,
      color: "from-orange-500 to-red-500",
      faqs: [
        {
          question: "Why is my analysis taking so long?",
          answer:
            "Analysis typically takes 10-30 seconds depending on the website's complexity and current load. If it's taking longer, the site might be experiencing high traffic or technical issues. Try again in a few minutes or contact support if the problem persists.",
        },
        {
          question: "What does 'Analysis Failed' mean?",
          answer:
            "This usually means the website is temporarily unavailable, has blocked our analysis tool, or has technical issues. Check if the URL is correct and accessible, then try again. If the problem continues, contact our support team.",
        },
        {
          question: "Why can't I analyze certain websites?",
          answer:
            "Some websites block automated analysis tools for security reasons. Others might be behind authentication or have technical restrictions. We can only analyze publicly accessible websites that allow automated testing.",
        },
        {
          question: "How accurate are the performance scores?",
          answer:
            "Our scores are generated using Google's official PageSpeed Insights API, so they're as accurate as Google's own analysis. The scores reflect real-world performance conditions and are used by Google for search ranking purposes.",
        },
      ],
    },
  ];

  const quickGuides = [
    {
      title: "Understanding Your Performance Report",
      icon: FaBook,
      description:
        "Learn how to read and interpret your performance analysis results",
      link: "/guides/performance-report",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Optimizing Core Web Vitals",
      icon: FaChartLine,
      description:
        "Step-by-step guide to improving your Core Web Vitals scores",
      link: "/guides/core-web-vitals",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Mobile Performance Optimization",
      icon: FaCog,
      description:
        "Best practices for mobile performance and responsive design",
      link: "/guides/mobile-optimization",
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Using PageMatrix API",
      icon: FaRocket,
      description: "Integrate PageMatrix into your workflow with our API",
      link: "/guides/api-integration",
      color: "from-orange-500 to-red-500",
    },
  ];

  const supportOptions = [
    {
      title: "Email Support",
      icon: FaEnvelope,
      description: "Get help via email within 24 hours",
      contact: "support@pagematrix.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Live Chat",
      icon: FaComments,
      description: "Chat with our support team in real-time",
      contact: "Available 9 AM - 6 PM PST",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Phone Support",
      icon: FaPhone,
      description: "Call us for urgent technical issues",
      contact: "+1 (555) 123-4567",
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Video Tutorials",
      icon: FaVideo,
      description: "Watch step-by-step video guides",
      contact: "Visit our YouTube channel",
      color: "from-orange-500 to-red-500",
    },
  ];

  const filteredFaqs = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.faqs.length > 0);

  return (
    <>
      <Head>
        <title>Help Center - PageMatrix</title>
        <meta
          name="description"
          content="Get help with PageMatrix web performance analysis. Find answers to common questions, guides, and support resources."
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 bg-gradient-to-br from-brand-blue-900 via-brand-theme-800 to-brand-blue-800">
          {/* Hero Section */}
          <div className="relative overflow-hidden">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-theme-500 to-brand-theme-600 rounded-2xl mb-6">
                  <FaQuestionCircle className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Help Center
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Find answers to your questions about PageMatrix web
                  performance analysis. Get help with Core Web Vitals,
                  optimization tips, and technical support.
                </p>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto">
                  <div className="relative">
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Search for help topics, questions, or guides..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-theme-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="relative -mt-8 pb-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
                {/* Quick Start Guide */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    Quick Start Guide
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {quickGuides.map((guide, index) => {
                      const Icon = guide.icon;
                      return (
                        <Link
                          key={index}
                          href={guide.link}
                          className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
                        >
                          <div
                            className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${guide.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2">
                            {guide.title}
                          </h3>
                          <p className="text-gray-300 text-sm">
                            {guide.description}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* FAQ Sections */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    Frequently Asked Questions
                  </h2>

                  {searchQuery && (
                    <div className="mb-6 text-center">
                      <p className="text-gray-300">
                        {filteredFaqs.reduce(
                          (total, category) => total + category.faqs.length,
                          0
                        )}{" "}
                        results found for "{searchQuery}"
                      </p>
                    </div>
                  )}

                  <div className="space-y-6">
                    {filteredFaqs.map((category, categoryIndex) => {
                      const Icon = category.icon;
                      return (
                        <div
                          key={categoryIndex}
                          className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                        >
                          <button
                            onClick={() => toggleSection(category.id)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                          >
                            <div className="flex items-center">
                              <div
                                className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r ${category.color} rounded-xl mr-4`}
                              >
                                <Icon className="h-5 w-5 text-white" />
                              </div>
                              <h3 className="text-xl font-bold text-white">
                                {category.title}
                              </h3>
                            </div>
                            {openSections[category.id] ? (
                              <FaChevronUp className="h-5 w-5 text-gray-300" />
                            ) : (
                              <FaChevronDown className="h-5 w-5 text-gray-300" />
                            )}
                          </button>

                          {openSections[category.id] && (
                            <div className="px-6 pb-6 space-y-4">
                              {category.faqs.map((faq, faqIndex) => (
                                <div
                                  key={faqIndex}
                                  className="border-l-2 border-brand-theme-500 pl-4"
                                >
                                  <h4 className="text-lg font-semibold text-white mb-2">
                                    {faq.question}
                                  </h4>
                                  <p className="text-gray-300 leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Support Options */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    Get Support
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {supportOptions.map((option, index) => {
                      const Icon = option.icon;
                      return (
                        <div
                          key={index}
                          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
                        >
                          <div
                            className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${option.color} rounded-xl mb-4 mx-auto`}
                          >
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2">
                            {option.title}
                          </h3>
                          <p className="text-gray-300 text-sm mb-3">
                            {option.description}
                          </p>
                          <p className="text-brand-theme-200 text-sm font-medium">
                            {option.contact}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Additional Resources */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    Additional Resources
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                      <FaBook className="h-8 w-8 text-brand-theme-200 mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-white mb-2">
                        Documentation
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Comprehensive guides and API documentation
                      </p>
                      <Link
                        href="/docs"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 text-white font-semibold rounded-lg hover:from-brand-theme-600 hover:to-brand-theme-700 transition-all duration-300"
                      >
                        View Docs
                      </Link>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                      <FaVideo className="h-8 w-8 text-brand-theme-200 mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-white mb-2">
                        Video Tutorials
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Step-by-step video guides and walkthroughs
                      </p>
                      <Link
                        href="/tutorials"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 text-white font-semibold rounded-lg hover:from-brand-theme-600 hover:to-brand-theme-700 transition-all duration-300"
                      >
                        Watch Videos
                      </Link>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                      <FaComments className="h-8 w-8 text-brand-theme-200 mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-white mb-2">
                        Community Forum
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Connect with other users and get community support
                      </p>
                      <Link
                        href="/community"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 text-white font-semibold rounded-lg hover:from-brand-theme-600 hover:to-brand-theme-700 transition-all duration-300"
                      >
                        Join Forum
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Back Button */}
                <div className="text-center">
                  <Link
                    href="/"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 hover:from-brand-theme-600 hover:to-brand-theme-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-brand-theme-500/25"
                  >
                    <FaArrowLeft className="mr-2" />
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-brand-theme-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-theme-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-brand-theme-200/20 rounded-full blur-xl animate-pulse delay-500"></div>
        </main>

        <Footer />
      </div>
    </>
  );
}
