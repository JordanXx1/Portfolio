import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-lg text-blue-700 dark:text-white">MyPortfolio</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Projects</a>
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">About</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Contact</a>
          <a
            href="/Resume Suraset Diloklap.pdf"
            download
            className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
          >
            Resume
          </a>

          <button
            onClick={() => setDark(!dark)}
            className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition text-xl"
            aria-label="Toggle Theme"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl text-gray-700 dark:text-gray-200"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4 space-y-2">
          <a href="#projects" onClick={() => setMenuOpen(false)} className="block text-gray-700 dark:text-gray-300">Projects</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="block text-gray-700 dark:text-gray-300">About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-gray-700 dark:text-gray-300">Contact</a>
          <button
            onClick={() => { setDark(!dark); setMenuOpen(false); }}
            className="flex items-center gap-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 text-base"
          >
            {dark ? <FaSun /> : <FaMoon />}
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
