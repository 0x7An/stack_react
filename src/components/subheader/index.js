import React, { Component } from 'react';
import Searchbar from "../searchbar/";

import gql from "graphql-tag";
import { Query } from "react-apollo";

import ROOT_QUERY from "../../data/rootquery";

const StackQuestions = () => (
    <Query query={ROOT_QUERY}>
      {
        ({ loading, error, data }) => {
          if (loading) return <p>Loading data...</p>;
          if (error) return <p>Error :(</p>;

          return( 
            <ul>
              {data.questions.map((question) => (
                <li key={question.question_id}>{question.tags}</li>
              ))}
            </ul>
        );
      }
      }
    </Query>
  );

export default class Subheader extends Component {
  
    render() {
        return (
          <div style={styles.subheader} >
            <div>
                <Searchbar />
                <StackQuestions />
            </div>
          </div>
        )
    }
};

const styles = {
    subheader: {
        alignSelf: 'center',
        alignItems: 'center',
    }
}
