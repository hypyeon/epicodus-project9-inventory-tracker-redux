import React from 'react';
import { inventoryItems } from './InventoryList';
import { ItemCover, ItemDetail } from './ItemCreator';
// import InventoryUpdate from './InventoryUpdate';

export default class InventoryControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inStockValues: inventoryItems.reduce((acc, item) => {
                acc[item.flavor] = 130;
                return acc;
            }, {}),
            detailRequested: {}
        };
    }
    handleDetailBtn = (item) => {
        this.setState((prevState) => {
            const { detailRequested } = prevState;
            return {
                detailRequested: {
                    ...detailRequested,
                    [item.flavor]: true
                }
            };
        });
    }
    handleCloseBtn = (item) => {
        this.setState((prevState) => {
            const { detailRequested } = prevState;
            return {
                detailRequested: {
                    ...detailRequested,
                    [item.flavor]: false
                }
            };
        });
    } 
    handleSellBtn = (item) => {
        const { inStockValues } = this.state;
        if (inStockValues[item.flavor] > 0) {
            const updatedInventoryItems = [...inventoryItems];
            updatedInventoryItems.forEach((inventoryItem) => {
                if (inventoryItem.flavor === item.flavor) {
                    inventoryItem.inStock -= 1;
                }
            });

            // saving the new stock value
            this.setState({
                inventoryItems: updatedInventoryItems,
                inStockValues: {
                    ...inStockValues,
                    [item.flavor]: inStockValues[item.flavor] - 1
                }
            });
        }
    }

    render() {
        const { detailRequested, inStockValues } = this.state;

        const itemList = inventoryItems.map((item) => {
            const isDetailVisible = detailRequested[item.flavor];
            return isDetailVisible ? (
                <ItemDetail 
                    key={item.id}
                    flavor={item.flavor}
                    inStock={inStockValues[item.flavor]}
                    price={item.price}
                    popularity={item.popularity}
                    onClickClose={() => this.handleCloseBtn(item)}
                    onClickSell={() => this.handleSellBtn(item)}
                />
            ) : (
                <ItemCover 
                    key={item.id}
                    flavor={item.flavor}
                    onClickDetail={() => this.handleDetailBtn(item)}
                />
            )
        })

        return (
            <React.Fragment>
                <main>
                    <div id="inventory">
                        <h2>Inventory</h2>
                        <div id="fullList">
                            {itemList}
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}