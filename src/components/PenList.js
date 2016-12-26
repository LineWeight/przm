import React, {Component} from 'react'
import Pen from './Pen'
import PenStore from '../stores/PenStore'


export default class PenList extends Component{

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

  render(){

    return(
      <div className="wrap">
        <div className="container">
          {this.renderPens()}
        </div>
      </div>
    )
  }

}
