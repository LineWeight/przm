import React, { Component } from 'react'
import Notifications from 'react-notify-toast'
import {StickyContainer} from 'react-sticky'
import firebase from './constants/Firebase'
import PenList from './components/PenList'
import Sidebar from './components/Sidebar'
import './App.css';



class App extends Component {

  constructor(){
    super();
    this.state = {
      user: {
        id: 1
      }
    }
  }
  
  updateUser(user){
    this.setState({
      user
    })
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.updateUser(user)
      }else{
        this.updateUser({
          id: 1
        })
      }
    })
  }

  render() {
    return (
      <div className="app">
        <StickyContainer>
          <Notifications/>
          <div className="cols">
            <Sidebar user={this.state.user}/>
            <PenList user={this.state.user}/>
          </div>
        </StickyContainer>
      </div>
    )
  }
}

export default App;
