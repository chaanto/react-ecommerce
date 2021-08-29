import React from 'react'
import { connect } from 'react-redux';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart-action';

import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
  } from './checkout-item-style';
  
 
const CheckoutItem = ({ cartItem, clearItem , addItem, removeItem}) => {
    const { name, quantity, price, imageUrl} = cartItem;
    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item" />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div className="arrow" onClick={() => removeItem(cartItem)}><IoIosArrowBack /></div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}><IoIosArrowForward /></div>
            </QuantityContainer>
            <TextContainer>${price}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}><FaRegTrashAlt/></RemoveButtonContainer>
         </CheckoutItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem : item => dispatch(addItem(item)),
    removeItem : item => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);

