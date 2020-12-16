import React, { Component } from "react";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import SHOP_DATA from "./shop.data";

class ShopPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<div className="shop-page">
				{/* <h1>{"shop page".toUpperCase()}</h1> */}
				{collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
			</div>
		);
	}
}

export default ShopPage;
