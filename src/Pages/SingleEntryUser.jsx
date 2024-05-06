import { useFormik } from 'formik';
import React from "react";
import { useLoaderData } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { object, string } from 'yup';
import api from "../services/api";

const validationSchema = object().shape({
  firstName: string().required('First Name is required'),
  lastName: string().required('Last Name is required'),
  email: string().email('Invalid email').required('Email is required'),
  employeeId: string().required('Employee ID is required'),
  role: string().required('Role is required'),
  location: string().required('Location is required'),
  batch: string().required("batch is required"),
  password: string().required('Password is required'),
});

const SingleEntryUser = () => {
  let batches = useLoaderData();

  const submitHandler = async (values, actions) => {
    try {
      console.log(values);
      values.batchId = values.batch;
      const response = await api.post('/api/admin/single/users', values);
      console.log(response.data);
      toast.success('User added...!');
      console.log("Form submitted");
    } catch (error) {
      toast.error('Something went wrong while adding User please check all fields carefully...!');
      console.log(error.response);
    }
    actions.resetForm();
  };

  const { handleChange, handleBlur, values, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      employeeId: '',
      role: '',
      location: '',
      password: '',
      batch: '',
    },
    validationSchema: validationSchema,
    onSubmit: submitHandler
  });

  return (
    <>
      <div className="flex items-center justify-items-center mb-5">
        <h1 className='text-4xl font-semibold m-3 w-full text-center'>Add Single Entry of User</h1>
      </div>
      <div className="flex justify-center items-center w-full">
        <form className="flex justify-center" onSubmit={handleSubmit} >
          <div className="items-center">
            <div className=" border-gray-900/10 ">
              <div className="m-5 col-span-full flex items-center justify-between">
                <label htmlFor="firstName" className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-28" >Enter First Name</label>
                <div className=" pl-2">
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Enter First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                  />
                  {errors.firstName && touched.firstName && <p className="text-[#dc2626]">{errors.firstName}</p>}
                </div>
              </div>

              <div className="m-5 col-span-full flex items-center justify-between">
                <label htmlFor="lastName" className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-28" >Enter Last Name</label>
                <div className=" pl-2">
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                  />
                  {errors.lastName && touched.lastName && <p className="text-[#dc2626] mb-2">{errors.lastName}</p>}
                </div>
              </div>

              <div className="m-5 col-span-full flex items-center justify-between">
                <label htmlFor="email" className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-28" >Enter Email ID</label>
                <div className=" pl-2">
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter Email ID"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                  />
                  {errors.email && touched.email && <p className="text-[#dc2626] mb-2">{errors.email}</p>}
                </div>
              </div>

              <div className="m-5 col-span-full flex items-center justify-between">
                <label htmlFor="employeeId" className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-28" >Enter Employee ID</label>
                <div className=" pl-2">
                  <input
                    type="text"
                    id="employeeId"
                    placeholder="Enter Employee ID"
                    value={values.employeeId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                  />
                  {errors.employeeId && touched.employeeId && <p className="text-[#dc2626] mb-2">{errors.employeeId}</p>}
                </div>
              </div>

              <div className="m-5 col-span-full flex items-center justify-between">
                <label htmlFor="role" className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-28" >Enter Role</label>
                <div className=" pl-2">
                  <input
                    type="text"
                    id="role"
                    placeholder="Enter Role"
                    value={values.role}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                  />
                  {errors.role && touched.role && <p className="text-[#dc2626] mb-2">{errors.role}</p>}
                </div>
              </div>

              <div className="m-5 col-span-full flex items-center justify-between">
                <label htmlFor="location" className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-28" >Enter Location</label>
                <div className=" pl-2">
                  <input
                    type="text"
                    id="location"
                    placeholder="Enter Location"
                    value={values.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                  />
                  {errors.location && touched.location && <p className="text-[#dc2626] mb-2">{errors.location}</p>}
                </div>
              </div>

              <div className="m-5 col-span-full flex items-center justify-between">
                <label htmlFor="batch" className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-28" >Select Batch</label>
                <div className=" pl-2">
                  <select
                    id="batch"
                    name="batch"
                    autoComplete="off"
                    value={values.batch}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-96 h-9 py-2 px-3 bg-white rounded-md border-0 text-gray-800 ring-1 ring-inset ring-gray-400 "
                  >
                    <option value="" selected disabled>Select the batch</option>
                    {batches.map(batch => {
                      return <option key={batch._id} value={batch._id}>{batch.batchName}</option>;
                    })}
                  </select>
                  {errors.batch && touched.batch && <p className="text-[#dc2626] mb-2">{errors.batch}</p>}
                </div>
              </div>

              <div className="m-5 col-span-full flex items-center justify-between">
                <label htmlFor="password" className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-28" >Enter Password</label>
                <div className=" pl-2">
                  <input
                    type='password'
                    id="password"
                    placeholder="Enter Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                  />

                  {errors.password && touched.password && <p className="text-[#dc2626] mb-2">{errors.password}</p>}
                </div>
              </div>

            </div>
            <div className="flex items-center ml-80 mt-10 justify-between">
              <button className="text-white bg-[#0A1C3E] hover:text-[#0A1C3E] border border-white hover:bg-white hover:border-[#0A1C3E] focus:ring-4 focus:outline-none focus:ring-[#0A1C3E]-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4 me-2 mb-10" variant="primary" type="submit" >Submit</button>
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};


export default SingleEntryUser;