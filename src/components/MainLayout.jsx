import '../App.css';
import Header from "./Header.jsx";
import ShootingStars from "./ShootingStars";

export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="stars"></div>
        <ShootingStars />

        {/* Animated Gradient Mesh Blobs */}
        <div className="absolute -top-44 -left-44 w-[400px] h-[400px] rounded-full blur-[120px] opacity-30 animate-blob bg-gradient-to-tr from-indigo-700 via-purple-700 to-pink-600 mix-blend-screen" />

        <div className="absolute top-52 right-[-130px] w-[320px] h-[320px] rounded-full blur-[100px] opacity-25 animate-blob animation-delay-4000 bg-gradient-to-br from-blue-700 via-cyan-600 to-purple-700 mix-blend-screen" />

        <div className="absolute bottom-[-60px] left-[22%] w-[240px] h-[240px] rounded-full blur-[90px] opacity-20 animate-blob animation-delay-2000 bg-gradient-to-bl from-purple-800 via-pink-700 to-red-600 mix-blend-screen" />

        {/* Floating particle rings */}
        <div className="absolute top-[25%] left-[10%] w-72 h-72 rounded-full border border-pink-600 opacity-30 animate-spin-slow mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[15%] w-56 h-56 rounded-full border border-purple-600 opacity-25 animate-spin-slow animation-delay-6000 mix-blend-screen" />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10">{children}</main>

      {/* Extra styles */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 30px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 12s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
        /* stars styles if you want to customize or add new stars */
      `}</style>
    </div>
  );
}
