var React = require('react');

var TodoForm = require('./TodoForm.js');
var TodoList = require('./TodoList.js');
var TodoCount = require('./TodoCount.js');
var FilterLinks = require('./FilterLinks.js');

var constants = require('./constants.js');
var ALL = constants.ALL;
var COMPLETED = constants.COMPLETED;
var ACTIVE = constants.ACTIVE;

class Todo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            currentFilter: ALL,
            todos: []
        };

        // bind execution context 
        this.handleNewTodoItem = this.handleNewTodoItem.bind(this);
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
        this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.filterTodos = this.filterTodos.bind(this);
        this.handleTodoSearch = this.handleTodoSearch.bind(this);
    }

    handleNewTodoItem(todo) {
        this.setState(function(prevState) {

            var todoItem = {
                todo: todo,
                id: Date.now().toString(),
                completed: false
            }

            // use concat because the method does not change/mutate the data, pure function
            var todos = prevState.todos.concat(todoItem);
            
            return {
                todos: todos,
                searchTerm: ''
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
           
            // debug
            // console.log(todos[index]);

            // do stuff so you don't mutate/change state
            todos = todos.slice(0, index).concat( todos.slice(index + 1) )

            return {
                todos: todos
            }
        })
    }

    handleCheckboxClick(event) {
        
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
            
                // debug
                // console.log(todos[index]);

                // do stuff so you don't mutate/change state
                todos = todos
                        .slice(0, index)
                        .concat( [ { 
                            todo: todos[index].todo,
                            id: todos[index].id,
                            completed: !todos[index].completed
                        } ] )
                        .concat( todos.slice(index + 1) )

                return {
                    todos: todos
                }
            })

    }

    handleFilterChange(event, filterName) {
        // stop the anchor tag from going to a different page
        event.preventDefault();
        
        // debug
        // console.log(filterName);

        this.setState(function(prevState) {
            return {
                currentFilter: filterName
            }
        })
    }

    handleTodoSearch(searchTerm) {
        // this function handles the search functionality in the input box
        
        this.setState(function() {
            return {
                searchTerm: searchTerm
            }
        })
    }

    filterTodos() {
        var todos = this.state.todos;
        var currentFilter = this.state.currentFilter;
        var filteredTodos = [];

        var searchTerm = this.state.searchTerm;

        for(var i=0; i<todos.length; i++) {
            var todoItem = todos[i];

            // search logic, if typed input does not match the todoItem
            // do not process, if match then process
            if(todoItem.todo.indexOf(searchTerm) === -1) {
                continue;
            }

            if (currentFilter === COMPLETED && !todoItem.completed) {
                continue;
            }
            else if (currentFilter === ACTIVE && todoItem.completed) {
                continue;
            }

            filteredTodos.push(todoItem);
        }

        return filteredTodos;
    }

    render() {

        var todos = this.filterTodos();

        // return JSX
        return (
            <div>
                <TodoForm 
                    onTodoSearch={this.handleTodoSearch}
                    onNewTodoItem = {this.handleNewTodoItem} 
                />
                <FilterLinks 
                    onFilterChange = {this.handleFilterChange} 
                    currentFilter = {this.state.currentFilter}
                />
                <TodoList 
                    todos = {todos} 
                    handleDeleteButtonClick = {this.handleDeleteButtonClick} 
                    onCheckboxClick = {this.handleCheckboxClick}
                />
                <TodoCount 
                    todoCounts = {todos.length} 
                />
            </div>
        )
    }
}

module.exports = Todo;