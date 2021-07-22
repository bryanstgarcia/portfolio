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
			<div className="skills-riel__title" id="complementary">
				<h3>{`COMPLEMENTARIAS`}</h3>
			</div>
			<div className="riel">
				<div className="skills-riel__component">
					<div className="skills-riel__component--img moved" data-title="Git" id="git">
						<img src={GIT} alt="Git logo" title="Git" className="component--img" />
						<h5>Git</h5>
					</div>
					<div className="skills-riel__component--img" data-title="Github" id="github">
						<img src={GITHUB} alt="Github logo" title="Github" className="component--img" />
						<h5>GitHub</h5>
					</div>
					<div className="skills-riel__component--img" data-title="Figma" id="figma">
						<img src={FIGMA} alt="Figma logo" title="Figma" className="component--img" />
						<h5>Figma</h5>
					</div>
					<div className="skills-riel__component--img" data-title="Vs-code" id="vs">
						<img
							src={VSCODE}
							alt="Visual Studio Code"
							title="Visual Studio Code"
							className="component--img"
						/>
						<h5>VS Code</h5>
					</div>
					<div className="skills-riel__component--img" data-title="AI" id="ai">
						<img
							src={AI}
							alt="Adobe Illustrator logo"
							title="Adobe Illustrator"
							className="component--img"
						/>
						<h5>Adobe Illustrator</h5>
					</div>
					<div className="skills-riel__component--img" data-title="Postman" id="postman">
						<img src={POSTMAN} alt="Postman logo" title="Postman" className="component--img" />
						<h5>Postman</h5>
					</div>
					<div className="skills-riel__component--img" data-title="SCRUM" id="scrum">
						<img src={SCRUM} alt="SCRUM logo" title="SCRUM" className="component--img" />
						<h5>SCRUM</h5>
					</div>
					<div className="skills-riel__component--img" id="empty2" />
				</div>
			</div>
		</div>
	);
};
