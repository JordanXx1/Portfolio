import { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      className="relative px-4 py-20 dark:bg-gray-900 bg-gray-100"
      id="contact"
      data-aos="fade-left"
    >
      {/* เบลอวงกลมด้านหลัง */}
      <div className="absolute w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl -top-10 -left-10 animate-float z-0" />
      <div className="absolute w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-2xl -bottom-20 -right-20 animate-float z-0" />

      <div className="relative z-10 max-w-2xl mx-auto bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          📧 Email:{" "}
          <a href="mailto:laster31j@gmail.com" className="underline">
            laster31j@gmail.com
          </a>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="4"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <p className="mt-6 text-center text-green-600 dark:text-green-400 animate-pulse">
            ✅ Message sent successfully!
          </p>
        )}

        {/* Social Icons */}
        {/* Social Icons */}
        <div className="mt-8 flex justify-center items-center gap-6 text-2xl text-gray-700 dark:text-gray-300">
          <a
            href="https://github.com/JordanXx1"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-black dark:hover:text-white transition" />
          </a>
          <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-blue-600 transition" />
          </a>
          <a
            href="https://www.facebook.com/suraset.diloklap.2024/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="hover:text-blue-700 transition" />
          </a>
          <a
            href="https://www.instagram.com/dan.surachet/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
