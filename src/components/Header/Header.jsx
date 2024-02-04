import React from "react";
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";
import handsWave from "../../assets/images.png";
import profile from "../../assets/profile.jpg";
import "./header.css";

const Header = () => {
  return (
    <div className="flex mt-10 px-2 items-center justify-between">
      {/* Social Icons */}
      <div className="mr-8 text-gray-700">
        <a href="">
          {" "}
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
          <h2 className="text-2xl font-bold text-gray-700">Md Arif Hasnat</h2>
          <img src={handsWave} alt="hello people" className="w-5 h- ml-2" />
        </div>

        <h6 className="text-gray-500 text-sm">Frontend Developer</h6>
        <p className="text-gray-500 text-xs mt-2">
          I'm a creative web application designer based in Dusseldorf and I'm
          very passionate and dedicated to my work.
        </p>
      </div>

      {/* Image */}
      <div className="animate  ml-10 pr-4">
        {/*<img src={profile} alt="" className="w-[600px]" />*/}
        <img
          className="w-[500px] border-4 border-dashed border-gray-500"
          src={profile}
          alt="Your Image"
        ></img>
      </div>
      <div className="relative w-64 h-64">
        {/*<img src={profile} alt="" className="w-[600px]" />*/}
        <img
          src={profile}
          alt="Your Image"
          class="w-full h-full object-cover rounded-lg"
        ></img>
        <div class="absolute inset-0 border-8 border-r-0 border-l-0  border-gray-500 animate-border"></div>
      </div>
    </div>
  );
};

export default Header;
