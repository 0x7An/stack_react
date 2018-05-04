import React, { Component } from 'react';
import Header from "./components/header/";
import Subheader from "./components/subheader/";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Subheader />

        <p className="body">
          Stack overflow questions
        </p>
      </div>
    );
  }
}

export default App;
