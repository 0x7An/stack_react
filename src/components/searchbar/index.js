import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';

export default class parameters extends Component {

  render() {
    return (

        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Buscar na API</Panel.Title>
          </Panel.Heading>
          
          <Panel.Body>  
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

              <Button 
                bsStyle="success"
                style={styles.button}
              >
                Buscar
              </Button>

          </Panel.Body>
        </Panel>
    )
  }
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 15
  },
  parameters: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10
  },
  parameter:{
    marginRight:15,
    fontSize: 14
  },
  button:{
   justifyContent: 'flex-end',
  //  alignSelf: 'flex-end',
   fontSize: 14,
   marginRight: 15
  }
}
