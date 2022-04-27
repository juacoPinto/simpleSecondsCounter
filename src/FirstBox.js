import React, { useEffect, useState } from "react";

export const FirstBox = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const timer =
			counter >= 0 && setInterval(() => setCounter(counter + 1), 1000);
		return () => clearInterval(timer);
	}, [counter]);

	return <div>{counter}</div>;
};
