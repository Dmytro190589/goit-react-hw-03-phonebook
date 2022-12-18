import { Component } from 'react';
import css from './App.module.css';
import ContactForm from './ContactsForm/ContactsForm';
import Filter from './Filter/Filter';
import ContactList from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const register = filter.toLowerCase();
    return contacts.filter(i => i.name.toLowerCase().includes(register));
  };

  deleteItem = itemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== itemId),
    }));
  };

  filter = data => {
    this.setState({ filter: data.currentTarget.value });
  };

  addContact = ({ name, number, id }) => {
    this.state.contacts.some(e => e.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [{ name, number, id }, ...prevState.contacts],
        }));
  };

  render() {
    return (
      <div className={css.form}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.filter} />
        <ContactList
          contacts={this.filteredContacts()}
          onClick={this.deleteItem}
        />
      </div>
    );
  }
}
export default App;
