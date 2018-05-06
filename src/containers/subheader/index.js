import React, { Component } from 'react';
import Searchbar from "../searchbar/";
import StackQuestions from "../list";
import {Tabs, Tab} from "react-bootstrap";

export default class Subheader extends Component {
    
    render() {
        return (
          <div style={styles.subheader} >
            <div>
                <Searchbar />
                <StackQuestions />
            </div>
          </div>
        )
    }
};

const styles = {
    subheader: {
        alignSelf: 'center',
        alignItems: 'center',
    }
}
