// make 5 class components
// use the create-react-class

var React = require('react');
var createClass = require('create-react-class');

// class component title
var Title = createClass({
    render: function() {
        // return JSX
        // don't forget, this is a CLASS and CLASS needs what? 'THIS'
        // each component has it's own property/props
        return (
            <h4> {this.props.title1} </h4>
        );
    }
});

// class component picture
var Picture = createClass({
    render: function() {
        // weird, you don't need "" in src
        return (
            <img src={this.props.link1} alt='pic' />
        );
    }
})

// class component movie info
var Info = createClass({
    render: function() {
        return (
            <div>
                <p> {this.props.info1} </p>
                <h4>IMDB Rating: {this.props.rating1} </h4>
                <button> Next </button>
            </div>
            
        );
    }
});


// class component the wrapper
// CLASS, 'THIS', PROPS
var Show = createClass({
    render: function() {
        return (
            <div className="text-center">
                <Title title1 = {this.props.showdata.title} />
                <Picture link1 = {this.props.showdata.poster} />
                <Info 
                    info1 = {this.props.showdata.plot}
                    rating1 = {this.props.showdata.imdbRating}
                 />
            </div>
        );
    }
});



module.exports = Show;