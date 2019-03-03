import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="John Doe" email="jdoe@gmail" phone="555-555-5555" />
        <Contact name="Karen Smith" email="karen@gmail" phone="333-333-3333" />
      </div>
    );
  }
}

export default App;
