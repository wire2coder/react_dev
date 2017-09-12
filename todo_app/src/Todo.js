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

            var todoItem = {
                todo: todo,
                id: Date.now().toString()
            }

            // use concat because the method does not change/mutate the data, pure function
            var todos = prevState.todos.concat(todoItem);

            console.log(todos);

            return {
                todos: todos
            };
        });
    }

    handleDeleteButtonClick(event) {        
        // the event thing
        var id = event.target.value;

        this.setState(function(prevState) {
         
            var todos = prevState.todos;
            var index = null;

            for (var i=0; i<todos.length; ++i) {
                if(todos[i].id === id) {
                    index = i;
                    break;
                }
            }
           
            // do stuff so you don't mutate/change state
            todos = todos.slice(0, index).concat( todos.slice(index + 1) )

            return {
                todos: todos
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