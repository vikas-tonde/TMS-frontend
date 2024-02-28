import React from 'react'
import { object, string} from 'yup';
import { useFormik } from 'formik';

let loginSchema = object().shape({
  employeeId: string().required("Employee Id is required"),
  password: string().required("Password is required")
});

let submitHandler =async (values, actions) => {
    console.log(values);
    console.log(actions);
    const response= await fetch("http://10.0.2.216:5000/api/users/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });
    let {data} = await response.json();
    console.log(data);
    actions.resetForm();
}


  const Login = () => {
    const { handleChange, handleBlur, values, handleSubmit, errors, touched } = useFormik({
      initialValues: {
        employeeId: '',
        password: ''
      },
      validationSchema : loginSchema,
      onSubmit: submitHandler
    });

    return (
      <>
        <div className="flex flex-col justify-end items-center top-2 right-2 mx-60">
          <h1 className="text-center text-5xl text-blue font-bold drop-shadow-lg">Login</h1>
          <div className="w-80 my-7">
            <form onSubmit={handleSubmit} autoComplete="off" >
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                value={values.employeeId}
                type="text"
                id="employeeId"
                className="w-full px-4 py-3 mb-4 placeholder-blue-300 border rounded-lg bg-transparent placeholder-opacity-10"
                placeholder="Enter your employee id"
                onChange={handleChange}
                onBlur={handleBlur}     
              />
              {errors.employeeId && touched.employeeId && <p>{errors.employeeId}</p>}
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
                {errors.password && touched.password && <p>{errors.password}</p>}
              </div>
              <button type='submit' className=" w-full mt-8 px-12 py-3 bg-blue text-xl text-white font-semibold drop-shadow-lg rounded-full hover:bg-blue-600">
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

  export default Login
