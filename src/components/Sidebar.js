import React, {Component} from 'react'

export default Sidebar extends Component{



  renderButtons(){
    return(

    <div className="buttonGroup">
      <div className="buttonSubGroup">
        <button onClick={this.sortPens.bind(this, "COLOR_ID")}>Color ID</button>
        <button onClick={this.sortPens.bind(this, "NAME")}>Name</button>
        <button onClick={this.sortPens.bind(this, "ORG_ID")}>Relatedness</button>
      </div>
      <div className="buttonSubGroup">
        <button onClick={this.filterPens.bind(this,"200")}>All</button>
        <button onClick={this.filterPens.bind(this,"Portrait")}>Portrait</button>
        <button onClick={this.filterPens.bind(this,"PrimarySecondary")}>Primary Secondary</button>
        <button onClick={this.filterPens.bind(this,"CoolGrey")}>Cool Grey</button>
        <button onClick={this.filterPens.bind(this,"WarmGrey")}>Warm Grey</button>
        <button onClick={this.filterPens.bind(this,"NeutralGrey")}>Neutral Grey</button>
        <button onClick={this.filterPens.bind(this,"FrenchGrey")}>French Grey</button>
      </div>
    </div>
    )
  }

  render(){
    return(
      <sidebar>
        <Header/>
        {this.renderButtons}
      </sidebar>
    )
  }
}
