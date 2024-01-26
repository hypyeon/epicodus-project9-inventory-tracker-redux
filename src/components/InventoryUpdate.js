import React from 'react';
import cartImg from '../img/add-inventory.png';

export default function InventoryUpdate(props) {
    const { flavor } = props;
    return (
        <React.Fragment>
            <div class="orderList">
                <div>
                    <img src={cartImg} alt="Added to cart" />
                </div>
                <div>
                    <p>Flavor: {flavor}</p>
                    <p>Bucket to add: <input type="number"></input></p>
                </div>
                <div>
                    <button>Cancel</button>
                </div>
            </div>
        </React.Fragment>
    )
}