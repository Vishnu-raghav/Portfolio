import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaDatabase, FaGitAlt
} from "react-icons/fa";
import {
  SiTailwindcss, SiExpress, SiMongodb, SiRedux
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Database", icon: <FaDatabase className="text-blue-300" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-8 md:px-16 lg:px-32 text-white relative"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400 mb-12"
      >
        My Tech Stack 💻
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5 sm:gap-8 place-items-center max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group w-full sm:w-[90px] md:w-[100px] aspect-square flex flex-col items-center justify-center p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-pink-500/10 hover:border-pink-400 shadow-md transition"
          >
            <div className="text-2xl sm:text-3xl mb-2">{skill.icon}</div>
            <p className="text-[10px] sm:text-xs text-center text-gray-300 uppercase tracking-wide group-hover:text-pink-400">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
