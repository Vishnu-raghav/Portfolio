import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  Home,
  User,
  Code2,
  LayoutDashboard,
  Mail,
  FileText,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle"; // 👈 import added

const navLinks = [
  { id: "home", icon: <Home size={20} />, label: "Home" },
  { id: "about", icon: <User size={20} />, label: "About" },
  { id: "skills", icon: <Code2 size={20} />, label: "Skills" },
  { id: "projects", icon: <LayoutDashboard size={20} />, label: "Projects" },
  { id: "contact", icon: <Mail size={20} />, label: "Contact" },
  { id: "blog", icon: <FileText size={20} />, label: "Blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full z-50 transition-all duration-300
        flex justify-center items-center gap-6 text-white text-lg
        ${
          scrolled
            ? "bg-white/10 backdrop-blur-md border border-white/10 shadow-md"
            : "bg-white/5 backdrop-blur-sm border border-white/5"
        }`}
    >
      {navLinks.map(({ id, icon, label }) => (
        <Link
          key={id}
          to={id}
          smooth={true}
          duration={500}
          offset={-70}
          className="relative group flex flex-col items-center cursor-pointer"
        >
          {icon}
          <span className="absolute -bottom-6 text-xs opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-[-2px] transition-all duration-300 text-purple-400">
            {label}
          </span>
        </Link>
      ))}

    </header>
  );
}
