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
          Card details
          <CardElement style={{ base: { fontSize: '18px' } }} />
        </label>
      </div>
    );
  }
}
export default CardSection;
