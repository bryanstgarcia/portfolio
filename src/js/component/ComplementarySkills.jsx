import React from "react";
import { Git } from "./svg/Git.jsx";
import { Github } from "./svg/Github.jsx";
import { Figma } from "./svg/Figma.jsx";
import { VsCode } from "./svg/VsCode.jsx";
import { AdobeIllustrator } from "./svg/AdobeIllustrator.jsx";
import { Postman } from "./svg/Postman.jsx";
import { Scrum } from "./svg/Scrum.jsx";

export const ComplementarySkills = () => {
	return (
		<div className="skills-riel">
			<div className="skills-riel__title" id="complementary">
				<h3>{`COMPLEMENTARIAS`}</h3>
			</div>
			<div className="riel">
				<div className="skills-riel__component">
					<div className="skills-riel__component--img moved" data-title="Git" id="git">
						<div className="component--img">
							<Git />
						</div>
						<h5>Git</h5>
					</div>
					<div className="skills-riel__component--img" data-title="Github" id="github">
						<div className="component--img">
							<Github />
						</div>
						<h5>GitHub</h5>
					</div>
					<div className="skills-riel__component--img" data-title="Figma" id="figma">
						<div className="component--img shrink">
							<Figma />
						</div>
						<h5>Figma</h5>
					</div>
					<div className="skills-riel__component--img" data-title="Vs-code" id="vs">
						<div className="component--img">
							<VsCode />
						</div>
						<h5>VS Code</h5>
					</div>
					<div className="skills-riel__component--img" data-title="AI" id="ai">
						<div className="component--img">
							<AdobeIllustrator />
						</div>
						<h5>Illustrator</h5>
					</div>
					<div className="skills-riel__component--img" data-title="Postman" id="postman">
						<div className="component--img">
							<Postman />
						</div>
						<h5>Postman</h5>
					</div>
					<div className="skills-riel__component--img" data-title="SCRUM" id="scrum">
						<div className="component--img">
							<Scrum />
						</div>
						<h5>SCRUM</h5>
					</div>
					<div className="skills-riel__component--img" id="empty2" />
				</div>
			</div>
		</div>
	);
};
