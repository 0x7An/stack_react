import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getQuestions } from '../../store/actions';
import { bindActionCreators } from 'redux';

class Searchbar extends Component {

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  };

  onInputChange(event){
    let values = this.props.parameters;
    values[event.target.name] = event.target.value;
    this.setState({parameters: values});
  }

  onSearch(){
    this.props.getQuestions(this.props.parameters);
  }

  onFormSubmit(event){
    event.preventDefault();
    this.onSearch();
  }

  render() {
        return (
          <Panel>
            <Panel.Heading>
              <Panel.Title componentClass="h3">Buscar na API</Panel.Title>
            </Panel.Heading>
  
            <Panel.Body>            
              <div style={styles.parameters}>
                  <input
                    name="tag"
                    type="text"
                    style={styles.parameter}
                    placeholder="tag"
                    className="form-control"
                    onChange={this.onInputChange}
                    value={this.props.parameters.tag}
                  />
  
                  <input
                    name="score"
                    type="number"
                    style={styles.parameter}
                    placeholder="score"
                    className="form-control"
                    value={this.props.parameters.score}
                    onChange={this.onInputChange}
                  />
  
                  <input
                    name="sort"
                    type="text"
                    style={styles.parameter} 
                    placeholder="activity"
                    className="form-control"
                    value={this.props.parameters.sort} 
                    onChange={this.onInputChange}
                  />
  
                  <input
                    name="limit"
                    type="number"
                    style={styles.parameter}
                    placeholder="limit"
                    className="form-control"
                    value={this.props.parameters.limit}
                    onChange={this.onInputChange}
                  />               
                </div>
                <Button
                  onClick={this.onFormSubmit}
                  bsStyle="success"
                  style={styles.button}>
                  Buscar
                </Button>
            </Panel.Body>
          </Panel>
      )
    }
  };

function MapDispatchToProps(dispatch){
  return bindActionCreators({ getQuestions }, dispatch);
}

const mapStateToProps = state =>(
  { parameters: state.parameters }
);

export default connect(mapStateToProps, MapDispatchToProps)(Searchbar);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 15
  },
  parameters: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10
  },
  parameter:{
    marginRight:15,
    fontSize: 14
  },
  button:{
   justifyContent: 'flex-end',
   alignSelf: 'flex-end',
   fontSize: 14,
   marginRight: 15
  }
}
