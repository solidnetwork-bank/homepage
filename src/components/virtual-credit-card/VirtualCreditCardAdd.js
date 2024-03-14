import {
  React,
  Component
} from 'react';
import API from './api';

export default class VirtualCreditCardAdd extends Component {


  state = {
    id: '',
    message: ''
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const card = {
      id: this.state.id
    };


    API.post(`/virtual-credit-cards`, { card })
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
            Person Id:
            <input type="text" name="person-id" onChange={this.handleChange} />
          </label>
          <button type="submit">Request</button>
        </form>
      </div>
    )
  }
}