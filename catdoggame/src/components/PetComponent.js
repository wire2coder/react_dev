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

    // default text color is black
    var styleResult = null;
    var buttonDisabled = false;

    if (props.winningString !== '') {

        if (props.winningString === 'Winner') {
            styleResult = {color: 'green'}
        } else if (props.winningString === 'Lobtser') {
            styleResult = {color: 'red'}
        }

        buttonDisabled = true;
    }
    // winner text is green
    // not winner text is red
    
    // return JSX
    return (
        <div style={compStyle} >
            <h2 style={styleResult} > {props.winningString} </h2>

            { (!props.winningString)
                ? (<h3> {props.petname} </h3>)
                : (<h3> {props.petname} like: {props.likeCount}</h3>)
            }

            <img style={{width: 400, height: 400}} 
            src={props.petimageurl} alt={props.petalt} />
            <br />
            <button style={btnStyle} disabled={buttonDisabled} value={props.petname} onClick={ props.likeClick } > Like </button>
            <button style={btnStyle} disabled={buttonDisabled} value={props.petname} onClick={ props.dislikeClick } > Dislike </button>
        </div>
    )
}

module.exports = PetComponent;