var React = require('react');

var HeaderComponent = require('./HeaderComponent.js');
var PetGame = require('./PetGame.js');

var HomePage = function(props) {

    // return JSX
    return (
        <div>
            <HeaderComponent />
            <PetGame />
        </div>
    )
}

module.exports = HomePage;