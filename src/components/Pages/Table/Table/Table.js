import React from 'react';
import Form from '../Form/Form';
import UserList from '../UserList/UserList';


class TablePage extends React.Component{  

  render(){
    return(
      <div>
        <Form/>
        <UserList/>
      </div>
    )
  }
}

export default TablePage;