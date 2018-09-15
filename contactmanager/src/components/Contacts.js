import React, { Component } from 'react';
import Contact from './Contact';


class Contacts extends Component {
   state = {
      contacts: [
         {
            id: 1,
            name: 'John Doe',
            email: 'jdoe@gmail.com',
            phone: '1111-2222222'
         },
         {
            id: 2,
            name: 'Emily Parker',
            email: 'eparker@gmail.com',
            phone: '1111-3333333'
         },
         {
            id: 3,
            name: 'Katie Davis',
            email: 'kdavis@gmail.com',
            phone: '1111-4444444'
         }
      ]
   };

   render() {
      const { contacts } = this.state;
      return (
         <div>
            { contacts.map(contact => (
               <Contact
                  key = { contact.id }
                  contact = { contact }
               />
            ))}
         </div>
      )
   };
};

export default Contacts;