import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      title: "NGO Donation Platform",
      description:
        "A full-stack donation platform with NGO listing, PayPal sandbox integration, and secure user flow.",
      tech: ["React", "Node.js", "Appwrite", "Tailwind CSS"],
      imgUrl: "/images/donation.jpg",
      githubUrl: "https://github.com/youruser/ngo-donation-site",
      liveUrl: "https://donate-now.vercel.app",
    },
    {
      title: "Freelance School Website",
      description:
        "A freelance project for a local school to manage announcements, gallery, and contact form with mobile-first design.",
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      imgUrl: "/images/school-website.jpg",
      githubUrl: "https://github.com/youruser/school-project",
      liveUrl: "https://youruser.github.io/school-project",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-20 bg-black text-white relative overflow-hidden">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl md:text-5xl font-extrabold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
      >
        Projects I’ve Built
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>

      {/* Twinkling stars (background effect) */}
      <div className="absolute inset-0 -z-10 pointer-events-none animate-pulse">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
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
          50% { opacity: 0.6; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}
