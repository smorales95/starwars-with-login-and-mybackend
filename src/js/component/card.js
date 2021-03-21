import React from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Card = props => {
	return (
		<div>
			<div className="card " style={{ width: "20rem", height: "20rem" }}>
				<img className="card-img-top" src={rigoImage} alt="Card image cap" height="125" />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text margen">
						Gender: {props.gender}
						<br />
						Hair color: {props.url}
						<br />
						Hair color: {props.eye}
						<br />
					</p>

					<Link to={"/peoplesprofile/" + props.uid}>
						<button className="btn btn-primary" style={{ float="right"}}>Learn More</button>
					</Link>

					<i className="fa fa-heart" style={{ float="left"}}/>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	gender: PropTypes.string,
	hair: PropTypes.string,
	eye: PropTypes.string,
	uid: PropTypes.string,
	url: PropTypes.string
};
