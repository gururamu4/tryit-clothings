import React, {useContext} from 'react';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import {withRouter} from 'react-router-dom';

import {CartContext} from '../../providers/cart.provider';

const CartDropdown = ({history, dispatch}) => {  //dispatch is available in props if we don't
// pass second parameter to connect method. This is shorthand method for dispatch
    const {cartItems, toggleHidden} = useContext(CartContext);
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    :
                    <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick = {() => 
                            { 
                                history.push('/checkout');
                                toggleHidden();
                            }}>
            GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default withRouter(CartDropdown);