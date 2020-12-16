import React from "react";
import "./Header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";

const Header = () => {
	const navOptions = [
		{ name: "shop", link: "/shop" },
		{ name: "contact", link: "/contact" },
	];
	return (
		<div className="header container">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
			<nav className="nav">
				{navOptions.map(({ name, link }) => (
					<Link key={name} className="nav-item" to={link}>
						{name.toUpperCase()}
					</Link>
				))}
			</nav>
		</div>
	);
};

export default Header;
