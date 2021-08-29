import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { auth } from '../../firebase/firebase-utils';

import CartIcon from '../cart-icon/cart-icon-component';
import CartDropdown from '../cart-dropdown/cart-dropdown-component';

import { ReactComponent as Logo} from '../../assests/logo.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, Option } from './header-style';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'/>
            <span>CHAANTO</span>
        </LogoContainer>
        <OptionsContainer>
            <Option to='/shop'>
                SHOP
            </Option>
            {currentUser ? (
                <Option as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                </Option>
            ) : (
                <Option to='/signin'>
                    SIGN IN
                </Option>
            )}
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown/>
        }
    </HeaderContainer>
);



const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden,
});


export default connect(mapStateToProps)(Header);