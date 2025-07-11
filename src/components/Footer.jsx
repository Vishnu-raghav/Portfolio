import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="relative w-full bg-white/10 backdrop-blur-md text-white border-t border-white/20 mt-10 px-4 sm:px-6 py-6 sm:py-8 rounded-t-3xl"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-center sm:text-left">
        {/* Left Side */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-widest text-purple-300">
            Vishnu Raghav
          </h2>
          <p className="text-sm text-gray-300 mt-1 max-w-xs mx-auto sm:mx-0">
            Building Web Experiences | Frontend Dev | Dreamer 💻🚀
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl mt-4 sm:mt-0">
          <a
            href="https://www.linkedin.com/in/vishnu-raghav-093017261/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 hover:text-purple-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Vishnu-raghav"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 hover:text-purple-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:vishnur1225@gmail.com"
            className="hover:scale-125 hover:text-purple-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-6 text-center text-xs sm:text-sm text-gray-400 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} Vishnu Raghav. Crafted with ❤️ using React + Tailwind.
      </div>

      {/* Floating glowing circle (only visible on desktop) */}
      <div className="absolute -top-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse hidden sm:block" />
    </motion.footer>
  );
}
