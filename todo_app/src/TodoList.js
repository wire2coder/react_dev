var React = require('react');

var TodoItem = require('./TodoItem.js');


var TodoList = function(props) {
    var todos = props.todos;
    var todoList = [];

    // for(var i=0; i < props.todos.length; i++) {
    //     todoList.push( 
    //         <TodoItem 
    //             todoItem= {props.todos[i]} 
    //             key = {props.todos[i].id}

    //             onDeleteButtonClick={props.handleDeleteButtonClick} 
    //             onCheckboxClick = {props.onCheckboxClick}
    //         /> 
    //     )
    // }

    // refactoring the code to be 'declaretive' with 'MAP' method
    // instead of using for-loop
    todoList = todos.map(function(todo) {
        return (
            <TodoItem 
                todoItem = {todo}
                key = {todo.id}

                onDeleteButtonClick={props.handleDeleteButtonClick} 
                onCheckboxClick = {props.onCheckboxClick}
            />
        );
        
    })

    // return JSX
    return (
        <ul className="list-group">
            {todoList}
        </ul>
    );
}

// make it a module
module.exports = TodoList;