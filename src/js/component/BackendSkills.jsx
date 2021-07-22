import React from "react";
import PYTHON from "./../../img/python-logo.png";
import FLASK from "./../../img/flask-logo.png";
import SQL from "./../../img/sql-logo.png";
import SQL_ALCHEMY from "./../../img/sql-alchemy-logo.png";
import POSTGRESQL from "./../../img/postgres-logo.png";
import NPM from "./../../img/npm-logo.png";
import REST_API from "./../../img/rest-api-logo.png";

export const BackendSkills = () => {
	return (
		<div className="skills-riel">
			<div className="skills-riel__title" id="backend">
				<h3>{`BACKEND`}</h3>
			</div>
			<div className="riel">
				<div className="skills-riel__component">
					<div className="skills-riel__component--img moved" data-title="Python" id="python">
						<img src={PYTHON} alt="Python" title="Python" className="component--img" />
						<h5>Python</h5>
					</div>
					<div className="skills-riel__component--img" data-title="Flask" id="flask">
						<img src={FLASK} alt="Flask" title="Flask" className="component--img" />
						<h5>Flask</h5>
					</div>
					<div className="skills-riel__component--img img-bigger" data-title="sql" id="sql">
						<img src={SQL} alt="SQL" title="Structured Query Language" className="component--img" />
						<h5>SQL</h5>
					</div>
					<div className="skills-riel__component--img img-bigger" data-title="sql-alchemy" id="alchemy">
						<img src={SQL_ALCHEMY} alt="SQL Alchemy" title="SQL ALchemy" className="component--img" />
						<h5>SQL Alchemy</h5>
					</div>
					<div className="skills-riel__component--img img-bigger" data-title="npm" id="npm">
						<img
							src={NPM}
							alt="Node Package Manager"
							title="Node Package Manager"
							className="component--img"
						/>
						<h5>NPM</h5>
					</div>
					<div className="skills-riel__component--img" data-title="postgres" id="postgres">
						<img
							src={POSTGRESQL}
							alt="PostgreSQL"
							title="PostgreSQL: Gestión de base de datos relacional"
							className="component--img"
						/>
						<h5>PostgreSQL</h5>
					</div>
					<div className="skills-riel__component--img" data-title="rest-api" id="api">
						<img src={REST_API} alt="REST API" title="REST API" className="component--img" />
						<h5>REST:API</h5>
					</div>
					<div className="skills-riel__component--img" id="empty" />
				</div>
			</div>
		</div>
	);
};
