import React from "react";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import profile from "../../assets/about.jpg";
import handsWave from "../../assets/images.png";
import scrollBar from "../../assets/scroll.svg";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="flex mt-10 px-2 items-center justify-between">
        {/* Social Icons */}
        <div className="mr-8 text-gray-700">
          <a href="">
            <FaInstagram className="mb-3" />
          </a>
          <a href="">
            <FaDiscord className="mb-3" />
          </a>
          <a href="">
            <FaGithub />
          </a>
        </div>

        {/* Text Content */}
        <div className="justify-center ">
          <div className="flex items-center">
            <h2 className="title">Md Arif Hasnat</h2>
            <img src={handsWave} alt="hello people" className="w-5 ml-2" />
          </div>

          <h6 className="text-gray-500 text-sm">Frontend Developer</h6>
          <p className="text-gray-500 text-xs mt-2">
            I'm a creative web application designer based in Dusseldorf{" "}
            <br></br>
            and I'm very passionate and dedicated to my work.
          </p>
          <button className="button mt-6">
            Say Hello
            <FaTelegramPlane className="ml-1 inline-block align-text-bottom" />
          </button>
        </div>

        {/* Image */}

        <div className="ml-6 mr-6 rounded">
          {/*<img src={profile} alt="" className="w-[600px]" />*/}
          <div className="w-[200px]">
            <img className="rounded-full" src={profile} alt="Your Image"></img>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6  mt-20 items-center text-xs">
        <div className="col-start-2 col-span-4 flex items-center ">
          <img src={scrollBar} alt="scroll-bar" />
          Scroll Down
          <FaArrowDown style={{ fontSize: "8px", marginLeft: "2px" }} />
        </div>
      </div>
    </>
  );
};

export default Header;
