import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Hamburguer } from "./Hamburguer.jsx";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navigation">
			<Link to="/" href="#home">
				<span className="navigation__logo">BG</span>
			</Link>

			<div className="navigation__menu">
				<Hamburguer />
				<ul className={store.hamburguer ? `menu__open menu__list` : `menu__list menu__close`}>
					<li
						className="menu__list--item"
						onClick={event => {
							actions.handleHamburguer();
						}}>
						<a href="#about-me">Acerca de mí</a>
					</li>
					<li
						className="menu__list--item"
						onClick={event => {
							actions.handleHamburguer();
						}}>
						<a href="#skills">Habilidades</a>
					</li>
					<li
						className="menu__list--item"
						onClick={event => {
							actions.handleHamburguer();
						}}>
						<a href="#projects">Proyectos</a>
					</li>
					<li
						className="menu__list--item"
						onClick={event => {
							actions.handleHamburguer();
						}}>
						<a href="#contact">Contacto</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
