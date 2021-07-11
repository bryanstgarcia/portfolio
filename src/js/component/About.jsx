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
					<span className="letter-strong">{`Mi nombre es Bryan García y soy desarrollador web fullstack.`}</span>
					{` Me considero una persona observadora, detallista y me gusta reflejar eso a través del código. Lo
					mucho que la tecnología puede impactar la vida de las personas es algo de lo que soy consciente y es
					por eso que me apasiona el desarrollo de software.`}
				</p>
				<p className={seeMore ? `open__see-more` : `close__see-more`}>
					{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum distinctio odio et ex? In recusandae
					optio, facere quas delectus molestiae maiores doloremque, necessitatibus, cupiditate non nihil
					molestias facilis quos labore.`}
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
					{seeMore ? ` menos...` : `ver mas...`}
				</p>
			</div>
		</div>
	);
};
