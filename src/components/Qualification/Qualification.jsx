import React from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiGraduationCapLine } from "react-icons/ri";
import "./qualification.css";

const Qualification = () => {
  const dotPositions = [0, 100, 200, 300]; // Positions of the dots along the vertical line

  return (
    <div className="mt-10">
      <div className="text-xl font-bold text-center ">Qualification</div>
      <div className="text text-center">My Personal Journey</div>
      <div className="flex justify-center mt-8">
        <div className="text-sub-title text-left mr-10 font-bold">
          <div className="flex items-center space-x-1">
            <div className="flex items-center space-x-2">
              <RiGraduationCapLine />
              <span>Education</span>
            </div>
          </div>
        </div>
        <div className="text-sub-title text-left font-bold">
          <div className="flex items-center space-x-1">
            <div className="flex items-center space-x-2">
              <IoBriefcaseOutline />
              <span>Experience</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-5">
        <div>
          <div className="mt-[40px]">
            <div>Bachelor of Science</div>
            <div className="text-mini">Textile and Clothing Management</div>
            <div className="text-mini">Sep 2017 - Jan 2023</div>
          </div>
          <div className="mt-[120px]">
            <div>Punch GmbH</div>
            <div className="text-mini">Digital Marketing</div>
            <div className="text-mini">Sep 2020 - Jan 2024</div>
          </div>
        </div>
        <div className="center-container">
          <div className="vertical-line">
            {dotPositions.map((position, index) => (
              <div
                key={index}
                className="vertical-dot"
                style={{ top: `${position}px` }}
              ></div>
            ))}
          </div>
        </div>
        <div>
          <div className="mt-[145px]">
            <div>Web Design</div>
            <div className="text-mini">Programming Hero</div>
            <div className="text-mini ">Jan 2023 - July 2023</div>
          </div>
          <div className="mt-[115px]">
            <div>Web Development</div>
            <div className="text-mini">Learn with Sumit</div>
            <div className="text-mini">Dec 2023 - Present</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
