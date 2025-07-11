import { motion } from "framer-motion";

export default function SectionWrapper({ children, id }) {
  return (
    <section
      id={id}
      className="w-full py-4 sm:py-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        {children}
      </motion.div>
    </section>
  );
}
