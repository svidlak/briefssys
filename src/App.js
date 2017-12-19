import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import UserLoggedIn from './components/userLoggedIn'
import UserLoggedOut from './components/userLoggedOut'

class App extends Component {
  state = {
    loggedIn: false,
    userName: ''
  }

  logIn = () =>{
    axios.post('http://192.168.123.90/max/briefs/api.php', {user_login: this.state.userName}).then(resp=> {
      if(resp.data.length){
        localStorage.setItem('name', resp.data[0].name)
        localStorage.setItem('email', resp.data[0].email)
        localStorage.setItem('id', resp.data[0].id)
        localStorage.setItem('level', resp.data[0].level)
        localStorage.setItem('department', resp.data[0].department)
        this.setState({
          loggedIn: true
        })
      } else {
        alert("אנא וודאו כי כתובת המייל שלכם רשומה במערכת")
      }
    })
  }

  changeUsername = (event) =>{
    this.setState({
      userName: event.target.value
    })
  }

  componentWillMount = () => {
    if(localStorage.level){
      this.setState({
        loggedIn: true
      })
    }
  }
  render(){
    const isLoggedIn = this.state.loggedIn

    let compToRend = null
    if(isLoggedIn){
      compToRend = <UserLoggedIn />
    } else {
      compToRend = <UserLoggedOut logIn={this.logIn} userName={this.changeUsername}/>
    }

    return(
      <div>
        {compToRend}
      </div>
    );
  }
} 

export default App; 