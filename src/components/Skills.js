import "./slider/projects.css";
import { skills } from "../data";
import { useEffect } from "react";
export default function Skills() {
  useEffect(() => {
    const projectsSection = document.querySelector(".fade-in-skills");

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
    <section id="skills" className="text-gray-900 py-5 ">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            I'm Proficient in
          </h2>
        </div>
        <div className="fade-in-skills mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  border-t pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {skills.map((item, id) => {
            return (
              <>
                <article
                  className=" bg-gray-800 shadow-lg flex max-w-xl flex-col items-start justify-between p-4 group cursor-pointer  "
                  key={item.id}
                >
                  <div class="group relative">
                    <h3 class="style mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white">
                      <span class="absolute inset-0"></span>
                      {item.title}
                    </h3>

                    <div class="container">
                      <p class="mt-5  text-sm leading-6 text-white">
                        {item.desc}
                      </p>
                    </div>
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
