import { GrGithub, GrLinkedin } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { useEffect } from "react";

export default function AboutMe(params) {
  useEffect(() => {
    const AboutSection = document.querySelector(".fade-in-about");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          AboutSection.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(AboutSection);

    return () => {
      observer.unobserve(AboutSection);
    };
  }, []);

  return (
    <section className="py-6 " id="about-me">
      <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl ">
          <h1 class="text-3xl font-bold text-white sm:text-4xl  ">About me</h1>
        </div>
        <div className=" mx-auto mt-10 fade-in-about grid grid-cols-1  border-t pt-10 max-w-2xl lg:max-w-full lg:mx-0 md:grid-cols-2 gap-x-8 gap-y-16 sm:mt-16 space-x-4 ">
          <div className="md:order-1 lg:w-full lg:h-2/3 sm:w-1/2  sm:mx-auto">
            <img
              className="object-cover w-full h-full rounded-md shadow-lg"
              src="https://img.freepik.com/premium-vector/programming-coding-icon-set-software-development-icon-collection-programmer-developer-symbol_745851-79.jpg"
              alt="about-img"
            />
          </div>
          {/* https://prompti.ai/wp-content/uploads/2023/07/pcboi2.png */}
          <div className="md:order-2 sm:px-4 ">
            <div className="text-left md:text-left">
              <p className="text-white leading-relaxed sm:text-left">
                <span className=" text-2xl">Hi There!, I'm Nandish M</span>
                <br />
                <span className="space-y-10 text-yellow-400">
                  A Full Stack Developer
                </span>
                <br />
                Passionate full-stack developer with expertise in both front-end
                and back-end technologies. Proficient in creating robust and
                scalable web applications, combining a strong foundation in
                programming with a keen eye for user experience. Dedicated to
                continuous learning and staying abreast of industry trends.
              </p>
              <div className="mt-5 sm:w-full flex space-x-6 sm:mx-auto">
                <a
                  href="https://instagram.com/nandishm04?igshid=ZGUzMzM3NWJiOQ=="
                  className="text-white text-xl border border-white rounded-full p-2 hover:bg-white hover:text-black  hover:scale-105 hover:border-black  transition-transform"
                >
                  <GrInstagram />
                </a>
                <a
                  href="https://github.com/NandishM0618"
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
          </div>
        </div>
      </div>
    </section>
  );
}
