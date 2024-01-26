import React from 'react';
import { v4 } from 'uuid'; 
import ItemCreator from './ItemCreator';
import PropTypes from 'prop-types';

export default function InventoryList(props) {
    const { onClickAdd, onClickSell, quantity } = props;

    const inventoryItems = [
        { id: v4(), flavor: "Chocolate", price: 0.75, popularity: "High" },
        { id: v4(), flavor: "Cherry", price: 1.25, popularity: "Medium" },
        { id: v4(), flavor: "Mango", price: 1.25, popularity: "High" },
        { id: v4(), flavor: "Watermelon", price: 0.50, popularity: "Medium" },
        { id: v4(), flavor: "Kiwi", price: 1.00, popularity: "Low" },
        { id: v4(), flavor: "Cookies", price: 0.75, popularity: "High" }
    ]
    return (
        <div id="inventory">
            <h2>Inventory</h2>
            <div id="fullList">
                {inventoryItems.map(item => 
                    <div key={item.id} id={item.flavor}>
                        <ItemCreator  
                            flavor={item.flavor}
                            price={item.price}
                            inStock={quantity}
                            popularity={item.popularity}
                            onClickAdd={onClickAdd}
                            onClickSell={onClickSell}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

InventoryList.propTypes = {
    onClickAdd: PropTypes.func.isRequired,
    onClickSell: PropTypes.func.isRequired,
    quantity: PropTypes.number.isRequired
}