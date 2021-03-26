import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/plane.png";

export const Planetsprofile = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let dato = [];

	useEffect(() => {
		actions.getInfPlanets(params.theid);
	}, []);

	console.log(store.detalle);

	return (
		<div className="container-fluid">
			<div className="jumbotron top1">
				<div className="row">
					<div className="col-3">
						<img src={rigoImage} className="" alt="Responsive image" width="290px" height="230px" />
					</div>
					<div className="col">
						<h1 className="display-4">Planeta: {store.detalle.name}</h1>

						<p style={{ textAlign: "justify" }}>
							Star Wars (conocida también en español como La guerra de las galaxias)​ es una franquicia
							compuesta primordialmente de una serie de películas concebidas por el cineasta
							estadounidense George Lucas en la década de 1970, y producidas y distribuidas por The Walt
							Disney Company a partir de 2012.
						</p>
					</div>
				</div>
				<div
					className="row text-justify"
					style={{ marginTop: "20px", borderTop: "2px solid rgb(121, 104, 9)" }}>
					<div className="col-2">
						<p className="asize">
							Name:
							<br />
							{store.detalle.name}
						</p>
					</div>
					<div className="col-2">
						<p className="asize">
							Diameter:
							<br />
							{store.detalle.diameter}
						</p>
					</div>
					<div className="col-2">
						<p className="asize">
							Rotation Period:
							<br />
							{store.detalle.rotation_period}
						</p>
					</div>
					<div className="col-2">
						<p className="asize">
							Orbital Period:
							<br />
							{store.orbital_period}
						</p>
					</div>
					<div className="col-2">
						<p className="asize">
							Gravity:
							<br />
							{store.detalle.gravity}
						</p>
					</div>
					<div className="col-2">
						<p className="asize">
							Population:
							<br />
							{store.detalle.population}
						</p>
					</div>
				</div>

				<div className="row">
					<Link to="/">
						<span
							className="btn btn-primary btn-lg pos1"
							style={{ color: "white", backgroundColor: "rgb(121, 104, 9)", border: "none" }}
							href="#"
							role="button">
							Back home
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

Planetsprofile.propTypes = {
	match: PropTypes.object
};
