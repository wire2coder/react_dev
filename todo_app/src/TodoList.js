var React = require('react');

var TodoItem = require('./TodoItem.js');

var TodoList = function(props) {

    var todoList = [];

    for(var i=0; i < props.todos.length; i++) {
        todoList.push( 
            <TodoItem 
                todoItem= {props.todos[i]} 
                key = {props.todos[i].id}

                onDeleteButtonClick={props.handleDeleteButtonClick} 
                onCheckboxClick = {props.onCheckboxClick}
            /> 
        )
    }

    // return JSX
    return (
        <ul className="list-group">
            {todoList}
        </ul>
    );
}

// make it a module
module.exports = TodoList;