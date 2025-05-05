// src/components/Blog.js
import { useState } from "react";

const Blog = () => {
  const [posts] = useState([
    {
      title: "5 Tips for Learning React",
      date: "2025-04-10",
      summary: "Learn how to master React with these essential tips for beginners.",
      link: "https://yourblog.com/react-tips",
    },
    {
      title: "Understanding JavaScript Closures",
      date: "2025-03-22",
      summary: "A beginner-friendly explanation of closures in JavaScript with examples.",
      link: "https://yourblog.com/js-closures",
    },
    {
      title: "Why Tailwind CSS is Worth Learning",
      date: "2025-02-15",
      summary: "Discover how Tailwind CSS can improve your workflow and design flexibility.",
      link: "https://yourblog.com/tailwind-benefits",
    },
  ]);

  return (
    <section
      className="p-10 bg-white dark:bg-gray-900 text-center dark:text-white"
      id="blog"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-semibold mb-6">Blog</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{post.summary}</p>
            <a
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
