// import { useEffect, useState } from "react";
// import { Sun, Moon } from "lucide-react"; 

// export default function ThemeToggle() {
//   const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

//   useEffect(() => {
//     if (dark) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [dark]);

//   return (
//     <button
//       onClick={() => setDark(!dark)}
//       className="text-xl p-2 rounded-full hover:bg-zinc-700 transition"
//     >
//       {dark ? <Sun /> : <Moon />}
//     </button>
//   );
// }

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-purple-500/30"
      title="Toggle Theme"
    >
      {dark ? (
        <Sun size={20} className="text-yellow-400 transition-transform duration-300" />
      ) : (
        <Moon size={20} className="text-purple-400 transition-transform duration-300" />
      )}
    </button>
  );
}
