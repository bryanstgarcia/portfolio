import React from "react";
import Mail from "./../../img/mail-logo.png";
import Linkedin from "./../../img/linkedin-white-logo.png";

export const Contact = () => {
	return (
		<div className="contact">
			<div className="contact__title">
				<h2>
					CONTACTO <span className="letter-strong">.</span>
				</h2>
			</div>
			<div className="contact__linkedin">
				<p className="contact__linkedin--p">
					Si deseas ponerte en contacto conmigo, puedes hacerlo a través de LinkedIn donde me encuentro
					constantemente activo.
				</p>
				<div className="contact__linkedin--logo">
					<a
						href="https://www.linkedin.com/in/bryan-garcia-fullstack/"
						target="_blank"
						rel="noopener noreferrer">
						<img src={Linkedin} alt="Acceso directo Linkedin" />
					</a>
				</div>
			</div>
			<div className="contact__mail">
				<p className="contact__mail--p">
					También puedes enviarme un correo electrónico y te responderé lo más pronto posible.
				</p>
				<div className="contact__mail--btn">
					<a href="mailto:bryanstgarcia@hotmail.com?subject=Portafolio Contact ">
						<img src={Mail} alt="Mail logo" title="Enviar correo electrónico" />
					</a>
				</div>
			</div>
		</div>
	);
};
