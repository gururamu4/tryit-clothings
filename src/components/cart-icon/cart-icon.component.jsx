import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {CartContext} from '../../providers/cart.provider';

const CartIcon = () => {
    const { toggleHidden, cartItemsCount } = React.useContext(CartContext);
    return(
        <div className='cart-icon' onClick={toggleHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartItemsCount}</span>
        </div>
    )};

export default CartIcon;