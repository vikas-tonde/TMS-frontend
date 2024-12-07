import React from "react";
import { object, string } from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = object().shape({
    firstName: string().required('First Name is required'),
    lastName: string().required('Last Name is required'),
    email: string().email('Invalid email').required('Email is required'),
    employeeId: string().required('Employee ID is required'),
    role: string().required('Role is required'),
    location: string().required('Location is required'),
    password: string().required('Password is required'),
  });

const Form = () => {

      const submitHandler = async (values, actions) => {
         try {
            console.log("Form submitted");
            console.log(
                "\n First Name :" + values.firstName +
                "\n Last Name :" + values.lastName +
                "\n Email ID :" + values.email +
                "\n Employee ID :" + values.employeeId +
                "\n Role :" + values.role +
                "\n Location :" + values.location
            );
            
            toast.success('Form submitted successfully!');

            values.firstName= '';
            values.lastName = '';
            values.email = '';
            values.employeeId = '';
            values.role = '';
            values.location = '';
            values.password = '';

      
            const response = await axios.post('your_api_endpoint_here', 
            {
              firstName:values.firstName,
              lastName:values.lastName,
              email:values.email,
              employeeId:values.employeeId,
              role:values.role,
              location:values.location
            });
            console.log("Response:", response.data);
            actions.setSubmitting(false);

        } catch (error) {
            console.error("Error:", error);
            actions.setSubmitting(false);
        }
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
        },
        validationSchema: validationSchema,
        onSubmit: submitHandler
      });
    
  return (
    <>
          <div className="flex justify-center items-center w-full">
              <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                  <div className="w-full px-3 ">
                  <label htmlFor="firstName" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-5">First Name</label>
                    <input
                    value={values.firstName}
                    type="text"
                    id="firstName"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3"
                    placeholder="Enter First Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    {errors.firstName && touched.firstName && <p className="text-[#dc2626] mb-2">{errors.firstName}</p>}
                  </div>
                  <div className="w-full px-3">
                    <label htmlFor="lastName" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-5">Last Name</label>
                    <input
                    value={values.lastName}
                    type="text"
                    id="lastName"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3"
                    placeholder="Enter Last Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    {errors.lastName && touched.lastName && <p className="text-[#dc2626] mb-2">{errors.lastName}</p>}
                  </div>
                  <div className="w-full px-3">
                  <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-5">Email ID</label>
                    <input
                    value={values.email}
                    type="text"
                    id="email"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3"
                    placeholder="Enter Email ID"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    {errors.email && touched.email && <p className="text-[#dc2626] mb-2">{errors.email}</p>}
                  </div>
                  <div className="w-full px-3">
                    <label htmlFor="employeeId" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-5">EmployeeId ID</label>
                    <input
                    value={values.employeeId}
                    type="text"
                    id="employeeId"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3"
                    placeholder="Enter Employee ID"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    {errors.employeeId && touched.employeeId && <p className="text-[#dc2626] mb-2">{errors.employeeId}</p>}
                  </div>
                  <div className="w-full px-3">
                    <label htmlFor="role" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-5">Role</label>
                    <input
                    value={values.role}
                    type="text"
                    id="role"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3"
                    placeholder="Enter Role"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    {errors.role && touched.role && <p className="text-[#dc2626] mb-2">{errors.role}</p>}
                  </div>
                  <div className="w-full px-3">
                    <label htmlFor="location" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-5">Location</label>
                    <input
                    value={values.location}
                    type="text"
                    id="location"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3"
                    placeholder="Enter location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    {errors.location && touched.location && <p className="text-[#dc2626] mb-2">{errors.location}</p>}
                  </div>
                  <div className="w-full px-3">
                    <label htmlFor="password" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-5">Password</label>
                    <input
                    value={values.password}
                    type="text"
                    id="password"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3"
                    placeholder="Enter Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    {errors.password && touched.password && <p className="text-[#dc2626] mb-2">{errors.password}</p>}
                  </div>
                  <div className="w-full px-3">
                      <button className="block w-full px-12 py-3 bg-[#0A1C3E] text-xl text-white font-semibold drop-shadow-lg rounded-full items-center justify-center" type='submit' >
                          Submit
                      </button>
                  </div>
              </form>
          </div>
          <ToastContainer/>
       </>
       );
};


export default Form;