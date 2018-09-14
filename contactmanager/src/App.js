import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
   render() {
      return (
         <div className="App">
            <Header branding="Contact Manager" />
            <Contact name="John Doe" email="jdoe@gmail.com" phone="1111-2222222"/>
            <Contact name="Emily Parker" email="eparker@gmail.com" phone="1111-3333333"/>
         </div>
      );
   }
}

export default App;
