// make 5 class components
var React = require('react');
// var createClass = require('create-react-class');

// use the ES6 'class' syntactic sugar
class Title extends React.Component {
    // so, Title is a 'sub-class'
    // you need to call the 'super-class'/'parent' class constructor
    constructor(props) {
        super(props);
    }

    render() {

        // output JSX
        return (
            <h4> {this.props.title1} </h4>
        );
    }

} // class Title

class Picture extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        // return JSX
        return (
            <img src={this.props.link1} alt='pic' />
        );
    }

} // class Picture

class Info extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        // return JSX
        return (
            <div>
                <p> {this.props.info1} </p>
                <h4> {this.props.rating1} </h4>
            </div>
        );
    }

} // class Info

class Show extends React.Component {

    // static defaultProps is the same as
    /* getDefaultProps: function() {
        return { showIndex: 1 }
    }
    */
    static defaultProps = {
        showIndex: 1
    }

    constructor(props) {
        super(props);

        // what is a state?
        // place to store data that keeps changing
        this.state = { showIndex: this.props.showIndex };
        // console.log(this.state.showIndex);

        // what is 'this' ??? the <Show />
        // bind() creates a copy of the function clickHandler1
        // this.clickHandler1 = this.clickHandler1.bind(this);
        // console.log(this.clickHandler1)
    }

    render() {

        // return JSX
        // render only output ONE object

        return (
            <div className="text-center" >
                <Title title1= {this.props.showdata[this.state.showIndex].title} />
                <Picture link1= {this.props.showdata[this.state.showIndex].poster} />

                <Info 
                    info1= {this.props.showdata[this.state.showIndex].plot} 
                    rating1 = {this.props.showdata[this.state.showIndex].imdbRating}
                />
                
                <button onClick={this.clickHandler1.bind(this)} > Next Show </button>

            </div>
        );

    }

    clickHandler1() {
        // in here, 'this' is pointing to the 'Browser Window' object
        // need to do the 'BIND' thing in the constructor
        // to make it point to <Show /> instead

        // good! you got it!
        // console.log(this.state.showIndex);

        // object.setState() to change the values in state
        this.setState(function(prevState) {
            // console.log(prevState);

            return {showIndex: (prevState.showIndex + 1) % this.props.showdata.length }
        });
  
    }

} // class Show

module.exports = Show;