import Head from "next/head";
import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {
  FaRocket,
  FaUsers,
  FaHeart,
  FaLightbulb,
  FaShieldAlt,
  FaChartLine,
  FaGlobe,
  FaArrowRight,
  FaMapMarkerAlt,
  FaClock,
  FaGraduationCap,
  FaCode,
  FaBriefcase,
  FaStar,
  FaCheckCircle,
  FaHandshake,
  FaTrophy,
  FaCoffee,
  FaGamepad2,
  FaPlane,
  FaHome,
  FaDumbbell,
  FaBook,
  FaGift,
} from "react-icons/fa";

export default function Careers() {
  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Join our engineering team to build scalable web performance analysis solutions and improve our platform performance.",
      requirements: [
        "3+ years of full-stack development experience",
        "Proficiency in Node.js, React, and MongoDB",
        "Experience with API design and microservices",
        "Knowledge of web performance optimization and Core Web Vitals",
        "Strong problem-solving and communication skills",
      ],
      benefits: [
        "Competitive salary",
        "Equity options",
        "Health insurance",
        "Flexible work hours",
      ],
      icon: FaCode,
      color: "from-brand-theme-500 to-brand-theme-600",
    },
    {
      title: "Performance Specialist",
      department: "Marketing",
      location: "New York, NY / Remote",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Help our customers optimize their web performance strategies and improve their Core Web Vitals scores.",
      requirements: [
        "2+ years of web performance optimization experience",
        "Deep understanding of Core Web Vitals and PageSpeed Insights",
        "Experience with performance monitoring and analysis tools",
        "Analytical mindset with data-driven approach",
        "Excellent communication and client-facing skills",
      ],
      benefits: [
        "Competitive salary",
        "Performance bonuses",
        "Learning budget",
        "Remote work",
      ],
      icon: FaChartLine,
      color: "from-brand-theme-600 to-brand-theme-800",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "4-6 years",
      description:
        "Lead product strategy and roadmap for our web performance analysis platform, working closely with engineering and design teams.",
      requirements: [
        "4+ years of product management experience",
        "Experience with B2B SaaS products",
        "Strong analytical and strategic thinking",
        "Experience with performance monitoring or analytics tools",
        "Excellent cross-functional collaboration skills",
      ],
      benefits: [
        "Competitive salary",
        "Equity package",
        "Health insurance",
        "Professional development",
      ],
      icon: FaBriefcase,
      color: "from-brand-theme-500 to-brand-theme-800",
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      experience: "2-3 years",
      description:
        "Help our customers achieve success with PageMatrix and build long-term relationships.",
      requirements: [
        "2+ years of customer success experience",
        "Experience with B2B SaaS platforms",
        "Strong communication and problem-solving skills",
        "Knowledge of web performance optimization and Core Web Vitals",
        "Passion for helping customers succeed",
      ],
      benefits: [
        "Competitive salary",
        "Commission structure",
        "Flexible schedule",
        "Growth opportunities",
      ],
      icon: FaHandshake,
      color: "from-brand-theme-600 to-brand-theme-500",
    },
  ];

  const benefits = [
    {
      icon: FaHeart,
      title: "Health & Wellness",
      description:
        "Comprehensive health, dental, and vision insurance for you and your family.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: FaHome,
      title: "Flexible Work",
      description:
        "Work from anywhere with flexible hours and unlimited PTO policy.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaGraduationCap,
      title: "Learning & Growth",
      description:
        "Annual learning budget, conference attendance, and professional development opportunities.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaTrophy,
      title: "Equity & Rewards",
      description:
        "Competitive equity packages and performance-based bonuses for all employees.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: FaCoffee,
      title: "Team Culture",
      description:
        "Regular team events, company retreats, and a supportive, inclusive environment.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: FaGift,
      title: "Perks & Benefits",
      description:
        "Latest tech equipment, home office stipend, and other great perks.",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const values = [
    {
      icon: FaRocket,
      title: "Innovation First",
      description:
        "We're always pushing the boundaries of what's possible in web performance analysis technology.",
      color: "from-brand-theme-500 to-brand-theme-600",
    },
    {
      icon: FaUsers,
      title: "Collaborative Spirit",
      description:
        "We believe the best solutions come from working together and sharing knowledge.",
      color: "from-brand-theme-600 to-brand-theme-800",
    },
    {
      icon: FaShieldAlt,
      title: "Customer-Centric",
      description:
        "Every decision we make is guided by what's best for our customers' success.",
      color: "from-brand-theme-500 to-brand-theme-800",
    },
    {
      icon: FaLightbulb,
      title: "Continuous Learning",
      description:
        "We encourage curiosity, experimentation, and continuous improvement in everything we do.",
      color: "from-brand-theme-600 to-brand-theme-500",
    },
  ];

  const stats = [
    {
      number: "50+",
      label: "Team Members",
      icon: FaUsers,
      color: "text-brand-theme-500",
    },
    {
      number: "15+",
      label: "Countries",
      icon: FaGlobe,
      color: "text-brand-theme-600",
    },
    {
      number: "4.8/5",
      label: "Job Satisfaction",
      icon: FaStar,
      color: "text-brand-theme-800",
    },
    {
      number: "95%",
      label: "Remote Work",
      icon: FaHome,
      color: "text-brand-theme-500",
    },
  ];

  return (
    <>
      <Head>
        <title>Careers - PageMatrix</title>
        <meta
          name="description"
          content="Join the PageMatrix team and help us build the future of web performance analysis. Open positions for developers, performance experts, and more."
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-br from-brand-blue-900 via-brand-theme-800 to-brand-blue-800 py-24 overflow-hidden">
            {/* Background Elements */}
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
                  <FaBriefcase className="h-4 w-4 mr-2" />
                  Join Our Team
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                  <span className="block">Build the Future of</span>
                  <span className="block bg-gradient-to-r from-brand-theme-200 via-brand-theme-100 to-white bg-clip-text text-transparent">
                    Web Performance
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                  Join a team of passionate innovators who are revolutionizing
                  how businesses analyze and optimize their web performance.
                  Help us make Core Web Vitals optimization accessible to
                  everyone.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                  <Link
                    href="#open-positions"
                    className="group relative px-8 py-4 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-xl font-bold text-lg text-white hover:from-brand-theme-600 hover:to-brand-theme-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-brand-theme-500/25 inline-flex items-center justify-center"
                  >
                    View Open Positions
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center group">
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

          {/* Open Positions Section */}
          <div id="open-positions" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-block w-16 h-1 bg-brand-theme-500 rounded-full mb-4"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Open Positions
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We&apos;re looking for talented individuals who share our
                  passion for making web performance analysis fast, accurate,
                  and accessible to everyone.
                </p>
              </div>

              <div className="space-y-8">
                {openPositions.map((position, index) => {
                  const Icon = position.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                          <div
                            className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${position.color} rounded-2xl flex-shrink-0`}
                          >
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {position.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                              <span className="flex items-center">
                                <FaBriefcase className="h-4 w-4 mr-2" />
                                {position.department}
                              </span>
                              <span className="flex items-center">
                                <FaMapMarkerAlt className="h-4 w-4 mr-2" />
                                {position.location}
                              </span>
                              <span className="flex items-center">
                                <FaClock className="h-4 w-4 mr-2" />
                                {position.type}
                              </span>
                              <span className="flex items-center">
                                <FaGraduationCap className="h-4 w-4 mr-2" />
                                {position.experience}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <button className="px-6 py-3 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 text-white rounded-xl font-semibold hover:from-brand-theme-600 hover:to-brand-theme-700 transition-all duration-300 transform hover:scale-105">
                            Apply Now
                          </button>
                          <button className="px-6 py-3 border-2 border-brand-theme-500 text-brand-theme-500 rounded-xl font-semibold hover:bg-brand-theme-500 hover:text-white transition-all duration-300">
                            Learn More
                          </button>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 text-lg">
                        {position.description}
                      </p>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">
                            Requirements
                          </h4>
                          <ul className="space-y-2">
                            {position.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start">
                                <FaCheckCircle className="h-4 w-4 text-brand-theme-500 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-600">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">
                            Benefits
                          </h4>
                          <ul className="space-y-2">
                            {position.benefits.map((benefit, benefitIndex) => (
                              <li
                                key={benefitIndex}
                                className="flex items-start"
                              >
                                <FaStar className="h-4 w-4 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-600">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-block w-16 h-1 bg-brand-theme-500 rounded-full mb-4"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Why Work With Us?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We believe in taking care of our team so they can do their
                  best work. Here&apos;s what we offer to make your career with
                  us amazing.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                    >
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="py-20 bg-gradient-to-br from-brand-blue-900 via-brand-theme-800 to-brand-blue-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-block w-16 h-1 bg-brand-theme-200 rounded-full mb-6"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our Values
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  These core values guide everything we do and shape our company
                  culture. We&apos;re looking for people who share these
                  principles.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Culture Section */}
          <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block w-16 h-1 bg-brand-theme-500 rounded-full mb-4"></div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Our Culture
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    At PageMatrix, we&apos;ve built a culture that values
                    innovation, collaboration, and work-life balance. We believe
                    that great products come from great teams, and great teams
                    come from great cultures.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaRocket className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Fast-Paced Innovation
                        </h3>
                        <p className="text-gray-600">
                          We move quickly and aren&apos;t afraid to experiment
                          with new ideas and technologies.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-brand-theme-600 to-brand-theme-800 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaUsers className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Collaborative Environment
                        </h3>
                        <p className="text-gray-600">
                          We work together across teams and departments to solve
                          complex problems.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-brand-theme-500 to-brand-theme-800 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaHeart className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Work-Life Balance
                        </h3>
                        <p className="text-gray-600">
                          We believe in sustainable work practices and
                          supporting our team&apos;s well-being.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-brand-theme-100 to-brand-theme-200 rounded-3xl p-8 border border-brand-theme-200">
                    <div className="text-center space-y-6">
                      <div className="w-32 h-32 bg-gradient-to-br from-brand-theme-500 to-brand-theme-600 rounded-full mx-auto flex items-center justify-center">
                        <FaUsers className="h-16 w-16 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Join Our Team
                        </h3>
                        <p className="text-gray-600">
                          Be part of a team that&apos;s building the future of
                          web performance analysis and making Core Web Vitals
                          optimization accessible to everyone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
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
                Ready to Join Us?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Don&apos;t see a position that fits? We&apos;re always looking
                for talented people who share our vision. Send us your resume
                and tell us how you&apos;d like to contribute.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/contact"
                  className="group relative px-12 py-6 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-2xl font-bold text-xl text-white hover:from-brand-theme-600 hover:to-brand-theme-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-theme-500/25 inline-flex items-center justify-center min-w-[200px]"
                >
                  Send Your Resume
                  <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="#open-positions"
                  className="px-12 py-6 border-2 border-white/30 text-white rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm min-w-[200px] text-center"
                >
                  View All Positions
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
