import React, { Component } from 'react';
import './App.css';
import NotFoundPage from './components/404/404.jsx'
import FAQ from './components/About/FAQ.jsx'
import Home from './components/ComboStreams/ComboStreams.jsx'
import ComboStreams from './components/ComboStreams/ComboStreams.jsx'


import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect} from "react-router-dom";


  
class App extends Component {
  render() {

    return <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/" component={ComboStreams}/>
          <Route exact path="/faq" component={FAQ}/>
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/"/>
        </Switch>
        
    </Router>
  } 
}

export default App;
