import React, { useState } from "react";

export const About = () => {
	const [seeMore, setSeeMore] = useState(false);
	return (
		<div className="about">
			<div className="about__title">
				<h2 className="about__title--font" id="about-me">
					ACERCA DE MÍ
					<span className="letter-strong">.</span>
				</h2>
			</div>
			<div className="about__info">
				<p className="">
					<span className="letter-strong">{`Mi nombre es Bryan García y soy desarrollador web frontend.`}</span>
					{` Me considero una persona observadora, detallista y me gusta reflejar eso a través del código. Lo
					mucho que la tecnología puede impactar la vida de las personas es algo de lo que soy consciente y es
					por eso que me apasiona el desarrollo de software.`}
				</p>
				<p className={seeMore ? `open__see-more` : `close__see-more`}>
					{`
					
					Me adentré en el desarrollo web hace un par de años cuando comencé a aprender HTML y CSS de manera autodidacta.Con el tiempo, me di cuenta cuánto me apasionaba la programación y fue cuando decidí entrar de lleno a aprender mucho más. Actualmente continuo aprendiendo día a día y mejorando mis habilidades.

					A pesar de que me siento, en buena parte, atraído por el frontend, también me gusta enfrentar retos con backend donde siempre puedes aprender cosas nuevas.
					
					`}
				</p>
				<p
					className={`about__info--see-more letter-strong`}
					onClick={event => {
						if (seeMore) {
							setSeeMore(false);
						} else {
							setSeeMore(true);
						}
					}}>
					{seeMore ? ` menos...` : `ver más...`}
				</p>
			</div>
		</div>
	);
};
