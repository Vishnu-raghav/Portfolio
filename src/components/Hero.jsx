import { motion } from "framer-motion";
import img from "../assets/me.jpg";

export default function HeroSection() {
  return (
    <section className="relative   text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-16 md:gap-6 gap-2">
      {/* Left Content */}
      <div className="z-10 md:w-1/2 space-y-4 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400"
        >
          Vishnu Raghav
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg md:text-xl text-gray-300"
        >
          Turning ideas into visually stunning and performant websites.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex gap-3 justify-center md:justify-start flex-wrap"
        >
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300">
            View Projects
          </button>
          <button className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300">
            Hire Me
          </button>
        </motion.div>
      </div>

      {/* Right Illustration */}
      <motion.div
        className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <img
          src={img}
          alt="developer"
          className="w-36 sm:w-44 rounded-2xl md:w-64 drop-shadow-xl"
        />
      </motion.div>
    </section>
  );
}
