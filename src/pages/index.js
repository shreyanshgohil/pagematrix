import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import {
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaCog,
  FaArrowRight,
  FaTachometerAlt,
  FaCheckCircle,
  FaUsers,
  FaGlobe,
  FaClock,
  FaStar,
  FaQuoteLeft,
  FaSearch,
  FaExternalLinkAlt,
  FaMobile,
  FaDesktop,
} from "react-icons/fa";
import Layout from "../components/layout";

export default function Home() {
  const [url, setUrl] = useState("");
  const [strategy, setStrategy] = useState("mobile");

  const features = [
    {
      icon: FaRocket,
      title: "Lightning Fast Analysis",
      description:
        "Get comprehensive PageSpeed insights in seconds using Google's official PageSpeed Insights API.",
      gradient: "from-brand-theme-500 to-brand-theme-600",
    },
    {
      icon: FaShieldAlt,
      title: "Accurate Results",
      description:
        "Powered by Google's PageSpeed Insights API, ensuring accurate and up-to-date performance metrics.",
      gradient: "from-brand-theme-500 to-brand-theme-600",
    },
    {
      icon: FaChartLine,
      title: "Detailed Analytics",
      description:
        "Get detailed performance scores, opportunities, and diagnostics with actionable recommendations.",
      gradient: "from-brand-theme-500 to-brand-theme-600",
    },
    {
      icon: FaCog,
      title: "Easy Integration",
      description:
        "Simple API integration and user-friendly interface for developers and marketers alike.",
      gradient: "from-brand-theme-500 to-brand-theme-600",
    },
  ];

  const stats = [
    { number: "1M+", label: "URLs Analyzed", icon: FaGlobe },
    { number: "99.9%", label: "Uptime", icon: FaShieldAlt },
    { number: "10K+", label: "Happy Users", icon: FaUsers },
    { number: "< 5sec", label: "Analysis Time", icon: FaClock },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Performance Engineer",
      company: "TechCorp",
      content:
        "PageMatrix has revolutionized our performance monitoring. We've improved our Core Web Vitals by 40% using their insights.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "SEO Manager",
      company: "StartupXYZ",
      content:
        "The most comprehensive PageSpeed analysis tool we've used. The detailed recommendations help us optimize our site effectively.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Web Developer",
      company: "MediaGroup",
      content:
        "Outstanding tool for performance analysis. The real-time insights and actionable recommendations are game-changers.",
      rating: 5,
    },
  ];

  return (
    <>
      <Head>
        <title>PageMatrix - Advanced PageSpeed Analysis Tool</title>
        <meta
          name="description"
          content="Professional web performance analysis using Google PageSpeed Insights API. Get detailed performance metrics, optimization recommendations, and actionable insights."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className="flex-1 overflow-hidden">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-brand-blue-900 via-brand-theme-800 to-brand-blue-800 text-white overflow-hidden">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>

            <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
              <div className="text-center">
                {/* Badge */}
                <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs sm:text-sm font-medium text-white/90 mb-6 sm:mb-8">
                  <FaRocket className="mr-2 text-brand-theme-200" />
                  Powered by Google PageSpeed Insights API
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight">
                  Analyze Web
                  <br />
                  <span className="bg-gradient-to-r from-brand-theme-200 via-brand-theme-100 to-white bg-clip-text text-transparent">
                    Performance
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Get comprehensive web performance insights using Google&apos;s
                  PageSpeed Insights API. Analyze your website&apos;s speed,
                  accessibility, SEO, and best practices with detailed
                  recommendations.
                </p>

                {/* URL Analysis Form */}
                <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <input
                          type="url"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          placeholder="Enter your website URL (e.g., https://example.com)"
                          className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-theme-500 focus:border-transparent text-sm"
                        />
                      </div>
                      <div className="flex gap-2">
                        <select
                          value={strategy}
                          onChange={(e) => setStrategy(e.target.value)}
                          className="px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-theme-500 text-sm"
                        >
                          <option value="mobile">Mobile</option>
                          <option value="desktop">Desktop</option>
                        </select>
                        <button className="px-6 py-3 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 hover:from-brand-theme-600 hover:to-brand-theme-700 text-white rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-brand-theme-500/25 flex items-center">
                          <FaSearch className="mr-2" />
                          Analyze
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-gray-400">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-full mr-2"></div>
                    <span className="text-xs sm:text-sm">
                      Google PageSpeed API
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-full mr-2"></div>
                    <span className="text-xs sm:text-sm">
                      Real-time Analysis
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-full mr-2"></div>
                    <span className="text-xs sm:text-sm">Detailed Reports</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-brand-theme-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-theme-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-brand-theme-200/20 rounded-full blur-xl animate-pulse delay-500"></div>
          </section>

          {/* Stats Section */}
          <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50/50 to-transparent"></div>
              <div className="absolute top-10 left-10 w-32 h-32 bg-brand-theme-500/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-theme-600/5 rounded-full blur-2xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <div className="inline-block w-16 h-1 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-full mb-6"></div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Trusted by Performance Experts
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                  Our platform delivers accurate performance insights that help
                  optimize websites
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center group relative">
                      {/* Card Background */}
                      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group-hover:border-brand-theme-200">
                        {/* Icon */}
                        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-theme-500 to-brand-theme-600 rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                        </div>

                        {/* Number */}
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 group-hover:text-brand-theme-600 transition-colors duration-300">
                          {stat.number}
                        </div>

                        {/* Label */}
                        <div className="text-gray-600 font-semibold text-base sm:text-lg">
                          {stat.label}
                        </div>

                        {/* Hover Effect Overlay */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-theme-500/5 to-brand-theme-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16 md:mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Why Choose PageMatrix?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  We provide the most comprehensive web performance analysis
                  using Google&apos;s official PageSpeed Insights API.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                    >
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16 md:mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  What Our Users Say
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  Join thousands of satisfied users who trust PageMatrix for
                  their performance analysis needs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 sm:p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-yellow-400 h-4 w-4 sm:h-5 sm:w-5"
                        />
                      ))}
                    </div>
                    <FaQuoteLeft className="text-brand-theme-500 text-xl sm:text-2xl mb-4" />
                    <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-theme-500 to-brand-theme-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg mr-3 sm:mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600 text-xs sm:text-sm">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-brand-blue-900 via-brand-theme-800 to-brand-blue-800 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>

            <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                Ready to Optimize Your Website?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                Start analyzing your website&apos;s performance today with our
                powerful PageSpeed Insights integration. Get detailed metrics
                and actionable recommendations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto">
                <Link
                  href="/auth/register"
                  className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-xl font-semibold text-base sm:text-lg text-white hover:from-brand-theme-600 hover:to-brand-theme-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-theme-500/25 inline-flex items-center justify-center"
                >
                  Start Free Analysis
                  <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>

                <Link
                  href="/pricing"
                  className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                >
                  View Pricing Plans
                </Link>
              </div>

              <div className="mt-8 sm:mt-10 md:mt-12 text-gray-400 text-xs sm:text-sm">
                <span className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-full mr-2"></div>
                  No setup fees • Instant analysis • 24/7 support
                </span>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-brand-theme-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-brand-theme-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </section>
        </main>

        {/* Visual Separator */}
        <div className="h-1 bg-gradient-to-r from-transparent via-brand-theme-500 to-transparent"></div>
      </Layout>
    </>
  );
}
