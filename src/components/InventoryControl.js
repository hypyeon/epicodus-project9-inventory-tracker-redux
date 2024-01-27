import React from 'react';
import { inventoryItems } from './InventoryList';
import { ItemCover, ItemDetail } from './ItemCreator';
import InventoryUpdate from './InventoryUpdate';

export default class InventoryControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inStockValues: inventoryItems.reduce((acc, item) => {
                acc[item.flavor] = 130;
                return acc;
            }, {}),
            detailRequested: {},
            itemToAddStock: []
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
    handleAddBtn = (item) => {
        const { itemToAddStock } = this.state;
        let alreadyHasIt = false;
        for (let i = 0; i < itemToAddStock.length; i++) {
            if (itemToAddStock[i][0] === item.id && itemToAddStock[i][1] === item.flavor) {
                alreadyHasIt = true;
                break;
            }
        }
        if (!alreadyHasIt) {
            const updatedItemToAddStock = [...itemToAddStock, [item.id, item.flavor]];
            this.setState({
                itemToAddStock: updatedItemToAddStock
            });
        } else {
            this.setState({
                itemToAddStock: itemToAddStock
            });
        }
    }
    handleUpdateBtn = (e, item) => {
        const { inStockValues } = this.state;
        const quantity = e.target.value;
        const updatedInventoryItems = [...inventoryItems];
        updatedInventoryItems.forEach((inventoryItem) => {
            if (inventoryItem.flavor === item.flavor) {
                inventoryItem.inStock += (quantity * 130);
            }
        });

        // saving the new stock value
        this.setState({
            inventoryItems: updatedInventoryItems,
            inStockValues: {
                ...inStockValues,
                [item.flavor]: inStockValues[item.flavor] + (quantity * 130)
            }
        });
    }
    handleRemoveBtn = (item) => {
        this.setState((prevState) => {
            const { itemToAddStock } = prevState;
            const updatedItemToAddStock = itemToAddStock.filter((currentItem) => currentItem !== item);
            return {
                itemToAddStock: updatedItemToAddStock
            };
        });
    }

    render() {
        const { detailRequested, inStockValues, itemToAddStock, quantity } = this.state;

        const inventoryList = inventoryItems.map((item) => {
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
                    onClickAdd={() => this.handleAddBtn(item)}
                />
            ) : (
                <ItemCover 
                    key={item.id}
                    flavor={item.flavor}
                    onClickDetail={() => this.handleDetailBtn(item)}
                />
            )
        });

        let itemList;
        if (itemToAddStock.length >= 1) {
            itemList = itemToAddStock.map((item) => (
                <InventoryUpdate 
                    key={item[0]}
                    flavor={item[1]} 
                    bucketToAdd={quantity}
                    onClickUpdate={(e) => this.handleUpdateBtn(e, item)}
                    onClickRemove={() => this.handleRemoveBtn(item)}
                />
            ));
        }

        return (
            <React.Fragment>
                <main>
                    <div id="inventory">
                        <h2>Inventory</h2>
                        <div id="fullList">
                            {inventoryList}
                        </div>
                    </div>
                    <div id='orderList'>
                        <h2>Add Items</h2>
                        {itemList}
                    </div>
                </main>
            </React.Fragment>
        )
    }
}