import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_n5cw0kg",
        "template_pr2qutm",
        {
          from_name: data.from_name,
          user_email: data.user_email,
          message: data.message,
        },
        "oAawwwXpnjugqovvl"
      );

      reset(); 
      setShowSuccessMsg(true);

      setTimeout(() => {
        setShowSuccessMsg(false);
      }, 3000);
    } catch (err) {
      console.error("EmailJS error:", err);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6  md:px-20 text-white relative overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-extrabold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-violet-500"
      >
        Let’s Build Something Together 🤝
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Side */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-6"
        >
          <h3 className="text-2xl sm:text-3xl font-bold">
            Wanna discuss a project or just say hi?
          </h3>
          <p className="text-gray-400">
            I'm open to freelance projects, internships or collaboration. Drop a message and let’s connect!
          </p>

          <div className="flex flex-col gap-3 mt-4 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-pink-400" />
              <span>vishnur1225@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-pink-400" />
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaGithub className="text-pink-400" />
              <a
                href="https://github.com/Vishnu-raghav"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 shadow-lg flex flex-col gap-6"
        >
          <AnimatePresence>
            {showSuccessMsg && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-green-600/90 text-white text-sm sm:text-base font-semibold px-4 py-3 rounded-lg shadow-md text-center"
              >
                ✅ Your message has been sent successfully!
              </motion.div>
            )}
          </AnimatePresence>

          <input
            type="text"
            placeholder="Your Name"
            {...register("from_name", {
              required: "Name is required",
            })}
            className="bg-transparent border-b border-gray-500 py-2 px-1 focus:outline-none focus:border-pink-500 placeholder-gray-400"
          />
          {errors.from_name && (
            <span className="text-red-400 text-sm">{errors.from_name.message}</span>
          )}

          <input
            type="email"
            placeholder="Your Email"
            {...register("user_email", {
              required: "Email is required",
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: "Enter a valid email",
              },
            })}
            className="bg-transparent border-b border-gray-500 py-2 px-1 focus:outline-none focus:border-pink-500 placeholder-gray-400"
          />
          {errors.user_email && (
            <span className="text-red-400 text-sm">{errors.user_email.message}</span>
          )}

          <textarea
            rows="5"
            placeholder="Your Message"
            {...register("message", {
              required: "Message is required",
            })}
            className="bg-transparent border-b border-gray-500 py-2 px-1 focus:outline-none focus:border-pink-500 placeholder-gray-400 resize-none"
          ></textarea>
          {errors.message && (
            <span className="text-red-400 text-sm">{errors.message.message}</span>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-pink-500 to-fuchsia-600 py-3 rounded-lg font-semibold tracking-wide hover:shadow-xl transition duration-300"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
