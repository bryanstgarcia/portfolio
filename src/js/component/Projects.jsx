import React from "react";
import { Silicoding } from "./projects/Silicoding.jsx";
import { ToDo } from "./projects/ToDo.jsx";
import { Calculator } from "./projects/Calculator.jsx";
import { LaCuadra } from "./projects/LaCuadra.jsx";

export const Projects = () => {
	return (
		<div className="projects" id="projects">
			<div className="projects__title">
				<h2>
					PROYECTOS
					<span className="letter-primary">.</span>
				</h2>
			</div>
			<div className="projects__components">
				<LaCuadra />
				<ToDo />
				<Calculator />
				<Silicoding />
			</div>
		</div>
	);
};
