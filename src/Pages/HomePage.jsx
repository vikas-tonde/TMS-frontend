import React from 'react'
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate()
 
  const navigateHandler = () => {
      navigate('/login');
    }
      return (
        <>
          <div
            className="w-full h-screen bg-[url('assets/Homepage.png')] bg-cover bg-center mix-blend-overlay flex justify-end items-center mx-30">

            <div className="flex top-4 right-4 m-2">
              <div className="flex flex-col justify-center items-center self-center mr-4 ">
                <h1 className="text-center text-5xl text-blue font-bold drop-shadow-lg">
                  Welcome to Intelizign
                </h1>
                <p className="mt-5 text-center text-lg text-white font-bold-500 opacity-70 box-content">
                  Streamline Trainee management, class organization, and add students and faculty.<br />
                  Seamlessly track attendance, assess performance, and provide feedback.<br />
                  Access records, view marks, and communicate effortlessly.<br />
                </p>
                <button className="mt-8 px-12 py-3 bg-blue text-xl text-white font-semibold drop-shadow-lg rounded-full" onClick={() => navigateHandler("")} >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </>
        );
      };
       
      export default Homepage;

