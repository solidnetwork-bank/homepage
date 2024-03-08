import './App.css';
import VirtualCreditCardAdd from './components/VirtualCreditCardAdd';
import VirtualCreditCardDisplay from './components/VirtualCreditCardDisplay';
import VirtualCreditCardList from './components/VirtualCreditCardList';
import VirtualCreditCardRemove from './components/VirtualCreditCardRemove';
import VirtualCreditCardUpdate from './components/VirtualCreditCardUpdate';

function App() {

  return (
    <div className="App">
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

export default App;
