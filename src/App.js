import React, { Component } from 'react';
import Notifications from 'react-notify-toast'
import { StickyContainer, Sticky } from 'react-sticky';
import './App.css';
import * as Actions from './actions/Actions'
import Pen from './components/Pen'
import Header from './components/Header'
import * as SortConst from './constants/SortConst'
import * as FilterConst from './constants/FilterConst'
import PenStore from './stores/PenStore'

class App extends Component {

  updatePenList(){
    this.setState({
      pens: PenStore.getPenList()
    })
  }

  componentWillMount(){
    PenStore.on("change", this.updatePenList.bind(this))
    this.updatePenList();
  }

  componentWillUnmount(){
    PenStore.removeListener("change", this.updatePenList)
  }

  renderPens(){
    let pens = []
    for(let p of this.state.pens){
        pens.push(<Pen key={p.id} name={p.name} colorId={p.colorId} rgb={p.rgb} />)
    }
    return pens
  }

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

  render() {
    return (
      <div className="app">
      <StickyContainer>
        <Notifications/>
        <Sticky>
        <Header/>
        </Sticky>
        {this.renderButtons()}
        <div className="wrap">
          {this.renderPens()}
        </div>
        <p className="credit">based on data from <a href="http://swatchtool.com"> swatchtool.com </a></p>
        </StickyContainer>
      </div>
    );
  }
}

export default App;
