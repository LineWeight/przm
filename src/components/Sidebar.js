import React, {Component} from 'react'
import { Sticky } from 'react-sticky';
import * as SortConst from '../constants/SortConst'
import * as FilterConst from '../constants/FilterConst'
import * as Actions from '../actions/Actions'
import Header from './Header'

export default class Sidebar extends Component{



  sortPens(sortFlag){
    Actions.sortPens(sortFlag);
  }

  filterPens(filterFlag){
    Actions.filterPens(filterFlag);
  }

  renderButtons(){
    return(

      <div className="buttonGroup">
        <div className="buttonSubGroup">
          <button onClick={this.sortPens.bind(this, SortConst.COLOR)}>Color ID</button>
          <button onClick={this.sortPens.bind(this, SortConst.NAME)}>Name</button>
          <button onClick={this.sortPens.bind(this, SortConst.ORG)}>Relatedness</button>
        </div>
        <div className="buttonSubGroup">
          <button onClick={this.filterPens.bind(this, FilterConst.ALL)}>All</button>
          <button onClick={this.filterPens.bind(this, FilterConst.PORTRAIT)}>Portrait</button>
          <button onClick={this.filterPens.bind(this, FilterConst.PRIMARYSECONDARY)}>Primary Secondary</button>
          <button onClick={this.filterPens.bind(this, FilterConst.COOLGREY)}>Cool Grey</button>
          <button onClick={this.filterPens.bind(this, FilterConst.WARMGREY)}>Warm Grey</button>
          <button onClick={this.filterPens.bind(this, FilterConst.NEUTRALGREY)}>Neutral Grey</button>
          <button onClick={this.filterPens.bind(this, FilterConst.FRENCHGREY)}>French Grey</button>
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
