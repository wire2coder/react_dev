var React = require('react');
var ReactDom = require('react-dom');

var App = require('./App.js');
var Todo = require('./Todo.js');

ReactDom.render(
    <App />
    ,document.getElementById("root")
)