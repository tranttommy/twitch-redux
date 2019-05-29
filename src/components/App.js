import React from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';
import Home from './Home';
import StreamerDetail from '../containers/StreamerDetail';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:username" component={StreamerDetail} />
      </Switch>
    </Router>
  );
}
