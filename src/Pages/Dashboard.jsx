import React, { useEffect } from "react";
import { useState } from "react";
import api from "../authService/api";
import Table from "../Components/Table";
import HistoricDataMenu from "./HistoricDataMenu";
import StatisticsTabsMenu from "./StatisticsTabsMenu";

const Dashboard = () => {
  //let [users, setUsers] = useState([]);
  // useEffect(() => {
  //   ; (async () => {
  //     let { data } = await api.get(`/api/users`);
  //     setUsers(data.data);
  //   })();
  // },[]);
  // console.log(users);

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
