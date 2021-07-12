import React from "react";
import { BackendSkills } from "./BackendSkills.jsx";
import { ComplementarySkills } from "./ComplementarySkills.jsx";
import { FrontendSkills } from "./FrontendSkills.jsx";

export const Skills = () => {
	return (
		<div className="skills-container" id="skills">
			<div className="skills-container__title">
				<h2>
					HABILIDADES
					<span className="letter-soft">.</span>
				</h2>
			</div>
			<div className="skills-container__components">
				<FrontendSkills />
				<BackendSkills />
				<ComplementarySkills />
			</div>
		</div>
	);
};
