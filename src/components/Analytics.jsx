import React from "react";
import data from "../assets/data.png";
function Analytics() {
  return (
    <>
      <div className=" bg-slate-200 p-5">
        <div className="md:flex">
          <img src={data} alt="" className=" w-[500px] mx-auto md:w-[800px]" />
          <div className=" md: my-auto">
          <p className=" text-[#00df9a] font-extrabold">DATA ANALYTICS DASHBOARD</p>
          <h1 className=" text-3xl font-bold">Manage Data analytics Centrally</h1>
          <p className=" font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis mollitia cupiditate ex exercitationem, ad eius quidem earum dolores, dolorem rerum, ipsam sit adipisci aliquid dicta quas quod blanditiis eligendi quasi?</p>
          <button className=" bg-black   w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Analytics;
