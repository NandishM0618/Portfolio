import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "././components/slider/projects.css";
import { Element } from "react-scroll";
import { useEffect } from "react";
import BacktoTop from "./components/BacktoTop";
import AboutMe from "./components/AboutMe";
import { Experience } from "./components/Experience";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".animate-scroll");

    const handleScroll = () => {
      sections.forEach((section) => {
        if (isElementInViewport(section)) {
          section.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  return (
    <html className="scroll-smooth md:scroll-auto">
      <main className="text-gray-400">
        <Navbar />

        <div className="animate-scroll">
          <Element name="home">
            <About />
          </Element>
        </div>
        <div className="animate-scroll">
          <Element name="about-me">
            <AboutMe />
          </Element>
        </div>
        <div className="animate-scroll">
          <Element name="experience">
            <Experience />
          </Element>
        </div>
        <div className="animate-scroll">
          <Element name="projects">
            <Projects />
          </Element>
        </div>
        <div className="animate-scroll">
          <Element name="skills">
            <Skills />
          </Element>
        </div>
        <Footer />
        <BacktoTop />
      </main>
    </html>
  );
}

export default App;
