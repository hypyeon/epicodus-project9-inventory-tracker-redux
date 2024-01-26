import React, { useState } from 'react';
import ItemCover from "./ItemCover";
import ItemDetail from "./ItemDetail";
import { v4 } from 'uuid'; 

export default function InventoryList() {
    const [selectedItemId, setSelectedItemId] = useState(null);
    const handleDetailClick = (itemId) => {
        setSelectedItemId(itemId);
    };
    const handleDetailClose = () => {
        setSelectedItemId(null);
    };
    const inventoryItems = [
        { id: v4(), flavor: "Chocolate", price: 0.75, popularity: "high" },
        { id: v4(), flavor: "Cherry", price: 1.25, popularity: "medium" },
        { id: v4(), flavor: "Mango", price: 1.25, popularity: "high" },
        { id: v4(), flavor: "Watermelon", price: 0.50, popularity: "medium" },
        { id: v4(), flavor: "Kiwi", price: 1.00, popularity: "low" },
        { id: v4(), flavor: "Cookies", price: 0.75, popularity: "high" }
    ]
    return (
        <div id="inventory">
            <h2>Inventory</h2>
            <div id="fullList">
                {inventoryItems.map(item => (
                    <div key={item.id} id={item.flavor}>
                        {selectedItemId === item.id ? (
                            <ItemDetail 
                                flavor={item.flavor}
                                price={item.price}
                                popularity={item.popularity}
                                onClickClose={handleDetailClose}
                            />
                        ) : (
                            <ItemCover 
                                flavor={item.flavor}
                                onClickDetail={() => handleDetailClick(item.id)}
                            />
                        )}
                    </div>
                ))};
            </div>
        </div>
    );
}