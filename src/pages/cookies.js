import Head from "next/head";
import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {
  FaCookie,
  FaShieldAlt,
  FaCog,
  FaCheckCircle,
  FaExclamationTriangle,
  FaArrowLeft,
  FaInfoCircle,
  FaUserCog,
  FaChartLine,
  FaLock,
} from "react-icons/fa";

export default function Cookies() {
  const cookieTypes = [
    {
      title: "Essential Cookies",
      icon: FaShieldAlt,
      description:
        "These cookies are necessary for the website to function and cannot be switched off in our systems.",
      purpose: "Authentication, security, and basic functionality",
      examples: [
        "User session management",
        "Security tokens",
        "Load balancing",
        "Basic website functionality",
      ],
      color: "from-green-500 to-emerald-500",
      required: true,
    },
    {
      title: "Performance Cookies",
      icon: FaChartLine,
      description:
        "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      purpose: "Website performance analysis and optimization",
      examples: [
        "Page load times",
        "User interaction patterns",
        "Error tracking",
        "Performance metrics",
      ],
      color: "from-blue-500 to-cyan-500",
      required: false,
    },
    {
      title: "Analytics Cookies",
      icon: FaUserCog,
      description:
        "These cookies help us understand how our web performance analysis service is being used and how we can improve it.",
      purpose: "Service improvement and user experience optimization",
      examples: [
        "Usage statistics",
        "Feature adoption rates",
        "User preferences",
        "Service performance data",
      ],
      color: "from-purple-500 to-indigo-500",
      required: false,
    },
    {
      title: "Marketing Cookies",
      icon: FaCog,
      description:
        "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
      purpose: "Personalized marketing and advertising",
      examples: [
        "Ad targeting",
        "Campaign effectiveness",
        "User interests",
        "Cross-site tracking",
      ],
      color: "from-orange-500 to-red-500",
      required: false,
    },
  ];

  const cookieDetails = [
    {
      name: "session_id",
      type: "Essential",
      purpose: "Maintains user session for authentication and security",
      duration: "Session",
      domain: ".pagematrix.com",
    },
    {
      name: "performance_data",
      type: "Performance",
      purpose: "Stores performance analysis preferences and settings",
      duration: "30 days",
      domain: ".pagematrix.com",
    },
    {
      name: "analytics_user",
      type: "Analytics",
      purpose: "Tracks user interactions with our performance analysis tools",
      duration: "90 days",
      domain: ".pagematrix.com",
    },
    {
      name: "marketing_preferences",
      type: "Marketing",
      purpose: "Stores user preferences for personalized content and ads",
      duration: "1 year",
      domain: ".pagematrix.com",
    },
  ];

  return (
    <>
      <Head>
        <title>Cookie Policy - PageMatrix</title>
        <meta
          name="description"
          content="Learn about how PageMatrix uses cookies to enhance your web performance analysis experience and protect your privacy."
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
                  <FaCookie className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Cookie Policy
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Learn about how we use cookies to enhance your web performance
                  analysis experience while protecting your privacy.
                </p>
                <div className="text-sm text-gray-400">
                  Last updated:{" "}
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="relative -mt-8 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
                {/* Introduction */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    What Are Cookies?
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Cookies are small text files that are stored on your device
                    when you visit our website. They help us provide you with a
                    better experience by remembering your preferences and
                    understanding how you use our web performance analysis
                    services.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    At PageMatrix, we use cookies to enhance your experience
                    with our performance analysis tools, maintain your session
                    security, and help us improve our services.
                  </p>
                </div>

                {/* Cookie Types */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Types of Cookies We Use
                  </h2>
                  <div className="space-y-8">
                    {cookieTypes.map((type, index) => {
                      const Icon = type.icon;
                      return (
                        <div
                          key={index}
                          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                        >
                          <div className="flex items-start mb-4">
                            <div
                              className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${type.color} rounded-xl mr-4 flex-shrink-0`}
                            >
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-bold text-white">
                                  {type.title}
                                </h3>
                                {type.required ? (
                                  <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-full border border-red-500/30">
                                    Required
                                  </span>
                                ) : (
                                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                                    Optional
                                  </span>
                                )}
                              </div>
                              <p className="text-gray-300 mb-3">
                                {type.description}
                              </p>
                              <div className="mb-3">
                                <span className="text-sm font-semibold text-white">
                                  Purpose:{" "}
                                </span>
                                <span className="text-gray-300">
                                  {type.purpose}
                                </span>
                              </div>
                              <div>
                                <span className="text-sm font-semibold text-white">
                                  Examples:{" "}
                                </span>
                                <ul className="inline-block text-gray-300">
                                  {type.examples.map((example, exIndex) => (
                                    <li key={exIndex} className="inline">
                                      {example}
                                      {exIndex < type.examples.length - 1 &&
                                        ", "}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Cookie Details Table */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Specific Cookies We Use
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left p-4 text-white font-semibold">
                            Cookie Name
                          </th>
                          <th className="text-left p-4 text-white font-semibold">
                            Type
                          </th>
                          <th className="text-left p-4 text-white font-semibold">
                            Purpose
                          </th>
                          <th className="text-left p-4 text-white font-semibold">
                            Duration
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cookieDetails.map((cookie, index) => (
                          <tr
                            key={index}
                            className="border-b border-white/5 last:border-b-0"
                          >
                            <td className="p-4 text-gray-300 font-mono text-sm">
                              {cookie.name}
                            </td>
                            <td className="p-4 text-gray-300">{cookie.type}</td>
                            <td className="p-4 text-gray-300">
                              {cookie.purpose}
                            </td>
                            <td className="p-4 text-gray-300">
                              {cookie.duration}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Cookie Management */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Managing Your Cookie Preferences
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <FaLock className="mr-3" />
                        Browser Settings
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        You can control and delete cookies through your browser
                        settings. Most browsers allow you to refuse cookies or
                        delete them, but this may affect the functionality of
                        our web performance analysis tools.
                      </p>
                      <div className="text-sm text-gray-400">
                        <p>
                          <strong>Note:</strong> Disabling essential cookies may
                          prevent you from using certain features of our
                          service.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <FaCog className="mr-3" />
                        Cookie Consent
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        When you first visit our website, you&apos;ll see a
                        cookie consent banner. You can choose which types of
                        cookies to accept or reject. You can change your
                        preferences at any time through our cookie settings.
                      </p>
                      <button className="px-6 py-3 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 text-white font-semibold rounded-xl hover:from-brand-theme-600 hover:to-brand-theme-700 transition-all duration-300">
                        Manage Cookie Preferences
                      </button>
                    </div>
                  </div>
                </div>

                {/* Third-Party Cookies */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Third-Party Cookies
                  </h2>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      We may use third-party services that set their own cookies
                      to enhance our web performance analysis platform. These
                      include:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <FaCheckCircle className="h-4 w-4 text-brand-theme-200 mr-3 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Google Analytics:</strong> For website usage
                          analytics and performance insights
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="h-4 w-4 text-brand-theme-200 mr-3 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Google PageSpeed Insights API:</strong> For
                          performance analysis data collection
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="h-4 w-4 text-brand-theme-200 mr-3 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Cloudflare:</strong> For security and
                          performance optimization
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Questions About Our Cookie Policy?
                  </h3>
                  <p className="text-gray-300 mb-4">
                    If you have any questions about our use of cookies or this
                    policy, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-300">
                    <p>Email: privacy@pagematrix.com</p>
                    <p>Address: 123 Tech Street, San Francisco, CA 94105</p>
                    <p>Phone: +1 (555) 123-4567</p>
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
