import me from "../assets/me.jpg"; 
import { motion } from "framer-motion";
export default function HomeSection() {
  return (
    <section className="relative min-h-screen  text-white px-6 sm:px-10 md:px-16 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 leading-tight"
        >
          Full-Stack Developer <br />
          <span className="text-white">Turning Ideas into Interactive Realities</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <a
            href="#projects"
            className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition transform duration-300 text-center"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf" 
            className="border border-gray-600 text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300 text-center"
            download
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full md:w-1/2 flex justify-center items-center relative z-10"
      >
        <div className="relative w-[220px] sm:w-[260px] md:w-[280px] lg:w-[300px] aspect-square rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl">
          <img
            src={me}
            alt="Vishnu Raghav"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full blur-[100px] opacity-20 -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500 rounded-full blur-[100px] opacity-20 -z-10" />

      {/* Star Twinkle Effect */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationName: "twinkle",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}
