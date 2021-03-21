import React from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";

export const PlanetsCard = props => {
	console.log("planets");

	return (
		<div>
			<div className="card " style={{ width: "26rem", height: "25rem" }}>
				<img className="card-img-top" src={rigoImage} alt="Card image cap" height="150" />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">{props.terrain}</p>
					<Link to={"/planetsprofile/" + 1}>
						<button className="btn btn-primary">Back home</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

PlanetsCard.propTypes = {
	//population: PropTypes.string,
	terrain: PropTypes.string,
	name: PropTypes.string,
	UrlImage: PropTypes.string,
	uid: PropTypes.number
};
