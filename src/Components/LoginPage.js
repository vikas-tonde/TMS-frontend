import React from 'react'

const Login = () => {
  return (
    <>
      <div className="flex flex-col justify-end items-center top-2 right-2 mx-60">
        <h1 className="text-center text-5xl text-blue font-bold drop-shadow-lg">Login</h1>
        <div className="w-80 my-7">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 mb-4 placeholder-blue-300 border rounded-lg bg-transparent placeholder-opacity-10"
            placeholder="Enter your email"
          />
          <label htmlFor="password" className="block mb-2">Password</label>
          <div className="relative">
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 mb-4 border rounded-lg bg-transparent placeholder-black-500 placeholder-opacity-50"
              placeholder="Enter your password"
            />
          </div>
          <button className=" w-full mt-8 px-12 py-3 bg-blue text-xl text-white font-semibold drop-shadow-lg rounded-full hover:bg-blue-600">
           Login
          </button>
          <div className="mt-4 text-center">
            <a href="/" className="text-blue-500 hover:underline">Forgot Password?</a>
          </div>
        </div>
      </div>      
    </>
  );
};

export default Login
