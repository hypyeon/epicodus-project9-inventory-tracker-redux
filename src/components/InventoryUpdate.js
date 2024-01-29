import React from 'react';
import cartImg from '../img/add-inventory.png';
import PropTypes from 'prop-types';

export default function InventoryUpdate(props) {
    const { flavor, quantity } = props;
    
    return (
        <div className="order">
            <div className='order-1'>
                <img src={cartImg} alt="Added to cart" />
            </div>
            <div className='order-2'>
                <p>Flavor: {flavor}</p>
                <p>Bucket Added: {quantity}</p>
            </div>
            <div className='order-3'>
                <button 
                    onClick={props.onClickUpdate} 
                    className='updateBtn'
                >Add a bucket</button>
                <button 
                    onClick={props.onClickDone} 
                    className='removeBtn'
                >Done</button>
            </div>
        </div>
    );
}

InventoryUpdate.propTypes = {
    flavor: PropTypes.string.isRequired,
    quantity: PropTypes.number,
    onClickUpdate: PropTypes.func,
    onClickDone: PropTypes.func
}