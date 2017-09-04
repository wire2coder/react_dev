var React = require('react');

class PetComponent extends React.Component {

    // incoming props from outside
    // petname, petimageurl, petalt
    
    constructor(props) {
        // React.Component
        super(props);

        this.state = {
            likeCounts: 0
        };

        // ES6 class syntax does not AUTO BIND the 'THIS'/object
        // I am manually binding here
        this.likeClick = this.likeClick.bind(this);
        this.dislikeClick = this.dislikeClick.bind(this);
    }

    likeClick() {
        // console.log(`${this.props.petname} + like`);
        // change the state data
        this.setState(function(prevState, props) {
            // remember... prevState is this.state and the CURRENT state/data
            return {
                likeCounts: prevState.likeCounts + 1
            }
        }) 
    }

    dislikeClick() {
        // console.log(`${this.props.petname} + dislike`);
        this.setState(function(prevState, props) {
            return {
                likeCounts: prevState.likeCounts - 1
            }
        }) 
    }

    render() {
        // this.props is built-in
        // return JSX
        return (
            <div style={compStyle} >
                <h3> {this.props.petname} like: {this.state.likeCounts} </h3>

                <img style={{width: 400, height: 400}} 
                src={this.props.petimageurl} alt={this.props.petalt} />

                <br />
                <button style={btnStyle} onClick={this.likeClick} > Like </button>
                <button style={btnStyle} onClick={this.dislikeClick} > Dislike </button>
            </div>
        )
    }


} // class 

var compStyle = {
    textAlign: 'center',
    display: 'inline-block',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  var btnStyle = {
    height: '25px',
    width: '70px',
    marginTop: '10px',
    marginLeft: '5px',
    marginRight: '5px'
  };

module.exports = PetComponent;