import React, { Component } from 'react';

export default class ViewQuestion extends Component {
  render() {
    const question = this.props.data;

    return (
      <div style={styles.container}>
         {question.title}
      </div>
    )
  }
};

const styles = {
    container: {
      alignSelf: 'center',
      alignItems: 'center',
    }
}