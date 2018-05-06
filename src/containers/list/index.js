import React, { Component } from 'react';
import { Query } from "react-apollo";
import ROOT_QUERY from "../../data/rootquery";
import Item from "../item";

export default class StackQuestions extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (<Query query={ROOT_QUERY}>
      {
        ({ loading, error, data }) => {
          if (loading) return <p>Loading data...</p>;
          if (error) return <p>Error :(</p>;
          console.log(data.questions);
          return( 
            <div>
              {data.questions.map((question) => (
                // <li key={question.question_id}>{question.tags}</li>
                <Item question={question} />
              ))}
            </div>
        );
      }
      }
    </Query>)
  }
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row'
    }
}