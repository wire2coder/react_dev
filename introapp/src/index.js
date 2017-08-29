var React = require('react');
var ReactDom = require('react-dom');
var createClass = require('create-react-class');

// var Component1 = function(props) {   
//     var style = {
//         color: props.color
//     }

//     return ( 
//         <div style={style} >
//         <h4>{props.greeting}</h4>  
//         </div>
//     );
// }

var Component1 = createClass({
    // this is a class... so comes with a CLASS???
    // 'THIS' 'THIS' object!

    // INTERNAL application 'state'
    getInitialState: function() {        
        return ({
            color: 'red',
            jem: 'nice'
        });
    },

    handleButtonClick: function() {
        // use the built-in setState method to change the 
        // value of component 'state'/ private data
        // 'THIS' object.setState( function(previousState) )

        this.setState( function(prevState) {            
            // console.log(prevState);
            // console.log(this.state);
            // prevState is the same as this.state

            // return JSX
            return (
                { color: (prevState.color === 'red') ? 'blue' : 'red' } 
            );
        })
    },

    render: function(props) {
        // 'THIS' object
        // console.log(this); 
        // return JSX
        var style1 = {color: this.state.color}

        return (
            <div style={style1}>
                <h4> {this.props.greeting} </h4>
                <button onClick={this.handleButtonClick} > {this.props.buttonName} </button>
            </div>
        );
    }

})

ReactDom.render(
    <div>
        <Component1 greeting='Let us make a lot of money' color='red' buttonName='b1' />
        <Component1 greeting='Let us be bold and kind' color='blue' buttonName='b2' />
    </div>,
    document.getElementById('root') 
);