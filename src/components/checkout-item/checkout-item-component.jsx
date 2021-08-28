import React from 'react'
import { connect } from 'react-redux';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart-action';

import './checkout-item-style.scss';
 
const CheckoutItem = ({ cartItem, clearItem , addItem, removeItem}) => {
    const { name, quantity, price, imageUrl} = cartItem;
    return(
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}><IoIosArrowBack /></div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}><IoIosArrowForward /></div>
            </span>
            <span className="price">${price}</span>
            <span className="remove-button" onClick={() => clearItem(cartItem)}><FaRegTrashAlt/></span>
         </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem : item => dispatch(addItem(item)),
    removeItem : item => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);

