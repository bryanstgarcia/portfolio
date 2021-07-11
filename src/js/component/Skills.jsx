import React from "react";
import { BackendSkills } from "./BackendSkills.jsx";
import { FrontendSkills } from "./FrontendSkills.jsx";

export const Skills = () => {
	return (
		<div className="skills-container">
			<div className="skills-container__title">
				<h2>
					HABILIDADES
					<span className="letter-soft">.</span>
				</h2>
			</div>
			<div className="skills-container__components">
				<FrontendSkills />
				<BackendSkills />
			</div>
		</div>
	);
};
