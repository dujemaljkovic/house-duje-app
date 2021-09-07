import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.module.css';
import Home from './containers/Home/Home';
import About from './containers/About';
import Gallery from './containers/Gallery/Gallery';
import Contact from './containers/Contact/Contact';
import NoMatch from './containers/NoMatch';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Jumbotron from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/gallery' component={Gallery} />
              <Route path='/contact' component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
