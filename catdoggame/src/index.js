var React = require('react');
var ReactDom = require('react-dom');

// var style1 = require('./index.css');

var HomePage = require('./components/HomePage.js');

// render the component
ReactDom.render(
    <div>
        <HomePage />
    </div>
    ,document.getElementById('root')

);