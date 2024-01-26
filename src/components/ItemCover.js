import React from "react";
import chocolateImg from '../img/flavor-chocolate.png';
import cherryImg from '../img/flavor-cherry.png';
import mangoImg from '../img/flavor-mango.png';
import watermelonImg from '../img/flavor-watermelon.png';
import kiwiImg from '../img/flavor-kiwi.png';
import cookiesImg from '../img/flavor-cookies.png';
import PropTypes from 'prop-types';

export default function ItemCover(props) {
    let { flavor, image } = props;
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
            <div class="flavorCover" onClick={props.onClickDetail}>
                <div class="coverImg">
                    <img src={image}/>
                </div>
                <div class="flavorName">
                    <p>{flavor}</p>
                </div>
            </div>
        </React.Fragment>
    );
}

ItemCover.propTypes = {
    flavor: PropTypes.string.isRequired,
    image: PropTypes.string,
    onClickDetail: PropTypes.func.isRequired
};