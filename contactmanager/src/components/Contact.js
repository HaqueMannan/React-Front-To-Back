import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
   //propTypes within our class:
   static propTypes = {
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired
   }

   render() {
      const { name, email, phone } = this.props;

      return (
         <div className="card card-body mb-3">
            <h4>{name}</h4>
            <ul className="list-group">
               <li className="list-group-item">{email}</li>
               <li className="list-group-item">{phone}</li>
            </ul>
         </div>
      )
   }
}

// //propTypes outside of our class:
// Contact.PropTypes = {
//    name: PropTypes.string.isRequired,
//    email: PropTypes.string.isRequired,
//    phone: PropTypes.number.isRequired
// }

export default Contact;