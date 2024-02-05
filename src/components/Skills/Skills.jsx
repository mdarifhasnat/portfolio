import React from "react";
import { BiLogoMongodb } from "react-icons/bi";
import { FaGithubSquare, FaReact } from "react-icons/fa";
import { GrNode } from "react-icons/gr";
import { LiaHtml5 } from "react-icons/lia";
import { RiJavascriptLine } from "react-icons/ri";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { TbBrandCss3, TbBrandFirebase } from "react-icons/tb";
import "./skills.css";

const Skills = () => {
  return (
    <div>
      <div className="text-xl font-bold text-center">Skills</div>
      <div className="text text-center">My Technical level</div>
      <div className="flex gap-4 justify-center mt-5">
        <div className="hero rounded p-4 bg-gray-100">
          <div className="hero-content text-center text-neutral-content ">
            <div className="max-w-md ">
              <div className="text-gray-600">Frontend Developer</div>
              <hr />
              <div className="flex mt-4 ">
                <div className="">
                  <div className="text-sub-title text-left mb-4">
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center space-x-2">
                        <LiaHtml5 />
                        <span>HTML</span>
                      </div>
                    </div>
                    <div className="text-mini ml-5">Basic</div>
                  </div>

                  <div className="text-sub-title text-left mb-4">
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center space-x-2">
                        <TbBrandCss3 />
                        <span>CSS</span>
                      </div>
                    </div>
                    <div className="text-mini ml-5">Advanced</div>
                  </div>

                  <div className="text-sub-title text-left mb-4">
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center space-x-2">
                        <RiJavascriptLine />
                        <span>Javascript</span>
                      </div>
                    </div>
                    <div className="text-mini ml-5">Intermediate</div>
                  </div>
                </div>
                <div className="ml-8">
                  <div className="text-sub-title text-left mb-4">
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center space-x-2">
                        <SiTailwindcss />
                        <span>Tailwind</span>
                      </div>
                    </div>
                    <div className="text-mini ml-5">Advanced</div>
                  </div>

                  <div className="text-sub-title text-left mb-4">
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center space-x-2">
                        <FaGithubSquare />
                        <span>Git</span>
                      </div>
                    </div>
                    <div className="text-mini ml-5">Intermediate</div>
                  </div>

                  <div className="text-sub-title text-left mb-4">
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center space-x-2">
                        <FaReact />
                        <span>React</span>
                      </div>
                    </div>
                    <div className="text-mini ml-5">Advanced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero rounded p-4 bg-gray-100">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <div className="text-gray-600">Backend Developer</div>
              <hr />
              <div className="flex mt-4">
                <div className="">
                  <div className="text-sub-title text-left mb-4">
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center space-x-2">
                        <BiLogoMongodb />
                        <span>MongoDB</span>
                      </div>
                    </div>
                    <div className="text-mini ml-5">Intermediate</div>
                  </div>

                  <div className="text-sub-title text-left mb-4">
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center space-x-2">
                        <SiExpress />
                        <span>Express</span>
                      </div>
                    </div>
                    <div className="text-mini ml-5">Intermediate</div>
                  </div>

                  <div className="text-sub-title text-left mb-4">
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center space-x-2">
                        <GrNode />
                        <span>Node</span>
                      </div>
                    </div>
                    <div className="text-mini ml-5">Intermediate</div>
                  </div>
                </div>
                <div className="ml-8">
                  <div className="text-sub-title text-left mb-4">
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center space-x-2">
                        <TbBrandFirebase />
                        <span>Firebase</span>
                      </div>
                    </div>
                    <div className="text-mini ml-5">Intermediate</div>
                  </div>

                  <div className="text-sub-title text-left mb-4">
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center space-x-2">
                        <FaGithubSquare />
                        <span>Git</span>
                      </div>
                    </div>
                    <div className="text-mini ml-5">Intermediate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
