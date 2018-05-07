import React, { Component } from 'react';
import Searchbar from "../searchbar/";
import _ from 'lodash';

// this should be a list of questions
class StackQuestions extends Component {
    
    render() {
        console.log('stack questions', this.props.data);
        return (
            <div style={styles.subheader} >
                <div>
                  lista:
                </div>
            </div>
            )
        }
    };

export default StackQuestions;

const styles = {
    subheader: {
        alignSelf: 'center',
        alignItems: 'center',
    }
}
