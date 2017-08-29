var React = require('react');
var ReactDom = require('react-dom');

var Show = require('./show.js');
var showdata = require('./shows.json');

// pick the ID root and render
// attaching showData to the props of component Show
// ReactDom returns only 1 object, put everything in <div>
ReactDom.render(
    <div>
        <Show showdata={showdata[0]} />    
        <Show showdata={showdata[1]} />    
        <Show showdata={showdata[2]} />    
    </div>
    
    ,document.getElementById('root') 
);