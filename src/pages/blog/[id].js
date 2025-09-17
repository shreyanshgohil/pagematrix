import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import {
  FaCalendarAlt,
  FaUser,
  FaArrowLeft,
  FaShare,
  FaBookmark,
  FaTag,
  FaRocket,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaClock,
  FaEye,
} from "react-icons/fa";
import { useState } from "react";

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: 1,
    title: "The Complete Guide to Core Web Vitals in 2024",
    content: `
      <p>Core Web Vitals are one of the most critical aspects of web performance optimization that often gets overlooked. In this comprehensive guide, we'll explore everything you need to know about optimizing Core Web Vitals for better user experience and search rankings in 2024.</p>

      <h2>What are Core Web Vitals?</h2>
      <p>Core Web Vitals are a set of specific factors that Google considers important in a webpage's overall user experience. These metrics focus on three key aspects: loading performance, interactivity, and visual stability.</p>

      <h2>Why Core Web Vitals Matter</h2>
      <p>Without proper Core Web Vitals optimization, your website won't rank well in search results, no matter how great your content is. This makes Core Web Vitals the foundation of any successful web performance strategy.</p>

      <h3>Key Benefits of Optimized Core Web Vitals:</h3>
      <ul>
        <li>Better search rankings</li>
        <li>Improved user experience</li>
        <li>Higher conversion rates</li>
        <li>Reduced bounce rates</li>
      </ul>

      <h2>Understanding the Three Core Web Vitals</h2>
      <p>Let's break down each of the three Core Web Vitals and what they measure:</p>

      <h3>1. Largest Contentful Paint (LCP)</h3>
      <p>LCP measures loading performance. It marks the point when the largest content element becomes visible within the viewport. A good LCP score is 2.5 seconds or less.</p>

      <h3>2. First Input Delay (FID)</h3>
      <p>FID measures interactivity. It quantifies the experience users feel when trying to first interact with your page. A good FID score is 100 milliseconds or less.</p>

      <h3>3. Cumulative Layout Shift (CLS)</h3>
      <p>CLS measures visual stability. It quantifies how much visible content shifts during the loading process. A good CLS score is 0.1 or less.</p>

      <h2>Common Performance Challenges</h2>
      <p>Many websites face various challenges when it comes to Core Web Vitals optimization. Understanding these challenges is the first step toward solving them.</p>

      <h3>1. Slow Loading Times</h3>
      <p>Large images, unoptimized code, and excessive JavaScript can significantly impact your LCP score and overall loading performance.</p>

      <h3>2. JavaScript Blocking</h3>
      <p>Common JavaScript issues that affect FID include:</p>
      <ul>
        <li>Heavy third-party scripts</li>
        <li>Unoptimized JavaScript bundles</li>
        <li>Long-running tasks</li>
        <li>Poor code splitting</li>
      </ul>

      <h3>3. Layout Shifts</h3>
      <p>Content that shifts during loading can severely impact your CLS score. Common causes include images without dimensions, dynamically injected content, and web fonts.</p>

      <h2>Best Practices for Core Web Vitals Optimization</h2>
      <p>Follow these proven strategies to improve your Core Web Vitals scores:</p>

      <h3>1. Optimize Images and Media</h3>
      <p>Use modern image formats like WebP, implement lazy loading, and ensure all images have proper dimensions to prevent layout shifts.</p>

      <h3>2. Minimize JavaScript</h3>
      <p>Remove unused JavaScript, implement code splitting, and defer non-critical scripts to improve interactivity and loading performance.</p>

      <h3>3. Use a Content Delivery Network (CDN)</h3>
      <p>CDNs help deliver your content faster by serving it from locations closer to your users, significantly improving LCP scores.</p>

      <h3>4. Monitor Performance Continuously</h3>
      <p>Regularly check your Core Web Vitals scores using tools like PageMatrix to track your performance progress and identify issues quickly.</p>

      <h2>Advanced Optimization Strategies</h2>
      <p>For larger websites or competitive niches, consider these advanced strategies:</p>

      <h3>1. Critical Resource Prioritization</h3>
      <p>Focus on optimizing your most important pages first. Use resource hints and preloading to prioritize critical resources.</p>

      <h3>2. Automated Performance Monitoring</h3>
      <p>For sites with hundreds or thousands of pages, automated monitoring tools can help you track Core Web Vitals across your entire site.</p>

      <h3>3. API Integration</h3>
      <p>Integrate with performance analysis APIs to automate the monitoring process and ensure your Core Web Vitals stay optimized.</p>

      <h2>Measuring Core Web Vitals Success</h2>
      <p>Track these key metrics to measure your Core Web Vitals optimization success:</p>
      <ul>
        <li>LCP scores across all pages</li>
        <li>FID improvement rates</li>
        <li>CLS reduction percentages</li>
        <li>Overall PageSpeed Insights scores</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Core Web Vitals optimization is a crucial component of web performance that requires ongoing attention and optimization. By following the best practices outlined in this guide and using the right tools like PageMatrix, you can significantly improve your website's user experience and search rankings.</p>

      <p>Remember, Core Web Vitals optimization is just the beginning. Once your scores are optimized, focus on maintaining performance and continuously monitoring for improvements.</p>
    `,
    author: "Sarah Johnson",
    authorImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    date: "2024-01-15",
    category: "core-web-vitals",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    tags: ["Core Web Vitals", "Performance", "Google"],
    views: 1250,
    likes: 89,
  };

  const relatedPosts = [
    {
      id: 2,
      title: "10 Performance Mistakes That Are Killing Your PageSpeed Score",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      id: 3,
      title: "How to Use PageMatrix API for Bulk Performance Analysis",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      readTime: "12 min read",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 4,
      title: "Understanding Google's PageSpeed Insights and How to Optimize It",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
  ];

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blogPost.title;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(title)}`
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`
        );
        break;
    }
  };

  return (
    <>
      <Head>
        <title>{blogPost.title} - PageMatrix Blog</title>
        <meta
          name="description"
          content={
            blogPost.content.replace(/<[^>]*>/g, "").substring(0, 160) + "..."
          }
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-br from-brand-blue-900 via-brand-theme-800 to-brand-blue-800 py-16 overflow-hidden">
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
              {/* Back Button */}
              <div className="mb-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <FaArrowLeft className="mr-2" />
                  Back to Blog
                </Link>
              </div>

              {/* Article Header */}
              <div className="text-center mb-12">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-8 border border-white/20">
                  <FaRocket className="h-4 w-4 mr-2" />
                  {blogPost.category}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                  {blogPost.title}
                </h1>

                {/* Article Meta */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 mb-8">
                  <div className="flex items-center">
                    <img
                      src={blogPost.authorImage}
                      alt={blogPost.author}
                      className="w-12 h-12 rounded-full mr-3 border-2 border-white/20"
                    />
                    <div>
                      <div className="font-medium text-white">
                        {blogPost.author}
                      </div>
                      <div className="text-sm text-gray-400">
                        Performance Expert
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {/* <span>{new Date(blogPost.date).toLocaleDateString()}</span> */}
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2" />
                    <span>{blogPost.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <FaEye className="mr-2" />
                    <span>{blogPost.views} views</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {blogPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm text-gray-300 text-sm rounded-full border border-white/20"
                    >
                      <FaTag className="inline mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Article Image */}
          <div className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={blogPost.image}
                  alt={blogPost.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
                    <div
                      className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
                      dangerouslySetInnerHTML={{ __html: blogPost.content }}
                    />
                  </div>

                  {/* Article Actions */}
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setIsBookmarked(!isBookmarked)}
                        className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                          isBookmarked
                            ? "bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 text-white shadow-lg"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        <FaBookmark className="mr-2" />
                        {isBookmarked ? "Bookmarked" : "Bookmark"}
                      </button>

                      <div className="flex items-center gap-3">
                        <span className="text-gray-600 font-medium">
                          Share:
                        </span>
                        <button
                          onClick={() => handleShare("twitter")}
                          className="p-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors duration-300"
                        >
                          <FaTwitter />
                        </button>
                        <button
                          onClick={() => handleShare("linkedin")}
                          className="p-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors duration-300"
                        >
                          <FaLinkedin />
                        </button>
                        <button
                          onClick={() => handleShare("facebook")}
                          className="p-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors duration-300"
                        >
                          <FaFacebook />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-gray-500">
                      <FaEye className="mr-2" />
                      {blogPost.likes} likes
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8 space-y-6">
                    {/* Author Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="text-center">
                        <img
                          src={blogPost.authorImage}
                          alt={blogPost.author}
                          className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-gray-200"
                        />
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {blogPost.author}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          Performance Expert & Optimization Strategist
                        </p>
                        <button className="w-full px-4 py-2 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 text-white font-semibold rounded-xl hover:from-brand-theme-600 hover:to-brand-theme-700 transition-all duration-300">
                          Follow
                        </button>
                      </div>
                    </div>

                    {/* Related Posts */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Related Posts
                      </h3>
                      <div className="space-y-4">
                        {relatedPosts.map((post) => (
                          <Link
                            key={post.id}
                            href={`/blog/${post.id}`}
                            className="group block"
                          >
                            <div className="flex gap-3">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                              />
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-brand-theme-600 transition-colors duration-300 line-clamp-2">
                                  {post.title}
                                </h4>
                                <p className="text-xs text-gray-500 mt-1">
                                  {post.author} • {post.readTime}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-gradient-to-br from-brand-blue-900 to-brand-theme-800 rounded-2xl p-6 text-white">
                      <h3 className="text-lg font-bold mb-3">
                        Ready to Optimize Your Performance?
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Start using PageMatrix to analyze your website's
                        performance and optimize Core Web Vitals.
                      </p>
                      <Link
                        href="/auth/register"
                        className="block w-full text-center px-4 py-2 bg-gradient-to-r from-brand-theme-500 to-brand-theme-600 text-white font-semibold rounded-xl hover:from-brand-theme-600 hover:to-brand-theme-700 transition-all duration-300"
                      >
                        Get Started Free
                      </Link>
                    </div>
                  </div>
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
