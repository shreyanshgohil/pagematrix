import Head from "next/head";
import Link from "next/link";
import {
  FaArrowRight,
  FaBuilding,
  FaCalendarAlt,
  FaChartLine,
  FaFire,
  FaGem,
  FaGlobe,
  FaHandshake,
  FaHeart,
  FaLightbulb,
  FaMagic,
  FaQuoteLeft,
  FaRocket,
  FaSeedling,
  FaShieldAlt,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default function About() {
  const timeline = [
    {
      year: "2020",
      title: "The Performance Challenge",
      description:
        "We identified the critical need for accessible web performance analysis tools that could help businesses understand and improve their Core Web Vitals.",
      icon: FaSeedling,
      color: "from-brand-theme-500 to-brand-theme-600",
    },
    {
      year: "2021",
      title: "First Performance API",
      description:
        "Built our first PageSpeed Insights integration and helped 1,000+ websites analyze their performance metrics with detailed recommendations.",
      icon: FaRocket,
      color: "from-brand-theme-600 to-brand-theme-800",
    },
    {
      year: "2022",
      title: "Scale & Growth",
      description:
        "Reached 10,000+ customers and successfully analyzed over 1 million URLs with our advanced performance monitoring system.",
      icon: FaChartLine,
      color: "from-brand-theme-500 to-brand-theme-800",
    },
    {
      year: "2023",
      title: "Enterprise Features",
      description:
        "Launched bulk analysis, real-time monitoring, and enterprise-grade infrastructure with 99.9% uptime guarantee for performance tracking.",
      icon: FaBuilding,
      color: "from-brand-theme-600 to-brand-theme-800",
    },
    {
      year: "2024",
      title: "The Future",
      description:
        "Expanding with AI-powered optimization recommendations, advanced Core Web Vitals tracking, and predictive performance analytics.",
      icon: FaMagic,
      color: "from-brand-theme-500 to-brand-theme-600",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Performance optimization expert with 10+ years helping businesses improve their web speed and Core Web Vitals.",
      expertise: ["Performance Strategy", "Core Web Vitals", "Business Growth"],
      funFact: "Has helped over 500 websites achieve 90+ PageSpeed scores",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Full-stack developer specializing in high-performance web systems and PageSpeed Insights API integration.",
      expertise: [
        "Backend Development",
        "API Integration",
        "System Architecture",
      ],
      funFact:
        "Built the core analysis engine that processes 10,000+ performance checks per hour",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      bio: "Product strategist focused on making web performance analysis accessible and actionable for all businesses.",
      expertise: ["Product Strategy", "User Experience", "Growth Marketing"],
      funFact:
        "Led the design of our intuitive analytics dashboard that 50K+ users love",
    },
    {
      name: "David Kim",
      role: "Lead Engineer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      bio: "Frontend specialist passionate about creating lightning-fast, responsive interfaces for our performance platform.",
      expertise: ["Frontend Development", "Performance Optimization", "UI/UX"],
      funFact: "Optimized our dashboard to achieve 100/100 PageSpeed score",
    },
  ];

  const values = [
    {
      icon: FaRocket,
      title: "Speed & Efficiency",
      description:
        "We're obsessed with making web performance analysis as fast as possible. Every second saved means faster optimization results for our customers.",
      color: "from-brand-theme-500 to-brand-theme-600",
    },
    {
      icon: FaShieldAlt,
      title: "Reliability & Security",
      description:
        "Our 99.9% uptime guarantee and enterprise-grade security ensure your performance data is analyzed safely and consistently.",
      color: "from-brand-theme-600 to-brand-theme-800",
    },
    {
      icon: FaChartLine,
      title: "Data-Driven Results",
      description:
        "We provide detailed performance analytics and insights so you can track your Core Web Vitals and optimize your website strategy.",
      color: "from-brand-theme-500 to-brand-theme-800",
    },
    {
      icon: FaUsers,
      title: "Customer-Centric",
      description:
        "From solo developers to enterprise teams, we make web performance analysis accessible and affordable for businesses of all sizes.",
      color: "from-brand-theme-600 to-brand-theme-500",
    },
  ];

  const stats = [
    {
      number: "10M+",
      label: "URLs Analyzed",
      icon: FaGlobe,
      color: "text-brand-theme-500",
    },
    {
      number: "50K+",
      label: "Happy Customers",
      icon: FaUsers,
      color: "text-brand-theme-600",
    },
    {
      number: "99.9%",
      label: "Uptime",
      icon: FaShieldAlt,
      color: "text-brand-theme-800",
    },
    {
      number: "24/7",
      label: "Support",
      icon: FaHeart,
      color: "text-brand-theme-500",
    },
  ];

  return (
    <>
      <Head>
        <title>About PageMatrix - Advanced Web Performance Analytics</title>
        <meta
          name="description"
          content="Discover PageMatrix, the cutting-edge web performance analysis platform. Learn about our mission to revolutionize website optimization through Google PageSpeed Insights integration and real-time performance monitoring."
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section - Unique Split Design */}
          <div className="relative bg-white overflow-hidden">
            {/* Left Side - Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-brand-theme-100 to-brand-theme-200 rounded-full text-sm font-semibold text-gray-700 border border-brand-theme-200">
                      <FaStar className="h-4 w-4 mr-2 text-brand-theme-600" />
                      Our Story
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                      Making Web Performance
                      <span className="block bg-gradient-to-r from-brand-theme-500 via-brand-theme-600 to-brand-theme-800 bg-clip-text text-transparent">
                        Analysis Simple
                      </span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      We're a team of performance experts and developers who
                      understand the critical importance of web speed and Core
                      Web Vitals. PageMatrix makes performance analysis fast,
                      accurate, and accessible to everyone using Google's
                      PageSpeed Insights API.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/auth/register"
                      className="group relative px-8 py-4 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-xl font-semibold text-lg text-white hover:from-brand-theme-600 hover:to-brand-theme-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-brand-theme-500/25 inline-flex items-center justify-center"
                    >
                      Start Analyzing
                      <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <Link
                      href="/contact"
                      className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-center"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>

                {/* Right Side - Visual Elements */}
                <div className="relative">
                  <div className="relative bg-gradient-to-br from-brand-theme-100 to-brand-theme-200 rounded-3xl p-8 border border-brand-theme-200">
                    {/* Floating Cards */}
                    <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100 transform rotate-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-lg flex items-center justify-center">
                          <FaRocket className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">
                            10M+ URLs
                          </div>
                          <div className="text-xs text-gray-500">Indexed</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100 transform -rotate-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-brand-theme-600 to-brand-theme-800 rounded-lg flex items-center justify-center">
                          <FaUsers className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">
                            50K+ Users
                          </div>
                          <div className="text-xs text-gray-500">
                            Happy Customers
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Main Visual */}
                    <div className="text-center space-y-6">
                      <div className="w-32 h-32 bg-gradient-to-br from-brand-theme-500 to-brand-theme-600 rounded-full mx-auto flex items-center justify-center">
                        <FaLightbulb className="h-16 w-16 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Performance Meets Precision
                        </h3>
                        <p className="text-gray-600">
                          Our advanced analysis technology delivers
                          comprehensive performance insights in seconds, helping
                          your website achieve optimal Core Web Vitals and user
                          experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section - Our Journey */}
          <div className="py-20 bg-gradient-to-br from-gray-50 to-brand-theme-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-brand-theme-100 to-brand-theme-200 rounded-full text-sm font-semibold text-gray-700 border border-brand-theme-200 mb-6">
                  <FaCalendarAlt className="h-4 w-4 mr-2 text-brand-theme-600" />
                  Our Journey
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Journey in Web Performance
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From solving complex performance challenges to building the
                  most comprehensive web performance analysis platform, here's
                  how we've grown to help thousands of businesses optimize their
                  websites.
                </p>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-theme-500 via-brand-theme-600 to-brand-theme-800 rounded-full"></div>

                <div className="space-y-12">
                  {timeline.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="relative flex items-start">
                        {/* Timeline Dot */}
                        <div
                          className={`relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-full shadow-lg`}
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </div>

                        {/* Content Card */}
                        <div className="ml-8 flex-1">
                          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-2xl font-bold text-gray-900">
                                {item.year}
                              </span>
                              <div
                                className={`w-3 h-3 bg-gradient-to-r ${item.color} rounded-full`}
                              ></div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Values Section - Hexagonal Design */}
          <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-brand-theme-100 to-brand-theme-200 rounded-full text-sm font-semibold text-gray-700 border border-brand-theme-200 mb-6">
                  <FaGem className="h-4 w-4 mr-2 text-brand-theme-600" />
                  Our Values
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  What Makes Us Different
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our core values that drive everything we do in the URL
                  indexing space, from our technology to our customer service.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="group relative">
                      {/* Hexagonal Background */}
                      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                        {/* Icon with unique background */}
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {value.description}
                        </p>

                        {/* Decorative Element */}
                        <div
                          className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-r ${value.color} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Team Section - Card-based Design */}
          <div className="py-20 bg-gradient-to-br from-brand-theme-100 via-brand-theme-200 to-brand-theme-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-brand-theme-100 to-brand-theme-200 rounded-full text-sm font-semibold text-gray-700 border border-brand-theme-200 mb-6">
                  <FaUsers className="h-4 w-4 mr-2 text-brand-theme-600" />
                  Meet the Team
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  The Team Behind PageMatrix
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Meet the performance experts and developers who are passionate
                  about making web performance analysis fast, accurate, and
                  accessible to everyone.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3"
                  >
                    {/* Profile Image with Decorative Elements */}
                    <div className="relative mb-6">
                      <div className="relative w-32 h-32 mx-auto">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                        />
                        {/* Decorative Ring */}
                        <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-500 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                        {/* Status Indicator */}
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                          <FaStar className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {member.name}
                        </h3>
                        <p className="text-brand-theme-600 font-semibold text-lg">
                          {member.role}
                        </p>
                      </div>

                      <p className="text-gray-600 leading-relaxed">
                        {member.bio}
                      </p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gradient-to-r from-brand-theme-100 to-brand-theme-200 text-brand-theme-700 text-xs font-semibold rounded-full border border-brand-theme-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Fun Fact */}
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-500 italic">
                          💡 {member.funFact}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-theme-100 to-brand-theme-200 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Statement Section */}
          <div className="py-20 bg-gradient-to-br from-brand-blue-900 via-brand-theme-800 to-brand-blue-800 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-theme-500/10 via-brand-theme-600/10 to-brand-theme-800/10"></div>
              <div className="absolute top-20 left-20 w-32 h-32 bg-brand-theme-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-40 h-40 bg-brand-theme-600/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-theme-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-white border border-white/20 mb-6">
                  <FaQuoteLeft className="h-4 w-4 mr-2 text-brand-theme-200" />
                  Our Mission
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Making Web Performance
                  <span className="block bg-gradient-to-r from-brand-theme-200 via-brand-theme-100 to-white bg-clip-text text-transparent">
                    Analysis Accessible
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  We believe that every website deserves comprehensive
                  performance analysis regardless of their size or budget. Our
                  mission is to make web optimization success accessible to
                  everyone through powerful PageSpeed Insights integration.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-white/30 to-white/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-white/30`}
                      >
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

              {/* CTA Section */}
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to Optimize Your Website?
                  </h3>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join thousands of businesses who trust PageMatrix to analyze
                    their web performance. Start improving your Core Web Vitals
                    today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link
                      href="/auth/register"
                      className="group relative px-10 py-5 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-2xl font-bold text-xl text-white hover:from-brand-theme-600 hover:to-brand-theme-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-theme-500/25 inline-flex items-center justify-center"
                    >
                      Start Performance Analysis
                      <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <Link
                      href="/contact"
                      className="px-10 py-5 border-2 border-white/30 text-white rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
