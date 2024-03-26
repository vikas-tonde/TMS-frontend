import React from "react";
import { Tabs, Tab } from '../Components/Tabs';
import Statistics from "./Statistics";
import Table from "../Components/Table";

const StatisticsTabsMenu = () => {
 
  return (
  <>
     <div className="flex-1 p-8 h-auto">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-6xl mx-auto">
          <Tabs>
            <Tab label="Pune">
              <Statistics location="Pune" />
              <Table location="Pune" />
            </Tab>
            <Tab label="Chennai">
              <Statistics location="Chennai" />
              <Table location="Chennai" />
            </Tab>
            <Tab label="Bangalore">
              <Statistics location="Bangalore" />
              <Table location="Bangalore" />
            </Tab>
            <Tab label="Germany">
              <Statistics location="Germany" />
              <Table location="Germany" />
            </Tab>
          </Tabs>
        </div>
      </div>
  </>
);
};

export default StatisticsTabsMenu;