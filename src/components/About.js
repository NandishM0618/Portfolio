import "./slider/projects.css";
import { useEffect } from "react";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import ScrollDown from "./ScrollDown";

export default function About() {
  useEffect(() => {
    const aboutSection = document.querySelector(".animate-fade-in");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(aboutSection);

    return () => {
      observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <>
      <section class="animate-fade-in cursor-none  absolute left-0 top-0 w-full h-full -z-20">
        <img
          src="https://images.pexels.com/photos/2086917/pexels-photo-2086917.png?auto=compress&cs=tinysrgb&w=1260&dpr=1"
          class="w-full h-full object-cover opacity-50 md:max-h-screen sm:max-h-screen "
          alt="About"
        />
      </section>

      <div className="container mx-auto flex  flex-col md:flex-row md:justify-center md:items-center px-5 py-48 md:py-0 min-h-screen overflow-hidden">
        <div className="md:mx-auto md:flex md:justify-center  md:pr-16 flex flex-col md:items-start items-center text-center md:text-center mb-16 md:mb-0">
          <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, I am Nandish M
          </h3>
          <p className="text-white tracking-wider text-lg  ">
            A Web Developer.
          </p>
          <p className="flex justify-center items-center text-left text-gray-400 mt-3 max-w-md">
            "Passionate web developer with a flair for creative design,
            dedicated to crafting seamless and engaging user experiences.
            Bringing ideas to life through clean, efficient, and innovative web
            applications."
          </p>
          <div className="mt-5 flex space-x-6">
            <a
              href="https://instagram.com/nandishm04?igshid=ZGUzMzM3NWJiOQ=="
              className="text-white text-xl border border-white rounded-full p-2 hover:bg-white hover:text-black  hover:scale-105 hover:border-black  transition-transform"
            >
              <GrInstagram />
            </a>
            <a
              href="https://github.com/nandishm"
              className="text-white text-xl border border-white rounded-full p-2  hover:bg-white hover:text-black  hover:scale-105 hover:border-black transition-transform"
            >
              <GrGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nandish-m-1471b8233"
              className="text-white text-xl border border-white rounded-full p-2  hover:bg-white hover:text-black  hover:scale-105  hover:border-black transition-transform"
            >
              <GrLinkedin />
            </a>
          </div>
        </div>
        <div className="  mt-16 mx-auto transform translate-x-1/2 md:absolute md:right-1/2 md:bottom-12 animate-bounce">
          <ScrollDown targetSection="#about-me" className="ml-3" />
        </div>
      </div>
    </>
  );
}
