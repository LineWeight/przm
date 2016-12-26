import React, {Component} from 'react'
import Swatch from './Swatch'
import User from './User'
import PenStore from '../stores/PenStore'
import * as Actions from '../actions/Actions'
export default class Pen extends Component{

  constructor(){
    super()
    this.user = User.instance
  }

  isActiveInEdit(user, colorId){
    if(PenStore.userHasColor(user, colorId) && PenStore.isEditing()){
      return "hot "
    }else{
      return " "
    }
  }

  toggleInUserBox(user, colorId){
    if(!PenStore.userHasColor(user, colorId)){
      Actions.userAddPen(user, colorId)
    }else{
      Actions.userRemovePen(user,colorId)
    }
  }

  isInUserBox(user, colorId){
    if(PenStore.userHasColor(user, colorId)){
      return "inUserBox"
    }else{
      return ""
    }
  }

  render(){
    let {name, colorId, rgb} = this.props
    return(
      <div className={"pen " + this.isActiveInEdit(this.user.id, colorId) + this.isInUserBox(this.user.id, colorId)} onClick={this.toggleInUserBox.bind(this, this.user.id, colorId)}>
        <Swatch rgb={rgb} colorId={colorId}/>
        <div className="titles">
          <p className="name">{name}</p>
        </div>
      </div>
    )
  }
}
