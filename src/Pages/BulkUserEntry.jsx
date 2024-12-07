import api from "../services/api";
import { object, string, mixed } from 'yup';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const bulkUserEntrySchema = object().shape({
  batchName: string().required("Batch Name is Required"),
  location: string().required("Location is required"),
  userDetailsFile: mixed().required('required')
});

function BulkEntryXlsx() 
{
  const submitHandler = async (values, actions) => {
    let files = document.querySelector('#userDetailsFile');
    let formdata = new FormData();
    formdata.append('file', files.files[0]);
    formdata.append('batchName', values.batchName);
    formdata.append('location', values.location);
    try {
        let response = await api.post("/api/admin/bulk/users", formdata, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        toast.success('Users added...!');
        
    } catch (error) {
        toast.error('Something went wrong while adding Users please check all fields carefully...!');
        console.log(error.response);
    }
    actions.resetForm();
}

  const { handleChange, handleBlur, values, handleSubmit, errors, touched } = useFormik({
    initialValues: {
        batchName: '',
        location: '',
        userDetailsFile: '',
    },
    validationSchema: bulkUserEntrySchema,
    onSubmit: submitHandler
});
  return (
    <>
      <div className="flex items-center justify-items-center mb-5">
        <h1 className='text-4xl font-semibold m-3 w-full text-center'>Bulk Entry of Trainee using xlsx</h1>
      </div>
      <div className="flex justify-center items-center w-full">
        <form className="flex justify-center" onSubmit={handleSubmit} >
          <div className="items-center">
            <div className=" border-gray-900/10 ">
              <div className="m-5 col-span-full flex items-center ">
                <label className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-28" >Batch Name</label>
                <div className=" pl-2">
                  <input
                    type="text"
                    id="batchName"
                    name="batchName"
                    placeholder="Enter Batch Name"
                    value={values.batchName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                  />
                </div>
              </div>

              <div className="m-5 col-span-full flex items-center justify-between">
                <label className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-28" >Location</label>
                <div className=" pl-2">
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Enter Location"
                    value={values.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                  />
                </div>
              </div>

              <div className="m-5 col-span-full flex items-center justify-between">
                <label className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-24" >Upload Sheet</label>
                <div className="mt-2 w-96 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 p py-6">
                  <div className="text-center">
                    <div className=" text-sm leading-6 text-gray-600 flex place-items-center">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <input
                          accept=".xlsx,.xls"
                          type="file"
                          name="userDetailsFile"
                          id="userDetailsFile"
                          value={values.userDetailsFile}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                        />
                      </label>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">only .xlsx or .xls supported up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center ml-80 mt-10 ">
              <button className="text-white bg-[#0A1C3E] hover:text-[#0A1C3E] border border-white hover:bg-white hover:border-[#0A1C3E] focus:ring-4 focus:outline-none focus:ring-[#0A1C3E]-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4 me-2 mb-10 dark:border-[#0A1C3E] dark:text-[#0A1C3E] dark:hover:text-white  dark:focus:ring-[#0A1C3E]" variant="primary" type="submit" >Submit</button>
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default BulkEntryXlsx;
