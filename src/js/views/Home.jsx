import React from "react";

export const Home = () => {
	return (
		<div className="welcome">
			<div className="welcome__img">
				<div className="welcome__img--box" />
			</div>
			<div className="welcome__text">
				<p className="welcome__text--title">¡Bienvenido!</p>
				<p className="welcome__text--title">soy Bryan</p>
				<p className="welcome__text--subtitle">
					Desarrollador web fullstack
					<span className="letter-primary">.</span>
				</p>
			</div>
		</div>
	);
};
