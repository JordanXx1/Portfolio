import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 border-t border-gray-700 text-center py-6 text-gray-300 shadow-inner">
      <p className="text-sm sm:text-base tracking-wide">&copy; {new Date().getFullYear()} Portfolio | Surachet D.</p>

      <div className="mt-3 flex justify-center items-center gap-6 text-2xl">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://github.com/JordanXx1"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:laster31j@gmail.com"
          aria-label="Email"
          className="hover:text-green-400 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
