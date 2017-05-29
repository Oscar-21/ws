/**
*
* Subscription
*
*/
import React from 'react';
import Script from 'react-load-script';
class Subscription extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      stripeLoading: true,
      stripeLoadingError: false,
    };
  }

  // new
  handleShow() {
    if (this.state.stripeLoading) {
      return <div>Loading</div>;
    } else if (this.state.stripeLoadingError) {
      return <div>Error</div>;
    }
    return <div>Loaded!</div>;
  }

  handleScriptCreate() {
    this.setState({ scriptLoaded: false });
  }

  handleScriptError() {
    this.setState({ scriptError: true });
  }

  handleScriptLoad() {

    if (!PaymentForm.getStripeToken) {
      // Put your publishable key here
      Stripe.setPublishableKey('pk_test_rJKqFRMRduGAyguxdWT2TfcI');
      this.setState({ stripeLoading: false, stripeLoadingError: false, scriptLoaded: true });
    }
  }
  render() {
    return (
      <div>
        <Script
          url="https://js.stripe.com/v3/"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
        />
        {this.handleShow()}
      </div>
    );
  }
}
export default Subscription;
