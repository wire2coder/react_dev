var React = require('react');

var TodoForm = require('./TodoForm.js');

class Todo extends React.Component {

    render() {

        // return JSX
        return(
            <TodoForm />
        )
    }
}

module.exports = Todo;