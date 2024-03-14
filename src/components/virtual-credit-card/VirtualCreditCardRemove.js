import {
  React,
  Component
} from 'react';
import API from './api';

export default class VirtualCreditCardRemove extends Component {
  state = {
    id: '',
    message: ''
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    API.delete(`/virtual-credit-cards/${this.state.id}`)
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
            Card ID:
            <input type="number" name="card-id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}