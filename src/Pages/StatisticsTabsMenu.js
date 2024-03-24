import React from "react";
import { Tabs, Tab } from './../Components/Tabs';
import Statistics from "./Statistics";
import Table from "./../Components/Table";

const StatisticsTabsMenu = () => {
 
  return (
  <>
     <div className="flex-1 p-8 h-auto">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-6xl mx-auto">
          <Tabs>
            <Tab label="Pune">
              <Statistics />
              <Table />
            </Tab>
            <Tab label="Chennai">
              <Statistics />
              <Table />
            </Tab>
            <Tab label="Bangalore">
              <Statistics />
              <Table />
            </Tab>
            <Tab label="Germany">
              <Statistics />
              <Table />
            </Tab>
          </Tabs>
        </div>
      </div>
  </>
);
};


export default StatisticsTabsMenu;