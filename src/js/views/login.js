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

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [mensaje, setmensaje] = useState("");
	const [islogin, setIsLogin] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			password: password
		};
		//setLogin(true);
		// fetch de LOGIN
		fetch("https://3000-coffee-chimpanzee-8w6w3ksl.ws-us04.gitpod.io/login", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.message != "Bad user or password") {
					store.token = data.token;
					setIsLogin(true);
					store.login = true;
					swal({
						title: "Correcto!",
						text: "Se ha Logeado Exitosamente",
						icon: "success",
						button: "Aceptar"
					});
				} else {
					swal({
						title: "Incorrecto!",
						text: "Error en Correo o Contraseña",
						icon: "error",
						button: "Aceptar"
					});
					setIsLogin(false);
					store.login = false;
				}

				// let token = sessionStorage.getItem("my_token")
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="container-fluid pos">
			<div className="d-flex justify-content-center h-100">
				<div className="card">
					<div className="card-header">
						<h3>Sign In</h3>
					</div>
					<div className="card-body">
						<form onSubmit={handleSubmit} style={{ width: "500px" }}>
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
									onChange={e => {
										setEmail(e.target.value);
									}}
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
							<div className="row align-items-center remember">
								<input type="checkbox" />
								Remember Me
							</div>
							<div className="form-group">
								<button type="submit" className="btn float-right login_btn">
									Login
								</button>
							</div>
						</form>
						{islogin ? <Redirect to="/" /> : null}
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
