import "./slider/projects.css";
import { skills } from "../data";
import { useEffect } from "react";
export default function Skills() {
  useEffect(() => {
    const skillSection = document.querySelector(".fade-in-skills");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skillSection.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(skillSection);

    return () => {
      observer.unobserve(skillSection);
    };
  }, []);

  return (
    <section id="skills" className="text-gray-900 py-5 ">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skill Set
          </h2>
        </div>
        <div className="fade-in-skills mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  border-t pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {skills.map((item, id) => {
            return (
              <>
                <div
                  className=" bg-gray-800 shadow-lg flex max-w-xl flex-col items-start justify-between p-4 cursor-pointer"
                  key={item.id}
                >
                  <div className="w-38 h-38 py-4 text-white">{item.img}</div>
                  <div class="relative">
                    <h3 class="style text-lg font-semibold leading-6 text-white group-hover:text-white">
                      <span class="absolute inset-0"></span>
                      {item.title}
                    </h3>
                    <div class="container">
                      <p class="mt-5  text-sm leading-6 text-white">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
