import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item-component';

import { selectCartItems } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-action';

import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
  } from './cart-dropdown-style';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
            ) : (
                <EmptyMessageContainer>No items</EmptyMessageContainer>
            )}
        </CartItemsContainer>
        <CartDropdownButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});




export default withRouter(connect(mapStateToProps)(CartDropdown));
