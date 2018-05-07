import React, { Component } from 'react';
import Header from "./components/header/";
import StackQuestions from "./containers/stackquestions/";
import Searchbar from "./containers/searchbar/";
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
        <div style={styles.app}>
          <Header />
          <br/>
          <div style={styles.container}>
            <Searchbar />
            <StackQuestions data={this.props.questions}/>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state =>(
  { parameters: state.parameters,
    questions: state.parameters.questions }
);

export default connect( mapStateToProps )(App)

const styles = {
  app:{
    fontFamily: 'sans-serif'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
  }
}
