import cl1 from "../assets/co1.png";

const testimonials = [
  {
    name: "Mr. Sunny Kumar Sharma",
    role: "School Principal",
    image: cl1,
    message:
      "Vishnu delivered a complete school website for us faster than expected. The design is clean, responsive, and exactly what we needed. If you're thinking about getting your website built, I highly recommend working with him.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-12 relative text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          What Clients Say
        </h2>
      </div>

      {/* Testimonials */}
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 sm:justify-center scrollbar-hide">
        {testimonials.map((client, i) => (
          <div
            key={i}
            className="snap-center flex-shrink-0 w-[90%] sm:w-[320px] md:w-[360px] bg-white/5 border border-white/10 rounded-xl shadow-md p-6 flex flex-col items-center text-center"
          >
            <img
              src={client.image}
              alt={client.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-pink-400 mb-3"
            />
            <h4 className="text-lg font-semibold text-pink-400">{client.name}</h4>
            <p className="text-sm text-gray-400 mb-2">{client.role}</p>
            <p className="text-sm text-gray-300 italic leading-relaxed line-clamp-5">
              “{client.message}”
            </p>
          </div>
        ))}
      </div>

      {/* Twinkle Stars */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 6 + 2}s`,
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
