import React, { useEffect } from "react";
import { useState } from "react";
import api from "../authService/api";
// axios.defaults.proxy.port ="5000";
const Dashboard = () => {
  let [users, setUsers] = useState([]);
  // useEffect(() => {
  //   ; (async () => {
  //     let { data } = await api.get(`/api/users`);
  //     setUsers(data.data);
  //   })();
  // },[]);
  // console.log(users);

  return (
    <>
      <div className="title"> Dashboard</div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-white border-b">
                  <tr>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      id
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      First
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Last
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {users && users.map((user) => {
                    return (
                      <tr id={user._id} class="bg-gray-100 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user._id}</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.firstName}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.lastName}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.email}
                        </td>
                      </tr>
                    );
                  })} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
