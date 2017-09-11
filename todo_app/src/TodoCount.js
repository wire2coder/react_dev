var React = require('react');

var TodoCount = function(props) {

    // return JSX
    return (
        <div className="well well-small">
            {(props.todoCounts === 0) ? null : <h4>{props.todoCounts}</h4> }
        </div>
    );
}

module.exports = TodoCount;