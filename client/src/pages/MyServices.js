import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";

import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import Table from "../components/table/Table";
import Spinner from "../components/loading/Spinner";

import "../assets/css/Usercreate.css";

const MyServices = () => {
	const [error, setError] = useState("");
	const [options, setOptions] = useState([
		{ value: "chocolate", label: "Chocolate" },
		{ value: "strawberry", label: "Strawberry" },
		{ value: "vanilla", label: "Vanilla" },
	]);
	const [orderDetails, setOrderDetails] = useState({});
	const [selectedFoods, setSelectedFoods] = useState([]);
	const [btnState, setBtnState] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [employees, setEmployees] = useState(true);
	const [employeeDetails, setEmployeeDetails] = useState({
		name: "",
		email: "",
		username: "",
		position: "sitemanager",
		phone: "",
		weeklyWorkHrs: "",
		salary: "",
		site: "",
	});
	const fields = [
		"",
		"Employee Name",
		"Email",
		"Username",
		"Phone",
		"Weekly Work Hrs",
		"Salary",
	];

	const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

	const renderOrderBody = (item, index) => (
		<tr key={index}>
			<td>{index + 1}</td>
			<td>{item.name}</td>
			<td>{item.email}</td>
			<td>{item.username}</td>
			<td>{item.phone}</td>
			<td>{item.weeklyWorkHrs}</td>
			<td>{item.salary}</td>
		</tr>
	);

	const saveEmployeeDetails = async (e) => {
		e.preventDefault();
		let endpoint;

		e.preventDefault();
		const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
		setBtnState(true);

		for (let key of Object.keys(employeeDetails)) {
			if (!employeeDetails[key]) {
				setBtnState(false);
				return setError("Please fill all the fields");
			}
		}

		if (!employeeDetails.email.match(pattern)) {
			setBtnState(false);
			return setError("Please use valid email address");
		}

		if (employeeDetails.phone.length !== 10) {
			setBtnState(false);
			return setError("Please use valid phone number");
		}

		if (employeeDetails.site === "sitemanager") {
			endpoint = "sitemanagers";
		} else if (employeeDetails.site === "officers") {
			endpoint = "officers";
		}
		console.log(employeeDetails);

		try {
			const res = await axios.post(endpoint, employeeDetails);
			console.log(res);
			setEmployeeDetails({
				name: "",
				email: "",
				username: "",
				site: "",
				phone: "",
				weeklyWorkHrs: "",
				salary: "",
			});
			setError("");
			window.alert("House owner registered successfully");
			setBtnState(false);
			setIsLoading(true);
		} catch (err) {
			setBtnState(false);
			console.log(err.response);
		}
	};

	const getAllEmployees = async () => {
		try {
			const res = await axios.get(`users/`);
			setEmployees(res.data.employees);
			console.log(res.data.employees);
			setIsLoading(false);
		} catch (err) {
			console.log(err.response);
		}
	};

	useEffect(() => getAllEmployees(), []);

	return (
		<div>
			<Sidebar />
			<div id="main" className="layout__content">
				<TopNav />
				<div className="layout__content-main">
					<h1 className="page-header">Manage Services</h1>
					<div className="row">
						<div className="col-12">
							<form className="card" style={{ position: "relative" }}>
								{error && (
									<div className="error-bg" style={{ left: "3%" }}>
										<p>{error}</p>
									</div>
								)}
								<div className="row">
									<div className="col-6">
										<div className="rowuser">
											<input
												type="text"
												placeholder="Employee Name"
												value={employeeDetails.name}
												onChange={(e) =>
													setEmployeeDetails({
														...employeeDetails,
														name: e.target.value,
													})
												}
												required
											/>
										</div>
									</div>
									<div className="col-6">
										<div className="rowuser">
											<input
												type="email"
												placeholder="Employee Email"
												value={employeeDetails.email}
												onChange={(e) =>
													setEmployeeDetails({
														...employeeDetails,
														email: e.target.value,
													})
												}
												required
											/>
										</div>
									</div>
									<div className="col-6">
										<div className="rowuser">
											<input
												type="text"
												placeholder="Mobile Number"
												value={employeeDetails.phone}
												onChange={(e) =>
													setEmployeeDetails({
														...employeeDetails,
														phone: e.target.value,
													})
												}
												required
												maxLength="10"
											/>
										</div>
									</div>
									<div className="col-6">
										<div className="rowuser">
											<input
												type="text"
												placeholder="Username"
												value={employeeDetails.username}
												onChange={(e) =>
													setEmployeeDetails({
														...employeeDetails,
														username: e.target.value,
													})
												}
												required
											/>
										</div>
									</div>
									<div className="col-6">
										<div className="rowuser">
											<input
												type="text"
												placeholder="Weekly Work Hours"
												value={employeeDetails.weeklyWorkHrs}
												onChange={(e) =>
													setEmployeeDetails({
														...employeeDetails,
														weeklyWorkHrs: e.target.value,
													})
												}
												required
											/>
										</div>
									</div>
									<div className="col-6">
										<div className="rowuser">
											<input
												type="text"
												placeholder="Salary"
												value={employeeDetails.salary}
												onChange={(e) =>
													setEmployeeDetails({
														...employeeDetails,
														salary: e.target.value,
													})
												}
												required
											/>
										</div>
									</div>
									<div className="col-6">
										<div className="rowuser">
											<Select
												style={{ width: "100%" }}
												isMulti
												name="options"
												options={options}
												className="basic-multi-select"
												classNamePrefix="select"
												onChange={setSelectedFoods}
											/>
										</div>
									</div>
								</div>
								<div className="rowuser">
									<button type="submit" onClick={saveEmployeeDetails}>
										Save
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className="card">
						<h2>Employee Details</h2>
						{isLoading ? (
							<Spinner />
						) : (
							<Table
								limit="5"
								headData={fields}
								renderHead={(item, index) => renderOrderHead(item, index)}
								bodyData={employees}
								renderBody={(item, index) => renderOrderBody(item, index)}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyServices;