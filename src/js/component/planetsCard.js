import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/plane1.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsCard = props => {
	console.log("planets");

	return (
		<div>
			<div
				className="card "
				style={{ color: "white", width: "20rem", height: "20rem", backgroundColor: "rgb(121, 104, 9)" }}>
				{" "}
				<img className="card-img-top" src={rigoImage} alt="Card image cap" height="125" />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text margen">
						Terran:
						{props.terrain}
					</p>
					<Link to={"/planetsprofile/" + props.uid}>
						<button
							className="btn btn-primary pos1"
							style={{ color: "rgb(121, 104, 9)", backgroundColor: "white", border: "none" }}>
							Learn More
						</button>
					</Link>
					<i
						className="fa fa-heart pos2"
						onClick={() => actions.Favorite(props.uid, props.name, props.url)}
					/>
				</div>
			</div>
		</div>
	);
};

PlanetsCard.propTypes = {
	//population: PropTypes.string,
	terrain: PropTypes.string,
	name: PropTypes.string,
	url: PropTypes.string,
	uid: PropTypes.number
};
