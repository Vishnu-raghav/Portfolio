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
      className="py-24 px-6 md:px-20 text-white relative"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-bold mb-20 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-violet-400"
      >
        My Tech Arsenal 🔧
      </motion.h2>

      {/* Advanced Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.08,
              rotate: 1,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="relative group p-[1px] rounded-xl bg-gradient-to-tr from-white/10 via-white/5 to-transparent shadow-lg hover:shadow-pink-400/30"
          >
            <div className="flex flex-col items-center justify-center rounded-xl p-5 sm:p-6 backdrop-blur-md bg-black/30 w-full h-full transition-all duration-300 hover:bg-black/20">
              <div className="text-3xl sm:text-4xl mb-3">{skill.icon}</div>
              <p className="text-sm text-center text-gray-300 tracking-wider font-medium uppercase group-hover:text-pink-400 transition">
                {skill.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
