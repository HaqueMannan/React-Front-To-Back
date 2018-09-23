import React, { Component } from 'react';

class Test extends Component {
   state = {
      test: 'test'
   }

//LifeCycle Methods:

   //Fires off when the component does mounts. 
   componentDidMount(){
      console.log('componentDidMount');
   }

   //Fires off before the component mounts. 
   componentWillMount(){
      console.log('componentWillMount');
   }

   //Fires off when the component updates.
   //This will do nothing at the moment because no component is updated. However, if we placed this code in the context.js file below the State - when we delete/add a contact this would log 'componentDidUpdate' in the console.
   componentDidUpdate(){
      console.log('componentDidUpdate');
   }

   //Fires off when the component will updates.
   //This will do nothing at the moment because no component is updated. However, if we placed this code in the context.js file below the State - when we delete/add a contact this would log 'componentWillUpdate' in the console before the 'componentDidUpdate'.
   componentWillUpdate(){
      console.log('componentWillUpdate');
   }

   //Fires off when a component receives a new Prop.
   componentWillReceiveProps(nextProp, nextState){
      console.log('componentWillReceiveProps');
   }

   // //New Lifecycle method replacing the above.
   // //https://medium.com/@baphemot/understanding-react-react-16-3-component-life-cycle-23129bc7a705
   // static getDerivedStateFromProps(nextProp, prevState){
   //    return null;
   // }

   // //New Lifecycle method providing a snapshot before the DOM is updated.
   // getSnapshotBeforeUpdate(prevProps, prevState){
   //    console.log('getSnapshotBeforeUpdate');
   // }

   //Renders jsx/html on screen.
   render() {
      return (
         <div>
            <h1>Render() Lifecycle Test Component</h1>
         </div>
      )
   }
}

export default Test;