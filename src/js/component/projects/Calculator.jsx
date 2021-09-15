import React from "react";
import CalculatorImg from "./../../../img/calculator.png";
import { JavaScript } from "./../svg/JavaScript.jsx";
import { Html } from "./../svg/Html.jsx";
import { Css } from "../svg/Css.jsx";
import { Sass } from "../svg/Sass.jsx";
import { Figma } from "../svg/Figma.jsx";

export const Calculator = () => {
	return (
		<div className="project-container">
			<div className="project">
				<div className="project__img">
					<img src={CalculatorImg} alt="" />
				</div>
				<div className="project__info">
					<div className="project__info--title">
						<h5>Calculator App | Vanilla JS</h5>
					</div>
					<div className="project__info--description">
						<p>
							Calculadora realizada con Vanilla JS, usando manipulación del DOM y eventos. Se dio estilo
							personalizado a la calculadora el cual fue diseñado usando Figma.
						</p>
					</div>
					<div className="project__info--technologies">
						<div className="technologies__title">
							<h5>Tecnologías y herramientas</h5>
						</div>
						<div className="technologies__img">
							<div className="technologies__img--component">
								<Html />
							</div>
							<div className="technologies__img--component">
								<Css />
							</div>
							<div className="technologies__img--component">
								<Sass />
							</div>
							<div className="technologies__img--component">
								<JavaScript />
							</div>
							<div className="technologies__img--component tall">
								<Figma />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="project__buttons">
				<a
					href="https://github.com/bryanstg/Calculator-app"
					title="Repositorio de github"
					target="_blank"
					rel="noreferrer"
					className="project__buttons--btn btn-black">
					Repositorio
				</a>
				<a
					href="https://calculator-bryangarcia.vercel.app/"
					title="Abrir sitio web"
					target="_blank"
					rel="noreferrer"
					className="project__buttons--btn btn-blue">
					Sitio web
				</a>
			</div>
		</div>
	);
};
