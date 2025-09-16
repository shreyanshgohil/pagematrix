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
} from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      // Mock signup - replace with actual authentication logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/dashboard");
    } catch (error) {
      setError("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    setError("");
    setLoading(true);

    try {
      // Mock Google signup - replace with actual Google OAuth logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/dashboard");
    } catch (error) {
      setError("Google signup failed. Please try again.");
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

          <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="text-center mb-8 sm:mb-12">
              {/* Logo */}
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-brand-theme-500 rounded-2xl mb-4 sm:mb-6">
                <span className="text-white font-bold text-lg sm:text-2xl">
                  PI
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
                Join PageMatrix
                <br />
                <span className="bg-gradient-to-r from-brand-theme-200 via-brand-theme-100 to-white bg-clip-text text-transparent">
                  Start Your Journey
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8">
                Create your account and start indexing URLs faster than ever
                before.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                {/* Registration Form */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
                  <div className="mb-4 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Create Account
                    </h2>
                    <p className="text-sm sm:text-base text-gray-300">
                      Already have an account?{" "}
                      <Link
                        href="/auth/login"
                        className="text-brand-theme-200 hover:text-white font-medium transition-colors"
                      >
                        Sign in here
                      </Link>
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6"
                  >
                    {error && (
                      <div className="bg-red-500/20 border border-red-500/30 text-red-200 px-4 py-3 rounded-lg text-sm">
                        {error}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-xs sm:text-sm font-medium text-gray-200 mb-2"
                        >
                          First Name
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          autoComplete="given-name"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-theme-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-xs sm:text-sm font-medium text-gray-200 mb-2"
                        >
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          autoComplete="family-name"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-theme-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs sm:text-sm font-medium text-gray-200 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-theme-500 focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block text-xs sm:text-sm font-medium text-gray-200 mb-2"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="new-password"
                          required
                          value={formData.password}
                          onChange={handleChange}
                          className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-theme-500 focus:border-transparent transition-all duration-300"
                          placeholder="Create a strong password"
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

                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="block text-xs sm:text-sm font-medium text-gray-200 mb-2"
                      >
                        Confirm Password
                      </label>
                      <div className="relative">
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          autoComplete="new-password"
                          required
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-theme-500 focus:border-transparent transition-all duration-300"
                          placeholder="Confirm your password"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                        >
                          {showConfirmPassword ? (
                            <FaEyeSlash className="h-5 w-5" />
                          ) : (
                            <FaEye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 hover:from-brand-theme-600 hover:to-brand-theme-800 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-theme-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none text-sm sm:text-base"
                    >
                      {loading ? (
                        <div className="flex items-center justify-center">
                          <LoadingSpinner
                            size="sm"
                            className="text-white mr-2"
                          />
                          Creating Account...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          Create Account
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
                      onClick={handleGoogleRegister}
                      disabled={loading}
                      className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm sm:text-base"
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
                      Sign up with Google
                    </button>

                    <div className="text-xs text-gray-400 text-center">
                      By creating an account, you agree to our{" "}
                      <Link
                        href="/terms"
                        className="text-brand-theme-200 hover:text-white transition-colors"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="text-brand-theme-200 hover:text-white transition-colors"
                      >
                        Privacy Policy
                      </Link>
                    </div>
                  </form>
                </div>

                {/* Features Section */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                      Why Choose PageMatrix?
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
                      Join thousands of users who trust us for their web
                      performance analysis needs.
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
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

                  {/* Trust Indicators */}
                  <div className="pt-6 border-t border-white/10">
                    <div className="flex flex-wrap gap-6 text-sm text-gray-300">
                      <div className="flex items-center">
                        <FaCheckCircle className="text-brand-theme-200 mr-2" />
                        <span>Free Trial Available</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheckCircle className="text-brand-theme-200 mr-2" />
                        <span>No Credit Card Required</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheckCircle className="text-brand-theme-200 mr-2" />
                        <span>24/7 Support</span>
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

export default Register;
