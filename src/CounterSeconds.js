import React, { Fragment, useEffect, useState } from "react";
import { FirstBox } from "./FirstBox";
import { SecondBox } from "./SecondBox";
import { ThirdBox } from "./ThirdBox";

export const CounterSeconds = () => {
	return (
		<Fragment>
			<h1>Seconds Counter</h1>
			<br />
			<div className="d-flex p-2 justify-content-between bg-dark">
				<div className="border border-light text-light">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-clock"
						width="72"
						height="72"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="#ffffff"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<circle cx="12" cy="12" r="9" />
						<polyline points="12 7 12 12 15 15" />
					</svg>
				</div>
				<div className="border border-light text-light boxItem">0</div>
				<div className="border border-light text-light boxItem">0</div>
				<div className="border border-light text-light boxItem">0</div>
				<div className="border border-light text-light boxItem">
					<ThirdBox />
				</div>
				<div className="border border-light text-light boxItem">
					<SecondBox />
				</div>
				<div className="border border-light text-light boxItem">
					<FirstBox />
				</div>
			</div>
		</Fragment>
	);
};
