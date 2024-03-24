import React, { useEffect } from "react";
import { useState } from "react";
import api from "../authService/api";
import Table from "../Components/Table";
import HistoricDataMenu from "./HistoricDataMenu";

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
      <div className="flex-1 min-w-fit">
        <h1>This is dashboard</h1>
        {/* <Table/> */}
        <HistoricDataMenu></HistoricDataMenu>
      </div>
    </>
  );
};

export default Dashboard;
