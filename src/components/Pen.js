import React, {Component} from 'react'
import Swatch from './Swatch'
export default class Pen extends Component{

  render(){
    let {name, colorId, rgb} = this.props
    return(
      <div className="pen">
        <Swatch rgb={rgb} colorId={colorId}/>
        <div className="titles">
          <p className="name">{name}</p>
        </div>
      </div>
    )
  }
}
