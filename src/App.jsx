import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/navbar/Navbar';
import Register from './containers/register/Register';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <div>
    <ToastContainer />
    <NavBar />
    <Route path="/register" component={Register} />
  </div>
);

export default App;
