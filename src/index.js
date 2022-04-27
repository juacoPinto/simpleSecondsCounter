import React from "react";
import ReactDOM from "react-dom/client";
import { CounterSeconds } from "./CounterSeconds";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<CounterSeconds />
	</React.StrictMode>
);
