import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import blogPosts from "../data/blog";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog – NovaTech Solutions</title>
        <meta
          name="description"
          content="Articles and insights from the NovaTech team on AI, Cloud, and Cybersecurity."
        />
      </Helmet>

      <motion.section
        className="max-w-6xl mx-auto px-6 py-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
          Insights & Articles
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <p className="text-xs text-gray-500 mb-2">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{post.preview}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="text-sm text-brand hover:underline font-medium"
              >
                Read more →
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
