import "./App.scss";
import { Container, Row, Col } from "react-bootstrap";
import HeroSection from "../src/Components/HeroSection";
import Header from "../src/Components/Header";
import React, { useState } from "react";
import MenuOverlay from "./Components/MenuOverlay";
import ImagesCollection from "./Components/ImagesCollection";
import InformationSection from "./Components/InformationSection";
import ContactForm from "./Components/ContactForm";

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
				<Container className="footer-section">
					<Row>
						<div className="">
							<img
								src="../src/assets/images/hand-holding-camera.jpg"
								alt="hand holding camera"
							/>
						</div>
					</Row>
					<Row className="my-3">
						<Col>
							<ContactForm />
						</Col>
					</Row>
				</Container>
			</Container>
		</div>
	);
}

export default App;
