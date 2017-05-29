/**
*
* CardSection
*
*/
import React from 'react';
import { CardElement } from 'react-stripe-elements';

class CardSection extends React.PureComponent {
  render() {
    return (
      <div>
        <label>
          <CardElement style={{ hidePostalCode: true }} />
        </label>
      </div>
    );
  }
}
export default CardSection;
