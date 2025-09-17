import Head from "next/head";
import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {
  FaShieldAlt,
  FaLock,
  FaUser,
  FaDatabase,
  FaEye,
  FaArrowLeft,
  FaCheckCircle,
  FaExclamationTriangle,
  FaCog,
  FaChartLine,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Privacy() {
  const dataTypes = [
    {
      title: "Account Information",
      icon: FaUser,
      description: "Information you provide when creating an account",
      examples: [
        "Name and email address",
        "Company information",
        "Account preferences",
        "Billing information",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Performance Analysis Data",
      icon: FaChartLine,
      description: "Data collected during web performance analysis",
      examples: [
        "URLs submitted for analysis",
        "Performance metrics and scores",
        "Core Web Vitals data",
        "Analysis history and reports",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Usage Information",
      icon: FaEye,
      description: "How you interact with our service",
      examples: [
        "Pages visited and features used",
        "Time spent on our platform",
        "Click patterns and navigation",
        "Error logs and debugging information",
      ],
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Technical Information",
      icon: FaCog,
      description: "Technical data about your device and connection",
      examples: [
        "IP address and location",
        "Browser type and version",
        "Device information",
        "Network connection details",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  const dataUses = [
    {
      title: "Service Provision",
      description:
        "To provide and maintain our web performance analysis services",
      examples: [
        "Process your performance analysis requests",
        "Generate performance reports and insights",
        "Maintain your account and preferences",
        "Provide customer support",
      ],
    },
    {
      title: "Service Improvement",
      description: "To enhance and improve our platform",
      examples: [
        "Analyze usage patterns to improve features",
        "Optimize our performance analysis algorithms",
        "Develop new tools and capabilities",
        "Fix bugs and technical issues",
      ],
    },
    {
      title: "Communication",
      description: "To communicate with you about our services",
      examples: [
        "Send important service updates",
        "Provide customer support",
        "Share performance optimization tips",
        "Notify you of new features",
      ],
    },
    {
      title: "Legal Compliance",
      description: "To comply with legal obligations",
      examples: [
        "Respond to legal requests",
        "Protect against fraud and abuse",
        "Maintain security and safety",
        "Comply with applicable laws",
      ],
    },
  ];

  const rights = [
    {
      title: "Access Your Data",
      description: "Request a copy of all personal data we have about you",
      icon: FaEye,
    },
    {
      title: "Correct Your Data",
      description: "Update or correct any inaccurate personal information",
      icon: FaCog,
    },
    {
      title: "Delete Your Data",
      description: "Request deletion of your personal data",
      icon: FaExclamationTriangle,
    },
    {
      title: "Data Portability",
      description: "Export your data in a machine-readable format",
      icon: FaDatabase,
    },
    {
      title: "Restrict Processing",
      description: "Limit how we process your personal data",
      icon: FaLock,
    },
    {
      title: "Object to Processing",
      description: "Opt out of certain data processing activities",
      icon: FaShieldAlt,
    },
  ];

  return (
    <>
      <Head>
        <title>Privacy Policy - PageMatrix</title>
        <meta
          name="description"
          content="Learn how PageMatrix protects your privacy while providing comprehensive web performance analysis services."
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
                  <FaShieldAlt className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Privacy Policy
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Your privacy is important to us. Learn how we collect, use,
                  and protect your personal information while providing our web
                  performance analysis services.
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
                    Our Commitment to Privacy
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    At PageMatrix, we are committed to protecting your privacy
                    and ensuring the security of your personal information. This
                    Privacy Policy explains how we collect, use, disclose, and
                    safeguard your information when you use our web performance
                    analysis services.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We understand that your website performance data is
                    sensitive, and we treat it with the highest level of care
                    and security. This policy applies to all users of our
                    services, including website owners, developers, and
                    performance analysts.
                  </p>
                </div>

                {/* Information We Collect */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Information We Collect
                  </h2>
                  <div className="space-y-8">
                    {dataTypes.map((type, index) => {
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
                              <h3 className="text-xl font-bold text-white mb-2">
                                {type.title}
                              </h3>
                              <p className="text-gray-300 mb-3">
                                {type.description}
                              </p>
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

                {/* How We Use Information */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-8">
                    How We Use Your Information
                  </h2>
                  <div className="space-y-6">
                    {dataUses.map((use, index) => (
                      <div
                        key={index}
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                      >
                        <h3 className="text-xl font-bold text-white mb-3">
                          {use.title}
                        </h3>
                        <p className="text-gray-300 mb-4">{use.description}</p>
                        <ul className="space-y-2">
                          {use.examples.map((example, exIndex) => (
                            <li key={exIndex} className="flex items-start">
                              <FaCheckCircle className="h-4 w-4 text-brand-theme-200 mr-3 mt-1 flex-shrink-0" />
                              <span className="text-gray-300">{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Data Sharing */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Information Sharing and Disclosure
                  </h2>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      We do not sell, trade, or otherwise transfer your personal
                      information to third parties without your consent, except
                      in the following circumstances:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaCheckCircle className="h-4 w-4 text-brand-theme-200 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">
                          <strong>Service Providers:</strong> We may share data
                          with trusted third-party service providers who assist
                          us in operating our platform, such as Google for
                          PageSpeed Insights API integration.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="h-4 w-4 text-brand-theme-200 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">
                          <strong>Legal Requirements:</strong> We may disclose
                          information when required by law or to protect our
                          rights and the rights of others.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="h-4 w-4 text-brand-theme-200 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">
                          <strong>Business Transfers:</strong> In the event of a
                          merger, acquisition, or sale of assets, your
                          information may be transferred as part of that
                          transaction.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="h-4 w-4 text-brand-theme-200 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">
                          <strong>Consent:</strong> We may share information
                          with your explicit consent for specific purposes.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Data Security */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Data Security
                  </h2>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      We implement appropriate technical and organizational
                      security measures to protect your personal information
                      against unauthorized access, alteration, disclosure, or
                      destruction. These measures include:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaLock className="h-4 w-4 text-brand-theme-200 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">
                          <strong>Encryption:</strong> All data is encrypted in
                          transit and at rest using industry-standard encryption
                          protocols.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaLock className="h-4 w-4 text-brand-theme-200 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">
                          <strong>Access Controls:</strong> Strict access
                          controls ensure that only authorized personnel can
                          access your data.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaLock className="h-4 w-4 text-brand-theme-200 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">
                          <strong>Regular Audits:</strong> We conduct regular
                          security audits and assessments to identify and
                          address potential vulnerabilities.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaLock className="h-4 w-4 text-brand-theme-200 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">
                          <strong>Secure Infrastructure:</strong> Our services
                          are hosted on secure, enterprise-grade infrastructure
                          with multiple layers of protection.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Your Rights */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Your Privacy Rights
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {rights.map((right, index) => {
                      const Icon = right.icon;
                      return (
                        <div
                          key={index}
                          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                        >
                          <div className="flex items-start">
                            <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-xl mr-4 flex-shrink-0">
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-white mb-2">
                                {right.title}
                              </h3>
                              <p className="text-gray-300 text-sm">
                                {right.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Data Retention */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Data Retention
                  </h2>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      We retain your personal information for as long as
                      necessary to provide our services and fulfill the purposes
                      outlined in this Privacy Policy. Specifically:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaCheckCircle className="h-4 w-4 text-brand-theme-200 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">
                          <strong>Account Data:</strong> Retained for the
                          duration of your account plus 30 days after closure.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="h-4 w-4 text-brand-theme-200 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">
                          <strong>Performance Analysis Data:</strong> Retained
                          for 2 years to provide historical insights and
                          reports.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="h-4 w-4 text-brand-theme-200 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">
                          <strong>Usage Data:</strong> Retained for 1 year for
                          analytics and service improvement purposes.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="h-4 w-4 text-brand-theme-200 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">
                          <strong>Legal Requirements:</strong> Some data may be
                          retained longer to comply with legal obligations.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* International Transfers */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    International Data Transfers
                  </h2>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Your information may be transferred to and processed in
                      countries other than your own. We ensure that such
                      transfers comply with applicable data protection laws and
                      implement appropriate safeguards to protect your
                      information.
                    </p>
                    <div className="flex items-center text-gray-300">
                      <FaGlobe className="h-5 w-5 mr-3 text-brand-theme-200" />
                      <span>
                        We primarily use servers located in the United States
                        and European Union, with appropriate data protection
                        measures in place.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Questions About Our Privacy Policy?
                  </h3>
                  <p className="text-gray-300 mb-4">
                    If you have any questions about this Privacy Policy or our
                    data practices, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center">
                      <FaEnvelope className="h-4 w-4 mr-3 text-brand-theme-200" />
                      <span>Email: privacy@pagematrix.com</span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="h-4 w-4 mr-3 text-brand-theme-200" />
                      <span>
                        Address: 123 Tech Street, San Francisco, CA 94105
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaPhone className="h-4 w-4 mr-3 text-brand-theme-200" />
                      <span>Phone: +1 (555) 123-4567</span>
                    </div>
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
