import React, { useEffect } from "react";
export const Experience = () => {
  const experiences = [
    {
      company: "Baymap Systems",
      position: "Front-End Web Developer",
      period: "Dec 2023 - Feb 2024",
      description:
        "As the Front-End Web Developer at Baymap Systems, I play a pivotal role in crafting an impactful and visually stunning online presence for the company through the development of official website.",
    },
    {
      company: "Varcons Technologies Pvt Ltd",
      position: "Full-Stack Web Developer",
      period: "Nov 2023 - Dec 2023",
      description:
        "As a Full-Stack Web Developer at Varcons Technologies, I undertook a challenging and exciting opportunity to contribute to a cutting-edge space exploration project. This role involved active participation in the development and maintenance of software components integral to the project's success.",
    },
    {
      company: "NJack IITP",
      position: "Open Source Contributor",
      period: "Dec 2023",
      description:
        "As an Open Source Contributor at Code Peak23, I actively participated in contributing to various open-source projects, showcasing a commitment to collaborative software development and community-driven initiatives. This role allowed me to engage with diverse projects, learn from experienced developers, and contribute to the global open-source community.",
    },
  ];
  const sortedExperiences = experiences.sort(
    (a, b) => new Date(b.period) - new Date(a.period)
  );
  useEffect(() => {
    const ExperienceSection = document.querySelector(".fade-in-ex");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          ExperienceSection.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(ExperienceSection);

    return () => {
      observer.unobserve(ExperienceSection);
    };
  }, []);

  return (
    <div className="max-w-7xl  py-8 lg:px-8 px-6 mx-auto">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Experience
        </h1>
      </div>
      <div className="fade-in-ex grid grid-cols-1 border-t sm:grid-cols-2 gap-8 mt-8">
        {sortedExperiences.map((experience, index) => (
          <div key={index} className="flex mt-7">
            <div className=" flex flex-col">
              <div className="w-4 h-4 bg-blue-500 rounded-full mr-4"></div>
              <div className="border-l-2 h-1/2 border-white ml-2"></div>
            </div>
            <div className="flex-1">
              <div className="bg-black/40 max-w-[180px] text-white py-1 px-2 rounded-md mb-2">
                {experience.period}
              </div>
              <div className=" flex gap-3">
                <h3 className="text-xl text-white font-semibold">
                  {experience.position} <span>~</span>
                </h3>
                <p className="text-gray-500 mt-1">{experience.company}</p>
              </div>
              <p className="mt-2 text-left">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
