// import '../App.css';
// import me from "../assets/me.jpg";
// import { motion } from "framer-motion";

// export default function HomeSection() {
//   return (
//     <section className="min-h-screen w-full px-6 sm:px-10 md:px-20 py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12 text-gray-200">
      
//       {/* Left Content */}
//       <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-indigo-400"
//         >
//           Hi, I'm <span className="text-indigo-500">Vishnu Raghav</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium"
//         >
//           I’m a <span className="font-semibold text-indigo-400">fullstack developer</span> focused on building clean, performant, and user-centric web experiences.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.7 }}
//           className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
//         >
//           <a
//             href="#projects"
//             className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition duration-300"
//           >
//             View Projects
//           </a>
//           <a
//             href="/resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-8 py-4 rounded-full border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-semibold transition duration-300"
//           >
//             Download Resume
//           </a>
//         </motion.div>
//       </div>
// {/* Right Image */}
// <motion.div
//   initial={{ opacity: 0, scale: 0.9 }}
//   animate={{ opacity: 1, scale: 1 }}
//   transition={{ delay: 0.1, duration: 0.5 }} // kam delay rakha
//   className="w-full md:w-1/2 flex justify-center md:justify-end"
// >
//   <div className="w-56 sm:w-64 md:w-80 aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-indigo-700 bg-gray-800">
//     <img
//       src={me}
//       alt="Vishnu Raghav"
//       loading="lazy" // lazy loading enable
//       decoding="async" // async decode
//       className="w-full h-full object-cover transition-opacity duration-500"
//     />
//   </div>
// </motion.div>

//     </section>
//   );
// }

import { motion } from "framer-motion";

export default function SwagIntro() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-white">
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 select-none"
      >
        Vishnu <span className="text-white">Raghav</span>
      </motion.h1>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="mt-4 text-2xl md:text-4xl font-semibold text-white relative inline-block"
      >
        Fullstack Developer
        <span className="absolute left-0 -bottom-1 w-full h-1 rounded bg-pink-500 shadow-pinkGlow"></span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-8 max-w-xl text-center text-gray-300 text-lg md:text-xl font-light leading-relaxed"
      >
        Building cutting-edge websites with clean code and unmatched passion. Let's craft the future together.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-12 flex gap-8"
      >
        <a
          href="#projects"
          className="px-10 py-4 bg-gradient-to-r from-purple-500 via-pink-600 to-red-500 rounded-full font-semibold text-white shadow-lg hover:brightness-110 transition"
        >
          See My Work
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 border-2 border-white rounded-full font-semibold text-white hover:bg-white hover:text-black transition"
        >
          Get Resume
        </a>
      </motion.div>

      <style jsx>{`
        .shadow-pinkGlow {
          box-shadow: 0 0 12px 4px #ec4899cc;
        }
      `}</style>
    </section>
  );
}
