var React = require('react');

class PetComponent extends React.Component {

    // incoming props from outside
    // petname, petimageurl, petalt
    
    // constructor(props) {
    //     // React.Component
    //     super(props);

    // }

    render() {
        // this.props is built-in
        // return JSX
        return (
            <div style={compStyle} >
                {/* <h3> {this.props.petname} like: {this.state.likeCounts} </h3> */}
                <h3> {this.props.petname} like: {this.props.likeCount} </h3>

                <img style={{width: 400, height: 400}} 
                src={this.props.petimageurl} alt={this.props.petalt} />

                <br />
                <button style={btnStyle} value={this.props.petname} onClick={ this.props.likeClick } > Like </button>
                <button style={btnStyle} value={this.props.petname} onClick={ this.props.dislikeClick } > Dislike </button>
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