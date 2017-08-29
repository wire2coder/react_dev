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

var Component1 = function(props) {
    // a function that returns JSX, Javascript Syntax Extension

    var style = {
        color: props.color
    }

    return ( 
        <div style={style} >
        <h4>{props.greeting}</h4>  
        </div>
    );
}

// render the component we just created
// need ReactDom library to render component
// ReactDom.render([what], [where])

// ReactDom.render(component1, document.getElementById('root'));
// ReactDom.render(React.createElement(Component1), document.getElementById('root') );
// ReactDom.render(<Component1></Component1>, document.getElementById('root'));

// Now are we adding properties to the Component/function
ReactDom.render(
    // greeting='hello' is attached to object 'props'
    <div>
    <Component1 greeting='Let us make a lot of money' color='red' />
    <Component1 greeting='Let us be bold and kind' color='blue' />
    </div>,
    document.getElementById('root') 
);