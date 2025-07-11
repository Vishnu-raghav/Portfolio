import '../App.css';
import me from "../assets/me.jpg";
import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <section className="min-h-screen w-full px-6 sm:px-10 md:px-20 py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight"
        >
          Hi, I'm <span className="text-primary">Vishnu Raghav</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-muted max-w-xl mx-auto md:mx-0 leading-relaxed"
        >
          I’m a frontend developer focused on building clean, performant, and user-centric web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-900 font-medium transition duration-300"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-900 font-medium transition duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full md:w-1/2 flex justify-center md:justify-end"
      >
        <div className="w-48 sm:w-60 md:w-72 aspect-square rounded-full overflow-hidden shadow-md border">
          <img
            src={me}
            alt="Vishnu Raghav"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
