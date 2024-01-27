import React from "react";
import chocolateImg from '../img/flavor-chocolate.png';
import cherryImg from '../img/flavor-cherry.png';
import mangoImg from '../img/flavor-mango.png';
import watermelonImg from '../img/flavor-watermelon.png';
import kiwiImg from '../img/flavor-kiwi.png';
import cookiesImg from '../img/flavor-cookies.png';
import PropTypes from 'prop-types';

function ItemCover(props) {
    const { flavor } = props;
    let image;

    function coverIdMaker(word) {
        return word.toLowerCase() + "-cover";
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
        <React.Fragment>
            <div 
                className="flavorCover" 
                onClick={props.onClickDetail}
                id={coverIdMaker(flavor)}
            >
                <img src={image} alt={altMaker(flavor)} />
                <p>{flavor}</p>
            </div>
        </React.Fragment>
    );
}

function ItemDetail(props) {
    const { flavor, inStock, price, popularity } = props;
    function detailIdMaker(word) {
        return word.toLowerCase() + "-detail";
    }
    return (
        <React.Fragment>
            <div className="flavorDetail">
                <div id={detailIdMaker(flavor)}>
                    <p>Flavor: {flavor}</p>
                    <p>In Stock: {inStock} scoops</p>
                    <p>Price: ${price}/scoop</p>
                    <p>Popularity: {popularity}</p>
                </div>
                <div className="threeBtns">
                    { /* <button className="btn-purple" onClickAdd={props.onClickAdd}>Add</button> */ }
                    <button 
                        className="btn-yellow" 
                        onClick={props.onClickSell}
                    >Sell</button>
                    <button 
                        className="btn-gray" 
                        onClick={props.onClickClose}
                    >Close</button>
                </div>
            </div>
        </React.Fragment>
    )
}

ItemCover.propTypes = {
    flavor: PropTypes.string.isRequired,
    onClickDetail: PropTypes.func
};

ItemDetail.propTypes = {
    flavor: PropTypes.string.isRequired,
    inStock: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    popularity: PropTypes.string.isRequired,
    onClickSell: PropTypes.func,
    onClickClose: PropTypes.func
};

export { ItemCover, ItemDetail };