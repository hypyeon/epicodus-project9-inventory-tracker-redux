import React, { useState } from 'react';
import ItemCover from "./ItemCover";
import ItemDetail from "./ItemDetail";

export default function InventoryList() {
    const [showDetails, setShowDetails] = useState(false);
    const handleDetailClick = () => {
        setShowDetails(!showDetails);
    };
    return (
        <div id="inventory">
            <h2>Inventory</h2>
            <div id="fullList">
                <div id="chocolate">
                    <ItemCover flavor="Chocolate" onClick={handleDetailClick}/>
                    {showDetails && (
                        <ItemDetail flavor="chocolate" price="0.75" popularity="high" />
                    )}
                </div>
                <div id="cherry">
                    <ItemCover flavor="Cherry" onClick={handleDetailClick}/>
                    {showDetails && (
                        <ItemDetail flavor="cherry" price="1.25" popularity="medium" />
                    )}
                </div>
                <div id="mango">
                    <ItemCover flavor="Mango" onClick={handleDetailClick}/>
                    {showDetails && (
                        <ItemDetail flavor="mango" price="1.25" popularity="high" />
                    )}
                </div>
                <div id="watermelon">
                    <ItemCover flavor="Watermelon" onClick={handleDetailClick}/>
                    {showDetails && (
                        <ItemDetail flavor="watermelon" price="0.50" popularity="medium" />
                    )}
                </div>
                <div id="kiwi">
                    <ItemCover flavor="Kiwi" onClick={handleDetailClick}/>
                    {showDetails && (
                        <ItemDetail flavor="kiwi" price="1.00" popularity="low" />
                    )}
                </div>
                <div id="cookies">
                    <ItemCover flavor="Cookies" onClick={handleDetailClick}/>
                    {showDetails && (
                        <ItemDetail flavor="cookies" price="0.75" popularity="high" />
                    )}
                </div>
            </div>
        </div>
    )
}