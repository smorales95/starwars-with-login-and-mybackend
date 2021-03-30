import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/plane1.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsCard = props => {
	const { store, actions } = useContext(Context);

	return (
		<div
			className="card "
			style={{
				color: "white",
				width: "14rem",
				height: "20rem",
				backgroundColor: "Transparent",
				borderColor: "white"
			}}>
			{" "}
			<img className="card-img-top" src={props.urlImg} alt="Card image cap" height="145" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text justify" style={{ textAlign: "justify !important" }}>
					Population: {props.population}
					<br />
					Terran:{" "}
					<div className="textcard" style={{ textAlign: "justify !important" }}>
						{props.terrain}
					</div>
				</p>
			</div>
			<div className="card-footer justify-content-center text-center">
				<Link to={"/planetsprofile/" + props.index}>
					<button
						className="btn btn-primary pos1"
						style={{ color: "rgb(121, 104, 9)", backgroundColor: "white", border: "none" }}>
						Learn More
					</button>
				</Link>
				<div className="pos2">
					<i className="fa fa-heart" onClick={() => actions.Favorite(props.index, props.name, props.url)} />
				</div>
			</div>
		</div>
	);
};

PlanetsCard.propTypes = {
	population: PropTypes.string,
	terrain: PropTypes.string,
	name: PropTypes.string,
	url: PropTypes.string,
	index: PropTypes.number,
	urlImg: PropTypes.string
};
