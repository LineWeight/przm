import React, {Component} from 'react'
import * as SortConst from '../constants/SortConst'
import * as FilterConst from '../constants/FilterConst'
import PenStore from '../stores/PenStore'
import * as Actions from '../actions/Actions'
import Header from './Header'

export default class Sidebar extends Component{

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

  renderButtons(){
    return(

      <div className="buttonGroup">
        <h3>Sort</h3>
        <div className="buttonSubGroup">
          <button className={this.isActive(SortConst.COLOR)} onClick={this.sortPens.bind(this, SortConst.COLOR)}>Color ID</button>
          <button className={this.isActive(SortConst.NAME)} onClick={this.sortPens.bind(this, SortConst.NAME)}>Name</button>
          <button className={this.isActive(SortConst.ORG)} onClick={this.sortPens.bind(this, SortConst.ORG)}>Relatedness</button>
        </div>
        <h3>Filter</h3>
        <div className="buttonSubGroup">
          <button className={this.isActive(FilterConst.ALL)} onClick={this.filterPens.bind(this, FilterConst.ALL)}>All</button>
          <button className={this.isActive(FilterConst.PORTRAIT)} onClick={this.filterPens.bind(this, FilterConst.PORTRAIT)}>Portrait</button>
          <button className={this.isActive(FilterConst.PRIMARYSECONDARY)} onClick={this.filterPens.bind(this, FilterConst.PRIMARYSECONDARY)}>Primary Secondary</button>
          <button className={this.isActive(FilterConst.COOLGREY)} onClick={this.filterPens.bind(this, FilterConst.COOLGREY)}>Cool Grey</button>
          <button className={this.isActive(FilterConst.WARMGREY)} onClick={this.filterPens.bind(this, FilterConst.WARMGREY)}>Warm Grey</button>
          <button className={this.isActive(FilterConst.NEUTRALGREY)} onClick={this.filterPens.bind(this, FilterConst.NEUTRALGREY)}>Neutral Grey</button>
          <button className={this.isActive(FilterConst.FRENCHGREY)} onClick={this.filterPens.bind(this, FilterConst.FRENCHGREY)}>French Grey</button>
        </div>
      </div>

    )
  }

  render(){
    return(
      <div className="sidebar">
          <Header/>
            {this.renderButtons()}
            <p className="credit">based on data from <a href="http://swatchtool.com"> swatchtool.com </a></p>
      </div>
    )
  }
}
