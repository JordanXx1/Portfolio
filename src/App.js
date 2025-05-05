import React, { useEffect } from "react"; // ✅ นำเข้า useEffect ด้วย
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/Preloader";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="scroll-smooth bg-gray-900 text-white min-h-screen overflow-x-hidden">
      <Preloader />
      <Navbar />
      <div className="pt-10">
        <Header />
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
}

export default App;
