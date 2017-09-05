var React = require('react');

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

// changing <PetComponent> from class to function component
var PetComponent = function(props) {

    // return JSX
    return (
        <div style={compStyle} >
            <h3> {props.petname} like: {props.likeCount} </h3>
            <img style={{width: 400, height: 400}} 
            src={props.petimageurl} alt={props.petalt} />
            <br />
            <button style={btnStyle} value={props.petname} onClick={ props.likeClick } > Like </button>
            <button style={btnStyle} value={props.petname} onClick={ props.dislikeClick } > Dislike </button>
        </div>
    )
}

module.exports = PetComponent;