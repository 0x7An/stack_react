import React, { Component } from 'react';

export default class ViewQuestion extends Component {
  render() {
    const question = this.props.data;

    return (
      <div style={styles.container} key={question.question_id}>
        <div sytle={styles.group}>
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

        <div style={styles.items}>
          {question.title}
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
    items: {
      flex: 1
    },
    group:{
      flexDirection: 'row',
      flex: 1
    }
}