import React from 'react';
import InventoryList from './InventoryList';
import InventoryUpdate from './InventoryUpdate';

export default class InventoryControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderCreated: false,
            orderList: [],
            sellItem: false,
            updateInventory: false
        }
    }
    handleAddBucket = (newItem) => {
        const addedNewItem = this.state.orderList.concat(newItem);
        this.setState({
            orderCreated: true,
            orderList: addedNewItem
        });
    }
    handleSellItem = () => {
        this.setState({
            sellItem: true
        });
    }
    handleUpdate = () => {
        this.setState({
            updateInventory: true
        })
    }

    render() {
        if (this.state.orderCreated) {

        }
    }
}