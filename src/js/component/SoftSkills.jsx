import React from "react";
import Resolution from "./../../img/thinking.png";
import TeamWork from "./../../img/teamwork.png";
import { Responsability } from "./svg/Responsability.jsx";
import { Decisions } from "./svg/Decisions.jsx";

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
						<img
							src={Resolution}
							alt="Resolución de problemas"
							title="Resolución de problemas"
							className="component--img"
						/>
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
						<img
							src={TeamWork}
							alt="Trabajo en equipo"
							title="Trabajo en equipo"
							className="component--img"
						/>
						<h5>Trabajo en equipo</h5>
					</div>
				</div>
			</div>
		</div>
	);
};
