import "./App.scss";
import { Container, Row, Col } from "react-bootstrap";
import HeroSection from "../src/Components/HeroSection";
import Header from "../src/Components/Header";
import React, { useState } from "react";
import MenuOverlay from "./Components/MenuOverlay";
import ImagesCollection from "./Components/ImagesCollection";
import InformationSection from "./Components/InformationSection";
import ContactForm from "./Components/ContactForm";
import FooterMenu from "./Components/FooterMenu";
import AboutSection from "./Components/AboutSection";

function App() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<div className="App">
			<Container fluid>
				<Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
				<MenuOverlay
					navbarOpen={navbarOpen}
					setNavbarOpen={setNavbarOpen}
				/>
				<HeroSection />
				<InformationSection />
				<ImagesCollection />
				<AboutSection />
				<Container className="footer-section">
					<Row>
						<div className="contact-us-img">
							<img
								src="../src/assets/images/hand-holding-camera.jpg"
								alt="hand holding camera"
							/>
						</div>
					</Row>
					<Row className="my-3">
						<Col xs={12} md={6}>
							<ContactForm />
						</Col>
						<Col xs={12} md={6}>
							<FooterMenu />
						</Col>
					</Row>
				</Container>
			</Container>
		</div>
	);
}

export default App;
