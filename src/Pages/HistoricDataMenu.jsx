import React, { useState } from "react";
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import ReactApexChart from "react-apexcharts";
import { Tabs, Tab } from '../Components/Tabs';
import Statistics from "./Statistics";

const HistoricDataMenu = () => {
  
  //Table
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
  const [data] = useState(() => []);
  const [globalFilter, setGlobalFilter] = useState("");
  
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
      { srno: 1, empId: 'T50477', name: "Rishi Rathod" , avgMarks : 12 },
      { srno: 2, empId: 'T50498', name: "Vikas Tonde " , avgMarks : 11 },
      { srno: 3, empId: 'T50481', name: "Rutika Vale" , avgMarks : 10 },
      { srno: 4, empId: 'T50482', name: "Shivkanya Doiphode" , avgMarks : 19 },
      { srno: 5, empId: 'T50494', name: "Trupti Panhale" , avgMarks : 25 },
  ] 


  // Line Bar 
  const module = ['Teamcenter', 'Teamcenter Function', 'BMIDE', 'ITK', 'ITK Function', 'RAC', 'AWC','AWC Functional'];
  const marks = [15, 10, 8, 5, 11, 12, 19, 16]; // Sample marks obtained for each subject
  const maxMarks = 20; // Assuming maximum marks for each subject is 100

  // Calculate percentages for each subject
  const percentages = marks.map(mark => Math.round((mark / maxMarks) * 100 * 10) / 10);

  const series = [
  {
      name: 'Marks Percentage',
      data: percentages
  }
  ];
  
  const options = {
      chart: {
          height: 250,
          type: 'line',
          zoom:{
          enabled:false
          }
      },
      plotOptions: {
          bar: {
          horizontal: true,
          columnWidth: '55%',
          endingShape: 'rounded',
          dataLabels : {
              position: 'top',
          }
          },
      },
      dataLabels: {
          enabled: true
      },
      xaxis: {
          categories: module,
      },
      yaxis: {
          title: {
          text: 'Percentage of Marks Obtained'
          }
      },
      fill: {
          opacity: 1
      },
  };

  return (
    <>
    <div className="flex-1 bg-white shadow-lg rounded-lg p-6 max-w-full">
      <Tabs>
        <Tab label="Pune" >
            <Statistics/>
        </Tab>
        <Tab label="Chennai">
            <Statistics/>
        </Tab>
        <Tab label="Bangalore">
            <Statistics/>
        </Tab>
        <Tab label="Germany">
            <Statistics/>
        </Tab>
      </Tabs>
      <div>
      <div className="flex flex-col m-10">
                <div className="overflow-x-hidden sm:-mx-6 lg:-mx-8">
                    <h1 className="text-center text-3xl font-semibold text-black my-10">Historical Data</h1>
                    <div className="flex justify-around w-full  ">
                        <div className="overflow-hidden  ">
                            <div className=" mx-auto max-w-full p-3 md:p-6 2xl:p-10 ">
                                <div class="" x-data="{ search: '' }">
                                    <div class=" mb-2 w-50 flex rounded-md">
                                        <svg class="w-5 h-8 pl-1 text-gray-500 dark:text-gray-400 bg-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                        <input
                                            type="search"
                                            onChange={(e) => { setsearch(e.target.value) }}
                                            class=" h-8 px-4 py-1 w-1/3 text-gray-800  focus:outline-none "
                                            placeholder="Search Trainee by Id / Name"
                                            x-model="search" />
                                    </div>
                                </div>

                                <table className="flex-grow shadow-sm p-6 h-max w-full text-left mb-5 border-spacing-0 rounded-lg" id="table-to-xls">
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
                                                  className={` ${i % 2 === 0 ? "bg-white" : "bg-white"} border-b border-gray-300 h-16 hover:bg-neutral-200 `}
                                                >
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
                                {/* Pagination */}
                                <div className="flex items-center justify-end mt-2 gap-2">
                                    <button
                                        onClick={() => { table.previousPage() }}
                                        disabled={!table.getCanPreviousPage()}
                                        className="p-1 border-2 border-black disabled:opacity-30 px-2">{"<"}
                                    </button>
                                    <button
                                        onClick={() => { table.nextPage() }}
                                        disabled={!table.getCanNextPage()}
                                        className="p-1 border-2 border-black disabled:opacity-30 px-2">{">"}
                                    </button>
                                    <span className="flex items-center gap-1">
                                        <div>Page </div>
                                        <strong>
                                            {table.getState().pagination.pageIndex + 1} of{" "} {table.getPageCount() + 1}
                                        </strong>
                                    </span>
                                    <span className="flex items-center gap-1">
                                        | Go to Page :
                                        <input
                                            type="number"
                                            className=" pl-2 w-10"
                                            defaultValue={table.getState().pagination.pageIndex + 1}
                                            onChange={(e) => {
                                                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                                table.setPageIndex(page);
                                            }}
                                        ></input>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='pt-16 '>
                            <ReactApexChart options={options} series={series} type="line" height={500} width={650} />
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  </>
);
};


export default HistoricDataMenu;