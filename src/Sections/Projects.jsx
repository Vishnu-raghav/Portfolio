import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import FP1 from "../assets/FP.png"
import PP1 from "../assets/PP.png"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Movie Platform",
      description:
        "A full-stack donation platform with NGO listing, PayPal sandbox integration, and secure user flow.",
      tech: ["React", "Node.js", "Appwrite", "Tailwind CSS"],
      imgUrl: PP1,
      githubUrl: "https://github.com/Vishnu-raghav/MoviePulse",
      liveUrl: "https://movie-pulse-ljmw.vercel.app/",
    },
    {
      title: "Freelance School Website",
      description:
        "A freelance project for a local school to manage announcements, gallery, and contact form with mobile-first design.",
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      imgUrl: FP1,
      githubUrl: "https://github.com/Vishnu-raghav/School-website",
      liveUrl: "https://krishnapublicschool.net/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-20 text-white relative overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
      >
        Projects I’ve Built
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center text-lg text-gray-400 max-w-2xl mx-auto mb-16"
      >
        A collection of my personal and freelance projects that showcase my
        skills and creativity.
      </motion.p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>

      {/* Stars animation */}
      <div className="absolute inset-0 -z-10 pointer-events-none animate-pulse">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 3}s`,
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
          50% { opacity: 0.6; transform: scale(1.4); }
        }
      `}</style>
    </section>
  );
}
