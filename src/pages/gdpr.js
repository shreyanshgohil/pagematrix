import Head from "next/head";
import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {
  FaShieldAlt,
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
  FaLock,
  FaDownload,
  FaTrash,
  FaEdit,
  FaBan,
  FaGavel,
  FaClock,
} from "react-icons/fa";

export default function GDPR() {
  const userRights = [
    {
      title: "Right of Access",
      icon: FaEye,
      description:
        "You have the right to obtain confirmation of whether we process your personal data and access to that data",
      details: [
        "Request a copy of all personal data we hold about you",
        "Receive information about how we use your data",
        "Know the purposes and legal basis for processing",
        "Understand data retention periods",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Right to Rectification",
      icon: FaEdit,
      description:
        "You have the right to have inaccurate personal data corrected and incomplete data completed",
      details: [
        "Correct any inaccurate personal information",
        "Update your account details and preferences",
        "Modify your performance analysis settings",
        "Ensure data accuracy and completeness",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Right to Erasure",
      icon: FaTrash,
      description:
        "You have the right to request deletion of your personal data in certain circumstances",
      details: [
        "Delete your account and associated data",
        "Remove performance analysis history",
        "Eliminate data no longer necessary",
        "Withdraw consent for data processing",
      ],
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Right to Restrict Processing",
      icon: FaBan,
      description:
        "You have the right to limit how we process your personal data in certain situations",
      details: [
        "Suspend data processing activities",
        "Maintain data without active processing",
        "Challenge data accuracy",
        "Object to processing while verification occurs",
      ],
      color: "from-orange-500 to-yellow-500",
    },
    {
      title: "Right to Data Portability",
      icon: FaDownload,
      description:
        "You have the right to receive your personal data in a structured, machine-readable format",
      details: [
        "Export your performance analysis data",
        "Transfer data to another service provider",
        "Receive data in commonly used formats",
        "Maintain data ownership and control",
      ],
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Right to Object",
      icon: FaExclamationTriangle,
      description:
        "You have the right to object to processing of your personal data for specific purposes",
      details: [
        "Object to direct marketing communications",
        "Opt out of performance analytics",
        "Refuse automated decision-making",
        "Challenge legitimate interest processing",
      ],
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const legalBases = [
    {
      title: "Consent",
      icon: FaCheckCircle,
      description:
        "You have given clear consent for us to process your personal data",
      examples: [
        "Marketing communications and newsletters",
        "Performance analytics and insights",
        "Optional service features",
        "Third-party data sharing",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Contract Performance",
      icon: FaGavel,
      description:
        "Processing is necessary for the performance of a contract with you",
      examples: [
        "Providing web performance analysis services",
        "Account management and billing",
        "Customer support and assistance",
        "Service delivery and maintenance",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Legitimate Interest",
      icon: FaChartLine,
      description:
        "Processing is necessary for our legitimate business interests",
      examples: [
        "Service improvement and optimization",
        "Security and fraud prevention",
        "Business analytics and insights",
        "Product development and research",
      ],
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Legal Obligation",
      icon: FaLock,
      description: "Processing is necessary to comply with legal obligations",
      examples: [
        "Tax and accounting requirements",
        "Regulatory compliance",
        "Legal requests and court orders",
        "Audit and investigation purposes",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  const dataCategories = [
    {
      title: "Identity Data",
      description: "Information that identifies you personally",
      examples: [
        "Name",
        "Email address",
        "Account username",
        "Contact information",
      ],
      retention: "Account duration + 30 days",
    },
    {
      title: "Performance Data",
      description: "Data related to your web performance analysis",
      examples: [
        "URLs analyzed",
        "Performance scores",
        "Analysis reports",
        "Core Web Vitals data",
      ],
      retention: "2 years",
    },
    {
      title: "Usage Data",
      description: "Information about how you use our services",
      examples: [
        "Login times",
        "Feature usage",
        "Page views",
        "Interaction patterns",
      ],
      retention: "1 year",
    },
    {
      title: "Technical Data",
      description: "Technical information about your device and connection",
      examples: [
        "IP address",
        "Browser type",
        "Device information",
        "Location data",
      ],
      retention: "6 months",
    },
  ];

  return (
    <>
      <Head>
        <title>GDPR Compliance - PageMatrix</title>
        <meta
          name="description"
          content="Learn about PageMatrix's GDPR compliance and your data protection rights when using our web performance analysis services."
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
                  GDPR Compliance
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Your data protection rights under the General Data Protection
                  Regulation (GDPR) when using our web performance analysis
                  services.
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
                    Our GDPR Commitment
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    At PageMatrix, we are committed to protecting your personal
                    data and ensuring full compliance with the General Data
                    Protection Regulation (GDPR). This page explains your rights
                    under GDPR and how we handle your personal information when
                    you use our web performance analysis services.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We understand that your website performance data is
                    sensitive, and we treat it with the highest level of care
                    and security. This GDPR compliance information applies to
                    all users of our services, including website owners,
                    developers, and performance analysts.
                  </p>
                </div>

                {/* Your Rights */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Your GDPR Rights
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {userRights.map((right, index) => {
                      const Icon = right.icon;
                      return (
                        <div
                          key={index}
                          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                        >
                          <div className="flex items-start mb-4">
                            <div
                              className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${right.color} rounded-xl mr-4 flex-shrink-0`}
                            >
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-2">
                                {right.title}
                              </h3>
                              <p className="text-gray-300 mb-3 text-sm">
                                {right.description}
                              </p>
                              <ul className="space-y-1">
                                {right.details.map((detail, detailIndex) => (
                                  <li
                                    key={detailIndex}
                                    className="flex items-start"
                                  >
                                    <FaCheckCircle className="h-3 w-3 text-brand-theme-200 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300 text-xs">
                                      {detail}
                                    </span>
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

                {/* Legal Bases */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Legal Bases for Processing
                  </h2>
                  <div className="space-y-6">
                    {legalBases.map((basis, index) => {
                      const Icon = basis.icon;
                      return (
                        <div
                          key={index}
                          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                        >
                          <div className="flex items-start mb-4">
                            <div
                              className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${basis.color} rounded-xl mr-4 flex-shrink-0`}
                            >
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-2">
                                {basis.title}
                              </h3>
                              <p className="text-gray-300 mb-3">
                                {basis.description}
                              </p>
                              <div>
                                <span className="text-sm font-semibold text-white">
                                  Examples:{" "}
                                </span>
                                <ul className="inline-block text-gray-300">
                                  {basis.examples.map((example, exIndex) => (
                                    <li key={exIndex} className="inline">
                                      {example}
                                      {exIndex < basis.examples.length - 1 &&
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

                {/* Data Categories */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Categories of Personal Data
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left p-4 text-white font-semibold">
                            Data Category
                          </th>
                          <th className="text-left p-4 text-white font-semibold">
                            Description
                          </th>
                          <th className="text-left p-4 text-white font-semibold">
                            Examples
                          </th>
                          <th className="text-left p-4 text-white font-semibold">
                            Retention Period
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataCategories.map((category, index) => (
                          <tr
                            key={index}
                            className="border-b border-white/5 last:border-b-0"
                          >
                            <td className="p-4 text-white font-semibold">
                              {category.title}
                            </td>
                            <td className="p-4 text-gray-300">
                              {category.description}
                            </td>
                            <td className="p-4 text-gray-300">
                              <ul className="text-sm">
                                {category.examples.map((example, exIndex) => (
                                  <li key={exIndex}>• {example}</li>
                                ))}
                              </ul>
                            </td>
                            <td className="p-4 text-gray-300">
                              {category.retention}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Data Subject Rights Process */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    How to Exercise Your Rights
                  </h2>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-sm">
                            1
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2">
                            Submit Your Request
                          </h3>
                          <p className="text-gray-300">
                            Contact us at gdpr@pagematrix.com with your specific
                            request. Please include your account email and
                            describe the action you want to take.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-sm">
                            2
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2">
                            Identity Verification
                          </h3>
                          <p className="text-gray-300">
                            We may need to verify your identity to ensure the
                            security of your personal data. This may involve
                            providing additional identification documents.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-sm">
                            3
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2">
                            Processing Timeline
                          </h3>
                          <p className="text-gray-300">
                            We will respond to your request within 30 days. For
                            complex requests, we may extend this period by up to
                            60 days, and we will inform you of any delays.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-sm">
                            4
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2">
                            Response and Action
                          </h3>
                          <p className="text-gray-300">
                            We will provide you with the requested information
                            or take the requested action, along with an
                            explanation of any limitations or exceptions that
                            may apply.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Protection Officer */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Data Protection Officer
                  </h2>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      We have appointed a Data Protection Officer (DPO) to
                      oversee our GDPR compliance and handle your data
                      protection concerns. You can contact our DPO directly for
                      any questions about your personal data.
                    </p>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex items-center">
                        <FaEnvelope className="h-4 w-4 mr-3 text-brand-theme-200" />
                        <span>Email: dpo@pagematrix.com</span>
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
                </div>

                {/* Supervisory Authority */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Right to Lodge a Complaint
                  </h2>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      If you believe that we have not handled your personal data
                      in accordance with GDPR, you have the right to lodge a
                      complaint with your local supervisory authority. We
                      encourage you to contact us first so we can address your
                      concerns directly.
                    </p>
                    <div className="flex items-center text-gray-300">
                      <FaGavel className="h-5 w-5 mr-3 text-brand-theme-200" />
                      <span>
                        You can find your local supervisory authority at the
                        European Data Protection Board website.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Questions About GDPR Compliance?
                  </h3>
                  <p className="text-gray-300 mb-4">
                    If you have any questions about our GDPR compliance or your
                    data protection rights, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center">
                      <FaEnvelope className="h-4 w-4 mr-3 text-brand-theme-200" />
                      <span>Email: gdpr@pagematrix.com</span>
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
