import React from "react";
import logo from "../assets/react.svg";
import GalleryItem from "./GalleryItem.jsx";

const Gallery = () => {
	return(
		<div className={
			"bg-sky-400 text-white font-5xl p-5 block"
		} > 
			<div className={
				"p-5"
			} >
				<h2 className={
					"text-white text-2xl"
				} >
					Nuestros valores:
				</h2>
			</div>
			<div className={
				"flex flex-1 flex-row w-full h-48 justify-evenly items-center"
			} >
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					Cras sed egestas dolor. Fusce sed laoreet erat. Pellentesque ut risus leo. 
					Donec quis mi iaculis, pharetra ligula interdum, pellentesque justo. 
					Pellentesque elementum mi mi, eget ornare libero sodales vestibulum. 
					Proin in magna vitae felis fringilla congue vitae ut tortor. 
					Nulla vitae purus velit. In sollicitudin interdum orci, ut feugiat nibh tempus in. 
					Nullam scelerisque eget turpis sit amet luctus. Phasellus in ex nulla.
				</p>
				<button className={
					"rounded-xl bg-blue-900 h-full w-full text-lg"
				} >
					Ver más
				</button>
			</div>
		</div>
	);
};

export default Gallery;
