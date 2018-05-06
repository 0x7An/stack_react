import React, { Component } from 'react';
import Searchbar from "../searchbar/";

import gql from "graphql-tag";
import { Query } from "react-apollo";

const ROOT_QUERY = gql`
{
  questions(tags:"javascript"){
    score,
    question_id,
    tags,
    owner{
          user_id
    }
  }
}
`;

const StackQuestions = () => (
    <Query query={ROOT_QUERY}>
      {
        ({ loading, error, data }) => {
          if (loading) return <p>Loading data...</p>;
          console.log('LOAD', loading);
          if (error) return <p>Error :(</p>;
          console.log('erro',error);
        return( 
          <div>
           <span>{ data.score }</span>
          </div>
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
        // backgroundColor: "#eeeded",
        alignSelf: 'center',
        alignItems: 'center',
        // justifyContent: 'center'
    }
}
