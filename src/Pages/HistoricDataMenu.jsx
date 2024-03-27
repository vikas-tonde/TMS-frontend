import React, { useState } from "react";
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { Tabs, Tab } from '../Components/Tabs';
import Statistics from "./Statistics";
import LineGraph from "../Components/LineGraph";
import Table from "../Components/Table";

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
      { srno: 1, empId: 'T50477', name: "Rishi Rathod" , avgMarks : 12 },
      { srno: 2, empId: 'T50498', name: "Vikas Tonde " , avgMarks : 11 },
      { srno: 3, empId: 'T50481', name: "Rutika Vale" , avgMarks : 10 },
      { srno: 4, empId: 'T50482', name: "Shivkanya Doiphode" , avgMarks : 19 },
      { srno: 5, empId: 'T50494', name: "Trupti Panhale" , avgMarks : 25 },
  ] 

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
                            <Table/>
                        </div>
                        <div className='pt-16 '>
                            <LineGraph/>
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