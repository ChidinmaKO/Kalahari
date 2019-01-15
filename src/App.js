import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetail';
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Navbar />
          <Switch>
            <Route exact path='/' component={ Dashboard }/>
            <Route path='/project/:id' component={ ProjectDetail } />
            <Route path='/signin' component={ SignIn } />
            <Route path='/signup' component={ SignUp } />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
