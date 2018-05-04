import React, { Component } from 'react';
import Searchbar from "../searchbar/";

export default class Subheader extends Component {
  
    render() {
        function handleClick() {
            alert('You have clicked on me');
        }

        return (
          <div style={styles.subheader} >
            <div>
                <Searchbar />
            </div>
          </div>
        )
    }
};

const styles = {
    subheader: {
        display: 'flex',
        flex: '1 1 auto',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto', 
        height:100, 
        backgroundColor: "#FFF"
    }
}
