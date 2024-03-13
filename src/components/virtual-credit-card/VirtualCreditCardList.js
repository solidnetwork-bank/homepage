import React from 'react';
import API from '../../api';

export default class VirtualCreditCardList extends React.Component {
  state = {
    cards: []
  }

  componentDidMount() {
    API.get(`/virtual-credit-cards`)
      .then(res => {
        const cards = res.data;
        this.setState({ cards });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.cards
            .map(card =>
              <li key={card.id}>{card.lastDigits}</li>
            )
        }
      </ul>
    )
  }
}