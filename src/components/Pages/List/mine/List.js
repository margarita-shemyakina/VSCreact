import React from 'react';
import BackBtn from '../../Table/BackBtn/BackBtn'
import ThemeSwitcher from './ex'


class List extends React.Component{  

  render(){
    return(
      <div>
        <BackBtn/>
        <ThemeSwitcher/>
      </div>
    )
  }
}

export default List;