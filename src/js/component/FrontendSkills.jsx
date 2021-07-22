import React from "react";
import FLUX from "./../../img/flux-logo.png";
import WEBPACK from "./../../img/webpack-logo.png";
import { Html } from "./svg/_Html.jsx";
import { Css } from "./svg/_Css.jsx";
import { Sass } from "./svg/_Sass.jsx";
import { Bootstrap } from "./svg/_Bootstrap.jsx";
import { JavaScript } from "./svg/_JavaScript.jsx";
import { ReactLog } from "./svg/_ReactLog.jsx";

export const FrontendSkills = () => {
	return (
		<div className="skills-riel">
			<div className="skills-riel__title" id="frontend">
				<h3>{`FRONTEND`}</h3>
			</div>
			<div className="skills-riel__component">
				<div className="skills-riel__component--img moved" data-title="HTML 5" id="html">
					<div className="component--img">
						<Html />
					</div>
					<h5>HTML 5</h5>
				</div>
				<div className="skills-riel__component--img" data-title="CSS 3" id="css">
					<div className="component--img">
						<Css />
					</div>
					<h5>CSS 3</h5>
				</div>
				<div className="skills-riel__component--img" data-title="Sass" id="sass">
					<div className="component--img">
						<Sass />
					</div>
					<h5>Sass</h5>
				</div>
				<div className="skills-riel__component--img" data-title="Bootstrap" id="bootstrap">
					<div className="component--img">
						<Bootstrap />
					</div>
					<h5>Bootstrap</h5>
				</div>
				<div className="skills-riel__component--img" data-title="JavaScript" id="js">
					<div className="component--img">
						<JavaScript />
					</div>
					<h5>JavaScript</h5>
				</div>
				<div className="skills-riel__component--img" data-title="React Js" id="react">
					<div className="component--img">
						<ReactLog />
					</div>
					<h5>React Js</h5>
				</div>
				<div className="skills-riel__component--img img-bigger" data-title="Flux" id="flux">
					<img src={FLUX} alt="Flux" title="Flux" className="component--img" />
					<h5>Flux</h5>
				</div>
				<div className="skills-riel__component--img" data-title="Webpack" id="webpack">
					<img src={WEBPACK} alt="Webpack" title="Webpack" className="component--img" />
					<h5>Webpack</h5>
				</div>
			</div>
		</div>
	);
};
