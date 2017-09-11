var React = require('react');

var TodoForm = require('./TodoForm.js');
var TodoList = require('./TodoList.js');
var TodoCount = require('./TodoCount.js');

class Todo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };

        // bind execution context 
        this.handleNewTodoItem = this.handleNewTodoItem.bind(this);
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
    }

    handleNewTodoItem(todo) {
        this.setState(function(prevState) {
            // use concat because the method does not change the data, pure function
            var todos = prevState.todos.concat(todo);

            return {
                todos: todos
            };
        });
    }

    handleDeleteButtonClick(event) {        

        var index = Number(event.target.value);

        this.setState(function(prevState) {
            // var todos = prevState.todos;
           
            // do stuff so you don't mutate/change state
            var newTodos = prevState.todos.slice(0, index).concat( prevState.todos.slice(index + 1) )

            return {
                todos: newTodos
            }
        })
    }

    render() {

        // return JSX
        return (
            <div>
                <TodoForm onNewTodoItem = {this.handleNewTodoItem} />
                <TodoList todos = {this.state.todos} handleDeleteButtonClick = {this.handleDeleteButtonClick} />
                <TodoCount todoCounts = {this.state.todos.length} />
            </div>
        )
    }
}

module.exports = Todo;