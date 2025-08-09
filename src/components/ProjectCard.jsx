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
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl shadow-xl group flex flex-col overflow-hidden"
    >
      {/* Image */}
      <div className="h-32 xs:h-36 sm:h-40 md:h-48 w-full overflow-hidden">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-4 sm:p-5 gap-3 text-white">
        {/* Title */}
        <h3 className="text-base sm:text-lg font-semibold">{title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-300 leading-snug line-clamp-2 sm:line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item, i) => (
            <span
              key={i}
              className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-300 border border-white/10"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-1">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition text-base sm:text-lg"
            >
              <FaGithub />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition text-base sm:text-lg"
            >
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}


