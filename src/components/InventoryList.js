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
                    {showDetails ? null : <ItemCover flavor="Chocolate" clickingDetail={handleDetailClick}/>}
                    {showDetails && (
                        <ItemDetail flavor="chocolate" price="0.75" popularity="high" onClickingClose={handleDetailClick} />
                    )}
                </div>
                <div id="cherry">
                    {showDetails ? null : <ItemCover flavor="Cherry" clickingDetail={handleDetailClick}/>}
                    {showDetails && (
                        <ItemDetail flavor="cherry" price="1.25" popularity="medium" onClickingClose={handleDetailClick} />
                    )}
                </div>
                <div id="mango">
                    {showDetails ? null : <ItemCover flavor="Mango" clickingDetail={handleDetailClick}/>}
                    {showDetails && (
                        <ItemDetail flavor="mango" price="1.25" popularity="high" onClickingClose={handleDetailClick} />
                    )}
                </div>
                <div id="watermelon">
                    {showDetails ? null : <ItemCover flavor="Watermelon" clickingDetail={handleDetailClick}/>}
                    {showDetails && (
                        <ItemDetail flavor="watermelon" price="0.50" popularity="medium" onClickingClose={handleDetailClick} />
                    )}
                </div>
                <div id="kiwi">
                    {showDetails ? null : <ItemCover flavor="Kiwi" clickingDetail={handleDetailClick}/>}
                    {showDetails && (
                        <ItemDetail flavor="kiwi" price="1.00" popularity="low" onClickingClose={handleDetailClick} />
                    )}
                </div>
                <div id="cookies">
                    {showDetails ? null : <ItemCover flavor="Cookies" clickingDetail={handleDetailClick}/>}
                    {showDetails && (
                        <ItemDetail flavor="cookies" price="0.75" popularity="high" onClickingClose={handleDetailClick} />
                    )}
                </div>
            </div>
        </div>
    )
}