import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';

export default class Searchbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
        parameters: {
            score: 1000,
            sort: "activity",
            limit: 10,
            tag: ""
        }
    };
  
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  };
  
  onInputChange(event){
    let values = this.state.parameters;
    values[event.target.name] = event.target.value;
    this.setState({parameters: values});
  }

  onFormSubmit(event){
    event.preventDefault();
    console.log(this.state.parameters);
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
                  style={styles.parameter}
                  placeholder="tag"
                  className="form-control"
                  onChange={this.onInputChange}
                  value={this.state.parameters.tag}
                />

                <input
                  name="score"
                  style={styles.parameter}
                  placeholder="score"
                  className="form-control"
                  value={this.state.parameters.score}
                  onChange={this.onInputChange}
                />

                <input
                  name="sort"
                  style={styles.parameter}
                  placeholder="sort"
                  className="form-control"
                  value={this.state.parameters.sort}
                  onChange={this.onInputChange}
                />

                <input
                  name="limit"
                  style={styles.parameter}
                  placeholder="limit"
                  className="form-control"
                  value={this.state.parameters.limit}
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
