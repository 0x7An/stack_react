import React, { Component } from 'react';
import Searchbar from "../searchbar/";
import { connect } from 'react-redux';
import _ from 'lodash';

class StackQuestions extends Component {
    render() {
        return (
            <div style={styles.subheader} >
                <div>
                    <Searchbar />
                    {this.props.questions[0]}
                </div>
            </div>
            )
        }
    };

const mapStateToProps = state =>( 
    { questions: state.parameters } 
);

export default connect( mapStateToProps )(StackQuestions)

const styles = {
    subheader: {
        alignSelf: 'center',
        alignItems: 'center',
    }
}
