import { useFormik } from 'formik';
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import { number, object, string } from 'yup';
import api from "../services/api";

const examFormSchema = object().shape({
	batch: string().required("Batch is required"),
	assessmentType: string().required("assessment type is required"),
	assessmentId: string().required("assessment name is required"),
	obtainedMarks: number().required("Obtained marks is required"),
	employeeId: string().required("employee id is required"),
});

const TraineeExamData = () => {
	let batches = useLoaderData();
	const [trainees, setTrainees] = useState([]);
	const [assessments, setAssessments] = useState([]);
	const submitHandler = async (values, actions) => {
		try {
			let reqBody = {
				assessmentId: values.assessmentId,
				employeeId: values.employeeId,
				obtainedMarks: values.obtainedMarks
			};
			let response = await api.post("/api/admin/single/assessment", reqBody);
			console.log(response.data.message);
			toast.success(response.data.message);
		} catch (error) {
			toast.error('Something went wrong while adding User please check all fields carefully...!');
			console.log(error.response.data.message);
		}
		actions.resetForm();
	};

	const { handleChange, handleBlur, values, handleSubmit, errors, touched } = useFormik({
		initialValues: {
			batch: '',
			assessmentType: '',
			assessmentId: '',
			obtainedMarks: 0,
			employeeId: '',
		},
		validationSchema: examFormSchema,
		onSubmit: submitHandler
	});

	useEffect(() => {
		; (async () => {
			if (values.batch) {
				try {
					let response = await api.get(`/api/admin/trainees/info/${values.batch}`);
					setTrainees(response.data.data);
				} catch (error) {
					setTrainees([]);
				}
			}
		})();

	}, [values.batch]);

	useEffect(() => {
		; (async () => {
			if (values.assessmentType) {
				try {
					let response = await api.get(`/api/admin/assessments/${values.batch}/${values.assessmentType}`);
					setAssessments(response.data.data);
				} catch (error) {
					setAssessments([]);
				}
			}
		})();
	}, [values.assessmentType])


	return (
		<>
			<div className="flex items-center justify-items-center">
				<h1 className='text-4xl font-semibold m-2 w-full text-center'>Add Trainee Exam Data for Single User</h1>
			</div>
			<div className="w-full flex justify-center m-5">
				<form className="w-full flex justify-center" onSubmit={handleSubmit}>
					<div className="flex-col">
						<div className="m-10 col-span-full flex w items-center ">
							<label
								htmlFor="batch"
								className="block text-xl font-medium  text-gray-900 mr-2"
							>
								Select batch
							</label>
							<div className="mt-4 pl-10">
								<select
									id="batch"
									name="batch"
									autoComplete="off"
									value={values.batch}
									onChange={handleChange}
									onBlur={handleBlur}
									className="block w-96 h-9 rounded-md border-0 py-1.5 text-gray-800 shadow-xl ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:text-gray-800 mr-2 sm:max-w-xs sm:text-sm sm:leading-6"
								>
									<option value="" selected disabled>Select the batch</option>
									{batches.map(batch => {
										return <option key={batch._id} value={batch._id}>{batch.batchName}</option>;
									})}
								</select>
							</div>
						</div>
						<div className="m-10 col-span-full flex w items-center ">
							<label
								htmlFor="employeeId"
								className="block text-xl font-medium text-gray-900 mr-2"
							>
								Employee Id
							</label>
							<div className="mt-4 pl-10 flex-grow">
								<select
									id="employeeId"
									name="employeeId"
									value={values.employeeId}
									onChange={handleChange}
									onBlur={handleBlur}
									autoComplete="off"
									className="block w-96 h-9 rounded-md border-0 py-1.5 text-gray-800 shadow-xl ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset  focus:text-gray-800 mr-2 sm:max-w-xs sm:text-sm sm:leading-6"
								>
									<option value="" selected disabled>Select the employee Id</option>
									{trainees.length && trainees.map(trainee => {
										return <option key={trainee._id} value={trainee.employeeId}>({trainee.employeeId}) {trainee.firstName + " " + trainee.lastName} </option>
									})}
								</select>
							</div>
						</div>

						<div className="m-10 col-span-full flex w items-center ">
							<label
								htmlFor="assessmentType"
								className="block text-xl font-medium  text-gray-900 mr-2"
							>
								Assessment Type
							</label>
							<div className="mt-4 pl-10">
								<select
									id="assessmentType"
									name="assessmentType"
									value={values.assessmentType}
									onChange={handleChange}
									onBlur={handleBlur}
									autoComplete="off"
									className="block w-96 h-9 rounded-md border-0 py-1.5 text-gray-800 shadow-xl ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset  focus:text-gray-800 mr-2 sm:max-w-xs sm:text-sm sm:leading-6"
								>
									<option value="" disabled selected>Choose an Assessment Type</option>
									<option value="Quiz">Quiz</option>
									<option value="Assignment">Assignment</option>
									<option value="Presentation">Presentation</option>
								</select>
							</div>
						</div>
						<div className="m-10 col-span-full flex flex-row w items-center">
							<label
								htmlFor="assessmentId"
								className="block text-xl font-medium leading-6 text-gray-900 mr-2"
							>
								Assessment Name
							</label>
							<div className="pl-6 mt-2 flex-grow ">
								<select
									id="assessmentId"
									name="assessmentId"
									value={values.assessmentId}
									onChange={handleChange}
									onBlur={handleBlur}
									autoComplete="off"
									className="block w-96 h-9 rounded-md border-0 py-1.5 text-gray-800 shadow-xl ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset  focus:text-gray-800 mr-2 sm:max-w-xs sm:text-sm sm:leading-6"
								>
									<option value="" disabled selected>Choose an Assessment</option>
									{assessments.length && assessments.map(assessment => {
										return <option key={assessment._id} value={assessment._id}>
											{assessment.moduleName} - {assessment.assessmentName}
										</option>
									})}
								</select>
							</div>
						</div>
						<div className="m-10 col-span-full flex flex-row w items-center">
							<label
								htmlFor="obtainedMarks"
								className="block text-xl font-medium leading-6 text-gray-900 mr-2"
							>
								Obtained Marks
							</label>
							<div className="pl-2 mt-2 flex-grow">
								<input
									type="number"
									id="obtainedMarks"
									name="obtainedMarks"
									value={values.obtainedMarks}
									onChange={handleChange}
									onBlur={handleBlur}
									autoComplete="off"
									className="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
								/>
							</div>
						</div>
						<div className="flex items-center justify-center">
							<button className="px-12 py-3 bg-[#0A1C3E] text-xl text-white font-semibold drop-shadow-lg rounded-full items-center justify-center" type='submit'>
								Submit
							</button>
						</div>
					</div>
				</form>
				<p>
					{JSON.stringify(errors)}
				</p>
				<ToastContainer />
			</div>
		</>
	);
}

export default TraineeExamData;