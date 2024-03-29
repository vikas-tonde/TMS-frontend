import { useState } from "react";
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { getBatches } from "./../services/loaderFunctions";
import BatchSelector from "./../Components/BatchSelector";

const Table = () => {

  const columnHelper = createColumnHelper();

  const columns = [

    columnHelper.accessor("", {
      id: "srno",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "Sr.No.",
    }),
    columnHelper.accessor("empId", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Employee ID",
    }),
    columnHelper.accessor("name", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: " Name",
    }),
    columnHelper.accessor("avgMarks", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Average Marks",
    }),
  ];
  const [data] = useState([
    { empId: 'T50477', name: "Rishi", avgMarks: 12 },
    { empId: 'T50477', name: "Rishi", avgMarks: 12 },
    { empId: 'T50498', name: "Vikas", avgMarks: 11 },
    { empId: 'T50481', name: "Rutika", avgMarks: 10 },
    { empId: 'T50482', name: "Shivkanya", avgMarks: 19 },
    { empId: 'T50494', name: "Trupti", avgMarks: 25 },
  ]);
  const [globalFilter] = useState("");

  const [search, setSearch] = useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const data2 = [
    { empId: 'T50477', name: "Rishi", avgMarks: 12 },
    { empId: 'T50498', name: "Vikas", avgMarks: 11 },
    { empId: 'T50481', name: "Rutika", avgMarks: 10 },
    { empId: 'T50482', name: "Shivkanya", avgMarks: 19 },
    { empId: 'T50494', name: "Trupti", avgMarks: 25 },
  ];

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

        < BatchSelector loader={getBatches} />

        <div className="flex justify-end">

          <button className="text-white bg-[#0A1C3E] hover:text-[#0A1C3E] border border-white hover:bg-white hover:border-[#0A1C3E] focus:ring-4 focus:outline-none focus:ring-[#0A1C3E]-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4 me-2 mb-10 dark:border-[#0A1C3E] dark:text-[#0A1C3E] dark:hover:text-white  dark:focus:ring-[#0A1C3E]">Deactivate</button>

          <button className="text-white bg-[#0A1C3E] hover:text-[#0A1C3E] border border-white hover:bg-white hover:border-[#0A1C3E] focus:ring-4 focus:outline-none focus:ring-[#0A1C3E]-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4 me-2 mb-10 dark:border-[#0A1C3E] dark:text-[#0A1C3E] dark:hover:text-white  dark:focus:ring-[#0A1C3E]">Activate</button>

          <button className="text-white bg-[#0A1C3E] hover:text-[#0A1C3E] border border-white hover:bg-white hover:border-[#0A1C3E] focus:ring-4 focus:outline-none focus:ring-[#0A1C3E]-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4 me-2 mb-10 dark:border-[#0A1C3E] dark:text-[#0A1C3E] dark:hover:text-white  dark:focus:ring-[#0A1C3E]">Check</button>

        </div>


        <table className="shadow-sm p-6 h-max w-full text-left mb-5 border-spacing-0" id="table-to-xls">
          <thead className="bg-[#0A1C3E] text-white p-3 h-16 ">
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
            {data2.length ? (
              data2.filter((item) => {
                return search.toLowerCase() === '' ? item : item.empId.toLowerCase().includes(search) || item.name.toLowerCase().includes(search)
              }).map((row, i) => (
                <tr
                  key={row.srno}
                  className={`
                  ${i % 2 === 0 ? "bg-white" : "bg-white"} border-b border-gray-300 h-16 hover:bg-neutral-200 
                  `}
                >
                  <td className="px-4 py-2">
                    <input
                      type="checkbox"
                      // Assuming row.srno is unique
                      value={row.srno}
                    // Add your checkbox handler function here
                    />
                  </td>
                  {Object.entries(row).map(([key, value]) => (
                    <td key={key} className="px-4 py-2 ">
                      {value}
                    </td>
                  ))}
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

export default Table;
