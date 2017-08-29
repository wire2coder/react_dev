var React = require('react');
var ReactDom = require('react-dom');
var CreateClass = require('create-react-class');

var Show = require('./show.js');

var TestComponent = CreateClass({
    render: function() {
        return (
            <div>
                <h4>testing</h4>
            </div>
        );
    }
})

// pick the ID root and render
ReactDom.render(
    <Show />
    ,document.getElementById('root') 
);