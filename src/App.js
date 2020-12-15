import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

const HatsPage = () => (
	<div>
		<h1>HATSSSSSSSSSSSSSSSSSSSSS</h1>
	</div>
);

const JacketsPage = () => (
	<div>
		<h1>JACKETSSSSSS</h1>
	</div>
);

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop/hats" component={HatsPage} />
				<Route path="/shop/jackets" component={JacketsPage} />
			</Switch>
		</>
	);
}

export default App;
