import React from "react";
import { Link } from "react-router-dom";

export default () => {
	return (
		<header>
			<nav>
				<Link to="/">ABOUT</Link>
				<Link to="/">OFFER</Link>
				<Link className="logo" to="/" />
				<Link to="/">GALLERY</Link>
				<Link to="/">CONTACT</Link>
			</nav>
		</header>
	);
};
