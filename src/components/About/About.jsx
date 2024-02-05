import React from "react";
import { AiOutlineExperiment } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import profile from "../../assets/about.jpg";

const About = () => {
  return (
    <div>
      <div className="text-xl font-bold text-center title mt-10">About me</div>
      <div className="text-center text">My Introduction</div>
      <div className="flex justify-center items-center mb-14 ml-4">
        <div className=" basis-2/6">
          <img src={profile} alt="" />
        </div>
        <div className="basis-4/6">
          <div className="flex items-center px-6">
            <div className="m-6">
              <div className="flex justify-center gap-8 ">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <AiOutlineExperiment />
                  <div className="sub-title">Experience</div>
                  <div className="text">1+ year working</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <BsBriefcase />
                  <div className="sub-title">Completed</div>
                  <div className="text">50+ projects</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <BiSupport />
                  <div className="sub-title">Support</div>
                  <div className="text">24/7 online</div>
                </div>
              </div>

              <div className="mt-4 text text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit, possimus? Odio laboriosam recusandae modi quas,
                laudantium est unde, at, provident a blanditiis dolorem
                accusamus maxime corporis iste mollitia vero ea.
              </div>
              <div className="items-center">
                <button className="button mt-4">
                  Download CV{" "}
                  <MdAttachFile className="ml-1 inline-block align-text-bottom" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
