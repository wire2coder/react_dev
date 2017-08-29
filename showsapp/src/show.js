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
            </div>
            
        );
    }
});


// class component the wrapper
// CLASS, 'THIS', PROPS
var Show = createClass({

    // setting default values for <Show /> props
    getDefaultProps: function() {
        return {
            showIndex: 0
        }
    }

    // component props
    // this.props.whatevername

    // component STATE/private data that can change
    // this.state.showIndex
    ,getInitialState: function() {
    
        // if showIndex did not get injected from the outside
        // use the default value for it
        return {
            showIndex: (this.props.showIndex)
        };
    }

    ,clickHandler: function() {
    
        let totalShow = this.props.showdata.length;

        // prevState is the same as this.state.showIndex
        this.setState(function(prevState) {
            // console.log(prevState.showIndex);

            return {
                showIndex: (prevState.showIndex + 1) % totalShow
            };
        });

    }
    ,render: function() {

        // return JSX
        return (
            <div className="text-center">
                <Title title1 = {this.props.showdata[this.state.showIndex].title} />
                <Picture link1 = {this.props.showdata[this.state.showIndex].poster} />
                <Info 
                    info1 = {this.props.showdata[this.state.showIndex].plot}
                    rating1 = {this.props.showdata[this.state.showIndex].imdbRating}
                 />

                 <button onClick={this.clickHandler} >Next Show</button>
            </div>
        );
    }
});

module.exports = Show;