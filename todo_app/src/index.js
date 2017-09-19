var React = require('react');

// var ReactDom = require('react-dom');
var {render} = require('react-dom');

var App = require('./App.js');


render(
    <App />
    ,document.getElementById("root")
)