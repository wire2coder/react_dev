var React = require('react');

var HeaderComponent = function() {

    var style = {
        textAlign: 'center',
        fontSize: '2em',
        color: 'red'
    }

    // return JSX
    return(
        <h1 style={style}>
            Welcome to the Cat and Dog Game!
        </h1>

    );

}

module.exports = HeaderComponent;

