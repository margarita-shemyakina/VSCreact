import React from 'react';
import Button from '../List/mine/Button';
import Autorization from '../Authorization/Autorization';


class MainPage extends React.Component{  

  render(){
    return(
      <div>
        <Button/>
        <Autorization/>
      </div>
    )
  }
}

export default MainPage;