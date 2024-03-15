import { Container, Row, Col, Button } from "react-bootstrap";
import React from "react";

const HeroSection = () => {
	return (
		<div>
			<Container className="hero-section-container">
				<Row className="h-100">
					<Col
						xs
						md="8"
						className="d-flex flex-column justify-content-center text-start px-4"
					>
						<div className="mx-4">
							<h1>Photography Portfolio and My Projects</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor icididunt
								ut labore et dolore magna aliqua. Ut enim ad
								minimm veniam, quis nistrad exercitation ullamco
								labors nisi ut aliquip ex ea commodo consequat.{" "}
							</p>
							<div className="btns-wrapper px-4 d-flex align-items-center">
								<a href="/">Read my Blog</a>
								<Button variant="secondary">Learn More</Button>
							</div>
						</div>
					</Col>
					<Col xs md="4">
						<div className="img-wrapper"></div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default HeroSection;
