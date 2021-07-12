import React from "react";
import GIT from "./../../img/git-logo.png";
import GITHUB from "./../../img/github-logo.png";
import FIGMA from "./../../img/figma-logo.png";
import AI from "./../../img/ai-logo.png";
import VSCODE from "./../../img/vscode-logo.png";
import POSTMAN from "./../../img/postman-logo.png";
import SCRUM from "./../../img/scrum-logo.png";

export const ComplementarySkills = () => {
	return (
		<div className="skills-riel">
			<div className="skills-riel__title">
				<h3>{` < COMPLEMENTARIAS  / >`}</h3>
			</div>
			<div className="riel">
				<div className="skills-riel__component">
					<div className="skills-riel__component--img moved" data-title="HTML 5">
						<img src={GIT} alt="Git logo" title="Git" className="component--img" />
						<h5>GIT</h5>
					</div>
					<div className="skills-riel__component--img" data-title="HTML 5">
						<img src={GITHUB} alt="Github logo" title="Github" className="component--img" />
						<h5>GitHub</h5>
					</div>
					<div className="skills-riel__component--img" data-title="HTML 5">
						<img src={FIGMA} alt="Figma logo" title="Figma" className="component--img" />
						<h5>Figma</h5>
					</div>
					<div className="skills-riel__component--img" data-title="HTML 5">
						<img
							src={AI}
							alt="Adobe Illustrator logo"
							title="Adobe Illustrator"
							className="component--img"
						/>
						<h5>Adobe Illustrator</h5>
					</div>
					<div className="skills-riel__component--img" data-title="HTML 5">
						<img
							src={VSCODE}
							alt="Visual Studio Code"
							title="Visual Studio Code"
							className="component--img"
						/>
						<h5>VS Code</h5>
					</div>
					<div className="skills-riel__component--img" data-title="HTML 5">
						<img src={POSTMAN} alt="Postman logo" title="Postman" className="component--img" />
						<h5>Postman</h5>
					</div>
					<div className="skills-riel__component--img" data-title="HTML 5">
						<img src={SCRUM} alt="SCRUM logo" title="SCRUM" className="component--img" />
						<h5>SCRUM</h5>
					</div>
				</div>
			</div>
		</div>
	);
};
