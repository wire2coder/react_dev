var React = require('react');

class TodoForm extends React.Component {

    constructor(props) {
        super(props);

        this.refInput = null;
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleRefInputEvent = this.handleRefInputEvent.bind(this);
    }

    handleFormSubmit(event) {
        // stop the DOM form from sending POST request to the server
        event.preventDefault();
        
        var todo = this.refInput.value;
        this.props.onNewTodoItem(todo);
    }

    handleRefInputEvent(refInput) {
        // console.log(refInput);
        this.refInput = refInput;
        this.refInput.focus()
        
        
    }

    render() {

        return(
            <form className="form-group" onSubmit={this.handleFormSubmit}>
                <input className="form-control" type="text" placeholder="Add a todo item" ref={this.handleRefInputEvent} />
            </form>
        )
    }
}

module.exports = TodoForm;