import { useEffect, useRef } from "react";

export default function ShootingStars() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const createStar = () => {
      const star = document.createElement("div");
      const size = Math.random() * 1.5 + 1;
      const left = Math.random() * window.innerWidth;

      star.classList.add("shooting-star");
      star.style.left = `${left}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size * 80}px`;
      star.style.animationDuration = `${1 + Math.random()}s`;

      container.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 2000);
    };

    const interval = setInterval(createStar, 3000); // every 3 sec
    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-10 pointer-events-none" />;
}
