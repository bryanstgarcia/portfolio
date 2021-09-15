import React from "react";
import { Python } from "./svg/Python.jsx";
import { Flask } from "./svg/Flask.jsx";
import { Sql } from "./svg/Sql.jsx";
import SQL_ALCHEMY from "./../../img/sql-alchemy-logo.png";
import { Npm } from "./svg/Npm.jsx";
import { Postgresql } from "./svg/Postgresql.jsx";
import { RestApi } from "./svg/RestApi.jsx";

export const BackendSkills = () => {
	return (
		<div className="skills-riel">
			<div className="skills-riel__title" id="backend">
				<h3>{`BACKEND`}</h3>
			</div>
			<div className="riel">
				<div className="skills-riel__component">
					<div className="skills-riel__component--img moved" data-title="Python" id="python">
						<div className="component--img">
							<Python />
						</div>
						<h5>Python</h5>
					</div>
					<div className="skills-riel__component--img" data-title="Flask" id="flask">
						<div className="component--img">
							<Flask />
						</div>
						<h5>Flask</h5>
					</div>
					<div className="skills-riel__component--img" data-title="sql" id="sql">
						<div className="component--img">
							<Sql />
						</div>
						<h5>SQL</h5>
					</div>
					<div className="skills-riel__component--img" data-title="sql-alchemy" id="alchemy">
						<img src={SQL_ALCHEMY} alt="SQL Alchemy" title="SQL ALchemy" className="component--img" />
						<h5>SQL Alchemy</h5>
					</div>
					<div className="skills-riel__component--img" data-title="npm" id="npm">
						<div className="component--img">
							<Npm />
						</div>
						<h5>NPM</h5>
					</div>
					<div className="skills-riel__component--img" data-title="postgres" id="postgres">
						<div className="component--img">
							<Postgresql />
						</div>
						<h5>PostgreSQL</h5>
					</div>
					<div className="skills-riel__component--img" data-title="rest-api" id="api">
						<div className="component--img">
							<RestApi color="FFFFFF" />
						</div>
						<h5>REST:API</h5>
					</div>
					<div className="skills-riel__component--img" id="empty" />
				</div>
			</div>
		</div>
	);
};
