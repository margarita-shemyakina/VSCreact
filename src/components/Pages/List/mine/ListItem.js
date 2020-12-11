import React from 'react';
import bootstrap from 'bootstrap'


class BackBtn extends React.Component{

  onclick () {
    window.location.assign('.');
  }

  render(){
    return(
     <bootstrap.ListGroup>
        <bootstrap.ListGroup.Item>No style</bootstrap.ListGroup.Item>
        <bootstrap.ListGroup.Item variant="primary">Primary</bootstrap.ListGroup.Item>
        <bootstrap.ListGroup.Item variant="secondary">Secondary</bootstrap.ListGroup.Item>
        <bootstrap.ListGroup.Item variant="success">Success</bootstrap.ListGroup.Item>
        <bootstrap.ListGroup.Item variant="danger">Danger</bootstrap.ListGroup.Item>
        <bootstrap.ListGroup.Item variant="warning">Warning</bootstrap.ListGroup.Item>
        <bootstrap.ListGroup.Item variant="info">Info</bootstrap.ListGroup.Item>
        <bootstrap.ListGroup.Item variant="light">Light</bootstrap.ListGroup.Item>
        <bootstrap.ListGroup.Item variant="dark">Dark</bootstrap.ListGroup.Item>
     </bootstrap.ListGroup>
    )
  }
}

export default BackBtn;