import React, { Component } from 'react';

export default class header extends Component {
  render() {
    return (
      <header className="App-header" style={styles.header}>
        <h1 style={styles.label}>Stack Questions</h1>
      </header>
    )
  }
};

const styles = {
  header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: "#eeeded",
      height:70
  },
  label:{
    fontSize: 40,
    // alignSelf: 'flex-start'
  }
}