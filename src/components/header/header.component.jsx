import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import CurrentUserContext from '../../contexts/currentUser/current-user.context';
import {CartContext} from '../../providers/cart.provider';

const Header = () => {
    const currentUser = React.useContext(CurrentUserContext);
    const { hidden } = React.useContext(CartContext);

    return(
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/shop' className='option'>Contact</Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                        :
                        <Link to='/signin' className='option'>Sign In</Link>
                }
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
)};

const mapStateToProps = createStructuredSelector(  //createStructuredSelector will automatically pass state to selector methods
    {
        hidden: selectCartHidden
    }
)

export default connect(mapStateToProps)(Header);