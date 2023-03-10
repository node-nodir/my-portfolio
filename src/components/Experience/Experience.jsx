import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { BiCaretRight } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { Context } from "../../Context/ModalContext";

// ------> Css
import "./experience.css";

function Experience() {
  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  // ------> Context
  const ctx = useContext(Context);
  const { show } = ctx;

  const handleClick = () => {
    setActive(true);
    setActive1(false);
    setActive2(false);
  };

  const handleClick1 = () => {
    setActive(false);
    setActive1(true);
    setActive2(false);
  };

  const handleClick2 = () => {
    setActive(false);
    setActive1(false);
    setActive2(true);
  };

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();

  //   const token = "5850891292:AAEloOzyUHZkmtt6lytPkuOlsiVVH2l_Z6k";
  //   const chatId = 5022460942;

  //   const name = evt.target.elements.name.value;
  //   const lastName = evt.target.elements.lastname.value;
  //   let fullText = `\u{2705} Name: ${name}%0A\u{2705} Name: ${lastName}%0A\u{260F} Phone Number: \u{FF0B}998${"970130322"}`;

  //   // --- Sent Telegram Bot
  //   axios.post(
  //     `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullText},`
  //   );
  // };

  return (
    <section id="experience" className="py-10 sm:py-20">
      <div className="container">
        <h2 className="flex items-center justify-center text-xl sm:text-2xl text-white">
          <span className="inline-block w-14 sm:w-40 h-[1px] bg-[rgba(100,255,218,0.1)] rounded-full mr-5"></span>{" "}
          Experience{" "}
          <span className="inline-block ml-2">
            <MdWorkOutline className="text-lg sm:text-xl" />
          </span>
          <span className="inline-block w-14 sm:w-40 h-[1px] bg-[rgba(100,255,218,0.1)] rounded-full ml-5"></span>
        </h2>
        <div className="max-w-[800px] mx-auto">
          <div className="mt-8 sm:mt-12">
            <div className="flex flex-col sm:flex-row items-start">
              <div className="w-[70%] sm:w-[25%]">
                <button
                  className={`${active ? "text-[#64ffda] active bg-[#112240]" : ""} ${
                    show ? "!-z-10" : "z-0"
                  } track relative text-sm text-gray-300 w-full text-start pl-4 py-[10px] duration-300 hover:bg-[#112240] rounded-r-md`}
                  onClick={handleClick}
                >
                  Unical Solutions
                </button>
                <button
                  className={`${active1 ? "text-[#64ffda] active bg-[#112240]" : ""} ${
                    show ? "!-z-10" : "z-0"
                  } track relative text-sm text-gray-300 w-full text-start pl-4 py-[10px] duration-300 hover:bg-[#112240] rounded-r-md`}
                  onClick={handleClick1}
                >
                  Support - IT Solutions
                </button>
                <button
                  className={`${active2 ? "text-[#64ffda] active bg-[#112240]" : ""} ${
                    show ? "!-z-10" : "z-0"
                  } track relative text-sm text-gray-300 w-full text-start pl-4 py-[10px] duration-300 hover:bg-[#112240] rounded-r-md`}
                  onClick={handleClick2}
                >
                  RoboticsLab
                </button>
              </div>
              <div className="w-[100%] sm:w-[75%] sm:ml-10 mt-8 sm:mt-0">
                {active ? (
                  <>
                    <h2 className="text-xl text-[#64ffda] font-medium">
                      <span className="inline-block text-white">Front End Developer</span> @ Unical
                      Solutions
                    </h2>
                    <strong className="font-serif inline-block font-light text-sm text-[#CFB53B] tracking-wide">
                      Yanuary - February 2023
                    </strong>
                    <ul className="space-y-3 mt-6">
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          Work with a variety of different languages
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          Write modern, performant, maintainable code for a diverse array of client
                          and internal projects
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          I learned how to work effectively with a team on Github
                        </span>
                      </li>
                    </ul>
                  </>
                ) : (
                  ""
                )}
                {active1 ? (
                  <>
                    <h2 className="text-xl text-[#64ffda] font-medium">
                      <span className="inline-block text-white">Front End Developer</span> @ Support
                      - IT Solutions
                    </h2>
                    <strong className="font-serif inline-block font-light text-sm text-[#CFB53B] tracking-wide">
                      August 2022 - Yanuary 2023
                    </strong>
                    <ul className="space-y-3 mt-6">
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          Work with a variety of different languages, platforms and frameworks
                          management systems such as JavaScript (ES6+), TypeScript, React Js,
                          React-router-dom, Tailwind Css, Redux Github, Gitlab and Netlify
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          Write modern, performant, maintainable code for a diverse array of client
                          and internal projects
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          I learned how to work effectively with a team on Github
                        </span>
                      </li>
                    </ul>
                  </>
                ) : (
                  ""
                )}
                {active2 ? (
                  <>
                    <h2 className="text-xl text-[#64ffda] font-medium">
                      <span className="inline-block text-white">Front End Mentor</span> @
                      RoboticsLab
                    </h2>
                    <strong className="font-serif inline-block font-light text-sm text-[#CFB53B] tracking-wide">
                      July - August 2022
                    </strong>
                    <ul className="space-y-3 mt-6">
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          I understood how to communicate with students, even if only a little.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          In 1 month, I and the students found answers to such questions as what is
                          the web industry itself,
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-[#8892b0]">
                          Why we need to learn programming, and we started programming basic,
                        </span>
                      </li>
                    </ul>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
