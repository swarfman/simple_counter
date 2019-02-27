import React from "react";

function myTimer() {
	var d = new Date();
	var displaySeconds = d.toLocaleTimeString();
	console.log(displaySeconds);
	return displaySeconds;
}
setInterval(myTimer, 1000);

export class Seconds extends React.component {
	//     setInterval(myTimer, 1000);
	// 	myTimer() {
	// 		var d = new Date();
	// 		var displaySeconds = d.toLocaleTimeString();
	// 		console.log(displaySeconds);
	// 		return displaySeconds;
	// 	}
	render() {
		return (
			<div>
				<div>{setInterval(myTimer, 1000)}</div>
			</div>
		);
	}
}
