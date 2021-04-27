import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Planetsprofile } from "./views/planetsprofile";
import { Peoplesprofile } from "./views/peoplesprofile";
import injectContext from "./store/appContext";
import ReactAudioPlayer from "react-audio-player";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./views/login";
import { Signup } from "./views/signup";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/planetsprofile/:theid">
							<Planetsprofile />
						</Route>
						<Route exact path="/peoplesprofile/:theid">
							<Peoplesprofile />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
