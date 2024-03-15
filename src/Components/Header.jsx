import React from "react";
import { Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const Header = ({ navbarOpen, setNavbarOpen }) => {
	return (
		<div
			className="d-flex header justify-content-between align-items-center"
			onClick={() => setNavbarOpen((prevNavbarOpen) => !prevNavbarOpen)}
		>
			<button className={navbarOpen ? "menu-btn expanded" : "menu-btn"}>
				<div className="menu-icon-container">
					<span className="icon-line"></span>
					<span className="icon-line"></span>
					<span className="icon-line"></span>
				</div>
			</button>
			<div className="logo">
				MJBeers
				<br /> Photography
			</div>
			<div className="contact-btn">
				<HashLink to="#contact" smooth>
					<Button variant="primary">Get a Quote</Button>
				</HashLink>
			</div>
		</div>
	);
};

export default Header;
