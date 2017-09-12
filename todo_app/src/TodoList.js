var React = require('react');

var TodoItem = require('./TodoItem.js');

var TodoList = function(props) {

    var todoList = [];

    for(var i=0; i < props.todos.length; i++) {
        todoList.push( 
            <TodoItem 
                todo= {props.todos[i].todo} 
                key = {props.todos[i].id}
                onDeleteButtonClick={props.handleDeleteButtonClick} 
                id = {props.todos[i].id}
            /> 
        )
    }

    // props.todos.forEach(function(item) {
    //     todoList.push( <TodoItem todo={item} onDeleteButtonClick={props.handleDeleteButtonClick} /> )
    // })

    // return JSX
    return (
        <ul className="list-group">
            {todoList}
        </ul>
    );
}

// make it a module
module.exports = TodoList;