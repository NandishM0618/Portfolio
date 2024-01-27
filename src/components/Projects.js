import { projects } from "../data";
import { MdNavigateNext } from "react-icons/md";
import "./slider/projects.css";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Projects() {
  useEffect(() => {
    const projectsSection = document.querySelector(".fade-in-projects");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          projectsSection.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(projectsSection);

    return () => {
      observer.unobserve(projectsSection);
    };
  }, []);

  return (
    <section id="works" className="text-gray-900 py-6">
      <div class="mx-auto max-w-7xl px-6 mt-10 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h1 class="text-3xl font-bold text-white sm:text-4xl">My Works</h1>
        </div>
        <div class="fade-in-projects mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  border-t pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((item) => {
            return (
              <>
                <article class=" hover:scale-105 bg-gray-800 hover:shadow-white flex max-w-xl flex-col items-start justify-between p-4 group cursor-pointer transition-transform transform scale-100 ">
                  <img
                    src={item.image}
                    alt="background"
                    className="w-full max-h-96 object-contain"
                  />

                  <div class="flex items-center gap-x-4 text-xs">
                    <time datetime="2020-03-16" class="text-gray-500">
                      {item.date}
                    </time>
                    <Link
                      to={item.link}
                      class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 mt-2 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Website
                    </Link>
                  </div>

                  <div class="group relative">
                    <h3 class="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white">
                      <Link to={item.link}>
                        <span class="absolute inset-0"></span>
                        {item.title}
                      </Link>
                    </h3>

                    <div class="container">
                      <p class="mt-5 line-clamp-6 text-sm leading-6 text-white">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <Link to={item.liveLink} target=" _blank">
                      <button className="px-4 w-120  inline-flex flex-row py-2 text-white bg-none border border-white rounded-md transition duration-300 transform hover:scale-105 hover:bg-white hover:text-gray-800 hover:shadow-md">
                        See Live
                      </button>
                    </Link>
                    <Link to={item.link} target=" _blank">
                      <button className="px-4 w-120  inline-flex flex-row py-2 text-gray-600 bg-white rounded-md transition duration-300 transform hover:bg-black/40 hover:text-white hover:shadow-md">
                        GitHub <MdNavigateNext className=" mt-1 ml-2" />
                      </button>
                    </Link>
                  </div>
                </article>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
