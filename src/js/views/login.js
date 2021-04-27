import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/person.jpg";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { propTypes } from "react-bootstrap/esm/Image";

export const Login = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid pos">
			<div className="d-flex justify-content-center h-100">
				<div className="card">
					<div className="card-header">
						<h3>Sign In</h3>
						<div className="d-flex justify-content-end social_icon">
							<span>
								<i className="fas fa-facebook-square" />
							</span>
							<span>
								<i className="fas fa-google-plus-square" />
							</span>
							<span>
								<i className="fas fa-twitter-square" />
							</span>
						</div>
					</div>
					<div className="card-body">
						<form>
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fas fa-envelope" />
									</span>
								</div>
								<input type="text" className="form-control" placeholder="@" />
							</div>
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fas fa-key" />
									</span>
								</div>
								<input type="password" className="form-control" placeholder="password" />
							</div>
							<div className="row align-items-center remember">
								<input type="checkbox" />
								Remember Me
							</div>
							<div className="form-group">
								<input type="submit" value="Login" className="btn float-right login_btn" />
							</div>
						</form>
					</div>
					<div className="card-footer">
						<div className="d-flex justify-content-center links">
							Dont have an account?
							<Link to="/signup">
								<a>Sign Up</a>
							</Link>
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

Login.propTypes = {
	email: PropTypes.string,
	passw: PropTypes.string,
	name: PropTypes.string
};
