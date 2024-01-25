import React from "react";

export default function ItemCreator(props) {
    const { flavor, inStock = 130, price, popularity } = props;

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <React.Fragment>
            <div id={flavor}>
                <p>Flavor: {capitalize(flavor)}</p>
                <p>In Stock: {inStock} scoops</p>
                <p>Price: ${price}/scoop</p>
                <p>Popularity: {popularity}</p>
            </div>
        </React.Fragment>
    )
}