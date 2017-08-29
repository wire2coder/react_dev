// make 5 class components
// use the create-react-class

var React = require('react');
var createClass = require('create-react-class');

// class component title
var Title = createClass({
    render: function() {
        // return JSX
        return (
            <h4>Friends</h4>
        );
    }
})

// class component picture
var Picture = createClass({
    render: function() {
        return (
            <img src="https://www.movieposter.com/posters/archive/main/52/MPW-26106" />
        );
    }
})

// class component movie info
var Info = createClass({
    render: function() {
        return (
            <div>
                <p>Follows the personal and professional lives of six 20 to 30-something-year-old friends living in Manhattan.</p>
                <h4>IMDB Rating: 9.0</h4>
            </div>
            
        );
    }
})


// class component the wrapper
var Show = createClass({
    render: function() {
        return (
            <div className="text-center">
                <Title />
                <Picture />
                <Info />
            </div>
        )
    }
})

module.exports = Show;