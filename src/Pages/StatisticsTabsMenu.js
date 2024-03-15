import React from "react";
import { Tabs, Tab } from './../Components/Tabs';
import Statistics from "./Statistics";
import Table from "./../Components/Table";

const StatisticsTabsMenu = () => {
 
  return (
    <>
  <div className="bg-white shadow-lg rounded-lg p-6 w-full">
      <Tabs>
        <Tab label="Pune" >
            <Statistics/>
            <Table/>
        </Tab>
        <Tab label="Chennai">
            <Statistics/>
            <Table/>
        </Tab>
        <Tab label="Bangalore">
            <Statistics/>
            <Table/>
        </Tab>
        <Tab label="Germany">
            <Statistics/>
            <Table/>
        </Tab>
      </Tabs>
    </div>
       </>
       );
};


export default StatisticsTabsMenu;