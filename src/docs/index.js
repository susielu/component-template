import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Documentation from './Documentation';
import LayoutFooter from './layout/Footer';

// import 'bootstrap/dist/css/bootstrap.css';
import './flexboxgrid.css';
import './prism.css';
import './index.css';

const TITLE = 'Component Template';
const gh = 'reactstrap/component-template';
// if using a root url, remove the basename value here and in BrowserRouter
const basename = process.env.REACT_APP_GH_PAGES_PATH ?
  `/${process.env.REACT_APP_GH_PAGES_PATH}` : '';

const Docs = () => {
  return (
    <BrowserRouter basename={basename}>
      <div className="App">
        <Route exact pattern="/" render={() => <Home title={TITLE} gh={gh} />} />
        <Route pattern="/documentation" component={Documentation} />
        <LayoutFooter gh={gh} />
      </div>
    </BrowserRouter>
  );
};

export default Docs;
