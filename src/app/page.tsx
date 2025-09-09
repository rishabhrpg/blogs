import BlogLayout from '@/components/BlogLayout';
import BlogCard from '@/components/BlogCard';
import Link from 'next/link';

export default function Home() {
  const featuredPost = {
    title: "I built a Sentinel AI system using n8n and ChatGPT with ESP8266",
    excerpt: "Sentinel AI is a device with RGB lights and a speaker that sits on my desk and connects to n8n. It saves me from missing important meetings and emails, and protects my home when I'm away. Thanks to AI technology that made this possible.",
    date: "December 2024",
    readTime: "6 min read",
    slug: "smart-alarm-system",
    tags: ["AI", "IoT", "Home Security", "ESP8266", "n8n"]
  };

  const recentPosts = [
    {
      title: "Building Smart Home Sensors with ESP32",
      excerpt: "Create a network of temperature, humidity, and motion sensors for your smart home setup.",
      date: "November 2024",
      readTime: "6 min read",
      slug: "esp32-sensors",
      tags: ["ESP32", "Sensors", "IoT"]
    },
    {
      title: "Getting Started with Home Assistant",
      excerpt: "A beginner's guide to setting up Home Assistant for smart home automation.",
      date: "October 2024",
      readTime: "10 min read",
      slug: "home-assistant-guide",
      tags: ["Home Assistant", "Automation"]
    }
  ];

  return (
    <BlogLayout isHomepage={true}>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-2xl p-8 md:p-12 mb-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to My
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Tech Adventures
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Exploring the intersection of technology and creativity through DIY projects, 
            smart home automation, and IoT experiments. Join me as I build, break, and learn!
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/blog/smart-alarm-system"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Read Latest Post →
            </Link>
            <Link 
              href="/about"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Featured Project
          </h2>
          <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
            ⭐ Latest
          </span>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🏠</div>
                <div className="text-lg font-semibold">Smart Home Project</div>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredPost.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {featuredPost.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link 
                  href={`/blog/${featuredPost.slug}`}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Recent Posts
          </h2>
          <Link 
            href="/archive"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
          >
            View All Posts →
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {recentPosts.map((post) => (
            <div 
              key={post.slug}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-2xl">R</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm Rishabh! 👋
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            I'm a passionate maker and tech enthusiast who loves building smart home solutions, 
            IoT projects, and exploring the latest in home automation. When I'm not coding, 
            you'll find me tinkering with electronics or planning my next DIY project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg">
              <span className="text-2xl mr-2">🏠</span>
              <span className="text-gray-700 dark:text-gray-300">Smart Home</span>
            </div>
            <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg">
              <span className="text-2xl mr-2">⚡</span>
              <span className="text-gray-700 dark:text-gray-300">IoT Projects</span>
            </div>
            <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg">
              <span className="text-2xl mr-2">🔧</span>
              <span className="text-gray-700 dark:text-gray-300">DIY Electronics</span>
            </div>
            <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg">
              <span className="text-2xl mr-2">🤖</span>
              <span className="text-gray-700 dark:text-gray-300">Automation</span>
            </div>
          </div>
        </div>
      </section>
    </BlogLayout>
  );
}
