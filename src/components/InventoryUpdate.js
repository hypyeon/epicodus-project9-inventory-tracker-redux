import React, { useState } from 'react';
import cartImg from '../img/add-inventory.png';
import PropTypes from 'prop-types';

export default function InventoryUpdate(props) {
    const { flavor } = props;
    const [quantity, setQuantity] = useState(0);
    
    return (
        <React.Fragment>
            <div className="order">
                <div>
                    <img src={cartImg} alt="Added to cart" />
                </div>
                <div>
                    <p>Flavor: {flavor}</p>
                    <p>Bucket to add: 
                        <input 
                            type="number" 
                            min="1" 
                            name="qtyToAdd"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                        />
                    </p>
                </div>
                <div className='orderBtns'>
                    <button 
                        onClick={props.onClickUpdate} 
                        className='updateBtn'
                    >Update</button>
                    <button 
                        onClick={props.onClickRemove} 
                        className='removeBtn'
                    >Remove</button>
                </div>
            </div>
        </React.Fragment>
    );
}

InventoryUpdate.propTypes = {
    flavor: PropTypes.string.isRequired,
    onClickUpdate: PropTypes.func,
    onClickRemove: PropTypes.func
}