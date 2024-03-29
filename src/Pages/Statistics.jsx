import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Selector from "../Components/BatchSelector";

import { getBatches } from "./../services/loaderFunctions";

const Statistics = ({ location }) => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [entries] = useState([
    { name: "Vikas Tonde", email: "vikas.tonde@intelizign.com", score: 92 },
    { name: "Shivkanya Doiphode", email: "shivkanya.doiphode@intelizign.com", score: 90 },
    { name: "Rishi Rathod", email: "rishi.rathod@intelizign.com", score: 88 },
    { name: "Rutika Vale", email: "rutika.vale@intelizign.com", score: 87 },
    { name: "Trupti Panhale", email: "trupti.panhale@intelizign.com", score: 85 },
  ]);

  return (
    <>
       < Selector loader={getBatches} />
      <div className="flex items-center justify-center mt-8 mb-5">
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="items-center">
            <h2 className="text-lg font-semibold text-center py-2 text-[#0A1C3E] ">Toppers</h2>
            <Slider {...settings} className="max-w-3xl mx-auto">
              {entries.map((entry, index) => (
                <div key={index} className="py-3 sm:py-4">
                  <div className="w-full px-10 pt-10">
                    <div className="relative mb-32 max-w-sm mx-auto mt-24">
                      <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                          <div className="h-32 w-32">
                            <img src="https://randomuser.me/api/portraits/women/49.jpg" className="rounded-full object-cover h-full w-full shadow-md" alt="User avatar" />
                          </div>
                        </div>
                        <div className="px-6 mt-16">
                          <h1 className="font-bold text-3xl text-center mb-1">{entry.name}</h1>
                          <p className="text-gray-800 text-sm text-center">{entry.score}</p>
                          <p className="text-center text-gray-600 text-base pt-3 font-normal">{entry.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-rows-3 gap-4 md:max-w-3xl mx-auto">
              <div className="flex items-center transform hover:scale-105 transition duration-300 bg-[#0A1C3E] p-6 m-4 rounded-lg shadow-md text-white">
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-semibold">Number of Exams</h2>
                  <span className="text-sm">Number of exams conducted during the training program.</span>
                </div>
                <div className="inline-flex items-center">
                  <div className="w-6 h-6 p-5 text-white flex items-center justify-center rounded-full text-md font-semibold">
                    <p className="text-3xl font-bold mt-2">18</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center transform hover:scale-105 transition duration-300 bg-[#0A1C3E] p-6 m-4 rounded-lg shadow-md text-white">
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-semibold">Number of Trainees</h2>
                  <span className="text-sm">Number of trainees currently enrolled in the training program.</span>
                </div>
                <div className="inline-flex items-center">
                  <div className="w-6 h-6 p-5 text-white flex items-center justify-center rounded-full text-md font-semibold">
                    <p className="text-3xl font-bold mt-2">27</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center transform hover:scale-105 transition duration-300 bg-[#0A1C3E] p-6 m-4 rounded-lg shadow-md text-white">
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-semibold">Ongoing Training</h2>
                  <span className="text-sm">Number of trainees currently undergoing training.</span>
                </div>
                <div className="inline-flex items-center">
                  <div className="w-6 h-6 p-5 text-white flex items-center justify-center rounded-full text-md font-semibold">
                    <p className="text-3xl font-bold mt-2">03</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Statistics;