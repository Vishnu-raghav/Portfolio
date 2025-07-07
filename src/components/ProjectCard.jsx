import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  tech,
  imgUrl,
  githubUrl,
  liveUrl,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-lg group flex flex-col h-full"
    >
      {/* Project Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

          {/* Truncated Description */}
          <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-4">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-3">
            {tech.map((item, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300 border border-white/10"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-6">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition text-xl"
          >
            <FaGithub />
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition text-xl"
          >
            <FiExternalLink />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
