import Table from "../Components/Table";
import axios from "axios";
import { useEffect,useState } from "react";
import api from "../authService/api";
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";


const TraineeInfo = () => {
    // useEffect(() => {
    //     axios.get('/api/admin/trainees/Pune/')
    //     .then(res=>console.log(res))
    //     .catch(res=>console.log("Error Occuered during fetching"));
    // },[])
    useEffect(async() => {
        try {
            let response = await api.get('api/admin//batches')
            console.log(response.data.data[0].trainees);
        } catch (error) {
            console.log("Error Occuered during fetching")
        }
    },[])

    const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("", {
      id: "srno",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "Sr.No.",
    }),
    columnHelper.accessor("moduleName", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Module Name",
    }),
    columnHelper.accessor("avgMarks", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: " Average Marks ",
    }),
  ];

  const [globalFilter] = useState("");

  const [search, setsearch] = useState("");

  const data2 = [
    { srno: 1, moduleName: 'BMIDE', avgMarks: 12 },
    { srno: 2, moduleName: 'ITK', avgMarks: 11 },
    { srno: 3, moduleName: 'Teamcenter Functional',  avgMarks: 10 },
    { srno: 4, moduleName: 'AWC Configuration', avgMarks: 19 },
    { srno: 5, moduleName: 'AWC Customization',  avgMarks: 25 },
  ]
  const table = useReactTable({
    data2,
    columns,
    state: {
      globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

    return (
    <>
        <div className=" mx-auto max-w-full md:p-3 2xl:p-6">
            <h1 className="text-2xl font-semibold text-center py-2 text-[#0A1C3E] dark:text-white border-b border-gray-200 dark:border-gray-700">Module Information of Trainee</h1>

            <form className="flex justify-center" >
                <div className="space-y-8 ml-36">
                    <div className=" border-gray-900/10 ">
                        
                        <div className="m-5 col-span-full flex items-center ">
                            <label className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-20" >Name of Trainee</label>
                            <div className=" pl-2">
                                <input
                                    type="text"
                                    id="name" 
                                    placeholder="Trainee Name"
                                    class="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="m-5 col-span-full flex items-center ">
                            <label className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-20" >Employee Id</label>
                            <div className=" pl-2">
                                <input
                                    type="text"
                                    id="name" 
                                    placeholder="Employee Id"
                                    class="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="m-5 col-span-full flex items-center ">
                            <label className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-28" >Average Marks</label>
                            <div className="mt-1">
                                <input
                                    type="number"
                                    name="marks"
                                    min="0"
                                    placeholder="Average Marks"
                                    class="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                                    disabled
                                />
                            </div>
                        </div>
                
                    </div>
                    <div className="flex items-center ml-80 mt-10  ">
                        <button className="text-white bg-[#0A1C3E] hover:text-[#0A1C3E] border border-white hover:bg-white hover:border-[#0A1C3E] focus:ring-4 focus:outline-none focus:ring-[#0A1C3E]-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4 me-2 mb-10 dark:border-[#0A1C3E] dark:text-[#0A1C3E] dark:hover:text-white  dark:focus:ring-[#0A1C3E]" variant="primary" onClick="" type="submit" >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </>
    )
}

export default TraineeInfo;
