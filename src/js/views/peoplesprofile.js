import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Peoplesprofile = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let dato = [];

	useEffect(() => {
		actions.getInfPeoples(params.theid);
	}, []);

	console.log(store.detalle);

	return (
		<div className="jumbotron">
			<h1 className="display-4">Nombre: {store.detalle.name}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Peoplesprofile.propTypes = {
	match: PropTypes.object
};
