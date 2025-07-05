export default function CTAButton({ text, href, className }) {
  return (
    <a
      href={href}
      className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg shadow-md hover:scale-105 transition-all duration-300 ${className}`}
    >
      {text}
    </a>
  );
}
