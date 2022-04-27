import React, { useEffect, useState } from "react";

export const ThirdBox = () => {
	const [thirdBox, setThirdBox] = useState(0);

	useEffect(() => {
		const timer =
			thirdBox >= 0 && setInterval(() => setThirdBox(thirdBox + 1), 100000);
		return () => clearInterval(timer);
	}, [thirdBox]);

	return <div>{thirdBox}</div>;
};
