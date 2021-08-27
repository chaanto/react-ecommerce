import React from 'react';

import CustomButton from '../custom-button/custom-button-component';
import CartItem from '../cart-item/cart-item-component';

import './cart-dropdown-style.scss';
import { connect } from 'react-redux';
import { selectCartItem } from '../../redux/cart/cart-selectors';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} 
                />
            ))}
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItem(state)
});


export default connect(mapStateToProps)(CartDropdown);
