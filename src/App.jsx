import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { getCurrentUser } from './services/userService';
import NavBar from './components/navbar/Navbar';
import SubNav from './components/subnav/subnav';
import Home from './components/home/Home';
import Login from './containers/login/Login';
import Logout from './containers/common/Logout';
import NewArticle from './containers/newArticle/NewArticle';
import NewGif from './containers/newGif/NewGif';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Protected from './components/protected/Protected';

class App extends Component {
  state = {};
  async componentDidMount(){
    const user = await getCurrentUser();
    this.setState({ user });
  }
  render() { 
    return ( 
      <div className="app">
        <ToastContainer className="toast"/>
        <NavBar user={this.state.user}/>
        {this.state.user && <SubNav />}
        <Protected user={this.state.user}/>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/new-article" component={NewArticle} />
        <Route path="/new-gif" component={NewGif} />
      </div>
     );
  }
}

export default App;
