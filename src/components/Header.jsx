import React from "react";
import logo from "../assets/react.svg";

const Header = () => {
	return(
		<div className={
			"grid grid-cols-2 gap-5 place-items-center bg-blue-800 text-white h-48 w-full p-4"
		} >
			<h1 className={
				"text-3xl object-center"
			} >
				Sirviendo desde 1998.
			</h1>
			<img src={logo} alt={"Logo de la empresa."} className={
				"w-full h-full object-contain object-center"
			} />
		</div>
	);
};

export default Header;

