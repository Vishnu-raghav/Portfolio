import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import blogimg from "../assets/b-1.jpg";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "How I Got My First Client 💼",
      desc: "A real journey from zero to client – here's how I landed my first paid freelance project.",
      image: blogimg,
      tag: "Freelancing",
      date: "July 7, 2025",
    },
  ];

  return (
    <section id="blogs" className="w-full px-6 py-24 bg-[#0d0d0d] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
        >
          Blog Bytes 💡
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-3 mb-14 max-w-xl mx-auto"
        >
          Insights, code, and wisdom from my journey as a developer & freelancer.
        </motion.p>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#121212] p-1 rounded-3xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group"
            >
              <div className="bg-[#0d0d0d] rounded-3xl overflow-hidden h-full flex flex-col">
                <div className="overflow-hidden rounded-t-3xl">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full font-medium shadow-sm">
                      {blog.tag}
                    </span>
                    <span className="text-xs text-gray-500">{blog.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 mt-2 text-sm">{blog.desc}</p>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm text-purple-400 hover:text-pink-500 transition"
                  >
                    Read More <FaArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
