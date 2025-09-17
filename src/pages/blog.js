import Head from "next/head";
import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaSearch,
  FaTag,
  FaRocket,
  FaFilter,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState } from "react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "performance", name: "Performance Tips", count: 4 },
    { id: "core-web-vitals", name: "Core Web Vitals", count: 5 },
    { id: "tutorials", name: "Tutorials", count: 3 },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Complete Guide to Core Web Vitals in 2024",
      excerpt:
        "Learn everything you need to know about Core Web Vitals and how to optimize them for better user experience and search rankings.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "core-web-vitals",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      tags: ["Core Web Vitals", "Performance", "Google"],
    },
    {
      id: 2,
      title: "10 Performance Mistakes That Are Killing Your PageSpeed Score",
      excerpt:
        "Avoid these common performance mistakes that could be preventing your website from achieving optimal PageSpeed scores.",
      author: "Michael Chen",
      date: "2024-01-12",
      category: "performance",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      tags: ["PageSpeed", "Performance", "Optimization"],
    },
    {
      id: 3,
      title: "How to Use PageMatrix API for Bulk Performance Analysis",
      excerpt:
        "Step-by-step tutorial on using our API to analyze hundreds of URLs for performance metrics automatically.",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      category: "tutorials",
      readTime: "12 min read",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["API", "Tutorial", "Bulk Analysis"],
    },
    {
      id: 4,
      title: "Understanding Google's PageSpeed Insights and How to Optimize It",
      excerpt:
        "Learn how Google's PageSpeed Insights works and strategies to improve your website's performance scores.",
      author: "David Kim",
      date: "2024-01-08",
      category: "performance",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      tags: ["PageSpeed Insights", "Google", "Optimization"],
    },
    {
      id: 5,
      title: "The Future of Web Performance: AI and Machine Learning Impact",
      excerpt:
        "Exploring how artificial intelligence and machine learning are changing the web performance optimization landscape.",
      author: "Sarah Johnson",
      date: "2024-01-05",
      category: "performance",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["AI", "Future", "Performance"],
    },
    {
      id: 6,
      title: "Setting Up Real-time Performance Monitoring with PageMatrix",
      excerpt:
        "Learn how to configure real-time monitoring to receive instant notifications about your website's performance metrics.",
      author: "Michael Chen",
      date: "2024-01-03",
      category: "tutorials",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Monitoring", "API", "Real-time"],
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>Blog - PageMatrix</title>
        <meta
          name="description"
          content="Stay updated with the latest insights on web performance analysis, Core Web Vitals optimization, and PageSpeed Insights strategies from PageMatrix experts."
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
                  <FaRocket className="h-4 w-4 mr-2" />
                  Latest Insights
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                  <span className="block">
                    Web Performance & Core Web Vitals
                  </span>
                  <span className="block bg-gradient-to-r from-brand-theme-200 via-brand-theme-100 to-white bg-clip-text text-transparent">
                    Knowledge Hub
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                  Stay ahead with expert insights, tutorials, and strategies
                  from our performance specialists. Learn how to optimize your
                  Core Web Vitals and improve your website's performance.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                  <Link
                    href="#featured-posts"
                    className="group relative px-8 py-4 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 rounded-xl font-bold text-lg text-white hover:from-brand-theme-600 hover:to-brand-theme-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-brand-theme-500/25 inline-flex items-center justify-center"
                  >
                    Read Latest Posts
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    Subscribe to Updates
                  </Link>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-theme-500 to-brand-theme-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaUser className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    50+
                  </div>
                  <div className="text-gray-300 font-medium">
                    Expert Articles
                  </div>
                </div>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-theme-500 to-brand-theme-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaRocket className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    10K+
                  </div>
                  <div className="text-gray-300 font-medium">
                    Monthly Readers
                  </div>
                </div>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-theme-500 to-brand-theme-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaTag className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    15+
                  </div>
                  <div className="text-gray-300 font-medium">Categories</div>
                </div>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-theme-500 to-brand-theme-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaCalendarAlt className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Weekly
                  </div>
                  <div className="text-gray-300 font-medium">New Content</div>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div id="featured-posts" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-12">
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                  {/* Search */}
                  <div className="flex-1 w-full">
                    <div className="relative">
                      <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-theme-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          selectedCategory === category.id
                            ? "bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 text-white text-sm font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span className="px-2 py-1 bg-white/90 text-gray-900 text-xs font-medium rounded-full">
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <FaUser className="mr-2" />
                        <span className="mr-4">{post.author}</span>
                        <FaCalendarAlt className="mr-2" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-theme-600 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            <FaTag className="inline mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/blog/${post.id}`}
                        className="group/link inline-flex items-center text-brand-theme-600 hover:text-brand-theme-800 font-semibold transition-colors duration-300"
                      >
                        Read More
                        <FaArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* No Results */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl mb-4">
                    <FaSearch className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    No articles found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search terms or category filter.
                  </p>
                </div>
              )}

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                    <FaChevronLeft className="h-4 w-4" />
                  </button>
                  <button className="px-4 py-2 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 text-white rounded-lg font-semibold">
                    1
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                    2
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                    3
                  </button>
                  <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                    <FaChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="py-20 bg-gradient-to-br from-brand-blue-900 via-brand-theme-800 to-brand-blue-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-block w-16 h-1 bg-brand-theme-200 rounded-full mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter and never miss the latest insights
                on web performance analysis and Core Web Vitals optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-theme-500 focus:border-transparent"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 hover:from-brand-theme-600 hover:to-brand-theme-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-brand-theme-500/25">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
