import Head from "next/head";
import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaPaperPlane,
  FaHeadset,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaGlobe,
  FaHeart,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email Us",
      description: "Get in touch via email",
      value: "hello@pagematrix.com",
      link: "mailto:hello@pagematrix.com",
      color: "from-brand-theme-500 to-brand-theme-600",
    },
    {
      icon: FaPhone,
      title: "Call Us",
      description: "Speak with our team",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "from-brand-theme-600 to-brand-theme-800",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      description: "Our office location",
      value: "123 Tech Street, San Francisco, CA 94105",
      link: "https://maps.google.com",
      color: "from-brand-theme-500 to-brand-theme-800",
    },
    {
      icon: FaClock,
      title: "Business Hours",
      description: "When we're available",
      value: "Mon - Fri: 9:00 AM - 6:00 PM PST",
      link: null,
      color: "from-brand-theme-600 to-brand-theme-500",
    },
  ];

  const features = [
    {
      icon: FaRocket,
      title: "Fast Response",
      description:
        "We typically respond to inquiries within 2 hours during business hours.",
      color: "from-brand-theme-500 to-brand-theme-600",
    },
    {
      icon: FaHeadset,
      title: "Expert Support",
      description:
        "Our team of performance experts is here to help with any questions about web performance analysis and Core Web Vitals.",
      color: "from-brand-theme-600 to-brand-theme-800",
    },
    {
      icon: FaShieldAlt,
      title: "Secure Communication",
      description:
        "All your data and communications are protected with enterprise-grade security.",
      color: "from-brand-theme-500 to-brand-theme-800",
    },
  ];

  const stats = [
    {
      number: "< 2hrs",
      label: "Response Time",
      icon: FaClock,
      color: "text-brand-theme-500",
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: FaHeadset,
      color: "text-brand-theme-600",
    },
    {
      number: "99%",
      label: "Satisfaction Rate",
      icon: FaStar,
      color: "text-brand-theme-800",
    },
    {
      number: "50K+",
      label: "Happy Customers",
      icon: FaUsers,
      color: "text-brand-theme-500",
    },
  ];

  return (
    <>
      <Head>
        <title>Contact PageMatrix - Web Performance Analysis Support</title>
        <meta
          name="description"
          content="Get in touch with PageMatrix. Expert web performance analysis support and Core Web Vitals optimization guidance for your business."
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
                  <FaHeadset className="h-4 w-4 mr-2" />
                  Get in Touch
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                  <span className="block">We're Here to</span>
                  <span className="block bg-gradient-to-r from-brand-theme-200 via-brand-theme-100 to-white bg-clip-text text-transparent">
                    Help You Succeed
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                  Have questions about web performance analysis? Need help with
                  your Core Web Vitals optimization? Our expert team is ready to
                  help you get the most out of PageMatrix.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                  <Link
                    href="#contact-form"
                    className="group relative px-8 py-4 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-xl font-bold text-lg text-white hover:from-brand-theme-600 hover:to-brand-theme-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-brand-theme-500/25 inline-flex items-center justify-center"
                  >
                    Send Message
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

          {/* Contact Methods Section */}
          <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-block w-16 h-1 bg-brand-theme-500 rounded-full mb-4"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Choose your preferred way to reach us. We're here to help with
                  any questions about web performance analysis and Core Web
                  Vitals optimization.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                    >
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{info.description}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-brand-theme-600 font-semibold hover:text-brand-theme-800 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-semibold">
                          {info.value}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-block w-16 h-1 bg-brand-theme-500 rounded-full mb-4"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Have a specific question or need help with your web
                  performance optimization strategy? Fill out the form below and
                  we'll get back to you within 2 hours.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-brand-theme-100 rounded-3xl p-8 md:p-12">
                <form id="contact-form" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-theme-500 focus:border-brand-theme-500 transition-colors duration-300"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-theme-500 focus:border-brand-theme-500 transition-colors duration-300"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-theme-500 focus:border-brand-theme-500 transition-colors duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-theme-500 focus:border-brand-theme-500 transition-colors duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-theme-500 focus:border-brand-theme-500 transition-colors duration-300"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-theme-500 focus:border-brand-theme-500 transition-colors duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">
                        Performance Analysis Support
                      </option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">
                        Partnership Opportunity
                      </option>
                      <option value="feature">Feature Request</option>
                      <option value="optimization">
                        Core Web Vitals Optimization
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-theme-500 focus:border-brand-theme-500 transition-colors duration-300 resize-none"
                      placeholder="Tell us how we can help you with web performance analysis..."
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      className="mt-1 h-4 w-4 text-brand-theme-600 focus:ring-brand-theme-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="newsletter"
                      className="ml-3 text-sm text-gray-600"
                    >
                      I'd like to receive updates about PageMatrix features and
                      performance optimization tips.
                    </label>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="group relative px-12 py-4 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-xl font-bold text-lg text-white hover:from-brand-theme-600 hover:to-brand-theme-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-brand-theme-500/25 inline-flex items-center justify-center"
                    >
                      Send Message
                      <FaPaperPlane className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-20 bg-gradient-to-br from-brand-blue-900 via-brand-theme-800 to-brand-blue-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-block w-16 h-1 bg-brand-theme-200 rounded-full mb-6"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Why Choose Our Support?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We're not just another support team. We're performance experts
                  who understand your web optimization challenges and are here
                  to help you succeed.
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
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
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

          {/* FAQ Section */}
          <div className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-block w-16 h-1 bg-brand-theme-500 rounded-full mb-6"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600">
                  Quick answers to common questions about our web performance
                  analysis service.
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    How quickly do you respond to support requests?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We typically respond to all inquiries within 2 hours during
                    business hours (9 AM - 6 PM PST). For urgent performance
                    issues, we have 24/7 monitoring and will respond even
                    faster.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Can you help me optimize my web performance strategy?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Absolutely! Our team includes performance experts who can
                    provide personalized advice on Core Web Vitals optimization,
                    PageSpeed analysis strategies, and integration with your
                    existing performance monitoring workflow.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Do you offer custom solutions for enterprise clients?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes! We work with enterprise clients to create custom web
                    performance analysis solutions, including dedicated
                    infrastructure, custom API integrations, and priority
                    support. Contact us to discuss your needs.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    What if I need help integrating PageMatrix with my existing
                    tools?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our technical team can help you integrate PageMatrix with
                    your CMS, performance monitoring tools, or custom
                    applications. We provide detailed documentation, code
                    examples, and direct support for complex integrations.
                  </p>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Don't wait for performance issues to impact your users. Start
                analyzing your website's performance today and see the
                difference PageMatrix can make for your Core Web Vitals.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/auth/register"
                  className="group relative px-12 py-6 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-2xl font-bold text-xl text-white hover:from-brand-theme-600 hover:to-brand-theme-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-theme-500/25 inline-flex items-center justify-center min-w-[200px]"
                >
                  Start Free Trial
                  <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
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
