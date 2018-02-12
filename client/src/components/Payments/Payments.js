import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './payments.css';

class Payments extends React.Component {
  render() {
    return (
      <div>
        <StripeCheckout
          name='Quiggly'
          description='$5 for 5 email credits'
          amount={500}
          //Recieves callback function after successfully getting token from stripe
          token={(token) => this.props.handleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button className='payments__button'>
            Add Credits
          </button>
        </StripeCheckout>
      </div>
    );
  }
}

export default connect(null, actions)(Payments);