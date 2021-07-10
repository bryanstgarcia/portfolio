import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Hamburguer = () => {
	const { store, actions } = useContext(Context);

	return (
		<div
			className={store.hamburguer ? `menu-btn open` : `menu-btn`}
			onClick={event => {
				actions.handleHamburguer();
			}}>
			<div className={`menu-btn__burguer`} />
		</div>
	);
};
