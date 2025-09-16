import Head from "next/head";
import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {
  FaCheck,
  FaTimes,
  FaRocket,
  FaCrown,
  FaBuilding,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaGlobe,
  FaCog,
} from "react-icons/fa";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: 0,
      period: "monthly",
      icon: FaRocket,
      description: "Free tier for testing and small projects",
      gradient: "from-gray-500 to-gray-600",
      credits: "10 Analyses",
      creditPrice: "$0.000/analysis",
      features: [
        "10 Performance analyses per month",
        "Use for analyzing or monitoring",
        "No payment required",
      ],
      limitations: [],
      buttonText: "Start For Free",
      buttonStyle:
        "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300",
      popular: false,
    },
    {
      name: "Basic",
      price: 19,
      period: "monthly",
      icon: FaRocket,
      description:
        "Ideal for steady performance monitoring and growing projects.",
      gradient: "from-brand-theme-500 to-brand-theme-600",
      credits: "200 Analyses",
      creditPrice: "$0.095/analysis",
      features: [
        "200 Performance analyses per month",
        "Use for analyzing or monitoring",
        "Priority processing access",
        "Monthly recurring payment",
      ],
      limitations: [],
      buttonText: "Choose Basic",
      buttonStyle:
        "bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 hover:from-brand-theme-600 hover:to-brand-theme-700 text-white",
      popular: false,
    },
    {
      name: "Starter",
      price: 45,
      period: "monthly",
      icon: FaCrown,
      description:
        "Perfect for small projects and getting started with performance analysis",
      gradient: "from-brand-theme-500 to-brand-theme-600",
      credits: "800 Analyses",
      creditPrice: "$0.056/analysis",
      features: [
        "800 Performance analyses per month",
        "Use for analyzing or monitoring",
        "Priority processing access",
        "Monthly recurring payment",
      ],
      limitations: [],
      buttonText: "Choose Starter",
      buttonStyle:
        "bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 hover:from-brand-theme-600 hover:to-brand-theme-700 text-white",
      popular: false,
    },
    {
      name: "Professional",
      price: 99,
      period: "monthly",
      icon: FaCrown,
      description: "Great for growing businesses and professional users",
      gradient: "from-brand-theme-500 to-brand-theme-600",
      credits: "2,000 Analyses",
      creditPrice: "$0.050/analysis",
      features: [
        "2000 Performance analyses per month",
        "Use for analyzing or monitoring",
        "Priority processing access",
        "Monthly recurring payment",
      ],
      limitations: [],
      buttonText: "Choose Professional",
      buttonStyle:
        "bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 hover:from-brand-theme-600 hover:to-brand-theme-700 text-white",
      popular: true,
    },
    {
      name: "Premium",
      price: 219,
      period: "monthly",
      icon: FaBuilding,
      description: "Best for established businesses with high indexing needs",
      gradient: "from-brand-theme-500 to-brand-theme-600",
      credits: "4,800 Credits",
      creditPrice: "$0.046/credit",
      features: [
        "4800 Credits per month",
        "Use for indexing or checking",
        "VIP queue access",
        "Monthly recurring payment",
      ],
      limitations: [],
      buttonText: "Choose Premium",
      buttonStyle:
        "bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 hover:from-brand-theme-600 hover:to-brand-theme-700 text-white",
      popular: false,
    },
    {
      name: "Enterprise",
      price: 449,
      period: "monthly",
      icon: FaBuilding,
      description: "For large-scale operations and enterprise clients",
      gradient: "from-brand-theme-500 to-brand-theme-600",
      credits: "12,000 Credits",
      creditPrice: "$0.037/credit",
      features: [
        "12000 Credits per month",
        "Use for indexing or checking",
        "VIP queue access",
        "Monthly recurring payment",
      ],
      limitations: [],
      buttonText: "Choose Enterprise",
      buttonStyle:
        "bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 hover:from-brand-theme-600 hover:to-brand-theme-700 text-white",
      popular: false,
    },
  ];

  const features = [
    {
      icon: FaRocket,
      title: "Lightning Fast",
      description: "Get your URLs indexed in minutes, not days.",
      gradient: "from-brand-theme-500 to-brand-theme-600",
    },
    {
      icon: FaShieldAlt,
      title: "Enterprise Security",
      description: "Bank-level security with 99.9% uptime guarantee.",
      gradient: "from-brand-theme-500 to-brand-theme-600",
    },
    {
      icon: FaCog,
      title: "Easy Integration",
      description: "One-click setup with comprehensive APIs.",
      gradient: "from-brand-theme-500 to-brand-theme-600",
    },
  ];

  const stats = [
    { number: "10M+", label: "URLs Indexed", icon: FaGlobe },
    { number: "99.9%", label: "Uptime", icon: FaShieldAlt },
    { number: "50K+", label: "Happy Users", icon: FaUsers },
    { number: "< 5min", label: "Average Time", icon: FaClock },
  ];

  return (
    <>
      <Head>
        <title>Pricing - PageMatrix</title>
        <meta
          name="description"
          content="Choose the perfect plan for your web performance analysis needs using Google PageSpeed Insights API"
        />
      </Head>

      <div className="min-h-screen flex flex-col font-figtree">
        <Header />

        <main className="flex-1">
          {/* Hero Section - Dark Background */}
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
                  Simple, Transparent Pricing
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                  <span className="block">Choose the</span>
                  <span className="block text-brand-theme-300">
                    Perfect Plan
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                  All plans include our core performance analysis features with
                  no hidden fees. Start free and scale as you grow.
                </p>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 mb-16">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-full mr-2"></div>
                    <span>No Setup Fees</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-full mr-2"></div>
                    <span>Cancel Anytime</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-full mr-2"></div>
                    <span>14-Day Free Trial</span>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center group relative">
                      {/* Card Background */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                        {/* Icon */}
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-theme-500 to-brand-theme-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Icon className="h-8 w-8 text-white" />
                        </div>

                        {/* Number */}
                        <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-brand-theme-200 transition-colors duration-300">
                          {stat.number}
                        </div>

                        {/* Label */}
                        <div className="text-gray-300 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pricing Cards Section - Light Background */}
          <div className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Choose your perfect monthly plan
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Monthly subscription plans that scale with your business.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {plans.map((plan, index) => {
                  const Icon = plan.icon;
                  return (
                    <div
                      key={index}
                      className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border ${
                        plan.popular
                          ? "ring-2 ring-brand-theme-500 border-brand-theme-500"
                          : "border-gray-200 hover:border-brand-theme-200"
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <div className="bg-brand-theme-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                            <FaStar className="mr-1 h-3 w-3" />
                            Most Popular
                          </div>
                        </div>
                      )}

                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {plan.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {plan.description}
                        </p>
                        <div className="mb-4">
                          <span className="text-4xl font-bold text-gray-900">
                            ${plan.price}
                          </span>
                          <span className="text-gray-600 text-lg">
                            /{plan.period}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          <span className="font-semibold">{plan.credits}</span>
                          <span className="mx-2">•</span>
                          <span>{plan.creditPrice}</span>
                        </div>
                      </div>

                      <div className="mb-8">
                        <ul className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <FaCheck className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        className={`group relative w-full py-3 px-6 rounded-lg font-semibold text-sm transition-all duration-300 ${plan.buttonStyle}`}
                        onClick={async () => {
                          try {
                            const token = await (
                              await import("../contexts/AuthContext")
                            ).getIdToken?.();
                            const res = await fetch(
                              `${
                                process.env.NEXT_PUBLIC_API_URL ||
                                "http://localhost:3010"
                              }/api/billing/checkout`,
                              {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                  ...(token
                                    ? { Authorization: `Bearer ${token}` }
                                    : {}),
                                },
                                body: JSON.stringify({
                                  priceId:
                                    plan.name === "Basic"
                                      ? process.env
                                          .NEXT_PUBLIC_STRIPE_PRICE_BASIC || ""
                                      : plan.name === "Starter"
                                      ? process.env
                                          .NEXT_PUBLIC_STRIPE_PRICE_STARTER ||
                                        ""
                                      : plan.name === "Professional"
                                      ? process.env
                                          .NEXT_PUBLIC_STRIPE_PRICE_PRO || ""
                                      : plan.name === "Premium"
                                      ? process.env
                                          .NEXT_PUBLIC_STRIPE_PRICE_PREMIUM ||
                                        ""
                                      : plan.name === "Enterprise"
                                      ? process.env
                                          .NEXT_PUBLIC_STRIPE_PRICE_ENTERPRISE ||
                                        ""
                                      : "",
                                  mode: "subscription",
                                  successUrl: `${window.location.origin}/billing`,
                                  cancelUrl: `${window.location.href}`,
                                }),
                              }
                            );
                            const data = await res.json();
                            if (data?.data?.url) {
                              window.location.href = data.data.url;
                            }
                          } catch (e) {
                            console.error(e);
                          }
                        }}
                      >
                        <div className="flex items-center justify-center">
                          {plan.buttonText}
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Features Section - Dark Background */}
          <div className="py-24 bg-gradient-to-br from-brand-blue-900 via-brand-theme-800 to-brand-blue-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-block w-16 h-1 bg-brand-theme-200 rounded-full mb-6"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Why Choose PageIndexing?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We've built the most advanced URL indexing platform with
                  features that actually matter for your business growth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* FAQ Section - Light Background */}
          <div className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-block w-16 h-1 bg-brand-theme-500 rounded-full mb-6"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600">
                  Everything you need to know about our pricing and plans.
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    What happens if I exceed my monthly limit?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    If you exceed your monthly limit, additional URLs will be
                    queued for the next month. You can also upgrade your plan at
                    any time to increase your limits.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Can I change my plan anytime?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes, you can upgrade or downgrade your plan at any time.
                    Changes take effect immediately, and we'll prorate any
                    billing differences.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Is there a free trial?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes! Our Free plan gives you 10 URLs per month to try out
                    our service. No credit card required to get started.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    What payment methods do you accept?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We accept all major credit cards, PayPal, and bank transfers
                    for Enterprise plans. All payments are processed securely
                    through Stripe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section - Dark Background */}
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
                Ready to Get Started?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Join thousands of users who trust PageIndexing for their URL
                indexing needs. Start your free trial today.
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
                  href="/contact"
                  className="px-12 py-6 border-2 border-white/30 text-white rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm min-w-[200px] text-center"
                >
                  Contact Sales
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
