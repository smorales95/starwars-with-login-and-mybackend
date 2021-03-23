import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import "bootstrap/dist/css/bootstrap.css";
import rigoImage from "../../img/starr.jpg";

export const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container-fluid">
				<Link to="/">
					<a className="navbar-brand" href="/">
						<img
							src="https://www.freepnglogos.com/uploads/star-wars-logo-png-8.png"
							alt=""
							width="90"
							height="45 !important"
							className="d-inline-block align-top"
							backgroundColor="white !important"
						/>{" "}
					</a>
				</Link>

				<div className="dropdown">
					<button
						style={{ color: "rgb(121, 104, 9)", backgroundColor: "white" }}
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favoritos <i className="fas fa-eye" />
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
