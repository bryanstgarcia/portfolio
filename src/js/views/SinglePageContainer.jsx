import React, { useContext } from "react";
import { Home } from "../component/Home.jsx";
import { Context } from "../store/appContext.js";

export const SinglePageContainer = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="main-container">
			<Home />
		</div>
	);
};
