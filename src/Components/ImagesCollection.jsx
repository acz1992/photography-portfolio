import React from "react";

const ImagesCollection = () => {
	const imagesList = [...new Array(9)].map(
		(number, index) => `/assets/images/image-${index + 1}.jpg`
	);

	return (
		<ul className="images-collection-container">
			{imagesList.map((imgUrl, index) => {
				return (
					<li className="item" key={index}>
						<figure>
							<img src={imgUrl} alt="collection" />
						</figure>
					</li>
				);
			})}
		</ul>
	);
};

export default ImagesCollection;
