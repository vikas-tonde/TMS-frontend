import React from "react";
import { Tabs, Tab } from './../Components/Tabs';
import Statistics from "./Statistics";

const HistoricDataMenu = () => {
 
  return (
    <>
  <div className="bg-white shadow-lg rounded-lg p-6 w-full">
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
    </div>
       </>
       );
};


export default HistoricDataMenu;