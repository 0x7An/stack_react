import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";

export default class Item extends Component {
  
  constructor(props){
      super(props);
      
      this.state = {
          votes:0,
          answers:0,
          view:0,
          title:"",
          tags:[],
          date:""
      }
  }  

  render() {
    return (
      <div></div>
    )
  }
};

const styles = {
  container : {
    display: 'flex',
    flexDirection: 'row',
    margin: '10',
  }
}