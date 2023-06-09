import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import GalleryItem from "./GalleryItem.jsx";

const Gallery = () => {
	const navigate = () => {
	};
	return(
		<div className={
			"bg-cyan-800 text-white font-5xl p-5 block"
		} > 
			<div className={
				"p-5"
			} >
				<h2 className={
					"text-white text-2xl"
				} >
					Nuestros productos:
				</h2>
			</div>
			<div className={
				"flex flex-1 flex-row w-full h-48 justify-evenly items-center"
			} >
				<GalleryItem item={logo} />
				<GalleryItem item={logo} />
				<GalleryItem item={logo} />
				<GalleryItem item={logo} />
				<Link to={"/empresa-rara/productos"} className={
					"rounded-xl bg-blue-900 h-full w-full text-lg"
				} >
					<button className={
						"rounded-xl bg-blue-900 h-full w-full text-lg"
					} >
						Ver más
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Gallery;
