import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid'
import Pen from './components/Pen'
import colorData from './Colors.json'

class App extends Component {

  constructor(){
    super();
    let data = colorData;
    data = this.organizeData(data)
    this.state={
      pens: data
    }
  }


  organizeData(data){
    let i = 0;
    for(let e of data){
      e.orgId = i;
      i++;
      e.colorId = e.id
      e.id = uuid.v4();
      e.colorText = e.textColor
      delete(e.textColor)
      delete(e.cmykv)
      delete(e.rgbp)
      delete(e.rgbv)
      e.rgb = e.rgb.split(',')
      e.cmyk = e.cmyk.split(',')
      for(let f = 0; f<3; f++){
        e.rgb[f] = parseInt(e.rgb[f], 10)
      }
      for(let f = 0; f<4; f++){
        e.cmyk[f] = parseInt(e.cmyk[f], 10)
      }
    }
    return data
  }




  sortPens(flag){

    function colorIdSort(a,b){
      if(a.colorId > b.colorId){
        return 1
      }else if(a.colorId < b.colorId){
        return -1
      }
      return 0
    }

    function nameSort(a,b){
      if(a.name > b.name){
        return 1
      }else if(a.name < b.name){
        return -1
      }
      return 0
    }

    function orgIdSort(a,b){
      if(a.orgId > b.orgId){
        return 1
      }else if(a.orgId < b.orgId){
        return -1
      }
      return 0
    }

    switch (flag) {
      case "COLOR_ID":
        this.setState({
          pens: this.state.pens.sort(colorIdSort)
        })
        break;
      case "NAME":
        this.setState({
          pens: this.state.pens.sort(nameSort)
        })
        break;
      case "ORG_ID":
        this.setState({
          pens: this.state.pens.sort(orgIdSort)
        })
        break;
      default:

    }
  }

  filterPens(f){
    this.setState({f})
  }

  renderPens(data, f){
    let pens = []
    for(let p of data){
      if((f && p.groups[f]) || !f){
        pens.push(<Pen key={p.id} name={p.name} colorId={p.colorId} rgb={p.rgb} />)
      }
    }
    return pens
  }

  render() {
    return (
      <div className="app">
        <div className="buttonGroup">
          <button onClick={this.sortPens.bind(this, "COLOR_ID")}>color id</button>
          <button onClick={this.sortPens.bind(this, "NAME")}>name</button>
          <button onClick={this.sortPens.bind(this, "ORG_ID")}>org id</button>
        </div>
        <div className="buttonGroup">
          <button onClick={this.filterPens.bind(this,"FrenchGrey")}>French Grey</button>
          <button onClick={this.filterPens.bind(this,"Portrait")}>Portrait</button>
          <button onClick={this.filterPens.bind(this,"PrimarySecondary")}>Primary Secondary</button>
          <button onClick={this.filterPens.bind(this,"CoolGrey")}>Cool Grey</button>
          <button onClick={this.filterPens.bind(this,"WarmGrey")}>Warm Grey</button>
          <button onClick={this.filterPens.bind(this,"NeutralGrey")}>Neutral Grey</button>
          <button onClick={this.filterPens.bind(this,"200")}>All</button>
        </div>
        <div className="wrap">
          {this.renderPens(this.state.pens, this.state.f)}
        </div>
      </div>
    );
  }
}

export default App;
