var React = require('react');
var axios = require('axios');

// PAcontroller API
  // opsvm3.turner.com:3000/api/pas
  // met2dev2.turner.com:3000/api/pas

var ALLPA_URL = `http://met2dev2.turner.com:3000/api/pas`;
var REDDIT_URL = `http://www.reddit.com/r/reactjs.json`;

class App extends React.Component {

  constructor(props) {
    super(props);

    // state object for <App> component
    this.state = {
      appTitle: 'Welcome to PAcontroller'
    };
  }

  /*
  componentWillMount() {
    console.log(`I am inside componentWillMount`);
  }
  */

  componentDidMount() {
    // console.log(`I am inside componentDidMount`);

    axios.get(ALLPA_URL)
      .then(function(results) {
        // results is an OBJECT
        // results.data is an ARRAY
        // results.data.panumber
        const pa_object = results.data.map(function(result1) {
          // attach each result to the application state object
          
        })
      })
   
  }

  render() {
    // return JSX
    return (
      <div>        
        <h2>{this.state.appTitle}</h2>
        <p>To get started, called your local Harris worker</p>
      </div>
    )
  }
}

module.exports = App;