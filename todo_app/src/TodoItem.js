var React, {Component} = require('react');

class TodoItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            priority: 0
        }

        // bind stuff to this component
        this.handlePriorityClick = this.handlePriorityClick.bind(this);
    }

    

    handlePriorityClick(event) {
        
        // increase the value of this.state.priority
        this.setState( function(prevState) { 
            return {
                priority: prevState.priority + 1
            }
        })

    }

    render() {

        var todoItem = this.props.todoItem;

        // return JSX
        return (
            <li className="list-group-item"> 
                <h3>
                    <input className="pull-left" type="checkbox" 
                        checked={todoItem.completed} 
                        value={todoItem.id}
                        onChange = {this.props.onCheckboxClick}
                    />

                    { todoItem.todo } 

                    <button 
                        className="btn btn-default btn-danger pull-right" 
                        onClick = { this.props.onDeleteButtonClick }
                        value = {todoItem.id} > Delete</button>
                </h3>    

            </li>
        );
    }

}

module.exports = TodoItem;
