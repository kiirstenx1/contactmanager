import React, { Component } from "react";
import Contact from "./Contact";
export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "johndoe@gmail.com",
          phone: "92020282892"
        },
        {
          id: 2,
          name: "Jacob Nelson",
          email: "jacob@gmail.com",
          phone: "83993283893"
        },
        {
          id: 3,
          name: "Beth Mwangi",
          email: "bethmwangi@gmail.com",
          phone: "93884399393"
        }
      ]
    };
  }
  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    });
  };
  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}
