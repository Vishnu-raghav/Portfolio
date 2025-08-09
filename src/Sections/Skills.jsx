import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaDatabase, FaGitAlt
} from "react-icons/fa";
import {
  SiTailwindcss, SiExpress, SiMongodb, SiRedux
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Database", icon: <FaDatabase className="text-blue-300" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 px-6 sm:px-12 md:px-24 lg:px-40 text-white relative"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-14"
      >
        My Tech Stack 💻
      </motion.h2>

      {/* Scrollable horizontal skills (mobile) */}
      <div className="sm:hidden overflow-x-auto scrollbar-hide flex gap-6 px-4 snap-x snap-mandatory">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="snap-center flex-shrink-0 w-24 h-24 rounded-xl bg-white/10 border border-white/20 shadow-lg flex flex-col items-center justify-center cursor-default select-none"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-xs uppercase tracking-widest text-gray-300">{skill.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Grid skills (desktop) */}
      <div className="hidden sm:grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 max-w-5xl mx-auto justify-items-center">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="flex flex-col items-center cursor-default select-none"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-gray-900 to-gray-800 shadow-neumorph hover:shadow-neumorph-glow flex items-center justify-center text-4xl sm:text-5xl transition-shadow duration-300">
              {skill.icon}
            </div>
            <p className="mt-3 text-xs sm:text-sm uppercase tracking-widest text-gray-300">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .shadow-neumorph {
          box-shadow:
            8px 8px 15px #121212,
            -8px -8px 15px #2a2a2a;
        }
        .shadow-neumorph-glow {
          box-shadow:
            0 0 12px 2px rgba(255, 105, 180, 0.7),
            8px 8px 15px #121212,
            -8px -8px 15px #2a2a2a;
        }
      `}</style>
    </section>
  );
}
