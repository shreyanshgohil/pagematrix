import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const userMenu = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Analyze URL", href: "/analyze" },
    { name: "Reports", href: "/reports" },
    { name: "Profile", href: "/profile" },
    { name: "Settings", href: "/settings" },
    { name: "Billing", href: "/billing" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="h-10 w-10 bg-gradient-to-br from-brand-theme-500 to-brand-theme-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-xl">PM</span>
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900 group-hover:text-brand-theme-600 transition-colors duration-300">
                PageMatrix
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    router.pathname === item.href
                      ? "text-brand-theme-600 bg-brand-theme-50 shadow-sm"
                      : "text-gray-700 hover:text-brand-theme-600 hover:bg-gray-50 hover:shadow-sm"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User Menu / Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Link
                href="/auth/login"
                className="text-gray-700 hover:text-brand-theme-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gray-50"
              >
                Sign In
              </Link>
              <Link
                href="/auth/register"
                className="bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 hover:from-brand-theme-600 hover:to-brand-theme-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-brand-theme-500/25 focus:outline-none focus:ring-2 focus:ring-brand-theme-500 focus:ring-offset-2"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-theme-500 transition-all duration-300"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200/50">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      router.pathname === item.href
                        ? "text-brand-theme-600 bg-brand-theme-50"
                        : "text-gray-700 hover:text-brand-theme-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Mobile Auth Section */}
              <div className="pt-4 border-t border-gray-200">
                <div className="space-y-2">
                  <Link
                    href="/auth/login"
                    className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-brand-theme-600 hover:bg-gray-50 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/register"
                    className="block px-4 py-3 rounded-lg text-base font-medium text-white bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 hover:from-brand-theme-600 hover:to-brand-theme-700 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
