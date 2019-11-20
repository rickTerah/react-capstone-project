import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/navbar/Navbar';
import Register from './containers/register/Register';
import Login from './containers/login/Login';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <div>
    <ToastContainer />
    <NavBar />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
  </div>
);

export default App;
