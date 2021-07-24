import React from "react";
import Prueba from "./../../../img/laptop.jpg";
import { JavaScript } from "./../svg/JavaScript.jsx";

export const Project = () => {
	return (
		<div className="project-container">
			<div className="project">
				<div className="project__img">
					<img src={Prueba} alt="" />
				</div>
				<div className="project__info">
					<div className="project__info--title">
						<h5>Project Title</h5>
					</div>
					<div className="project__info--description">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consectetur, debitis
							veritatis
						</p>
					</div>
					<div className="project__info--technologies">
						<div className="technologies__title">
							<h5>Tecnologies</h5>
						</div>
						<div className="technologies__img">
							<div className="technologies__img--component">
								<JavaScript />
							</div>
							<div className="technologies__img--component">
								<JavaScript />
							</div>
							<div className="technologies__img--component">
								<JavaScript />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="project__buttons">
				<a href="#" title="Repositorio de github" target="_blank" className="project__buttons--btn btn-black">
					Repositorio
				</a>
				<a href="#" title="Abrir sitio web" target="_blank" className="project__buttons--btn btn-blue">
					Sitio web
				</a>
			</div>
		</div>
	);
};
