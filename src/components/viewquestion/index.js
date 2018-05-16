import React, { Component } from 'react';

export default class ViewQuestion extends Component {
  render() {
    const question = this.props.data;

    return (
      <div style={styles.container} key={question.question_id}>
        
        <div sytle={styles.stats}>
          <div style={styles.items}>
            {question.score}
          </div>
          <div style={styles.items}>
            {question.view_count}
          </div>
          <div style={styles.items}>
            {question.answer_count}
          </div>
        </div>

        <div style={styles.description}>
          {question.title}
          {question.creation_date}
        </div>

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
    },
    stats:{
      flex: 1,
      flexDirection: 'column',
      fontSize: 8,
      fontColor: 'blue'
    },
    description:{
      flex: 3,
      flexDirection: 'column'
    }
}