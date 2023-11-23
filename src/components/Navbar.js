import { useEffect, useState } from "react";
import "./slider/projects.css";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { scroller } from "react-scroll";
import { MdDownload } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleScrollToSection = (sectionName) => {
    scroller.scrollTo(sectionName, {
      duration: 500,
      smooth: true,
    });
  };
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const minScrollToShowBackground = 450;
    setHasBackground(scrollY > minScrollToShowBackground);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleDownloadResume = () => {
    const resumeUrl = "https://nandishm.netlify.app/NandishResume.pdf";

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "NandishResume.pdf";
    link.click();
  };
  return (
    <nav
      className={` fixed top-0 left-0 right-0  z-50 ${
        hasBackground ? "bg-gray-800" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-2xl  font-custom ">
              Nandish M.
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <Link
                to="/home"
                onClick={() => handleScrollToSection("home")}
                className="text-white hover-underline  transition duration-500  hover:text-white cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="/about-me"
                onClick={() => handleScrollToSection("about-me")}
                className="text-white hover-underline hover:text-white cursor-pointer"
              >
                About
              </Link>
              <Link
                to="/works"
                onClick={() => handleScrollToSection("projects")}
                className="text-white hover-underline hover:text-white cursor-pointer"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                onClick={() => handleScrollToSection("contact")}
                className="text-white hover-underline hover:text-white cursor-pointer"
              >
                Contact
              </Link>
              <div className=" border border-white  bg-none rounded-sm">
                <button
                  onClick={handleDownloadResume}
                  className="text-white hover:text-black hover:bg-white px-2  flex items-center "
                >
                  Resume <MdDownload className="ml-2" />
                </button>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-white"
            >
              {isOpen ? (
                <MdClose className="w-6 h-6  opacity-0" />
              ) : (
                <MdMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed  inset-0 bg-gray-800 bg-opacity-80 md:hidden">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-white">
              <MdClose className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col items-start space-y-4 p-4">
            <Link
              to="/home"
              onClick={() => handleScrollToSection("home")}
              className="text-white text-xl  hover:text-gray-300 hover:scale-105"
            >
              Home
            </Link>
            <Link
              to="/about-me"
              onClick={() => handleScrollToSection("about-me")}
              className="text-white text-xl hover:text-gray-300"
            >
              About
            </Link>
            <Link
              to="/works"
              onClick={() => handleScrollToSection("projects")}
              className="text-white text-xl hover:text-gray-300"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={() => handleScrollToSection("contact")}
              className="text-white text-xl hover:text-gray-300"
            >
              Contact
            </Link>
            <button
              onClick={handleDownloadResume}
              className="text-white text-xl  hover:text-gray-300"
            >
              Resume <MdDownload className="inline-block" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
