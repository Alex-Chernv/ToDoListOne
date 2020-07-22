import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navbar} from './components/Navbar.js';
import {Home} from './pages/Home.js';
import {About} from './pages/About.js';
import {Alert} from './components/Alert.js'
import {AlertState} from './context/alert/AlertState.js'

function App() {
    return (
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <div className="container pt-4">
            <Alert/>
            <Switch>
              <Route path={'/'} exact component={Home}/>
              <Route path={'/about'} component={About}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>

  );
}

export default App;
