import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full bg-white/10 backdrop-blur-md text-white border-t border-white/20 mt-10 px-6 py-8 rounded-t-3xl"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-widest text-purple-300">Vishnu Raghav</h2>
          <p className="text-sm text-gray-300 mt-1">
            Building Web Experiences | Frontend Dev | Dreamer 💻🚀
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a href="https://www.linkedin.com/in/vishnu-raghav-093017261/" target="_blank" className="hover:scale-125 hover:text-purple-400 transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Vishnu-raghav" target="_blank" className="hover:scale-125 hover:text-purple-400 transition duration-300">
            <FaGithub />
          </a>
          <a href="mailto:vishnur1225@gmail.com" className="hover:scale-125 hover:text-purple-400 transition duration-300">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-6 text-center text-sm text-gray-400 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} Vishnu Raghav. Crafted with ❤️ using React + Tailwind.
      </div>

      {/* Floating glowing circle (just for style) */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse hidden md:block" />
    </motion.footer>
  );
}
