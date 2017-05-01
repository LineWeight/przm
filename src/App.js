import React, { Component } from 'react'
import Notifications from 'react-notify-toast'
import {StickyContainer} from 'react-sticky'
import './App.css';
import PenList from './components/PenList'
import Sidebar from './components/Sidebar'




class App extends Component {

  constructor(){
    super();
  this.user = {
    id: 12345
  }
  }
  


  render() {
    return (
      <div className="app">
        <StickyContainer>
          <Notifications/>
          <div className="cols">
            <Sidebar user={this.user}/>
            <PenList user={this.user}/>
          </div>
        </StickyContainer>
      </div>
    )
  }
}

export default App;
