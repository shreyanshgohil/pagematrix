import Head from "next/head";
import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaCog,
  FaBolt,
  FaGlobe,
  FaUsers,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaDatabase,
  FaLock,
  FaMobile,
  FaCloud,
  FaCogs,
  FaEye,
  FaHeadset,
  FaInfinity,
} from "react-icons/fa";

export default function Features() {
  const mainFeatures = [
    {
      icon: FaRocket,
      title: "Lightning Fast Analysis",
      description:
        "Get comprehensive PageSpeed insights in seconds using Google's official PageSpeed Insights API for maximum accuracy.",
      gradient: "from-brand-theme-500 to-brand-theme-600",
      details: [
        "Sub-5 second average analysis time",
        "Real-time performance metrics",
        "Instant results and recommendations",
        "Batch analysis capabilities",
      ],
    },
    {
      icon: FaShieldAlt,
      title: "Google-Powered Accuracy",
      description:
        "Powered by Google's official PageSpeed Insights API with 99.9% uptime guarantee. Get the most accurate performance data available.",
      gradient: "from-brand-theme-500 to-brand-theme-600",
      details: [
        "Google PageSpeed Insights API integration",
        "Real-time Lighthouse audits",
        "Core Web Vitals measurement",
        "Industry-standard metrics",
        "GDPR and CCPA compliant",
      ],
    },
    {
      icon: FaChartLine,
      title: "Advanced Performance Analytics",
      description:
        "Comprehensive insights into your website's performance with detailed reports and metrics using Google PageSpeed data.",
      gradient: "from-brand-theme-500 to-brand-theme-600",
      details: [
        "Real-time performance statistics",
        "Core Web Vitals tracking",
        "Performance dashboards",
        "Custom reporting tools",
      ],
    },
    {
      icon: FaCog,
      title: "Easy Integration",
      description:
        "One-click setup with comprehensive APIs and webhooks for seamless integration with your workflow.",
      gradient: "from-brand-theme-500 to-brand-theme-600",
      details: [
        "RESTful API with full documentation",
        "Webhook notifications",
        "SDK for popular languages",
        "Zapier integration available",
      ],
    },
    {
      icon: FaBolt,
      title: "Bulk Performance Analysis",
      description:
        "Analyze thousands of URLs at once with our powerful bulk processing capabilities using Google PageSpeed API.",
      gradient: "from-brand-theme-500 to-brand-theme-600",
      details: [
        "CSV file upload support",
        "Batch analysis up to 10,000 URLs",
        "Progress tracking for large batches",
        "Error handling and retry logic",
      ],
    },
    {
      icon: FaGlobe,
      title: "Global Performance Testing",
      description:
        "Test website performance from multiple global locations using Google's global infrastructure.",
      gradient: "from-brand-theme-500 to-brand-theme-600",
      details: [
        "Mobile and desktop testing",
        "Multiple device simulation",
        "Global performance metrics",
        "Regional performance insights",
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: FaDatabase,
      title: "Smart URL Validation",
      description:
        "Automatically validate URLs before processing to ensure maximum success rates.",
    },
    {
      icon: FaLock,
      title: "Private URL Support",
      description:
        "Secure handling of private and authenticated URLs with proper credential management.",
    },
    {
      icon: FaMobile,
      title: "Mobile Optimization",
      description:
        "Fully responsive interface that works perfectly on all devices and screen sizes.",
    },
    {
      icon: FaCloud,
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud-based processing that handles traffic spikes automatically.",
    },
    {
      icon: FaCogs,
      title: "Custom Workflows",
      description:
        "Create custom automation workflows to streamline your indexing process.",
    },
    {
      icon: FaEye,
      title: "URL Preview",
      description:
        "Preview URLs before indexing to ensure they're ready for search engines.",
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support from our expert team of indexing specialists.",
    },
    {
      icon: FaInfinity,
      title: "Unlimited Retries",
      description:
        "Automatic retry logic for failed indexing attempts with intelligent backoff.",
    },
  ];

  const stats = [
    { number: "10M+", label: "URLs Processed", icon: FaGlobe },
    { number: "99.9%", label: "Success Rate", icon: FaCheckCircle },
    { number: "< 5min", label: "Average Time", icon: FaClock },
    { number: "50K+", label: "Happy Users", icon: FaUsers },
  ];

  return (
    <>
      <Head>
        <title>Features - PageMatrix</title>
        <meta
          name="description"
          content="Discover all the powerful features that make PageMatrix the most comprehensive web performance analysis tool using Google PageSpeed Insights API"
        />
      </Head>

      <div className="min-h-screen flex flex-col font-figtree">
        <Header />

        <main className="flex-1">
          {/* Hero Section - Enhanced Gradient Design */}
          <div className="relative bg-gradient-to-br from-brand-blue-900 via-brand-theme-800 to-brand-blue-800 py-24 overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-theme-500/10 via-transparent to-brand-theme-600/10"></div>
              <div className="absolute top-20 left-10 w-72 h-72 bg-brand-theme-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-theme-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-brand-theme-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-8 border border-white/20">
                  <FaRocket className="h-4 w-4 mr-2" />
                  Powerful Features
                </div>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                  Everything You Need
                  <br />
                  <span className="bg-gradient-to-r from-brand-theme-200 via-brand-theme-100 to-white bg-clip-text text-transparent">
                    for Performance Analysis
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                  Discover the comprehensive suite of features that make
                  PageMatrix the most powerful web performance analysis platform
                  using Google PageSpeed Insights API.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                  <Link
                    href="/auth/register"
                    className="group relative px-8 py-4 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-xl font-bold text-lg text-white hover:from-brand-theme-600 hover:to-brand-theme-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-brand-theme-500/25 inline-flex items-center justify-center"
                  >
                    Start Free Trial
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    href="/pricing"
                    className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="text-center group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-theme-500 to-brand-theme-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-300 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Features Section - Light Background */}
          <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-block w-16 h-1 bg-brand-theme-500 rounded-full mb-4"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Core Features
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  The essential features that make PageIndexing the most
                  powerful URL indexing platform available.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mainFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                    >
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Additional Features Section - Dark Background */}
          <div className="py-20 bg-gradient-to-br from-brand-blue-900 via-brand-theme-800 to-brand-blue-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-block w-16 h-1 bg-brand-theme-200 rounded-full mb-4"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Additional Features
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Even more capabilities to enhance your URL indexing experience
                  and maximize your success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {additionalFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-brand-theme-500 to-brand-theme-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* API Section - Light Background */}
          <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block w-16 h-1 bg-brand-theme-500 rounded-full mb-4"></div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Developer-Friendly API
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Integrate PageIndexing into your existing workflow with our
                    comprehensive REST API. Built with developers in mind, our
                    API is fast, reliable, and well-documented.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        RESTful API with JSON responses
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        Comprehensive documentation and examples
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        SDK support for popular languages
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        Webhook notifications for real-time updates
                      </span>
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/docs"
                      className="group relative px-6 py-3 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-xl font-semibold text-white hover:from-brand-theme-600 hover:to-brand-theme-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-brand-theme-500/25 inline-flex items-center justify-center"
                    >
                      View API Docs
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <Link
                      href="/contact"
                      className="px-6 py-3 border-2 border-brand-theme-500 text-brand-theme-500 rounded-xl font-semibold hover:bg-brand-theme-500 hover:text-white transition-all duration-300 text-center"
                    >
                      Get API Key
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                    <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
                      <div className="text-brand-theme-200 mb-4">
                        // Example API Call
                      </div>
                      <div className="text-gray-300">
                        <div className="text-blue-400">POST</div>
                        <div className="text-yellow-400">/api/v1/index</div>
                        <div className="text-gray-400">
                          Content-Type: application/json
                        </div>
                        <br />
                        <div className="text-gray-300">{`{`}</div>
                        <div className="text-gray-300 ml-4">
                          "urls": ["https://example.com"]
                        </div>
                        <div className="text-gray-300">{`}`}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section - Dark Background with More Height */}
          <div className="py-32 bg-gradient-to-br from-brand-blue-900 via-brand-theme-800 to-brand-blue-800 relative overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-theme-500/10 via-brand-theme-200/20 to-brand-theme-500/10"></div>

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-brand-theme-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-theme-600/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-theme-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-block w-20 h-1 bg-brand-theme-200 rounded-full mb-8"></div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Ready to Experience These Features?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Start your free trial today and see why thousands of businesses
                trust PageIndexing for their URL indexing needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/auth/register"
                  className="group relative px-12 py-6 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-2xl font-bold text-xl text-white hover:from-brand-theme-600 hover:to-brand-theme-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-theme-500/25 inline-flex items-center justify-center min-w-[200px]"
                >
                  Start Free Trial
                  <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
                <Link
                  href="/pricing"
                  className="px-12 py-6 border-2 border-white/30 text-white rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm min-w-[200px] text-center"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
