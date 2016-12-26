import React, { Component } from 'react';
import Notifications from 'react-notify-toast'
import {StickyContainer} from 'react-sticky'
import './App.css';
import PenList from './components/PenList'
import Sidebar from './components/Sidebar'


class App extends Component {

  render() {
    return (
      <div className="app">
        <StickyContainer>
        <Notifications/>
        <div className="cols">
        <Sidebar/>
        <PenList/>
        </div>
        </StickyContainer>
      </div>
    );
  }
}

export default App;
