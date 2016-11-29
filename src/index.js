import 'babel-polyfill'; //there are a set of features in es6
// that babel can't transpile, so for those you do need to use 
// 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack can import css file too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);