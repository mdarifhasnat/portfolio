import React from "react";
import projectTasker from "../../assets/tasker.png";
import ticTacToe from "../../assets/tic-tac-toe1.png";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="mt-10">
      <div className="text-xl font-bold text-center ">Portfolio</div>
      <div className="text text-center">My recent works</div>
      <div className="flex gap-4 rounded">
        <div className="wrapper">
          <div className="image">
            <img src={projectTasker} alt="project-one" />
            <div className="content">
              <div className="heading">Tasker</div>
              <div className="details">text</div>
              <div className="button">
                <a href="/">Click here</a>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="image">
            <img src={ticTacToe} alt="project-one" />
            <div className="content">
              <div className="heading">Tic-tac-toe</div>
              <div className="details">text</div>
              <div className="button">
                <a href="/">Click here</a>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="image">
            <img src={projectTasker} alt="project-one" />
            <div className="content">
              <div className="heading">Student info</div>
              <div className="details">text</div>
              <div className="button">
                <a href="/">Click here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="wrapper">
          <div className="image">
            <img src={projectTasker} alt="project-one" />
            <div className="content">
              <div className="heading">Weather report</div>
              <div className="details">
                <ul className="white-dots-list">
                  <li>dfdfdf</li>
                  <li>dfdfdf</li>
                  <li>dfdfdf</li>
                </ul>
              </div>
              <div className="button">
                <a href="/">Click here</a>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="image">
            <img src={projectTasker} alt="project-one" />
            <div className="content">
              <div className="heading">Calculator</div>
              <div className="details">text</div>
              <div className="button">
                <a href="/">Click here</a>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="image">
            <img src={projectTasker} alt="project-one" />
            <div className="content">
              <div className="heading">Another</div>
              <div className="details">text</div>
              <div className="button">
                <a href="/">Click here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
