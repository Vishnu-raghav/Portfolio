// // src/components/SectionWrapper.jsx
// import { motion } from "framer-motion";

// export default function SectionWrapper({ children, id }) {
//   return (
//     <section
//       id={id}
//       className="w-full py-39 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.2 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="w-full"
//       >
//         {children}
//       </motion.div>
//     </section>
//   );
// }



import { motion } from "framer-motion";

export default function SectionWrapper({ children, id }) {
  return (
    <section
      id={id}
      className="w-full py-16 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto"
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
