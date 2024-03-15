import React from "react";
import { HashLink } from "react-router-hash-link";

const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
	return (
		<nav className={`menu-container ${navbarOpen ? "expanded" : ""} `}>
			<ul className="menu-list">
				<li className="nav-li">
					<a
						href="/"
						className="nav-link"
						onClick={() => setNavbarOpen(false)}
					>
						Home
					</a>
				</li>
				<li className="nav-li">
					<HashLink to="#about" smooth>
						<p
							className="nav-link"
							onClick={() => setNavbarOpen(false)}
						>
							About
						</p>
					</HashLink>
					{/* <a
						href="#about"
						className="nav-link"
						onClick={() => setNavbarOpen(false)}
					>
						About
					</a> */}
				</li>
			</ul>
		</nav>
	);
};

export default MenuOverlay;
