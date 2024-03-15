import React from "react";

const ImagesCollection = () => {
	const imagesList = [...new Array(9)].map(
		(number, index) => `../../src/assets/images/image-${index + 1}.jpg`
	);
	console.log(imagesList);

	return (
		<>
			<ul className="images-collection-container">
				{imagesList.map((imgUrl, index) => {
					return (
						<li
							className={
								index % 2 === 0 ? "item short" : "item tall"
							}
							key={index}
						>
							<figure>
								<img src={imgUrl} alt="collection" />
							</figure>
						</li>
					);
				})}
			</ul>
			<div className="d-flex mb-2">
				<a href="/" className="mx-auto fs-3">
					View More
				</a>
			</div>
		</>
	);
};

export default ImagesCollection;
