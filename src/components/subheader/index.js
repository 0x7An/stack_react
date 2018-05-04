import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

export default class Subheader extends Component {
  
    render() {
        function handleClick() {
            alert('You have clicked on me');
        }

        return (
          <Panel style={styles.panel} >
            <Panel.Body>
                Basic panel example
            </Panel.Body>
          </Panel>
        )
    }
};

const styles = {
    panel: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto', 
        height:100, 
        backgroundColor: "#333"
    }
}
