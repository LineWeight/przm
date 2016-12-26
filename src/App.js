import React, { Component } from 'react'
import Notifications from 'react-notify-toast'
import './App.css';
import PenList from './components/PenList'
import Sidebar from './components/Sidebar'


class App extends Component {

  render() {
    return (
      <div className="app">
          <Notifications/>
          <div className="cols">
            <Sidebar/>
            <PenList/>
          </div>
      </div>
    )
  }
}

export default App;
