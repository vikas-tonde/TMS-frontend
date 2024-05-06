import { useState, useEffect } from "react";
import axios from "axios";
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router";
import api from "../services/api";

const TraineeTable = () => {
  const batches = useLoaderData();
  const [trainees, setTrainees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBatch, setSelectedBatch] = useState("");
  useEffect(() => {
    const fetchTrainees = async () => {
      try {
        console.log(selectedBatch);
        const response = await api.get(`/api/admin/trainees/info/${selectedBatch}`);
        console.log(response.data.data);
        setTrainees(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trainees:", error);
        setLoading(false);
      }
    };
    fetchTrainees();
  }, [selectedBatch]);

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("", {
      id: "srno",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "",
    }),
    columnHelper.accessor("empId", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Employee ID",
    }),
    columnHelper.accessor("name", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Name",
    }),
    columnHelper.accessor("email", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Email",
    }),
    columnHelper.accessor("", {
      id: "edit",
      cell: (info) => {
        const slug = info.row.original.employeeId;
        return <Link to={`/table/${slug}`}>Edit</Link>;
      },
      header: "",
    }),
  ];
  const [globalFilter] = useState("");

  const [search, setSearch] = useState("");

  const table = useReactTable({
    data: trainees,
    columns,
    state: {},
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <div className=" mx-auto max-w-full md:p-3 2xl:p-6">
        <h1 className="text-2xl font-semibold text-center py-2 text-[#0A1C3E] dark:text-white border-b border-gray-200 dark:border-gray-700">Table of Trainee</h1>

        <div className="" x-data="{ search: '' }">
          <div className=" mb-2 w-50 flex rounded-md">
            <svg className="w-5 h-8 pl-1 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <input
              type="search"
              onChange={(e) => { setSearch(e.target.value) }}
              className="h-8 px-4 py-1 w-1/3 text-gray-800 focus:outline-none"
              placeholder="Search Trainee by Id / Name"
              x-model="search" />
          </div>
        </div>

        <div className="m-10 col-span-full flex w items-center ">
          <label
            htmlFor="batch"
            className="block text-xl font-medium  text-gray-900 mr-2"
          >
            Select batch
          </label>
          <div className="mt-4 pl-10">
            <select
              id="batch"
              name="batch"
              autoComplete="off"
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="block w-96 h-9 rounded-md border-0 py-1.5 text-gray-800 shadow-xl ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset  focus:text-gray-800 mr-2 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option value="" selected disabled>Select the batch</option>
              {batches.map(batch => (
                <option key={batch._id} value={batch._id}>{batch.batchName}</option>
              ))}
            </select>
          </div>
        </div>



        <div className="flex justify-end">

          <button className="text-white bg-[#0A1C3E] hover:text-[#0A1C3E] border border-white hover:bg-white hover:border-[#0A1C3E] focus:ring-4 focus:outline-none focus:ring-[#0A1C3E]-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4 me-2 mb-10 dark:border-[#0A1C3E] dark:text-[#0A1C3E] dark:hover:text-white  dark:focus:ring-[#0A1C3E]">Deactivate</button>

          <button className="text-white bg-[#0A1C3E] hover:text-[#0A1C3E] border border-white hover:bg-white hover:border-[#0A1C3E] focus:ring-4 focus:outline-none focus:ring-[#0A1C3E]-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4 me-2 mb-10 dark:border-[#0A1C3E] dark:text-[#0A1C3E] dark:hover:text-white  dark:focus:ring-[#0A1C3E]">Activate</button>

          <button className="text-white bg-[#0A1C3E] hover:text-[#0A1C3E] border border-white hover:bg-white hover:border-[#0A1C3E] focus:ring-4 focus:outline-none focus:ring-[#0A1C3E]-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4 me-2 mb-10 dark:border-[#0A1C3E] dark:text-[#0A1C3E] dark:hover:text-white  dark:focus:ring-[#0A1C3E]">Check</button>

        </div>

        <table className="shadow-sm p-6 h-max w-full text-left mb-5 border-spacing-0" id="table-to-xls">
          <thead className="bg-blue text-white p-3 h-16 ">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="capitalize px-4 py-2 ">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {trainees?.length ? (
              trainees.map((row, i) => (
                <tr
                  key={row.i}
                  className={`
                  ${i % 2 === 0 ? "bg-white" : "bg-white"} border-b border-gray-300 h-16 hover:bg-neutral-200 
                  `}
                >
                  <td className="px-4 py-2 ">
                    <input
                      type="checkbox"
                      // Assuming row.srno is unique
                      value={row.srno}
                    // Add your checkbox handler function here
                    />
                    {row.srno}

                  </td>
                  <td className="px-4 py-2 ">
                    {row.employeeId}
                  </td>
                  <td className="px-4 py-2 ">
                    {row.firstName} {row.lastName}
                  </td>
                  <td className="px-4 py-2 ">
                    {row.email}
                  </td>
                  <td key="edit" className="px-4 py-2">
                    <Link to={`/table/${row.employeeId}`}>
                      <button className="bg-blue text-white font-bold py-2 px-4 rounded" >
                        Edit
                      </button>
                    </Link>
                  </td>

                </tr>
              ))
            ) : (
              <tr className="text-center h-32">
                <td colSpan={12}>No Record Found!</td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </>
  );
};

export default TraineeTable;
