import { GrLinkedin } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { MdContactPhone, MdEmail } from "react-icons/md";
import { useState } from "react";

export default function Footer(params) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }
  return (
    <>
      <div
        className="mt-10 lg:max-w-[1400px] lg:h-[600px] md:max-w-full mx-auto group flex flex-col justify-evenly items-center relative select-none px-4 sm:max-w-full sm:flex-cols bg-black/50"
        id="footer"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mt-20 mx-auto ml-7 md:w-[80%]">
            <hr className="w-6 text-red-600" />

            <p>These are my Social Media Handles</p>
            <div className="mt-3 flex flex-wrap space-x-2 sm:space-x-3 md:space-x-4">
              <a
                href="https://instagram.com/nandishm04?igshid=ZGUzMzM3NWJiOQ=="
                className="text-white text-4xl"
              >
                <GrInstagram />
              </a>
              <a
                href="https://twitter.com/nandishm0618"
                className="text-white text-4xl"
              >
                <GrTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/nandish-m-1471b8233"
                className="text-white text-4xl"
              >
                <GrLinkedin />
              </a>

              <a
                href="mailto:nandish1729@gmail.com"
                className="text-white text-4xl"
              >
                <MdEmail />
              </a>
            </div>
            <div className="mt-3 flex flex-col">
              <div className="flex py-2">
                <MdEmail className="text-md text-white mr-3" />
                <p>nandish1729@gmail.com</p>
              </div>
              <div className="flex">
                <MdContactPhone className="text-md text-white mr-3" />
                <p>+91 9019723860</p>
              </div>
            </div>
          </div>
          <section id="contact" className="flex justify-center md:w-full">
            <div className="px-5 py-10">
              <form
                name="contact"
                className="w-full md:w-full flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0"
                onSubmit={handleSubmit}
                netlify
              >
                <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium">
                  Contact Me
                </h2>

                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-indigo-500 border-0 py-2 px-6 hover:bg-indigo-600 rounded text-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
        <p className="tracking-wide text-white text-center mt-4">
          &copy; 2023 - All rights reserved. Designed and Developed by Nandish M
        </p>
      </div>
    </>
  );
}
