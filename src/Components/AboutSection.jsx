import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutSection = () => {
	return (
		<section id="about">
			<Container className="about-section-wrapper">
				<Row className="d-flex align-items-center">
					<Col
						xs={6}
						className="d-flex flex-column justify-content-center"
					>
						<h1>About My Work</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse pulvinar diam a accumsan maximus.
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Nam suscipit quam enim, a dapibus tellus
							ultrices id. Praesent neque nunc, commodo at
							vulputate in, sodales id nulla. Fusce finibus
							fermentum ultricies. Proin ut tortor convallis,
							sodales magna non, mollis orci. Donec molestie
							porttitor imperdiet. Suspendisse erat.
						</p>
						<a href="/">Learn More</a>
					</Col>
					<Col xs={6} className="about-img-wrapper">
						<img alt="hand" src={`src/assets/images/hands.jpg`} />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default AboutSection;
