import cl1 from "../assets/co1.png";

const testimonials = [
  {
    name: "Mr. Sunny Kumar Sharma",
    role: "School Principle",
    image: cl1,
    message:
      "Vishnu delivered a complete school website for us faster than expected. The design is clean, responsive, and exactly what we needed. If you're thinking about getting your website built, I highly recommend working with him.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative mt-26 py-20 px-4 sm:px-6 md:px-16 text-white overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 leading-tight">
          What Clients Say
        </h2>
      </div>

      {/* Cards Scroll */}
      <div className="flex gap-6 sm:gap-8 snap-x snap-mandatory overflow-x-auto scrollbar-hide pb-10 sm:pb-14">
        {testimonials.map((client, i) => (
          <div
            key={i}
            className="snap-center flex-shrink-0 w-[90%] sm:w-[300px] md:w-[340px] rounded-2xl backdrop-blur-md border border-white/10 shadow-lg relative overflow-hidden group h-[360px] p-5"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/20 to-cyan-500/10 blur-2xl opacity-20 z-0" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center h-full">
              <img
                src={client.image}
                alt={client.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-pink-400 shadow-xl mb-2"
              />
              <h4 className="text-base sm:text-lg font-semibold text-cyan-300 mb-1">
                {client.name}
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 mb-2">{client.role}</p>
              <p className="text-gray-300 italic text-sm sm:text-base leading-relaxed line-clamp-5">
                “{client.message}”
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Backgrounds */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-pink-400/20 rounded-full blur-[120px] opacity-30 animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/30 rounded-full blur-[120px] opacity-20 animate-pulse -z-10" />

      {/* Stars */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 5 + 2}s`,
              animationName: "twinkle",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          />
        ))}
      </div>

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
