import React from 'react';
import UsersListItem from '../Users/Users';
import { connect } from 'react-redux';
import { deletePerson } from '../../../../redux/actions';
import '../Form/Form.css'

const UserList = ({data, onDelete}) =>{

  let elements = data.map((item) => {
    const {id, firstName, lastName, email} = item;

    return (
      <UsersListItem key={id} id={id} firstName={firstName} 
                    lastName = {lastName} email={email}
                    onDelete={() => onDelete(id)}
                    />
    )
  })

    return(
      <div className = "userlist">
        <table className="table">
        <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
        <tbody>
          {elements}
        </tbody>
        </table>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    data: state.tableReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => dispatch(deletePerson(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);