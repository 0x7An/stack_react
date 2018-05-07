import React, { Component } from 'react';
import _ from 'lodash';

// this should be a list of questions
class StackQuestions extends Component {
    
    renderQuestions(questions){
        return _.map(questions, question => {
            return(
                // RENDER THE QUESTIONS !!
                <h1>{question.title}</h1>

            )
        })
    }

    render() {
        console.log('stack questions', this.props.data);
        return (
            <div style={styles.subheader} >
                <div class="list">
                    {this.renderQuestions(this.props.data)}
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
