import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/Shop/Shop";

function App() {
	return (
		<main>
			<Switch>
				<Route exact path="/" component={HomePage} />

				<Route path="/shop" component={ShopPage} />
			</Switch>
		</main>
	);
}

export default App;
