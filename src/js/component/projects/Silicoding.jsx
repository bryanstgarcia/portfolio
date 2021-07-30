import React from "react";
import Prueba from "./../../../img/laptop.jpg";
import { Html } from "./../svg/Html.jsx";
import { Css } from "./../svg/Css.jsx";
import Picture from "./../../../img/silicoding.png";

export const Silicoding = () => {
	return (
		<div className="project-container">
			<div className="project">
				<div className="project__img">
					<img src={Picture} alt="" />
				</div>
				<div className="project__info">
					<div className="project__info--title">
						<h5>Silicoding | Landing Page</h5>
					</div>
					<div className="project__info--description">
						<p>
							Silicoding es el landing page de un bootcamp de programación. Es un sitio web realizado
							únicamente con HTML 5 y CSS 3 siendo completamente responsive.
						</p>
					</div>
					<div className="project__info--technologies">
						<div className="technologies__title">
							<h5>Tecnologías</h5>
						</div>
						<div className="technologies__img">
							<div className="technologies__img--component">
								<Html />
							</div>
							<div className="technologies__img--component">
								<Css />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="project__buttons">
				<a
					href="https://github.com/bryanstg/Product-Landing-Page"
					title="Repositorio de github"
					target="_blank"
					rel="noreferrer"
					className="project__buttons--btn btn-black">
					Repositorio
				</a>
				<a
					href="https://silicoding-landing.vercel.app/"
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
