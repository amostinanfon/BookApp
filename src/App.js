import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/pages/homepage';
import Loginpage from './components/pages/loginpage.js';


const App = () => 
  <div>
    <Route path='/' exact component={ Homepage } />
    <Route path='/login' component={ Loginpage }/>
  </div>

export default App;
