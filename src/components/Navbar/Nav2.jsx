import React from "react";

const Nav2 = () => {
  return (
    <div>
      <navbar className="flex items-center justify-between">
        <div className="">Arif</div>
        <div className="flex mt-10 px-2 gap-3">
          <div>
            <a href="">Home</a>
          </div>
          <div>
            <a href="">About</a>
          </div>
          <div>
            <a href="">Skills</a>
          </div>
          <div>
            <a href="">Services</a>
          </div>
          <div>
            <a href="">Contact</a>
          </div>
        </div>
      </navbar>
    </div>
  );
};

export default Nav2;
