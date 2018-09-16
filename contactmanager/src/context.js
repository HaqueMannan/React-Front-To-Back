import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
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

   render(){
      return(
         <Context.Provider value={this.state}>
            {this.props.children}
         </Context.Provider>
      )
   };
};

export const Consumer = Context.Consumer;