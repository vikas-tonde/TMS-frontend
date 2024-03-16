

function BulkEntryModuleForm() {

    return(
        <>
            <div className="flex items-center justify-items-center mb-16">
                <h1 className='text-4xl  font-semibold m-10 w-full text-center'>Form for test details sheet Upload</h1>
            </div>
            <form className="flex justify-center" >
                <div className="space-y-8 ml-36">
                    <div className=" border-gray-900/10 ">
                        
                        <div className="m-5 col-span-full flex items-center ">
                            <label className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-20" >Module Name</label>
                            <div className=" pl-2">
                                <input
                                    type="text"
                                    id="name" 
                                    placeholder="Enter Module Name"
                                    class="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                                />
                            </div>
                        </div>
                        <div className="m-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4 flex items-center ">
                            <label className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-44" >Date</label>
                                <div className="mt-1">
                                    <input
                                        type="date"
                                        name="date"
                                        class="shadow appearance-none box bg-white rounded-md h-9 w-96 py-2 px-3 ring-1 input ring-inset ring-gray-400  rounded-mb focus:outline-none focus:border-[#0A1C3E]"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="m-5 col-span-full flex items-center ">
                            <label className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-28" >Total Marks</label>
                            <div className="mt-1">
                                <input
                                    type="number"
                                    name="marks"
                                    min="0"
                                    placeholder="Enter total Marks"
                                    class="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                                />
                            </div>
                        </div>
                
                        <div className="m-5 col-span-full flex items-center ">
                            <label className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-24" >Upload Sheet</label>
                            <div className="mt-2 w-96 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 p py-6">
                                <div className="text-center">
                                    <div className=" text-sm leading-6 text-gray-600 flex place-items-center">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                        <input 
                                            accept=".xlsx,.xls" 
                                            type="file"     
                                            className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                                        />
                                        </label>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">only .xlsx or .xls supported up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center ml-80 mt-10  ">
                        <button className="text-white bg-[#0A1C3E] hover:text-[#0A1C3E] border border-white hover:bg-white hover:border-[#0A1C3E] focus:ring-4 focus:outline-none focus:ring-[#0A1C3E]-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4 me-2 mb-10 dark:border-[#0A1C3E] dark:text-[#0A1C3E] dark:hover:text-white  dark:focus:ring-[#0A1C3E]" variant="primary" onClick="" type="submit" >Submit</button>
                    </div>
                </div>
            </form>
        </>
    );
    }
    
    export default BulkEntryModuleForm;