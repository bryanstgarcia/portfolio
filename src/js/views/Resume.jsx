import React from "react";

export const Resume = () => {
	return (
		<div className="resume-box">
			<div className="resume-box__info">
				<p>{`Esta opción del curriculum es solo para visualización. Si deseas decargar el Curriculum, el siguiente link te redireccionará para que puedas hacerlo.`}</p>
				<a
					href={`https://drive.google.com/file/d/1-NG7d2P8tUntv5rD4tnuru5ra6z2mObG/view`}
					target="_blank"
					rel="noopener noreferrer">
					Descargar Curriculum Vitae
				</a>
			</div>
			<div className="resume-box__frame">
				<iframe
					src={`https://docs.google.com/viewer?srcid=1-NG7d2P8tUntv5rD4tnuru5ra6z2mObG&pid=explorer&efh=false&a=v&chrome=false&embedded=true`}
					className="resume-box__frame--doc"
					width="90%"
					height="680px"
				/>
			</div>
		</div>
	);
};
