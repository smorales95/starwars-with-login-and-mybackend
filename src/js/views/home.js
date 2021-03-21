import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card";
import { PlanetsCard } from "../component/planetsCard";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPlanets();
	}, []);

	return (
		<div className="container-fluid ">
			<div className="scrollmenu">
				<div className="row text-center">
					<div className="col" style={{ margin: "3rem 1rem 1rem 1rem" }}>
						<Card />
					</div>
				</div>
			</div>
			<div className="scrollmenu" style={{ marginTop: "70px" }}>
				<div className="row text-center">
					<div className="col" style={{ margin: "3rem 1rem" }}>
						{store.planets.map((items, i) => {
							return (
								<div key={i}>
									<PlanetsCard UrlImage={items.UrlImage} name={items.name} terrain={items.terrain} />
									{console.log(items)}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
