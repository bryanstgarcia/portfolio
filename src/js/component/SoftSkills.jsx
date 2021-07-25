import React from "react";
import { Responsability } from "./svg/Responsability.jsx";
import { Decisions } from "./svg/Decisions.jsx";
import { TeamWork } from "./svg/TeamWork.jsx";
import { Resolution } from "./svg/Resolution.jsx";

export const SoftSkills = () => {
	return (
		<div className="skills-riel">
			<div className="skills-riel__title" id="backend">
				<h3>{`BLANDAS`}</h3>
			</div>
			<div className="riel">
				<div className="skills-riel__component">
					<div
						className="skills-riel__component--img large"
						data-title="Resolucion de problmas"
						id="resolution">
						<div className="component--img">
							<Resolution />
						</div>
						<h5>Resolución de problemas</h5>
					</div>
					<div className="skills-riel__component--img large" data-title="Responsability" id="responsability">
						<div className="component--img">
							<Responsability />
						</div>
						<h5>Responsabilidad</h5>
					</div>
					<div className="skills-riel__component--img large" data-title="Toma de decisiones" id="decisions">
						<div className="component--img">
							<Decisions />
						</div>
						<h5>Toma de decisiones</h5>
					</div>
					<div className="skills-riel__component--img large" data-title="Trabajo en equipo" id="team">
						<div className="component--img">
							<TeamWork />
						</div>
						<h5>Trabajo en equipo</h5>
					</div>
				</div>
			</div>
		</div>
	);
};
