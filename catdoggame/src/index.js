var React = require('react');
var ReactDom = require('react-dom');

var style1 = require('./index.css');

var Game = require('./Game.js');

// render the component
ReactDom.render(
    <div>
        <Game className={style1} />
    </div>
    ,document.getElementById('root')

);