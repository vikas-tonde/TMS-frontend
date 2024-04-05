import { useState } from "react";
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";


const TraineeExamTable = () => {

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("", {
      id: "srno",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "Sr.No.",
    }),
    columnHelper.accessor("date", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Date",
    }),
    columnHelper.accessor("moduleName", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Module Name",
    }),
    columnHelper.accessor("name", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Exam Name",
    }),
    columnHelper.accessor("marks", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Marks",
    }),
  ];
  const [data] = useState([
       { id: 1, date: '29-02-2024', examName: "ITK" , marks : 12 },
       { id: 2, date: '29-02-2024', examName: "Teamcenter" , marks : 11 },
       { id: 3, date: '29-02-2024', examName: "RAC" , marks : 10 },
       { id: 4, date: '29-02-2024', examName: "BMIDE" , marks : 19 },
       { id: 5, date: '29-02-2024', examName: "AWC" , marks : -15 },
  ]);
  const [globalFilter] = useState("");

  const [search, setsearch] = useState("");

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
       { id: 1, date: '29-02-2024', examName: "ITK" , marks : 12 },
       { id: 2, date: '29-02-2024', examName: "Teamcenter" , marks : 11 },
       { id: 3, date: '29-02-2024', examName: "RAC" , marks : 10 },
       { id: 4, date: '29-02-2024', examName: "BMIDE" , marks : 19 },
       { id: 5, date: '29-02-2024', examName: "AWC" , marks : -15 },
  ]

  return (
    <>
      <div className=" mx-auto max-w-full md:p-3 2xl:p-6">
        <h1 className="text-2xl font-semibold text-center py-2 text-[#0A1C3E] dark:text-white border-b border-gray-200 dark:border-gray-700">Table of Exams</h1>

        <div className="" x-data="{ search: '' }">
          <div className=" mb-2 w-50 flex rounded-md">
            <svg className="w-5 h-8 pl-1 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <input
              
              type="search"
              onChange={(e) => { setsearch(e.target.value) }}
              className="h-8 px-4 py-1 w-1/3 text-gray-800 focus:outline-none"
              placeholder="Exam Name"
              x-model="search" />
          </div>
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
            {data.length > 0 ? (
            data.filter((item) => {
                return search.toLowerCase() === '' ? item : item && item.examName && item.examName.toLowerCase().includes(search.toLowerCase())
            }).map((row, i) => (
                <tr
                key={row.id}
                className={`
                    ${i % 2 === 0 ? "bg-white" : "bg-white"} border-b border-gray-300 h-16 hover:bg-neutral-200 
                `}
                >
                {Object.entries(row).map(([key, value]) => (
                    <td key={key} className="px-4 py-2">
                    {value}
                    </td>
                ))}
                </tr>
            ))
            ) : (
            <tr className="text-center h-32">
                <td colSpan={columns.length}>No Record Found!</td>
            </tr>
            )}

          </tbody>
        </table>
      </div>
    </>
  );
};


export default TraineeExamTable;
