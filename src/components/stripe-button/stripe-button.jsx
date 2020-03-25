import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_8JndG3ABfHYDqj9q3J37q7Us00hgenyRQp'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckout 
        label='Pay Now'
        name= 'E-MIXED'
        billingAddress
        shippingAddress
        image='https://e-mixed.com/wp-content/uploads/2019/11/cropped-E-Mixed-scaled.png'
        description={`Your total is $${price}`}
        ammount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;