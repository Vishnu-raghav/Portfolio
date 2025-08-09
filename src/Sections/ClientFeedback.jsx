const testimonials = [
  {
    name: "Mr. Sunny Kumar Sharma",
    role: "School Principal",
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
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        {testimonials.map((client, i) => (
          <div
            key={i}
            className="relative bg-white/5 border border-white/10 rounded-xl shadow-lg p-6 max-w-full sm:max-w-xs md:max-w-md"
          >
            {/* Quote Icon */}
            <span className="absolute -top-4 left-4 text-pink-400 text-4xl font-serif select-none">
              “
            </span>

            {/* Message */}
            <p className="text-gray-300 italic leading-relaxed pl-6 line-clamp-5 sm:line-clamp-4 md:line-clamp-5">
              {client.message}
            </p>

            {/* Footer */}
            <div className="mt-4 border-t border-white/10 pt-3 flex flex-col">
              <span className="text-pink-400 font-semibold">{client.name}</span>
              <span className="text-sm text-gray-400">{client.role}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Stars BG */}
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
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.4); }
        }

        /* For line clamp support */
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-5 {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
