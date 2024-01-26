import React, { useState } from "react";
import chocolateImg from '../img/flavor-chocolate.png';
import cherryImg from '../img/flavor-cherry.png';
import mangoImg from '../img/flavor-mango.png';
import watermelonImg from '../img/flavor-watermelon.png';
import kiwiImg from '../img/flavor-kiwi.png';
import cookiesImg from '../img/flavor-cookies.png';
import PropTypes from 'prop-types';

export default function ItemCreator(props) {
    const { flavor, inStock, price, popularity } = props;
    let image;
    const [showCover, setVisibility] = useState(true);

    function coverIdMaker(word) {
        return word.toLowerCase() + "-cover";
    }
    function detailIdMaker(word) {
        return word.toLowerCase() + "-detail";
    }
    function altMaker(word) {
        return word + " Image";
    }

    switch (flavor) {
        case "Chocolate": 
            image = chocolateImg;
            break;
        case "Cherry":
            image = cherryImg;
            break;
        case "Mango":
            image = mangoImg;
            break;
        case "Watermelon":
            image = watermelonImg;
            break;
        case "Kiwi":
            image = kiwiImg;
            break;
        case "Cookies":
            image = cookiesImg;
            break;
        default:
            break;
    }

    return (
        <div className={showCover ? "flavorCover" : "flavorDetail"} onClick={() => setVisibility(!showCover)}>
            {showCover ? (
                <React.Fragment>
                    <div id={coverIdMaker(flavor)}>
                        <div className="coverImg">
                            <img src={image} alt={altMaker(flavor)} />
                        </div>
                        <div className="flavorName">
                            <p>{flavor}</p>
                        </div>
                    </div>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <div id={detailIdMaker(flavor)}>
                        <div>
                            <p>Flavor: {flavor}</p>
                            <p>In Stock: {inStock} scoops</p>
                            <p>Price: ${price}/scoop</p>
                            <p>Popularity: {popularity}</p>
                        </div>
                        <div className="threeBtns">
                            <button className="btn-purple" onClickAdd={props.onClickAdd}>Add</button>
                            <button className="btn-yellow" onClickSell={props.onClickSell}>Sell</button>
                            <button className="btn-gray" onClick={() => setVisibility(!showCover)}>Close</button>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>
    );
}

ItemCreator.propTypes = {
    flavor: PropTypes.string.isRequired,
    inStock: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    popularity: PropTypes.string.isRequired,
    onClickAdd: PropTypes.func,
    onClickSell: PropTypes.func
};