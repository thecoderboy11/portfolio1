import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import "./App.css";
import hannanImage from "./the coder boy.jpeg";

const FirstPage = () => {
  return (
    <div className=" py-10   md:bg-[#6c6a6a] md:h-screen">

      <div className="mt-40 md:mt-52  md:flex justify-evenly md:gap-5 ">

        <div className="  flex flex-col ">

          <div className="hover:border hover:border-yellow-600 flex flex-col justify-center firstpage_i_am_coder_line mx-8 p-4 md:p-16  ">
            <div className="p-4">
              <h1 className="text-xl md:text-4xl text-neutral-300">
                I'M
                <span className="ml-4 md:ml-10 font-bold text-4xl md:text-7xl text-yellow-400">
                  the coder boy
                </span>
              </h1>
            </div>

            <div className="h-[1px] my-6 bg-[#c4bebe] "></div>

            <div className="ml-4 mt-2 md:mt-4 text-4xl text-neutral-300">
              full-stack web developer
            </div>

          </div>

          <div className=" hover:border hover:border-yellow-600 mx-5 md:ml-8 md:mx-0 sociallinkdiv mt-14 md:mt-20  flex justify-evenly items-center  text-5xl py-6 ">
            
            <div className=" sociallinkbutton rounded-2xl  p-2 ">
              <a target="__blank" href="https://www.instagram.com/the_coder_boy__">
                <FaInstagram />
              </a>
            </div>

            <div className="sociallinkbutton  rounded-2xl p-2 ">
              <a target="__blank" href="https://in.linkedin.com/">
                <FaLinkedin />
              </a>
            </div>

            <div className="sociallinkbutton rounded-2xl p-2 ">
              <a target="__blank" href="https://github.com/">
                <FaGithub />
              </a>
            </div>

            <div className="sociallinkbutton rounded-2xl p-2 ">
              <a target="__blank" href="https://x.com/">
                <FaXTwitter />
              </a>
            </div>

          </div>

        </div>

        <div className="sociallinkdiv  mx-10 md:mx-0  md:p-0 mt-16  mb-10 md:mt-0  sm:w-[350px]  md:w-[450px]">
          <img
            className="aspect-[3/4] object-cover p-3 rounded-2xl filter grayscale hover:grayscale-0"
            src={hannanImage}
            alt="404"
          />
        </div>

      </div>
    </div>
  );
};

export default FirstPage;
