// import React
var React = require('react');

// import ReactDom
var ReactDom = require('react-dom');


// React.createElement(type, attributes, child1, child2, child3)
// React.createElement(type, attributes, ...children)

// using JSX instead of React.createElement
// var component1 = <h1>Let us make 90000 dollars</h1>;

// make a component out of function
// CAPITALISE your component name to tell React that it is not a 'native' component
var Component1 = function() {
    // a function that returns JSX, Javascript Syntax Extension
    return ( <h4>Let us make 92000 </h4> );
}

// render the component we just created
// need ReactDom library to render component
// ReactDom.render([what], [where])

// ReactDom.render(component1, document.getElementById('root'));
// ReactDom.render(React.createElement(Component1), document.getElementById('root') );
// ReactDom.render(<Component1></Component1>, document.getElementById('root'));
ReactDom.render(<Component1 />, document.getElementById('root') );