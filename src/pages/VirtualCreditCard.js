import {
  React,
  Component
} from 'react';
import VirtualCreditCardAdd from '../components/virtual-credit-card/VirtualCreditCardAdd';
import VirtualCreditCardDisplay from '../components/virtual-credit-card/VirtualCreditCardDisplay';
import VirtualCreditCardList from '../components/virtual-credit-card/VirtualCreditCardList';
import VirtualCreditCardRemove from '../components/virtual-credit-card/VirtualCreditCardRemove';
import VirtualCreditCardUpdate from '../components/virtual-credit-card/VirtualCreditCardUpdate';

export default class VirtualCreditCard extends Component {

  render() {

    return (
      <div>
        <p className='main-section-heading'>{this.props.heading}</p>
        <h2>Options:</h2>
        <p>My Virtual Credit Cards:</p>
        <VirtualCreditCardList />
        <p>Display my Virtual Credit Card information:</p>
        <VirtualCreditCardDisplay />
        <p>Request a new Virtual Credit Card:</p>
        <VirtualCreditCardAdd />
        <p>Remove a Virtual Credit Card:</p>
        <VirtualCreditCardRemove />
        <p>Generate a new Dynamic CVV:</p>
        <VirtualCreditCardUpdate />
      </div>
    );
  }
}


