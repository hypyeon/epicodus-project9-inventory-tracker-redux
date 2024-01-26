import React from "react";
import PropTypes from 'prop-types';

export default function ItemDetail(props) {
    const { flavor, inStock = 130, price, popularity } = props;
    return (
        <React.Fragment>
            <div className="flavorDetail">
                <div>
                    <p>Flavor: {flavor}</p>
                    <p>In Stock: {inStock} scoops</p>
                    <p>Price: ${price}/scoop</p>
                    <p>Popularity: {popularity}</p>
                </div>
                <div className="threeBtns">
                    <button className="btn-purple" onClick={props.onClickAdd}>Add</button>
                    <button className="btn-yellow" onClick={props.onClickSell}>Sell</button>
                    <button className="btn-gray" onClick={props.onClickClose}>Close</button>
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
    onClickAdd: PropTypes.func,
    onClickSell: PropTypes.func,
    onClickClose: PropTypes.func
};