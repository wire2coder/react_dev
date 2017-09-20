var React = require('react');
var axios = require('axios');

var ListItem = require('./ListItem.js');

// PAcontroller API
  // opsvm3.turner.com:3000/api/pas
  // met2dev2.turner.com:3000/api/pas

var PA_URL = `http://met2dev2.turner.com:3000/api/pas`;
var REDDIT_URL = `http://www.reddit.com/r/reactjs.json`;
var PETGAME_URL = `http://met2dev2.turner.com:63000/dog/?api_key=123456789`;

class App extends React.Component {

  constructor(props) {
    super(props);

    // state object for <App> component
    this.state = {
      appTitle: 'Welcome to PAcontroller',
      paObjects: null
    };

    // bind method calling context
    this.handleMagicButtonClick = this.handleMagicButtonClick.bind(this);
  }

  handleMagicButtonClick(event) {
    // console.log(event.target.value)

    
    let array1 = [{key1: 'value1', key2: 'value2'}, {key1: 'value1', key2: 'value2'}]
    let array2 = array1.map(function(eachItem) {
      return eachItem
    })
    // console.log(array2);    

    console.log(this.state.paObjects) // >> type Array with objects inside
  }

  /*
  componentWillMount() {
    console.log(`I am inside componentWillMount`);
  }
  */

  componentDidMount() {
    // console.log(`I am inside componentDidMount`);

    let paArray = [];

    // don't forget to start Mongodb server in met2dev2
    axios.get(PA_URL)
      .then(function(results) {
        // results is an OBJECT, results.data is an ARRAY, results.data.paObjects
        for(let i=0; i<results.data.length; i++) {
          paArray.push( results.data[i] );
        }
      })
      .catch(function(error) {
        console.log(error);
      })

      this.setState(function(prevState) {
        return {
          paObjects: paArray
        }
      })

  }

  render() {
    // return JSX
    return (
      <div>        
        <h2>{this.state.appTitle}</h2>
        <p>To get started, called your local Harris worker</p>
        <button 
          onClick={this.handleMagicButtonClick}
          value={this.state}
        > 
          The Magic Button 
        </button>

        <ListItem paObjects={this.state.paObjects} />
      </div>
    )
  }
}

module.exports = App;