import "./App.scss";
import { Container } from "react-bootstrap";
import HeroSection from "../src/Components/HeroSection";
import Header from "../src/Components/Header";
import React, { useState } from "react";

function App() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<div className="App">
			<Container>
				<Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
				<HeroSection />
			</Container>
		</div>
	);
}

export default App;
