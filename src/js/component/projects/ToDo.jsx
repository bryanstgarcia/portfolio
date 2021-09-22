import React from "react";
import TodoImg from "./../../../img/todo.PNG";
import { Html } from "../svg/Html.jsx";
import { Css } from "../svg/Css.jsx";
import { Sass } from "../svg/Sass.jsx";
import { ReactLog } from "../svg/ReactLog.jsx";
import { Webpack } from "../svg/Webpack.jsx";
import { RestApi } from "../svg/RestApi.jsx";

export const ToDo = () => {
	return (
		<div className="project-container">
			<div className="project">
				<div className="project__img">
					<img src={TodoImg} alt="" />
				</div>
				<div className="project__info">
					<div className="project__info--title">
						<h5>To Do List | React</h5>
					</div>
					<div className="project__info--description">
						<p>
							To Do list hecho en su totalidad usando usando React. Se dió uso de una API Rest de acceso
							open source donde puedes almacenar tu información con un usuario.
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
							<div className="technologies__img--component">
								<Sass />
							</div>
							<div className="technologies__img--component">
								<ReactLog />
							</div>
							<div className="technologies__img--component">
								<Webpack />
							</div>
							<div className="technologies__img--component">
								<RestApi color={"000000"} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="project__buttons">
				<a
					href="#"
					title="Repositorio de github"
					target="_blank"
					rel="noreferrer"
					className="project__buttons--btn btn-black">
					Repositorio
				</a>
				<a
					href="#"
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
