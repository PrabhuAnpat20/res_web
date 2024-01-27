import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <>
      <div className=" text-white">
        <div className=" max-w-[800px] mt-72 w-full h-screen mx-auto text-center flex-col justify-center">
          <p className=" text-[#00df9a] font-bold p-2">
            GROWING WITH DATA ANALYTICS
          </p>
          <h1 className="md:text-7xl sm:text-6xl text text-4xl font-bold md:py-6">
            Grow with data.
          </h1>
          <div className=" flex justify-center items-center ">
            <p className=" md:text-5xl sm:text-4xl font-bold py-4">
              Fast,flexible financing for
            </p>
            <ReactTyped 
            className=" md:text-5xl sm:text-4xl font-bold pl-2"
              strings={[
                "BTB",
                "BTC",
                "SAAS",
              ]}
              typeSpeed={120}
              backSpeed={140}
              
              loop
            />
          </div>
          <p className=" md:text-2xl text-xl font-bold text-gray-500 mt-2">Monitor your data analytics to increase revenue for  BTB , BTC & SAAS platforms</p>
          <button className=" bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
