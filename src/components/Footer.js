import React from "react";
import { Link } from "react-router-dom";

export default () => {
	return (
		<footer>
			<p>ⓒ 2018 RASPBERRY KINGDOM</p>
			<div>
				<Link to="/">Cookies</Link>
				<span>|</span>
				<Link to="/">Privacy</Link>
			</div>
			<p>
				Design by <b>Wizard of Oz</b>
			</p>
		</footer>
	);
};
