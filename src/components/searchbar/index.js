import React, { Component } from 'react';
import { divGroup, divControl, ControlLabel, HelpBlock, Label, Button } from 'react-bootstrap';

export default class parameters extends Component {

  render() {
    return (
      <div style={styles.container}>
          <div style={styles.label}><i>StackOverflow</i></div>
          <div style={styles.parameters}>
            <input 
              style={styles.parameter}
              type="text" 
              placeholder="tag">
              
            </input>
            <input 
              style={styles.parameter}
              type="text" 
              placeholder="limit">

            </input>
            <input 
              style={styles.parameter}
              type="text" 
              placeholder="score">

            </input>
            <input
              style={styles.parameter} 
              type="text" 
              placeholder="sort">
            </input>
          </div>
          <button 
            style={styles.button}
            type="button">Click Me!
          </button>
      </div>
    )
  }
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: 'blue'
  },
  label: {
    alignSelf: 'flex-start',
    paddingBottom: 5,
    marginLeft: 15,
    fontSize: 24
  },
  parameters: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 15,
  },
  parameter:{
    marginRight:15,
    fontSize: 18
  },
  button:{
   alignSelf: 'flex-end',
   fontSize: 16,
   marginRight: 15
  }
}
