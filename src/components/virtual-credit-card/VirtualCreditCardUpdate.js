import {
  React,
  Component
} from 'react';
import API from './api';

export default class VirtualCreditCardUpdate extends Component {
  state = {
    id: '',
    cvv: '',
    message: ''
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
        const dataRes = res.data.message;
        this.setState({ message: dataRes })
      })
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Card Id:
            <input type="text" name="card-id" onChange={this.handleChange} />
            Card new CVV:
            <input type="text" name="card-cvv" onChange={this.handleChange} />
          </label>
          <button type="submit">Update</button>
        </form>
      </div>
    )
  }
}