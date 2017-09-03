var React = require('react');

class DogComponent extends React.Component {

    // functions I wrote myself
    dogLike() {
        console.log('dog like')
    }

    dogDislike() {
        console.log('dog dislike')
    }

    // React built-in function
    render() {

        // return JSX
        return (
            <div style={compStyle}>
                <h3>Dog Component</h3>
                <img style={{width: 400, height: 400}} src="https://i.ytimg.com/vi/b1JRaGJpzc8/maxresdefault.jpg"  alt="dog" />
                <br />
                <button style={btnStyle} onClick={this.dogLike} >Like</button>
                <button style={btnStyle} onClick={this.dogDislike} >Dislike</button>
            </div>
        );
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

module.exports = DogComponent;