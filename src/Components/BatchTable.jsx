import { useState } from "react";
import { Link } from "react-router-dom";
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";

const Table = () => {

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("", {
      id: "srno",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "Sr.No.",
    }),
    columnHelper.accessor("batchName", {
      cell: (info)  => <span>{info.getValue()}</span>,
      header: "Batch Name",
    }),
    columnHelper.accessor("currentTraining", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Current Training",
    }),
    columnHelper.accessor("trainees", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Trainees",
    }),
    columnHelper.accessor("assessments", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Assessments",
    }),
    columnHelper.accessor("", {
      id: "edit",
      cell: (info) => {
        const batchName = info.row.original.batchName;
        const slug = batchName.replace(/ /g, "-"); // Generating slug from batchName
        return <Link to={`/batch/${slug}`}>Edit</Link>;
      },
      header: "",
    }),
  ];

  const [data] = useState([
    { srno: 1, batchName: "Fresher's Batch 1", currentTraining: "AWC", trainees: 27, assessments: 12 },
    { srno: 2, batchName: "Fresher's Batch 2", currentTraining: "Teamcenter", trainees: 10, assessments: 11 },
    { srno: 3, batchName: "Fresher's Batch 3", currentTraining: "ITK", trainees: 10, assessments: 11 },
    { srno: 5, batchName: "Referral's Batch 1", currentTraining: "BMIDE", trainees: 12, assessments: 10 },
    { srno: 6, batchName: "Referral's Batch 2", currentTraining: "ITK", trainees: 12, assessments: 10 },
    { srno: 7, batchName: "Referral's Batch 3", currentTraining: "ITK", trainees: 12, assessments: 10 },
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

  return (
    <>
      <div className="mx-auto max-w-full md:p-3 2xl:p-6">
        <div className="" x-data="{ search: '' }">
          <div className="mb-2 w-50 flex rounded-md">
            <svg className="w-5 h-8 pl-1 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <input
              type="search"
              onChange={(e) => { setSearch(e.target.value) }}
              className="h-8 px-4 py-1 w-1/3 text-gray-800 focus:outline-none"
              placeholder="Search Trainee by Id / Name"
              x-model="search" />
          </div>
        </div>

        <table className="shadow-sm p-6 h-max w-full text-left mb-5 border-spacing-0" id="table-to-xls">
          <thead className="bg-[#0A1C3E] text-white p-3 ">
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
            {data.length ? (
              data.filter((item) => {
                return search.toLowerCase() === '' ? item : item.batchName.toLowerCase().includes(search)
              }).map((row, i) => (
                <tr
                  key={row.srno}
                  className={`
                  ${i % 2 === 0 ? "bg-white" : "bg-white"} border-b border-gray-300 h-16 hover:bg-neutral-200 
                  `}
                >
                  {Object.entries(row).map(([key, value]) => (
                    <td key={key} className="px-4 py-2 ">
                      {value}
                    </td>
                  ))}
                  <td key="edit" className="px-4 py-2">
                    <Link to={`/batch/${row.batchName.replace(/ /g, "-")}`}>
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

export default Table;
