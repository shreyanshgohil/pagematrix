import React, { useState } from "react";
import Link from "next/link";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import {
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaCog,
  FaCheckCircle,
  FaArrowRight,
  FaEnvelope,
  FaArrowLeft,
} from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      // Mock password reset - replace with actual password reset logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage("Check your email for password reset instructions");
    } catch (error) {
      setError("Password reset failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const features = [
    {
      icon: FaRocket,
      title: "Lightning Fast Analysis",
      description: "Get comprehensive web performance insights in seconds.",
      gradient: "from-brand-theme-500 to-brand-theme-600",
    },
    {
      icon: FaShieldAlt,
      title: "Google-Powered Accuracy",
      description: "Powered by Google's official PageSpeed Insights API.",
      gradient: "from-brand-theme-500 to-brand-theme-600",
    },
    {
      icon: FaCog,
      title: "Easy Integration",
      description: "One-click setup with comprehensive performance APIs.",
      gradient: "from-brand-theme-500 to-brand-theme-600",
    },
  ];

  return (
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

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
              {/* Logo */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-theme-500 rounded-2xl mb-6">
                <span className="text-white font-bold text-2xl">PI</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Reset Password
                <br />
                <span className="bg-gradient-to-r from-brand-theme-200 via-brand-theme-100 to-white bg-clip-text text-transparent">
                  Get Back In
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Enter your email address and we'll send you a link to reset your
                password.
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="relative -mt-8 pb-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-white/20 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-theme-500 focus:border-transparent"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-200 px-4 py-3 rounded-xl text-sm">
                    {error}
                  </div>
                )}

                {message && (
                  <div className="bg-green-500/10 border border-green-500/20 text-green-200 px-4 py-3 rounded-xl text-sm">
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full py-3 px-6 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 hover:from-brand-theme-600 hover:to-brand-theme-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-brand-theme-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <div className="flex items-center justify-center">
                    {loading ? <LoadingSpinner /> : "Send Reset Email"}
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>

                <div className="text-center">
                  <Link
                    href="/auth/login"
                    className="text-brand-theme-200 hover:text-white transition-colors duration-300 inline-flex items-center"
                  >
                    <FaArrowLeft className="mr-2" />
                    Back to Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Features Section with Light Background */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block w-16 h-1 bg-brand-theme-500 rounded-full mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose PageMatrix?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We've built the most advanced web performance analysis platform
                with features that actually matter for your business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
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
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Section with Dark Background */}
        <div className="py-20 bg-gradient-to-br from-brand-blue-900 via-brand-theme-800 to-brand-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block w-16 h-1 bg-brand-theme-200 rounded-full mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Thousands
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that trust PageMatrix for their web
                performance analysis needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  10K+
                </div>
                <div className="text-gray-300 text-lg">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  1M+
                </div>
                <div className="text-gray-300 text-lg">URLs Indexed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  99.9%
                </div>
                <div className="text-gray-300 text-lg">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  24/7
                </div>
                <div className="text-gray-300 text-lg">Support</div>
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
  );
};

export default ForgotPassword;
