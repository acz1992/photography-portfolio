import "./App.scss";
import { Container } from "react-bootstrap";
import HeroSection from "../src/Components/HeroSection";
import Header from "../src/Components/Header";
import React, { useState } from "react";
import MenuOverlay from "./Components/MenuOverlay";
import ImagesCollection from "./Components/ImagesCollection";
import InformationSection from "./Components/InformationSection";

function App() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<div className="App">
			<Container>
				<Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
				<MenuOverlay
					navbarOpen={navbarOpen}
					setNavbarOpen={setNavbarOpen}
				/>
				<HeroSection />
				<InformationSection />
				<ImagesCollection />
			</Container>
		</div>
	);
}

export default App;
