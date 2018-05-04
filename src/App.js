import React, { Component } from 'react';
import Header from "./components/header/";
import Subheader from "./components/subheader/";
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        <Header />       
        
        <br/>
        
        <div style={styles.container}>
          <Subheader />
        </div>
      </div>
    );
  }
}

export default App;

const styles = {
  app:{
    fontFamily: 'sans-serif'
  },
  container: {
    display: 'flex',
    flexDirection: 'column'
  }
}
