// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

var React = require('react');
var ReactDom = require('react-dom');

var App = require('./App.js')

ReactDom.render(
<App />
, document.getElementById('root')
); 