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

    // make a render 'method'
    render: function(props) {
        return (
            <div>
                <h4> {this.props.greeting} </h4>
            </div>
        );
    }
})

ReactDom.render(
    <div>
        <Component1 greeting='Let us make a lot of money' color='red' />
        <Component1 greeting='Let us be bold and kind' color='blue' />
    </div>,
    document.getElementById('root') 
);