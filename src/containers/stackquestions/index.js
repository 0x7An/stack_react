import React, { Component } from 'react';
import ViewQuestion from "../../components/viewquestion";
import _ from 'lodash';

class StackQuestions extends Component {
    
    renderQuestions(questions){
        return _.map(questions, question => {
            return(
                <ViewQuestion data={question}/>
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
