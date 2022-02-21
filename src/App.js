import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Signup from './components/signup/signup';


class App extends Component {
 
  render() {

    return (
      <div className="App">
        <Navbar>   
        
        </Navbar>
        <Signup></Signup>
      </div>
    );
  }
}

export default App;
