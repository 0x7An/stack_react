import React, { Component } from 'react';
import Header from "./components/header/";
import Subheader from "./containers/subheader/";
import './App.css';

//Apollo
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  // cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div style={styles.app}>
          <Header />
          <br/>
          <div style={styles.container}>
            <Subheader />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

const styles = {
  app:{
    fontFamily: 'sans-serif'
  },
  container: {
    display: 'flex',
    flexDirection: 'column'
  }
}
