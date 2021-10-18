import React from "react";
import LaCuadraPic from "./../../../img/lacuadra.png";
import { ReactLog } from "../svg/ReactLog.jsx";
import { Html } from "../svg/Html.jsx";
import { Python } from "../svg/Python.jsx";
import { Sass } from "../svg/Sass.jsx";
import { RestApi } from "../svg/RestApi.jsx";

export const LaCuadra = () => {
	return (
		<div className="project-container">
			<div className="project">
				<div className="project__img">
					<img src={LaCuadraPic} alt="" />
				</div>
				<div className="project__info">
					<div className="project__info--title">
						<h5>La Cuadra | Fullstack</h5>
					</div>
					<div className="project__info--description">
						<p>
							La cuadra es un ecommerce fullstack realizado desde el diseño, con Figma, el frontend con
							React y el backend con Flask.
						</p>
					</div>
					<div className="project__info--technologies">
						<div className="technologies__title">
							<h5>Tecnologías y Herramientas</h5>
						</div>
						<div className="technologies__img">
							<div className="technologies__img--component">
								<Html />
							</div>
							<div className="technologies__img--component">
								<Sass />
							</div>
							<div className="technologies__img--component">
								<ReactLog />
							</div>
							<div className="technologies__img--component">
								<Python />
							</div>
							<div className="technologies__img--component">
								<RestApi color="000000" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="project__buttons">
				<a
					href="https://github.com/bryanstg/ecommerce-front-end"
					title="Repositorio de github"
					target="_blank"
					rel="noreferrer"
					className="project__buttons--btn btn-black">
					Repositorio
				</a>
				<a
					href="https://lacuadra.vercel.app/"
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
