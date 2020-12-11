import React from 'react';
import './Button.css'


class ListItem extends React.Component{

  onclick () {
    window.location.assign('./list');
  }

  render(){
    return(
    <div>
        <button className = "btn" onClick={(e) => this.onclick(e)}>LIST</button>
		</div>
    )
  }
}

export default ListItem;