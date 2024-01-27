import React, { useState } from 'react';
import cartImg from '../img/add-inventory.png';
import PropTypes from 'prop-types';

function InventoryUpdate(props) {
    const { flavor } = props;
    
    return (
        <React.Fragment>
            <div class="order">
                <div>
                    <img src={cartImg} alt="Added to cart" />
                </div>
                <div>
                    <p>Flavor: {flavor}</p>
                    <p>Bucket to add: 
                        <input 
                            type="number" 
                            min="1" 
                            value={bucketToAdd}
                        />
                    </p>
                </div>
                <div>
                    <button onClick={props.onClickCancel}>Cancel</button>
                </div>
            </div>
        </React.Fragment>
    )
}

InventoryUpdate.propTypes = {
    flavor: PropTypes.string.isRequired,
    onClickCancel: PropTypes.func,
}