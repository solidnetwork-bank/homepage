import React from 'react';
import API from '../../api';

export default class VirtualCreditCardDisplay extends React.Component {
  state = {
    card: {},
    id:''
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    API.get(`/virtual-credit-cards/${this.state.id}`)
      .then(res => {
        const card = res.data;
        this.setState({ card });
      })
  }


  render() {
    return (
      <div>
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Card ID:
            <input type="number" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Display</button>
        </form>
      </div>
        <div>
          <p>Card number: {this.state.card.number}</p>
          <p>Expiration date: {this.state.card.expiration}</p>
          <p>Card holder name: {this.state.card.holder}</p>
          <p>CVV: {this.state.card.cvv}</p>
        </div>
      </div>
    )
  }
}