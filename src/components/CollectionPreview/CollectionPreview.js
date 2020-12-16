import React from "react";
import "./CollectionPreview.styles.scss";
import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionPreview = ({ title, items }) => {
	return (
		<section className="collection-preview container">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items.map(({ id, ...otherItemProps }) => (
					<CollectionItem key={id} {...otherItemProps} />
				))}
			</div>
		</section>
	);
};

export default CollectionPreview;
