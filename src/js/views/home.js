import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card";
import "bootstrap/dist/css/bootstrap.css";
import ReactAudioPlayer from "react-audio-player";

import { PlanetsCard } from "../component/planetsCard";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPlanets();
		actions.getPeoples();
	}, []);

	return (
		<div className="container-fluid">
			<h1 className="Titlepers">Personajes</h1>
			<div className="scrollmenu scro1">
				<div className="row text-center">
					<div className="col" style={{ margin: "3rem 1rem 1.2rem 1rem" }}>
						{store.peoples.map((items, i) => {
							return (
								<div key={i} style={{ marginRight: "7px", marginLeft: "7px" }}>
									<Card
										title={items.name}
										gender={items.gender}
										hair={items.hair_color}
										index={i + 1}
										eye={items.eye_color}
										url={items.url}
										urlImg={store.img[i]}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<h1 className="Titleplane">Planetas</h1>
			<div className="scrollmenu scro">
				<div className="row text-center">
					<div className="col" style={{ margin: "3rem 1rem 1.2rem 1rem" }}>
						{store.planets.map((items, i) => {
							return (
								<div key={i} style={{ marginRight: "7px", marginLeft: "7px" }}>
									<PlanetsCard
										UrlImage={items.UrlImage}
										name={items.name}
										terrain={items.terrain}
										population={items.population}
										index={i + 1}
										urlImg={store.imgP[i]}
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
