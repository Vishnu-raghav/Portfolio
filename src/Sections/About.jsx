import { motion } from "framer-motion";
import CTAButton from "../components/CtaBtn.jsx";

export default function About() {
  return (
    <div className="text-white space-y-14 py-16 px-6 ">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-center"
      >
        About Me
      </motion.h2>

      {/* Intro Section */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-zinc-300 leading-relaxed max-w-4xl mx-auto text-center"
      >
        Hi, I'm <span className="text-purple-400 font-semibold">Vishnu Raghav</span>, a passionate <strong>Full-Stack Developer</strong>.
        I specialize in creating modern, scalable web applications using <strong>React</strong> for the frontend and <strong>Node.js/Express</strong> for the backend.
        My goal is to build high-performing, user-friendly applications with seamless integration between the client and server.
      </motion.p>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center mt-10"
      >
        <CTAButton text="Let's Build Something Together" href="#contact" />
      </motion.div>
    </div>
  );
}
