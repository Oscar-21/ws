/**
*
* CheckoutForm
*
*/
import React from 'react';
import { injectStripe } from 'react-stripe-elements';
// import AddressSection from 'components/AddressSection';
import CardSection from 'components/CardSection';
import RaisedButton from 'material-ui/RaisedButton';

class CheckoutForm extends React.PureComponent {
  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({ name: 'Bobby Rosen' }).then(({ token }) => {
      console.log('Received Stripe token:', JSON.stringify(token));
    });

    // However, this line of code will do the same thing:
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
  }

  render() {
    return (
      <div>
        <form >
          {/* <AddressSection /> */}
          <CardSection />
          <RaisedButton onTouchTap={this.handleSubmit} label="Submit" primary />
        </form>
      </div>
    );
  }
}
export default injectStripe(CheckoutForm);
