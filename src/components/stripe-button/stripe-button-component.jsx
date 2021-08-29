import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({
    price
}) => {
    const stripePrice = price *  100;
    const publishableKey = 'pk_test_51JTVEWBnUIddG2FaWn7WrU0VBZRjrCIGjlnC2RkDBtzyhVEk2VKhpz4SVsipGmOVIys6dL4VYjCLtp2ErS1AXB7C00dRw0H8vb';
    return (
        <StripeCheckout 
            label="Pay Now"
            name="React E-commerce"
            description={`Your total is $${price}`}
            currency="SGD"
            locale="sg"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            amount={stripePrice}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}


export default StripeCheckoutButton;
