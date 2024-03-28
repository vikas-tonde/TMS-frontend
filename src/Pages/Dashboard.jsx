import React from "react";
import StatisticsTabsMenu from "./StatisticsTabsMenu";

const Dashboard = () => {
  return (
    <>
      <div className="flex-1" >
      <h1 className="pt-5 pl-5 pr-10 font-extrabold text-3xl font-serif">Dashboard</h1>

        <StatisticsTabsMenu />
      </div>
    </>
  );
};

export default Dashboard;
