import React from "react";
import { Link } from "react-router-dom";
import LinkedIn from "./../../img/002-linkedin.png";
import Github from "./../../img/001-github.png";
import Perfil from "./../../img/perfil.jpg";
import Arrow from "./../../img/arrow-down.png";

export const Home = () => {
	return (
		<div className="welcome">
			<div className="welcome__img">
				<div className="welcome__img--box">
					<img src={Perfil} alt="Imagen de perfil" />
				</div>
			</div>
			<div className="welcome-2">
				<div className="welcome__text">
					<p className="welcome__text--title letter-primary">¡Bienvenido!</p>
					<p className="welcome__text--title">mi nombre es Bryan</p>
					<p className="welcome__text--subtitle">
						Y soy desarrollador web fullstack
						<span className="letter-primary">.</span>
					</p>
				</div>
				<div className="welcome__buttons">
					<Link to="/resume" className="welcome__buttons--cv" alt="Visualizar curriculum">
						Currículum
						<img src={Arrow} alt="LinkedIn" width="10" />
					</Link>
					<a
						href="https://www.linkedin.com/in/bryan-garcia-fullstack/"
						target="_blank"
						rel="noopener noreferrer"
						className="welcome__buttons--linkedin">
						<img src={LinkedIn} alt="LinkedIn" width="30" />
					</a>
					<a
						href="https://github.com/bryanstg"
						target="_blank"
						rel="noopener noreferrer"
						className="welcome__buttons--github">
						<img src={Github} alt="Github" width="30" />
					</a>
				</div>
			</div>
		</div>
	);
};
