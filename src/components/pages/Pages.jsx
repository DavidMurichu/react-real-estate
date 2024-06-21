
import React from 'react';
import Header from '../common/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Footer from '../common/footer/Footer';
import About from '../about/About';
import Pricing from '../pricing/Pricing';
import Services from '../services/Services';
import Contact from '../contact/Contact';
import Compare from '../compare/compare';
import { CompareProvider } from '../appService/compareService';
import Listings from '../listings/Listings';


const Pages = () => {
  return (
    <>
      <CompareProvider>
      <Router>
      
          <Header />
        
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/compare' component={Compare} />
            <Route exact path='/about' component={About} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/listings' component={Listings} />
            <Route exact path='/pricing' component={Pricing} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
       
        <Footer />
      </Router>
      </CompareProvider>
    </>
  );
};

export default Pages;
