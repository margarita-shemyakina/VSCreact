let maxId = 1;

export const addItem = (firstName, lastName, email) => {
  return{
    type:'ADD_ITEM',
    id: ++maxId,
    firstName, 
    lastName, 
    email
  }
}

export const deletePerson = (id) => {
  return{
    type: 'DELETE_ITEM',
    id
  }
}

export const logIn = (logged) => {
  return{
    type: 'SIGN_IN',
    payload: logged
  }
}