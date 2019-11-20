import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/navbar/Navbar';
import Register from './containers/register/Register';
import Login from './containers/login/Login';
import NewArticle from './containers/newArticle/NewArticle';
import NewGif from './containers/newGif/NewGif';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <div>
    <ToastContainer />
    <NavBar />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/new-article" component={NewArticle} />
    <Route path="/new-gif" component={NewGif} />
  </div>
);

export default App;
