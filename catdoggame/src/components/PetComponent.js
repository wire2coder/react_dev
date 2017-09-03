var React = require('react');

class PetComponent extends React.Component {

    // incoming props from outside
    // petname, petimageurl, petalt

    constructor(props) {
        super(props)
    }

    likeClick() {
        console.log('like');
    }

    dislikeClick() {
        console.log('dislike');
    }

    render() {
        // this.props is built-in
        // return JSX
        return (
            <div style={compStyle} >
                <h3> {this.props.petname} </h3>

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