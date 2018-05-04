import React, { Component } from 'react';
import Searchbar from "../searchbar/";

export default class Subheader extends Component {
  
    render() {
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
        // backgroundColor: "#eeeded",
        alignSelf: 'center',
        alignItems: 'center',
        // justifyContent: 'center'
    }
}
