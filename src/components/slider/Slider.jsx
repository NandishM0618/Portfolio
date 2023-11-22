import { useEffect, useState } from "react";
import { projects } from "../../data";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import "./slider.css";

export default function Slider(params) {
  const [currSlide, setCurrSlide] = useState(0);
  const slideLength = projects.length;
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;
  const prevSlide = () => {
    setCurrSlide(currSlide === 0 ? slideLength - 1 : currSlide - 1);
  };
  const nextSlide = () => {
    setCurrSlide(currSlide === slideLength - 1 ? 0 : currSlide + 1);
  };
  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }
  useEffect(() => {
    setCurrSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) auto();
    return () => clearInterval(slideInterval);
  }, [currSlide]);
  return (
    <div>
      <div class="flex justify-center items-center  p-8">
        <h2 class="text-3xl">Projects</h2>
      </div>
      <div className="slider">
        <div className="arrow prev">
          <GrFormPrevious onClick={prevSlide} />
        </div>
        <div className="arrow next">
          <MdNavigateNext onClick={nextSlide} />
        </div>
        {projects.map((slide, idx) => {
          return (
            <div className="bg-white rounded-lg shadow-md p-4 m-2 w-64">
              <div
                className={idx == currSlide ? "slide current" : "slide"}
                key={idx}
              >
                {idx == currSlide && (
                  <div className="card">
                    <img
                      src={slide.image}
                      alt="slide"
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold">{slide.title}</h2>
                      <p className="text-gray-600 text-sm mt-2">{slide.desc}</p>
                      <hr className="my-4" />
                      <button className="bg-green-700 text-white px-3 py-2 rounded-md hover:scale-95">
                        Github
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
