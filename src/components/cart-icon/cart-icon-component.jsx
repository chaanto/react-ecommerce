import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart-action';
import { selectCartItemCount } from '../../redux/cart/cart-selectors';

import {
    CartContainer,
    ShoppingIcon,
    ItemCountContainer
  } from './cart-icon-style';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
);

const mapStateToProps = createStructuredSelector({
    itemCount : selectCartItemCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
