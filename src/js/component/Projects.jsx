import React from "react";
import { Project } from "./projects/Project.jsx";

export const Projects = () => {
	return (
		<div className="projects">
			<div className="projects__title">
				<h2>
					PROYECTOS
					<span className="letter-primary">.</span>
				</h2>
			</div>
			<div className="projects__components">
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
			</div>
		</div>
	);
};
