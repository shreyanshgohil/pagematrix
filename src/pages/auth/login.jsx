import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
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
  FaEye,
  FaEyeSlash,
  FaSignInAlt,
} from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

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
      icon: FaChartLine,
      title: "Real-time Performance Analytics",
      description: "Track Core Web Vitals with detailed insights and reports.",
      gradient: "from-brand-theme-500 to-brand-theme-600",
    },
    {
      icon: FaCog,
      title: "Easy Integration",
      description: "One-click setup with comprehensive performance APIs.",
      gradient: "from-brand-theme-500 to-brand-theme-600",
    },
  ];

  // useEffect(() => {
  //   if (currentUser) {
  //     router.push("/dashboard");
  //   }
  // }, [currentUser, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Mock login - replace with actual authentication logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/dashboard");
    } catch (error) {
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      // Mock Google login - replace with actual Google OAuth logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/dashboard");
    } catch (error) {
      setError("Google login failed. Please try again.");
      setLoading(false);
    }
  };

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
                Welcome Back
                <br />
                <span className="bg-gradient-to-r from-brand-theme-200 via-brand-theme-100 to-white bg-clip-text text-transparent">
                  Sign In to Continue
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Access your dashboard and continue indexing URLs with our
                powerful platform.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Login Form */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Sign In
                    </h2>
                    <p className="text-gray-300">
                      Don't have an account?{" "}
                      <Link
                        href="/auth/register"
                        className="text-brand-theme-200 hover:text-white font-medium transition-colors"
                      >
                        Create one here
                      </Link>
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-500/20 border border-red-500/30 text-red-200 px-4 py-3 rounded-lg text-sm">
                        {error}
                      </div>
                    )}

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-theme-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="current-password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-theme-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                        >
                          {showPassword ? (
                            <FaEyeSlash className="h-5 w-5" />
                          ) : (
                            <FaEye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <Link
                          href="/auth/forgot-password"
                          className="text-brand-theme-200 hover:text-white font-medium transition-colors"
                        >
                          Forgot your password?
                        </Link>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 hover:from-brand-theme-600 hover:to-brand-theme-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-theme-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                    >
                      {loading ? (
                        <div className="flex items-center justify-center">
                          <LoadingSpinner
                            size="sm"
                            className="text-white mr-2"
                          />
                          Signing In...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <FaSignInAlt className="mr-2" />
                          Sign In
                          <FaArrowRight className="ml-2" />
                        </div>
                      )}
                    </button>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/20" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-transparent text-gray-300">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleGoogleLogin}
                      disabled={loading}
                      className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      Sign in with Google
                    </button>
                  </form>
                </div>

                {/* Features Section */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Welcome Back to PageMatrix
                    </h3>
                    <p className="text-gray-300 mb-8">
                      Continue your journey with the most comprehensive web
                      performance analysis platform.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                          <div
                            className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex-shrink-0`}
                          >
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-1">
                              {feature.title}
                            </h4>
                            <p className="text-gray-300 text-sm">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Quick Stats */}
                  <div className="pt-6 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-white mb-1">
                          10M+
                        </div>
                        <div className="text-gray-300 text-sm">
                          URLs Indexed
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-white mb-1">
                          99.9%
                        </div>
                        <div className="text-gray-300 text-sm">Uptime</div>
                      </div>
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="pt-6 border-t border-white/10">
                    <div className="flex flex-wrap gap-6 text-sm text-gray-300">
                      <div className="flex items-center">
                        <FaCheckCircle className="text-brand-theme-200 mr-2" />
                        <span>Secure & Reliable</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheckCircle className="text-brand-theme-200 mr-2" />
                        <span>24/7 Support</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheckCircle className="text-brand-theme-200 mr-2" />
                        <span>Enterprise Grade</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-brand-theme-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-theme-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-brand-theme-200/20 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
