import React from 'react';
import API from '../../api';

export default class VirtualCreditCardUpdate extends React.Component {
  state = {
    id: '',
    cvv: ''
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
    this.setState({ cvv: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const card = {
        id: this.state.id,
        cvv: this.state.cvv
      };

    API.put(`/virtual-credit-cards/${this.state.id}`, { card })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Card Id:
            <input type="text" name="id" onChange={this.handleChange} />
            Card new CVV:
            <input type="text" name="cvv" onChange={this.handleChange} />
          </label>
          <button type="submit">Update</button>
        </form>
      </div>
    )
  }
}