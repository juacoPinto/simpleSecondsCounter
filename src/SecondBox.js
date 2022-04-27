import React, { useEffect, useState } from "react";

export const SecondBox = () => {
	const [secondBox, setSecondBox] = useState(0);

	useEffect(() => {
		const timer =
			secondBox >= 0 && setInterval(() => setSecondBox(secondBox + 1), 10000);
		return () => clearInterval(timer);
	}, [secondBox]);

	return <div>{secondBox}</div>;
};
