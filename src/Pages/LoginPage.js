import React from 'react'
import { object, string } from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

let loginSchema = object().shape({
  employeeId: string().required("Employee Id is required"),
  password: string().required("Password is required")
});

const Login = () => {
  const navigate = useNavigate();

  const submitHandler = async (values, actions) => {
    const response = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });
    const { data } = await response.json();
    actions.resetForm();
    if (data?.user === null || data?.user === undefined) {
      
      navigate('/dashboard');
    } else {
      
      navigate('/dashboard');
    }
  };

  const { handleChange, handleBlur, values, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      employeeId: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: submitHandler
  });

  return (
    <>
      <div className="flex flex-col justify-end items-center top-2 right-2 mx-60">
        <h1 className="text-center text-5xl text-blue font-bold drop-shadow-lg">Login</h1>
        <div className="w-80 my-7">
          <form onSubmit={handleSubmit} autoComplete="off" >
            <label htmlFor="employeeId" className="block mb-2">Employee ID</label>
            <input
              value={values.employeeId}
              type="text"
              id="employeeId"
              className="w-full px-4 py-3 mb-4 placeholder-blue-300 border rounded-lg bg-transparent placeholder-opacity-10"
              placeholder="Enter your employee id"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.employeeId && touched.employeeId && <p className="text-[#dc2626] mb-2">{errors.employeeId}</p>}
            <label htmlFor="password" className="block mb-2">Password</label>
            <div className="relative">
              <input
                value={values.password}
                type="password"
                id="password"
                className="w-full px-4 py-3 mb-4 border rounded-lg bg-transparent placeholder-black-500 placeholder-opacity-50"
                placeholder="Enter your password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && <p className="text-[#dc2626]">{errors.password}</p>}
            </div>
            <button type='submit' className="w-full mt-8 px-12 py-3 bg-blue text-xl text-white font-semibold drop-shadow-lg rounded-full hover:bg-blue-600">
              Login
            </button>
            <div className="mt-4 text-center">
              <a href="/" className="text-blue-500 hover:underline">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
