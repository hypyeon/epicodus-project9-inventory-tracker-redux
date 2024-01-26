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
    handleAddBtn = (flavor) => {
        const newOrderInitiated = this.state.orderInitiated.concat(flavor);
        this.setState({
            orderInitiated: newOrderInitiated
        });
    }
    handleCancelBtn = (flavor) => {
        const cancelInitiatedOrder = this.state.orderInitiated.filter(item => item != flavor);
        this.setState({
            orderInitiated: cancelInitiatedOrder
        });
    }
    handleSellBtn = () => {
        this.setState({
            orderSold: true
        });
    }

    render() {
        let itemToUpdate = null;
        const initiatedOrderList = this.state.orderInitiated;

        if (initiatedOrderList.length >= 1) {
            for (let i = 0; i < initiatedOrderList.length; i++) {
                itemToUpdate = <InventoryUpdate flavor={initiatedOrderList[i]} onClick={this.handleCancelBtn} />
            }
        }

        return (
            <React.Fragment>
                <main>
                    <InventoryList onClickingAdd={this.handleAddBtn} onClickingSell={this.handleSellBtn} />
                    <div id="orderList">
                        {itemToUpdate}
                    </div>
                </main>
            </React.Fragment>
        )
    }
}