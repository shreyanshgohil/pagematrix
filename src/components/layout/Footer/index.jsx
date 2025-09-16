import React from "react";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "API", href: "/api-docs" },
      { name: "Status", href: "/status" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Documentation", href: "/docs" },
      { name: "Community", href: "/community" },
      { name: "Status", href: "/status" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "GDPR", href: "/gdpr" },
    ],
  };

  const socialLinks = [
    { name: "GitHub", href: "https://github.com", icon: FaGithub },
    { name: "Twitter", href: "https://twitter.com", icon: FaTwitter },
    { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
    {
      name: "Email",
      href: "mailto:contact@pagematrix.com",
      icon: FaEnvelope,
    },
  ];

  return (
    <footer className="">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10 -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12">
          {/* Brand */}
          <div className="flex-shrink-0 lg:w-80">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-gradient-to-br from-brand-theme-500 to-brand-theme-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">PM</span>
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">
                PageMatrix
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Advanced web performance analysis using Google PageSpeed Insights
              API. Get detailed performance metrics, optimization
              recommendations, and actionable insights for your websites.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-100 hover:bg-brand-theme-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5 text-gray-600 hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Product Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-brand-theme-600 transition-colors text-sm duration-300 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-brand-theme-600 transition-colors text-sm duration-300 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-brand-theme-600 transition-colors text-sm duration-300 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-brand-theme-600 transition-colors text-sm duration-300 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Stay Updated
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Get the latest updates on web performance optimization and
              PageSpeed insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-theme-500 focus:border-transparent text-sm"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 hover:from-brand-theme-600 hover:to-brand-theme-700 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} PageMatrix. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-1 items-center space-x-6">
              <p className="text-gray-600 text-sm">
                Made with ❤️ for better performance
              </p>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>•</span>
                <span>99.9% Uptime</span>
                <span>•</span>
                <span>1M+ URLs Analyzed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-brand-theme-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-brand-theme-600/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </footer>
  );
};

export default Footer;
