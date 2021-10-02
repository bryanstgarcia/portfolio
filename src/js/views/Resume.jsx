import React from "react";
import ResumePdf from "./../../img/fullstack-bryang.pdf";

export const Resume = () => {
	const cvLink = {
		frontend: {
			october: {
				year: "2021",
				code: "1-2CxYKDRMICejuassXnG5wzFqXdbZ5-L"
			}
		},
		fullstack: {
			september: {
				year: "2021",
				code: "1h9jrtROdButiTsQauqjTVigORTYKnW0w"
			}
		}
	};
	return (
		<div className="resume-box">
			<div className="resume-box__frame">
				<iframe
					src={`https://docs.google.com/viewer?srcid=${cvLink.frontend.october.code}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`}
					className="resume-box__frame--doc"
					width="80%"
					height="680px"
				/>
			</div>
			<div className="resume-box__info">
				<p>{`Si deseas decargar el Curriculum, puedes hacer click en "Descargar".`}</p>
				<a href={ResumePdf} download>
					Descargar
				</a>
			</div>
		</div>
	);
};
