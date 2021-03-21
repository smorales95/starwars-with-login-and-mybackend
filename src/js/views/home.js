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
		actions.getPeoples();
	}, []);

	return (
		<div className="container-fluid ">
			<div className="scrollmenu">
				<div className="row text-center">
					<div className="col" style={{ margin: "3rem 1rem 1rem 1rem" }}>
						{store.peoples.map((items, i) => {
							return (
								<div key={i} style={{ marginRight: "10px" }}>
									<Card title={items.name} url={items.url} uid={items.uid} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="scrollmenu" style={{ marginTop: "40px" }}>
				<div className="row text-center">
					<div className="col" style={{ margin: "3rem 1rem 1rem 1rem" }}>
						{store.planets.map((items, i) => {
							return (
								<div key={i} style={{ marginRight: "10px" }}>
									<PlanetsCard
										UrlImage={items.UrlImage}
										name={items.name}
										terrain={items.terrain}
										uid={items.uid}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
