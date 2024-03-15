import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	/* 	const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
	const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
	const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY; */

	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
				publicKey: "YOUR_PUBLIC_KEY",
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};

	return (
		<div className="contact-form-section-container d-flex flex-column">
			<h1>
				<span>Curiosity,</span>
				<br />
				piqued.
			</h1>
			<form ref={form} onSubmit={sendEmail}>
				{/* <div className="name-input d-flex">
					<label>Name</label>
					<input type="text" name="user_name" />
				</div> */}
				<div className="email-input d-flex">
					<input type="email" placeholder="Your email" />
					<button type="submit">
						<FaArrowRight height={20} />
					</button>
				</div>
				{/* 	<div className="message-input d-flex">
					<label>Message</label>
					<textarea name="message" />
					<input type="submit" value="Send" />
				</div> */}
			</form>
			<p>
				Contact me to be the first to know about photo collection
				launches, promotions and more
			</p>
		</div>
	);
};

export default ContactForm;
