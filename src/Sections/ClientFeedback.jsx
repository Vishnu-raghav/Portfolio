import cl1 from "../assets/me.jpg";

const testimonials = [
  {
    name: "Rakesh Kumar",
    role: "School Owner",
    image: cl1,
    message:
      "Vishnu built our school website within 3 days! The design is mobile-friendly, fast, and perfectly fits our brand. Highly recommended!",
  },
  {
    name: "Anita Sharma",
    role: "NGO Manager",
    image: cl1,
    message:
      "He understood our NGO needs clearly and delivered a donation platform that made our work easier. Thank you Vishnu!",
  },
  {
    name: "Rahul Mehta",
    role: "Gym Owner",
    image: cl1,
    message:
      "Amazing work bro! The gym website looks modern and got us more walk-ins within the first week. Legends like you deserve recognition.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#0e0e1a] to-black py-20 px-4 sm:px-6 md:px-16 text-white overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-sm sm:text-base uppercase tracking-widest text-purple-500 mb-2">
          Real Stories
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500 leading-tight">
          Testimonials That Speak For Themselves
        </h2>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto mt-4 px-2 sm:px-0">
          Hear what my clients from schools, NGOs, and gyms have to say about working with me — their success is my reward.
        </p>
      </div>

      {/* Cards Scroll */}
      <div className="flex gap-6 sm:gap-8 snap-x snap-mandatory overflow-x-auto scrollbar-hide pb-10 sm:pb-14">
        {testimonials.map((client, i) => (
          <div
            key={i}
            className="snap-center flex-shrink-0 w-[90%] sm:w-[300px] md:w-[340px] bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg relative overflow-hidden group h-[360px] p-5"
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
              <p className="text-gray-300 italic text-sm sm:text-base leading-relaxed line-clamp-4">
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





