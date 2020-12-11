import React, { Component } from 'react';
import{ListGroup} from 'react-bootstrap'
import './List.css'


class ThemeSwitcher extends Component {

   
  render() {
    
    return (
        <ListGroup className="ListGroup">
            <ListGroup.Item>No style</ListGroup.Item>
            <ListGroup.Item variant="primary">Primary</ListGroup.Item>
            <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
            <ListGroup.Item variant="success">Success</ListGroup.Item>
            <ListGroup.Item variant="danger">Danger</ListGroup.Item>
            <ListGroup.Item variant="warning">Warning</ListGroup.Item>
            <ListGroup.Item variant="info">Info</ListGroup.Item>
            <ListGroup.Item variant="light">Light</ListGroup.Item>
            <ListGroup.Item variant="dark">Dark</ListGroup.Item>
        </ListGroup>
    );
    
  }
  
}
 
export default ThemeSwitcher;