import React from 'react';

import './checkout-item.styles.scss';
import {CartContext} from '../../providers/cart.provider';

const CheckoutItem = ({ cartItem }) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const { addItem, removeItem, clearItemFromCart } = React.useContext(CartContext);
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick= {() => clearItemFromCart(cartItem)}>&#10005;</div>
    </div>
)};

export default CheckoutItem;