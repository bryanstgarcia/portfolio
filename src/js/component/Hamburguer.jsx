import React, { useState } from "react";

export const Hamburguer = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div
			className={menuOpen ? `menu-btn open` : `menu-btn`}
			onClick={event => {
				if (menuOpen) {
					setMenuOpen(false);
				} else {
					setMenuOpen(true);
				}
			}}>
			<div className={`menu-btn__burguer`} />
		</div>
	);
};
