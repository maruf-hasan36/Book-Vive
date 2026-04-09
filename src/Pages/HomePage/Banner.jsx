import React from "react";
import heroImg from "../../assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="hero bg-base-300 min-h-[60vh] mt-5  w-10/12 mx-auto rounded-2xl ">
      <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between pl-40 pr-40">
        <img src={heroImg} className="" />
        <div className="space-y-10">
          <h1 className="text-5xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>

          <button className="btn btn-primary bg-[#23BE0A] border-none">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
