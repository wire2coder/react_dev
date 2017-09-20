// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

var React = require('react');

class App extends React.Component {

  render() {
    // return JSX
    return (
      <div>        
        <h2>Harris Controller with React</h2>
        <p>To get started, called your local Harris worker</p>
      </div>
    )
  }
}

module.exports = App;