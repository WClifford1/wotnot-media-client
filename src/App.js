import React, { Component } from 'react'
import Home from './components/Home';
import Card1 from './components/Card1'; 
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import Navbar1 from './components/Navbar1';
import { Switch, Route } from 'react-router-dom';
import Faq from './components/Faq';
import Contact from './components/Contact';
import ServicePage from './components/ServicePage';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './/App.css';
import Print from './components/Print';
import WebDesign from './components/WebDesign';
import Video from './components/Video';


export default class App extends Component {


  render() {
    return (
      <React.Fragment>
        <Navbar1 />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={ServicePage} />
          <Route path="/projects" component={Card1} />
          <Route path="/FAQ" component={Faq} />
          <Route path="/contact" component={Contact} />
          <Route path="/enquiries" component={EnquiryForm} />
          <Route path="/termsandconditions" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/print" component={Print} />
          <Route path="/web" component={WebDesign} />
          <Route path="/video" component={Video} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}
