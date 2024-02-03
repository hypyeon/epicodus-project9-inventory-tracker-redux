import React from 'react';
import { inventoryItems } from './InventoryList';
import { ItemCover, ItemDetail } from './ItemCreator';
import InventoryUpdate from './InventoryUpdate';

export default class InventoryControl extends React.Component {
    constructor(props) {
        super(props);

        const defaultStockValues = {};
        [...inventoryItems].forEach((item) => {
            defaultStockValues[item.id] = item.inStock;
        });

        const quantityToAdd = {};
        [...inventoryItems].forEach((item) => {
            quantityToAdd[item.id] = 0;
        });

        this.state = {
            detailRequested: {},
            itemToAddStock: [],
            inStockValues: defaultStockValues,
            quantity: quantityToAdd
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
        const updatedValues = { ...inStockValues };
        for (const key in updatedValues) {
            if (key === item.id ) {
                if (updatedValues[key] > 0) {
                    updatedValues[key] -= 1;
                }
            }
        }
        this.setState({
            inStockValues: updatedValues
        });
    }
    handleAddBtn = (item) => {
        const { itemToAddStock } = this.state;
        let alreadyHasIt = false;
        for (let i = 0; i < itemToAddStock.length; i++) {
            if (itemToAddStock[i]["id"] === item.id) {
                alreadyHasIt = true;
                break;
            }
            // this is to see if "Add Items" section already has the same id item - to avoid having multiple of the same flavor item under the section. Without this, the section will have unlimited amount of flavor list upon clicking "Add". 
        }
        if (!alreadyHasIt) {
            const updatedItemToAddStock = [...itemToAddStock, item];
            this.setState({
                itemToAddStock: updatedItemToAddStock
            });
        } else {
            this.setState({
                itemToAddStock: itemToAddStock
            });
        }
    }
    handleUpdateBtn = (item) => {
        this.handleAddBucket(item);

        const { inStockValues } = this.state;

        const updatedValues = { ...inStockValues };
        for (const key in updatedValues) {
            if (key === item.id) {
                updatedValues[key] += 130;
            }
        }
        this.setState({
            inStockValues: updatedValues
        });
    }
    handleAddBucket = (item) => {
        const { quantity } = this.state;

        const updatedQty = { ...quantity };
        for (const key in updatedQty) {
            if (key === item.id) {
                updatedQty[key] += 1;
            }
        }
        this.setState({
            quantity: updatedQty
        });
    }
    handleDoneBtn = (item) => {
        this.setState((prevState) => {
            const { itemToAddStock } = prevState;

            const updatedItemToAddStock = itemToAddStock.filter((currentItem) => currentItem !== item);

            return {
                itemToAddStock: updatedItemToAddStock,
            };
        });
    }

    render() {
        const { detailRequested, itemToAddStock, inStockValues, quantity } = this.state;

        const inventoryList = inventoryItems.map((item) => {
            const isDetailVisible = detailRequested[item.flavor];

            return isDetailVisible ? (
                <ItemDetail 
                    key={item.id}
                    flavor={item.flavor}
                    inStock={inStockValues[item.id]}
                    price={item.price}
                    popularity={item.popularity}
                    quantity={quantity[item.id]}
                    onClickClose={() => this.handleCloseBtn(item)}
                    onClickSell={() => this.handleSellBtn(item)}
                    onClickAdd={() => this.handleAddBtn(item)}
                />
            ) : (
                <ItemCover 
                    key={item.id}
                    flavor={item.flavor}
                    inStock={item.inStock}
                    onClickDetail={() => this.handleDetailBtn(item)}
                />
            )
        });

        let itemList;
        if (itemToAddStock.length >= 1) {
            itemList = itemToAddStock.map((item) => (
                <InventoryUpdate 
                    key={item.id}
                    flavor={item.flavor} 
                    quantity={quantity[item.id]}
                    onClickUpdate={() => this.handleUpdateBtn(item)}
                    onClickDone={() => this.handleDoneBtn(item)}
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
                    <div id="orderList">
                        <h2>Add Items</h2>
                        {itemList}
                    </div>
                </main>
            </React.Fragment>
        )
    }
}