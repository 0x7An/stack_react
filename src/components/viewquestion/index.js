import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

export default class ViewQuestion extends Component {
  render() {
    const question = this.props.data;

    return (
      <div style={styles.container} key={question.question_id}>
        <Paper>
            Title:{question.title}
            Votes:{question.score}
            View Count:{question.view_count}
            Awnser Count: {question.answer_count}
         </Paper>
      </div>
    )
  }
};

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center'
    }
}