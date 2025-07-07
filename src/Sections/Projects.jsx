import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import FP1 from "../assets/FP.png";
import PP1 from "../assets/PP.png";
import PP2 from "../assets/pp2.png";
import TestimonialsSection from "./ClientFeedback.jsx";

export default function ProjectsSection() {
 const personalProjects = [
  {
    title: "MoviePulse",
    description: "Movie search app with trailers and cast info.",
    tech: ["React", "Tailwind CSS", "JavaScript", "REST API"],
    imgUrl: PP1,
    githubUrl: "https://github.com/Vishnu-raghav/MoviePulse",
    liveUrl: "https://movie-pulse-ljmw.vercel.app/",
  },
  {
    title: "GiveSmile",
    description: "NGO donation site with PayPal integration.",
    tech: ["React", "Tailwind CSS", "JavaScript", "PayPal API"],
    imgUrl: PP2,
    githubUrl: "https://github.com/Vishnu-raghav/GiveSmile-",
    liveUrl: "https://donation-website-silk.vercel.app/",
  }
];

const freelanceProjects = [
  {
    title: "School Website",
    description: "Full-stack school site with admin panel.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
      >
        Projects I’ve Built
      </motion.h2>

      {/* Personal Projects */}
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-purple-300 mb-4"
      >
        Personal Projects
      </motion.h3>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide pb-6">
        <div className="inline-flex gap-6">
          {personalProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] bg-white/5 rounded-xl shadow-lg p-4"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Freelance Projects */}
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-cyan-300 mt-12 mb-4"
      >
        Freelance Projects
      </motion.h3>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide pb-6">
        <div className="inline-flex gap-6">
          {freelanceProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] bg-white/5 rounded-xl shadow-lg p-4"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Stars BG */}
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

      {/* Styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.4); }
        }
      `}</style>
    </section>
  );
}
