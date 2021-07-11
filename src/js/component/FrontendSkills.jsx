import React from "react";
import HTML from "./../../img/html-logo.png";
import CSS from "./../../img/css-logo.png";
import SASS from "./../../img/sass-logo.png";
import BOOTSTRAP from "./../../img/bootstrap-logo.png";
import REACT_LOGO from "./../../img/react-logo.png";
import JAVASCRIPT from "./../../img/javascript-logo.png";
import FLUX from "./../../img/flux-logo.png";
import WEBPACK from "./../../img/webpack-logo.png";

export const FrontendSkills = () => {
	return (
		<div className="skills-riel">
			<div className="skills-riel__title">
				<h3>{`< FRONTEND  / >`}</h3>
			</div>
			<div className="riel">
				<div className="skills-riel__component">
					<div className="skills-riel__component--img moved" data-title="HTML 5">
						<img src={HTML} alt="HTML" title="HTML 5" className="component--img" />
						<h5>HTML 5</h5>
					</div>
					<div className="skills-riel__component--img" data-title="HTML 5">
						<img src={CSS} alt="CSS 3" title="CSS 3" className="component--img" />
						<h5>CSS 3</h5>
					</div>
					<div className="skills-riel__component--img" data-title="HTML 5">
						<img src={SASS} alt="Sass" title="Sass" className="component--img" />
						<h5>Sass</h5>
					</div>
					<div className="skills-riel__component--img" data-title="HTML 5">
						<img src={BOOTSTRAP} alt="Bootstrap" title="Bootstrap" className="component--img" />
						<h5>Bootstrap</h5>
					</div>
					<div className="skills-riel__component--img" data-title="HTML 5">
						<img src={JAVASCRIPT} alt="JavaScript" title="JavaScript" className="component--img" />
						<h5>JavaScript</h5>
					</div>
					<div className="skills-riel__component--img" data-title="HTML 5">
						<img src={REACT_LOGO} alt="React Js" title="React Js" className="component--img" />
						<h5>React Js</h5>
					</div>
					<div className="skills-riel__component--img img-bigger" data-title="HTML 5">
						<img src={FLUX} alt="Flux" title="Flux" className="component--img" />
						<h5>Flux</h5>
					</div>
					<div className="skills-riel__component--img" data-title="HTML 5">
						<img src={WEBPACK} alt="Webpack" title="Webpack" className="component--img" />
						<h5>Webpack</h5>
					</div>
				</div>
			</div>
		</div>
	);
};
