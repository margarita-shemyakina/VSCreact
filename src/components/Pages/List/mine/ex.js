import React, { Component } from 'react';
import{ListGroup} from 'react-bootstrap'
import './List.css'

class ThemeSwitcher extends Component {
  render() {   
    return (
        <ListGroup className="ListGroup">
            <ListGroup.Item>No style</ListGroup.Item>
            <ListGroup.Item variant="light">Light</ListGroup.Item>
            <ListGroup.Item variant="dark">Dark</ListGroup.Item>
        </ListGroup>
    ); 
  }
}
export default ThemeSwitcher;