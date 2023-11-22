import "./slider/projects.css";
import { useEffect, useState } from "react";

import { GrUp } from "react-icons/gr";
export default function BacktoTop(params) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top-button ${isVisible ? "visible" : ""}`}
    >
      {/* <i className="fas fa-arrow-up"></i>
       */}
      <GrUp />
    </button>
  );
}
