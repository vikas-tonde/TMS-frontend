import { useLoaderData } from "react-router";
import api from "../authService/api";
import SelectorForTestDetails from "./SelectorForTestDetails";
import { useEffect, useState } from "react";
import { object, string, number, mixed } from 'yup';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const examFormSchema = object().shape({
    quizName: string().required("Employee Id is required"),
    examDate: string().required("examDate is required"),
    assessmentType: string().required("assessmentType is required"),
    totalMarks: number().positive().required("Total marks is required"),
    examFile: mixed().required('required')
    // .test('fileFormat', 'Only excel files are allowed', value => {
    //     if (value) {
    //         console.log("Type:",value.size);
    //         const supportedFormats = ['xlsx', 'xls'];
    //         return supportedFormats.includes(value.type);
    //     }
    //     return true;
    // })
    // .test('fileSize', 'File size must be less than 3MB', value => {
    //     if (value) {
    //         return value.size <= 3145728;
    //     }
    //     return true;
    // })
});

function BulkEntryModuleForm() {
    let loaderModules = useLoaderData();
    const [modules, setModules] = useState([...loaderModules, "other"]);
    const [selectedModule, setselectedModule] = useState("");
    const [otherModule, setOtherModule] = useState("");
    const [otherModuleBlur, setOtherModuleBlur] = useState("");
    useEffect(() => {
        if (selectedModule == 'other') {
            setselectedModule(otherModule);
        }
        console.log("Selected Module: ", selectedModule);
    }, [otherModule]);

    const submitHandler = async (values, actions) => {
        let files = document.querySelector('#examFile');
        let formdata = new FormData();
        formdata.append('file', files.files[0]);
        formdata.append('moduleName', selectedModule);
        formdata.append('date', values.examDate);
        formdata.append('totalMarks', values.totalMarks);
        formdata.append('quizName', values.quizName);
        formdata.append('assessmentType', values.assessmentType);
        try {
            let response = await api.post("/api/admin/bulk/test", formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            toast.success('Assessments added...!');
            
        } catch (error) {
            toast.error('Something went wrong while adding assessment please check all fields carefully...!');
            console.log(error.response);
        }
        actions.resetForm();
    }

    const { handleChange, handleBlur, values, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            quizName: '',
            examDate: '',
            assessmentType: '',
            totalMarks: '',
            examFile: '',
        },
        validationSchema: examFormSchema,
        onSubmit: submitHandler
    });
    return (
        <>
            <div className="flex items-center justify-items-center mb-5">
                <h1 className='text-4xl font-semibold m-3 w-full text-center'>Form for test details sheet Upload</h1>
            </div>
            <form className="flex justify-center" onSubmit={handleSubmit} >
                <div className="space-y-8 ml-36">
                    <div className=" border-gray-900/10 ">
                        <div className="m-5 col-span-full flex items-center ">
                            <label className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-28" >Quiz Name</label>
                            <div className=" pl-2">
                                <input
                                    type="text"
                                    id="quizName"
                                    name="quizName"
                                    placeholder="Enter Quiz Name"
                                    value={values.quizName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                                />
                            </div>
                        </div>
                        <div className="m-5 col-span-full flex items-center ">
                            <label for="countries" className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-21">Select Assessment Type</label>
                            <div className=" pl-2">
                                <select className="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                                    id="assessmentType"
                                    name="assessmentType"
                                    value={values.assessmentType}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <option value="" disabled selected>Choose a Assessment Type</option>
                                    <option value="Quiz">Quiz</option>
                                    <option value="Assignment">Assignment</option>
                                    <option value="Presentation">Presentation</option>
                                </select>
                            </div>
                        </div>
                        <div className="m-5 col-span-full flex items-center ">
                            <label className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-20" >Module Name</label>
                            <div className="pl-2">
                                <SelectorForTestDetails modulesProps={modules} setSelected={setselectedModule} selected={selectedModule} />
                            </div>
                        </div>
                        {selectedModule === 'other' && <div className="m-5 col-span-full flex items-center ">
                            <label className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-7" >Other Module Name</label>
                            <div className=" ">
                                <input
                                    type="text"
                                    id="otherModule"
                                    name="otherModule"
                                    value={otherModuleBlur}
                                    onChange={(e) => setOtherModuleBlur(e.target.value)}
                                    onBlur={(e) => setOtherModule(e.target.value)}
                                    placeholder="Enter Module Name"
                                    className="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                                />
                            </div>
                        </div>}
                        <div className="m-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4 flex items-center ">
                                <label className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-44" >Date</label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="examDate"
                                        placeholder="Enter date in format mm-dd-yyyy"
                                        value={values.examDate}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="shadow appearance-none box bg-white rounded-md h-9 w-96 py-2 px-3 ring-1 input ring-inset ring-gray-400  rounded-mb focus:outline-none focus:border-[#0A1C3E]"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="m-5 col-span-full flex items-center ">
                            <label className="flex items-center justify-center text-gray-700 text-xl font-bold mt-1 mb-2 mr-28" >Total Marks</label>
                            <div className="mt-1">
                                <input
                                    type="number"
                                    name="totalMarks"
                                    min="0"
                                    value={values.totalMarks}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter total Marks"
                                    className="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                                />
                            </div>
                        </div>
                        <div className="m-5 col-span-full flex items-center ">
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
                                                name="examFile"
                                                id="examFile"
                                                value={values.examFile}
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
                    <div className="flex items-center ml-80 mt-10  ">
                        <button className="text-white bg-[#0A1C3E] hover:text-[#0A1C3E] border border-white hover:bg-white hover:border-[#0A1C3E] focus:ring-4 focus:outline-none focus:ring-[#0A1C3E]-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4 me-2 mb-10 dark:border-[#0A1C3E] dark:text-[#0A1C3E] dark:hover:text-white  dark:focus:ring-[#0A1C3E]" variant="primary" type="submit" >Submit</button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </>
    );
}

export default BulkEntryModuleForm;

export const getModules = async () => {
    try {
        console.log("Calling modules api");
        let response = await api.get("/api/admin/modules");
        return response.data.data;
    } catch (error) {
        return [];
    }
}