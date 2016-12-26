import React, {Component} from 'react'
import { Sticky } from 'react-sticky';
import * as SortConst from '../constants/SortConst'
import * as FilterConst from '../constants/FilterConst'
import PenStore from '../stores/PenStore'
import * as Actions from '../actions/Actions'
import Header from './Header'
import User from './User'

export default class Sidebar extends Component{

  constructor(){
    super()
    this.user = User.instance
  }

  componentWillMount(){
    PenStore.on("change", this.updateFlags.bind(this))
    this.updateFlags();
  }

  componentWillUnmount(){
    PenStore.removeListener("change", this.updateFlags)
  }

  updateFlags(){
    this.setState({
      sortFlag: PenStore.getSort(),
      filterFlag: PenStore.getFilter()
    })
  }

  sortPens(sortFlag){
    Actions.sortPens(sortFlag);
  }

  filterPens(filterFlag){
    Actions.filterPens(filterFlag);
  }

  isActive(flag){
    if((flag === this.state.sortFlag) || (flag === this.state.filterFlag)){
      return "active"
    }else{
      return " "
    }
  }

  toggleEdit(){
    if(!PenStore.isEditing()){
      Actions.beginEdit()
    }else{
      Actions.endEdit()
    }
  }

  editIsActive(){
    if(PenStore.isEditing()){
      return "editActive"
    }else{
      return ""
    }
  }

  renderButtons(){
    return(

      <div className="buttonGroup">
        <h3>Sort</h3>
        <div className="buttonSubGroup">
          <div className={"button " + this.isActive(SortConst.COLOR)} onClick={this.sortPens.bind(this, SortConst.COLOR)}>Color ID</div>
          <div className={"button " + this.isActive(SortConst.NAME)} onClick={this.sortPens.bind(this, SortConst.NAME)}>Name</div>
          <div className={"button " + this.isActive(SortConst.ORG)} onClick={this.sortPens.bind(this, SortConst.ORG)}>Relatedness</div>
        </div>
        <h3>Filter</h3>
        <div className="divSubGroup">
          <div className={"button " + this.isActive(FilterConst.ALL)} onClick={this.filterPens.bind(this, FilterConst.ALL)}>All</div>
          <div className={"button " + this.isActive(FilterConst.PORTRAIT)} onClick={this.filterPens.bind(this, FilterConst.PORTRAIT)}>Portrait</div>
          <div className={"button " + this.isActive(FilterConst.PRIMARYSECONDARY)} onClick={this.filterPens.bind(this, FilterConst.PRIMARYSECONDARY)}>Primary Secondary</div>
          <div className={"button " + this.isActive(FilterConst.COOLGREY)} onClick={this.filterPens.bind(this, FilterConst.COOLGREY)}>Cool Grey</div>
          <div className={"button " + this.isActive(FilterConst.WARMGREY)} onClick={this.filterPens.bind(this, FilterConst.WARMGREY)}>Warm Grey</div>
          <div className={"button " + this.isActive(FilterConst.NEUTRALGREY)} onClick={this.filterPens.bind(this, FilterConst.NEUTRALGREY)}>Neutral Grey</div>
          <div className={"button " + this.isActive(FilterConst.FRENCHGREY)} onClick={this.filterPens.bind(this, FilterConst.FRENCHGREY)}>French Grey</div>
          <div className="button segmentedButton">
            <div className={" " + this.isActive(this.user.id)} onClick={this.filterPens.bind(this, this.user.id)}>Your Set</div>
            <div className={"editButton " + this.editIsActive()} onClick={this.toggleEdit.bind(this)}>Edit</div>
          </div>
        </div>
      </div>

    )
  }



  render(){
    return(
      <div className="sidebar">
          <Header/>
          <Sticky>
            {this.renderButtons()}
            <p className="credit">based on data from <a href="http://swatchtool.com"> swatchtool.com </a></p>
          </Sticky>
      </div>
    )
  }
}
