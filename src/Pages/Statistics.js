import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Statistics = () => {

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
      <div className="flex flex-wrap justify-center content-between">
        <div className="items-center w-full md:w-1/2 px-4 bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
          <h2 className="text-lg font-semibold text-center py-2 text-[#0A1C3E] dark:text-white border-b border-gray-200 dark:border-gray-700">Toppers</h2>
          <Slider {...settings}>
            {entries.map((entry, index) => (
              <div key={index} className="py-3 sm:py-4">
                <div class="w-full  px-10 pt-10">
                  <div class="relative mb-32 max-w-sm mx-auto mt-24">
                    <div class="rounded overflow-hidden shadow-md bg-white">
                      <div class="absolute -mt-20 w-full flex justify-center">
                        <div class="h-32 w-32">
                          <img src="https://randomuser.me/api/portraits/women/49.jpg" class="rounded-full object-cover h-full w-full shadow-md" />
                        </div>
                      </div>
                      <div class="px-6 mt-16">
                        <h1 class="font-bold text-3xl text-center mb-1">{entry.name}</h1>
                        <p class="text-gray-800 text-sm text-center"> {entry.score}</p>
                        <p class="text-center text-gray-600 text-base pt-3 font-normal">{entry.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="w-full md:w-1/2 px-4 flex items-center justify-center">
          <div className="w-full md:max-w-lg lg:max-w-xl">

            <div className="flex items-center transform hover:scale-105 transition duration-300 bg-gray-500 p-6 m-4 rounded-lg shadow-md text-white">
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-semibold">Number of Exams</h2>
                <span className="text-sm">Number of exams conducted during the training program.</span>
              </div>
              <div className="inline-flex items-center">
                <di v className="w-6 h-6 p-5 bg-gray-500 text-white flex items-center justify-center rounded-full text-md font-semibold">
                  <p className="text-3xl font-bold mt-2">18</p>
                </di>
              </div>
            </div>
            <div className="flex items-center transform hover:scale-105 transition duration-300 bg-gray-500 p-6 m-4 rounded-lg shadow-md text-white">
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-semibold">Number of Trainees</h2>
                <span className="text-sm">Number of trainees currently enrolled in the training program.</span>
              </div>
              <div className="inline-flex items-center">
                <di v className="w-6 h-6 p-5 bg-gray-500 text-white flex items-center justify-center rounded-full text-md font-semibold">
                  <p className="text-3xl font-bold mt-2">27</p>
                </di>
              </div>
            </div>
            <div className="flex items-center transform hover:scale-105 transition duration-300 bg-gray-500 p-6 m-4 rounded-lg shadow-md text-white">
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-semibold">Ongoing Training</h2>
                <span className="text-sm">Number of trainees currently undergoing training.</span>
              </div>
              <div className="inline-flex items-center">
                <di v className="w-6 h-6 p-5 bg-gray-500 text-white flex items-center justify-center rounded-full text-md font-semibold">
                  <p className="text-3xl font-bold mt-2">03</p>
                </di>
              </div>
            </div>

          </div>
        </div>
      </div>
       </>
       );
};


export default Statistics;