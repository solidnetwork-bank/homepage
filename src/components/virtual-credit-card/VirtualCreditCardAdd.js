import {
  React,
  Component
} from 'react';
import API from './api';

export default class VirtualCreditCardAdd extends Component {


  state = {
    id: ''
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
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
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