// import React
var React = require('react');

// import ReactDom
var ReactDom = require('react-dom');


// use a method called React to create a react component
// tag type, attribute, value
// <h1> </h1>
// var component1 = React.createElement('h1', null, 'let us make 80000 dollars');

// using JSX instead of React.createElement
var component1 = <h1>Let us make 90000 dollars</h1>;

// render the component we just created
// need ReactDom library to render component
// ReactDom.render([what], [where])
ReactDom.render(component1, document.getElementById('root'));