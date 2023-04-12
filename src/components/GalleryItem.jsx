import React from "react";

const GalleryItem = ({ item }) => {
	return(
		<img className={
			"object-contain object-center w-full h-full aspect-square p-3"
		} src={item} alt={"imagen"} />
	);
};

export default GalleryItem;
