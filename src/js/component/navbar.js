import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<Link to="/">
					<a className="navbar-brand" href="/">
						<img
							src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png?__cf_chl_jschl_tk__=316bb80ac745e72bfc5bd2e10c15360ed3ac242d-1616039802-0-AQTi7LeTvemwd48rg5IHCpbt4Z5HIemACuMNNHGxG-Xu2l6VypQZ5YiuJHr4_Mnmn4j1awm7_jx9z-p9AWa4PEq0gjyZ7upsgPTEe2Zf885f55SqZMiFDdKX_m68It45u6X6RPLlwSszrX3OPWLDTVJyJcWQhh0Hx88aET-ai8ZSgb6_2Alb989dYilCELUI4Sg5D-0s1QPs08xhKNvS7mKzX_uJc2qulNE2IG0MD2x7dME3komko4CcdT4jY0UeVWm-LnDEXMJ-CYgZphazj9NWcRdU3RtnThi8ZQ_TKqOlHBc3OQInZF4A0PZi__aq6Eum2PyZ5jOW1lO6CArOOTAcQ73UCspaHx8l3-T7snHDuEefjwymfs_GVAhc86lFh5aJ_LTkDOiQx4iSFtEcK3bg-NGXFy-C7VwXA514YDIpbXvkp4c8KBXUVpzZX4eHWg"
							alt=""
							width="90"
							height="45 !important"
							className="d-inline-block align-top"
						/>{" "}
					</a>
				</Link>

				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favoritos
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
