import React from "react";
import PropTypes from 'prop-types';

export default function ItemDetail(props) {
    const { flavor, inStock = 130, price, popularity } = props;

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    function addDetailStr(word) {
        return word + "-detail";
    }

    return (
        <React.Fragment>
            <div class="flavorDetail">
                <div id={addDetailStr(flavor)}>
                    <p>Flavor: {capitalize(flavor)}</p>
                    <p>In Stock: {inStock} scoops</p>
                    <p>Price: ${price}/scoop</p>
                    <p>Popularity: {popularity}</p>
                </div>
                <div class="threeBtns">
                    <button class="btn-purple" onClick={props.clickingAdd}>Add</button>
                    <button class="btn-yellow" onClick={props.clickingSell}>Sell</button>
                    <button class="btn-gray" onClick={props.clickingClose}>Close</button>
                </div>
            </div>
        </React.Fragment>
    )
}

ItemDetail.propTypes = {
    flavor: PropTypes.string.isRequired,
    inStock: PropTypes.number,
    price: PropTypes.number.isRequired,
    popularity: PropTypes.string.isRequired,
    clickingAdd: PropTypes.func,
    clickingSell: PropTypes.func,
    clickingClose: PropTypes.func
};