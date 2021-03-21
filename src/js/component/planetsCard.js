import React from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";

export const PlanetsCard = props => {
	console.log("planets");

	return (
		<div>
			<div className="card " style={{ width: "20rem", height: "20rem" }}>
				<img className="card-img-top" src={rigoImage} alt="Card image cap" height="125" />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text margen">
						Terran:
						{props.terrain}
					</p>
					<Link to={"/planetsprofile/" + props.uid}>
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
