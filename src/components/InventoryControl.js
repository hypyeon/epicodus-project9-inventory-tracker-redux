import React from 'react';
import InventoryList from './InventoryList';
import InventoryUpdate from './InventoryUpdate';

export default class InventoryControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderInitiated: [],
            orderUpdated: [],
            orderSold: false
        }
    }
    handleSellBtn = () => {
        this.setState({
            orderSold: true
        });
        console.log("Sell btn clicked")
    }
    handleAddBtn = (flavor) => {
        const newOrderInitiated = this.state.orderInitiated.concat(flavor);
        this.setState({
            orderInitiated: newOrderInitiated
        });
        console.log("Add btn clicked")
    }
    handleCancelBtn = (flavor) => {
        const cancelInitiatedOrder = this.state.orderInitiated.filter(item => item != flavor);
        this.setState({
            orderInitiated: cancelInitiatedOrder
        });
    }

    render() {
        let itemsToUpdate = [];
        let quantityLeft = 130;

        const initiatedOrderList = this.state.orderInitiated;

        if (initiatedOrderList.length >= 1) {
            for (let i = 0; i < initiatedOrderList.length; i++) {
                itemsToUpdate.push(
                    <InventoryUpdate 
                        key={i}
                        flavor={initiatedOrderList[i]} 
                        onClickCancel={this.handleCancelBtn} />
                )
            }
        }
        if (this.state.orderSold) {
            quantityLeft -= 1;
        }

        return (
            <React.Fragment>
                <main>
                    <InventoryList onClickAdd={this.handleAddBtn} onClickSell={this.handleSellBtn} inStock={quantityLeft} />
                    <div id="orderList">
                        <h2>Add Items</h2>
                        {itemsToUpdate}
                    </div>
                </main>
            </React.Fragment>
        )
    }
}