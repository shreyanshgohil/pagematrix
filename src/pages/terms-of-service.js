import Head from "next/head";
import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {
  FaFileContract,
  FaGavel,
  FaExclamationTriangle,
  FaHandshake,
  FaBan,
  FaCheckCircle,
  FaArrowLeft,
} from "react-icons/fa";

export default function TermsOfService() {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: FaHandshake,
      content: [
        "By accessing and using PageMatrix services, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms apply to all visitors, users, and others who access or use the service.",
      ],
    },
    {
      title: "Service Description",
      icon: FaFileContract,
      content: [
        "PageMatrix provides web performance analysis services to help improve website performance and Core Web Vitals.",
        "Our service analyzes submitted URLs using Google's PageSpeed Insights API and provides detailed performance metrics.",
        "We reserve the right to modify, suspend, or discontinue the service at any time without notice.",
        "Service availability is not guaranteed and may be subject to maintenance windows.",
      ],
    },
    {
      title: "User Responsibilities",
      icon: FaCheckCircle,
      content: [
        "You must provide accurate and complete information when creating an account.",
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You must use the service in compliance with all applicable laws and regulations.",
        "You may not use the service for any illegal, harmful, or unauthorized purposes.",
        "You are responsible for the content and URLs you submit for performance analysis.",
      ],
    },
    {
      title: "Prohibited Uses",
      icon: FaBan,
      content: [
        "Submitting URLs containing illegal, harmful, or malicious content for performance analysis.",
        "Attempting to circumvent usage limits or security measures.",
        "Using automated tools to abuse or overload our systems.",
        "Violating any intellectual property rights or privacy rights of others.",
        "Engaging in any activity that could harm or disrupt our service or other users.",
      ],
    },
    {
      title: "Payment Terms",
      icon: FaGavel,
      content: [
        "Subscription fees are billed in advance on a monthly or annual basis.",
        "All fees are non-refundable except as required by law.",
        "We reserve the right to change pricing with 30 days notice to existing customers.",
        "Failure to pay may result in service suspension or termination.",
        "You are responsible for all applicable taxes related to your use of the service.",
      ],
    },
    {
      title: "Limitation of Liability",
      icon: FaExclamationTriangle,
      content: [
        "PageIndexing shall not be liable for any indirect, incidental, special, or consequential damages.",
        "Our total liability shall not exceed the amount paid by you for the service in the 12 months preceding the claim.",
        "We do not guarantee that performance analysis will improve your website's Core Web Vitals scores.",
        "We are not responsible for any loss of data, profits, or business opportunities.",
        "Some jurisdictions do not allow the limitation of liability, so these limitations may not apply to you.",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Terms of Service - PageMatrix</title>
        <meta
          name="description"
          content="Read PageMatrix's Terms of Service and understand your rights and responsibilities"
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
                  <FaFileContract className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Terms of Service
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Please read these terms carefully before using our service. By
                  using PageMatrix, you agree to these terms.
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
                    Agreement Overview
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    These Terms of Service (&quot;Terms&quot;) govern your use
                    of the PageMatrix service (&quot;Service&quot;) operated by
                    PageMatrix Inc. (&quot;us&quot;, &quot;we&quot;, or
                    &quot;our&quot;).
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Your access to and use of the Service is conditioned on your
                    acceptance of and compliance with these Terms. These Terms
                    apply to all visitors, users, and others who access or use
                    the Service.
                  </p>
                </div>

                {/* Main Sections */}
                <div className="space-y-12">
                  {sections.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <div
                        key={index}
                        className="border-b border-white/10 pb-8 last:border-b-0"
                      >
                        <div className="flex items-start mb-6">
                          <div className="flex-shrink-0 mr-4">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-brand-theme-500 to-brand-theme-600 rounded-xl">
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-white flex-1">
                            {section.title}
                          </h3>
                        </div>
                        <ul className="space-y-3 ml-16">
                          {section.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <FaCheckCircle className="h-5 w-5 text-brand-theme-200 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                {/* Additional Terms */}
                <div className="mt-12 space-y-6">
                  <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Termination
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      We may terminate or suspend your account immediately,
                      without prior notice or liability, for any reason
                      whatsoever, including without limitation if you breach the
                      Terms. Upon termination, your right to use the Service
                      will cease immediately.
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-brand-theme-500/10 to-brand-theme-600/10 rounded-xl border border-brand-theme-500/20">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Governing Law
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      These Terms shall be interpreted and governed by the laws
                      of the State of California, without regard to its conflict
                      of law provisions. Our failure to enforce any right or
                      provision of these Terms will not be considered a waiver
                      of those rights.
                    </p>
                  </div>

                  <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Changes to Terms
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      We reserve the right, at our sole discretion, to modify or
                      replace these Terms at any time. If a revision is
                      material, we will try to provide at least 30 days notice
                      prior to any new terms taking effect.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Contact Information
                  </h3>
                  <p className="text-gray-300 mb-4">
                    If you have any questions about these Terms of Service,
                    please contact us:
                  </p>
                  <div className="space-y-2 text-gray-300">
                    <p>Email: legal@pagematrix.com</p>
                    <p>Address: 123 Tech Street, San Francisco, CA 94105</p>
                    <p>Phone: +1 (555) 123-4567</p>
                  </div>
                </div>

                {/* Back Button */}
                <div className="mt-8 text-center">
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
