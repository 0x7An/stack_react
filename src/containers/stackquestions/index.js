import React, { Component } from 'react';
import ViewQuestion from "../../components/viewquestion";
import _ from 'lodash';
import { Table } from "react-bootstrap";
import Moment from 'react-moment';

class StackQuestions extends Component {
    
    renderQuestions(questions){
        return _.map(questions, question => {
            return(
                <ViewQuestion key={questions.question_id} data={question}/>
            )
        })
    }

    renderTable(questions){
        let renderTags = tags => {
            return tags.map(value => {
                return value;
            }).join('; ');
        };

        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Owner</th>
                        <th>Score</th>
                        <th>View Count</th>
                        <th>Awnser Count</th>
                        <th>Creation Date</th>
                        <th>Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map(question => {
                        return (
                            <tr key={question.question_id}>
                                <td>{question.question_id}</td>
                                <td href={question.link}>{question.title}</td>
                                <td numeric>{question.owner.display_name}</td>
                                <td numeric>{question.score}</td>
                                <td numeric>{question.view_count}</td>
                                <td numeric>{question.answer_count}</td>
                                <td>
                                    <Moment format="DD/MM/YYYY">
                                        {question.creation_date*1000}
                                    </Moment>
                                </td>
                                <td>{renderTags(question.tags)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        )
    }

    render() {
        console.log('stack questions', this.props.data);
        return (
            <div style={styles.subheader} >
                <div className="list">
                    {this.renderTable(this.props.data)}
                </div>
            </div>
            )
        }
    };

export default StackQuestions;

const styles = {
    subheader: {
        alignSelf: 'center',
        alignItems: 'center',
    }
}
