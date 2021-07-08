import React from "react";
import { Link } from "react-router-dom";
import { Hamburguer } from "./Hamburguer.jsx";

export const Navbar = () => {
	return (
		<nav className="navigation">
			<Link to="/">
				<span className="navigation__logo">BG</span>
			</Link>
			<div className="navigation__menu">
				<Hamburguer />
			</div>
		</nav>
	);
};
