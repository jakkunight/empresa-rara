import React from "react";
import Index from "./routes/Index";
import Products from "./routes/Products";
import {
	createBrowserRouter,
	RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/empresa-rara",
		element: <Index />
	},
	{
		path: "/empresa-rara/productos",
		element: <Products />
	},
]);

const App = () => {
	return(
		<div>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
