import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/person.jpg";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { propTypes } from "react-bootstrap/esm/Image";
import { Redirect } from "react-router-dom";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [auth, setAuth] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			password: password
		};

		// fetch de REGISTER
		fetch("https://3000-black-koala-jisgb2cv.ws-us03.gitpod.io/register", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				//tavo validar esta linea
				sessionStorage.setItem("my_token", data.token);
				// setAuth(true);
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="container-fluid pos">
			<div className="d-flex justify-content-center h-100">
				<div className="card">
					<div className="card-header">
						<h3>Sign Up</h3>
					</div>
					<div className="card-body">
						<form onSubmit={handleSubmit} style={{ width: "500px" }}>
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fas fa-user" />
									</span>
								</div>
								<input type="text" className="form-control" placeholder="Name" />
							</div>
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fas fa-envelope" />
									</span>
								</div>
								<input
									type="email"
									className="form-control"
									placeholder="@"
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fas fa-key" />
									</span>
								</div>
								<input
									type="password"
									className="form-control"
									placeholder="password"
									onChange={e => setPassword(e.target.value)}
								/>
							</div>

							<div className="form-group">
								<button type="submit" className="btn float-right login_btn">
									Sign Up
								</button>
							</div>
						</form>
						{auth ? <Redirect to="/login" /> : null}
					</div>
					<div className="card-footer">
						<div className="d-flex justify-content-center links">
							Dont have an account?
							<a href="#">Sign Up</a>
						</div>
						<div className="d-flex justify-content-center">
							<a href="#">Forgot your password?</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
