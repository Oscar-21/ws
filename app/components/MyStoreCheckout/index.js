/**
*
* MyStoreCheckout
*
*/
import React from 'react';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from 'components/CheckoutForm';

class MyStoreCheckout extends React.PureComponent {
  render() {
    return (
      <div>
        <Elements>
          <CheckoutForm />
        </Elements>
      </div>
    );
  }
}
export default MyStoreCheckout;
