import React from "react";
import StatisticsTabsMenu from "./StatisticsTabsMenu";

const Dashboard = () => {
  return (
    <>
      <div className="flex-1">
        <h1 className="py-4">This is dashboard</h1>
        <StatisticsTabsMenu />
      </div>
    </>
  );
};

export default Dashboard;
