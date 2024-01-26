import React from 'react';
import InventoryList from './InventoryList';
import InventoryUpdate from './InventoryUpdate';

export default class InventoryControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderInitiated: [],
            orderUpdated: [],
            orderSold: false,
            defaultQty: 130
        }
    }
    handleSellBtn = () => {
        this.setState((prevState) => ({
            orderSold: true,
            defaultQty: prevState.defaultQty - 1,
        }));
        console.log("Sell btn clicked");
    }
    handleAddBtn = (flavor) => {
        this.setState((prevState) => ({
            orderInitiated: [...prevState.orderInitiated, flavor],
        }));
        console.log("Add btn clicked");
    }
    handleCancelBtn = (flavor) => {
        this.setState((prevState) => ({
            orderInitiated: prevState.orderInitiated.filter((item) => item !== flavor),
        }));
    }
    handleUpdateBtn = (order) => {
        this.setState((prevState) => ({
            orderUpdated: [...prevState.orderUpdated, order]
        }));
    }

    render() {
        const { orderInitiated, orderUpdated, orderSold, defaultQty } = this.state;
        const quantityLeft = orderSold ? defaultQty : defaultQty;
        
        let itemsToUpdate;
        if (orderInitiated.length >= 1) {
            itemsToUpdate = orderInitiated.map((flavor, index) => (
                <InventoryUpdate key={index} flavor={flavor} onClickCancel={this.handleCancelBtn} />
            ));
        }

        if (orderUpdated.length >= 1) {
            
        }


        return (
            <React.Fragment>
                <main>
                    <InventoryList onClickAdd={this.handleAddBtn} onClickSell={this.handleSellBtn} inStock={quantityLeft} />
                    <div id="orderList">
                        <h2>Add Items</h2>
                        {itemsToUpdate}
                        <button id="updateBtn" onClick={this.handleUpdateBtn}>Update Inventory</button>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}