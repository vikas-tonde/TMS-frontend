import React from "react";




export default function TraineeExamData() {
  return (
    <>
      <div className="w-full flex justify-center m-10">
      <form className="w-full flex justify-center ">
        <div className="flex-col">
          <div className="m-10 col-span-full flex  w items-center ">
            <label
              htmlFor="country"
              className="block text-xl font-medium  text-gray-900 mr-2"
            >
              Employee Id
            </label>
            <div className="mt-4 pl-10">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-96 h-9 rounded-md border-0 py-1.5 text-gray-800 shadow-xl ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset  focus:text-gray-800 mr-2 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>(T50494) Trupti Panhale</option>
                <option>(T50496) Vikas Tonde </option>
                <option>(T50482) Shivkanya </option>
              </select>
            </div>
          </div>
          <div className="m-10  col-span-full flex flex-row w items-center">
            <label
              htmlFor="module-name"
              className="block text-xl font-medium leading-6 text-gray-900 mr-2"
            >
              Module Name
            </label>
            <div className="pl-6 mt-2 flex-grow ">
              <input
                type="text"
                
                name="module-name"
                id="module-name"
                autoComplete="module-name"
                className="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                required
              />
            </div>
          </div>
          <div className="m-10 col-span-full flex flex-row w items-center">
            <label
              htmlFor="module-name"
              className="block text-xl font-medium leading-6 text-gray-900 mr-2"
            >
              Total Marks
            </label>
            <div className="pl-12 mt-2 flex-grow">
              <input
                type="text"
                pattern="[0-9]*"
                title="Please enter only numbers"
                name="module-name"
                id="module-name"
                autoComplete="module-name"
                className="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                required
              />
            </div>
          </div>
          <div className="m-10 col-span-full flex flex-row w items-center">
            <label
              htmlFor="module-name"
              className="block text-xl font-medium leading-6 text-gray-900 mr-2"
            >
              Obtained Marks
            </label>
            <div className="pl-2 mt-2 flex-grow">
              <input
                type="text"
                name="module-name"
                id="module-name"
                autoComplete="module-name"
                className="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                required
              />
            </div>
          </div>
          <div className="m-11 col-span-full flex flex-row w items-center">
            <label
              htmlFor="exam-date"
              className="block text-xl font-medium leading-6 text-gray-900 mr-2"
            >
              Exam Date
            </label>
            <div className="pl-12 mt-2 flex-grow">
              <input
                type="date"
                name="exam-date"
                id="exam-date"
                className="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                required
              />
            </div>
          </div>
          <div className=" flex items-center justify-center ">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
          </div>
      
   
      
      </form>
      </div>
    </>
  );
}

