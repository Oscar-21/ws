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
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const countryDropdown = [];
const countries = [
  'Afghanistan',
  'Åland Islands',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia, Plurinational State of',
  'Bonaire, Sint Eustatius and Saba',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo',
  'Congo, the Democratic Republic of the',
  'Cook Islands',
  'Costa Rica',
  'Côte d\'Ivoire',
  'Croatia',
  'Cuba',
  'Curaçao',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands (Malvinas)',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories',
];
for (let i = 0; i < 78; i++) {
  countryDropdown.push(<MenuItem value={countries[i]} key={i} primaryText={countries[i]} />);
}
class CheckoutForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      name: '',
      country: '',
    };
  }
  state = {
    value: 'Afghanistan',
  };
  handleChange = (event, index, value) => {
    this.setState({ value });
    this.setState({ country: value });
  };

  handleName = (ev) => {
    this.setState({ name: ev.target.value });
  }

  handleCity = (ev) => {
    this.setState({ city: ev.target.value });
  }

  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({ name: this.state.name, address_city: this.state.city, address_country: this.state.country }).then(({ token }) => {
      console.log('Received Stripe token:', JSON.stringify(token));
    });

    // However, this line of code will do the same thing:
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
  }

  render() {
    const styles = {
      errorStyle: {
        color: orange500,
      },
      underlineStyle: {
        borderColor: orange500,
      },
      floatingLabelStyle: {
        color: orange500,
      },
      floatingLabelFocusStyle: {
        color: blue500,
      },
    };

    return (
      <div>
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          maxHeight={200}
        >
          {countryDropdown}
        </SelectField>
        <TextField
          onChange={this.handleName}
          hintText="Styled Hint Text"
          hintStyle={styles.errorStyle}
        /><br />
        <TextField
          onChange={this.handleCity}
          hintText="Custom error color"
          errorText="This field is required."
          errorStyle={styles.errorStyle}
        /><br />
        <TextField
          hintText="Custom Underline Color"
          underlineStyle={styles.underlineStyle}
        /><br />
        <TextField
          hintText="Custom Underline Focus Color"
          underlineFocusStyle={styles.underlineStyle}
        /><br />
        <TextField
          floatingLabelText="Styled Floating Label Text"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
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
