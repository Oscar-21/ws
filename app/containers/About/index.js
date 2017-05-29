  /*
  *
  * About
  *
  */
  import React from 'react';
  import Helmet from 'react-helmet';
  import MyStoreCheckout from 'components/MyStoreCheckout';
  import { StripeProvider } from 'react-stripe-elements';
  export default class About extends React.PureComponent {
    render() {
      return (
        <div>
          <Helmet title="About" meta={[{ name: 'description', content: 'Description of About' }]} />
          <StripeProvider apiKey="pk_test_rJKqFRMRduGAyguxdWT2TfcI">
            <MyStoreCheckout />
          </StripeProvider>
        </div>
      );
    }
  }
