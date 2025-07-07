import '../App.css';
import Header from "./Header.jsx"; 
import ShootingStars from "./ShootingStars"; 

export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
        <ShootingStars />
      </div>

      {/* Soft indigo-glow blobs */}
      <div className="absolute -top-40 -left-40 w-[350px] h-[350px] bg-indigo-900 opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-60 right-[-120px] w-[250px] h-[250px] bg-blue-800 opacity-15 rounded-full blur-2xl z-0"></div>
      <div className="absolute bottom-[-80px] left-[20%] w-[200px] h-[200px] bg-purple-900 opacity-10 rounded-full blur-2xl z-0"></div>

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="relative z-10">{children}</main>
    </div>
  );
}
