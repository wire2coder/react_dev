var React = require('react');

class TodoForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todoText: ''
        }

        this.refInput = null;
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleRefInputEvent = this.handleRefInputEvent.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleFormSubmit(event) {
        // stop the DOM form from sending POST request to the server
        event.preventDefault();
        
        // the line below goes to <Todo />
        this.props.onNewTodoItem(this.state.todoText);

        // clear the input in the <form> by setting the state object to empty string
        this.setState(function() {
            return {
                todoText: ''
            };
        });
    }

    // do something when data in the <input> change
    handleOnChange(event) {
        // change the data in the input
        var asdf = event.target.value;

        this.setState(function(prevState) {
            return {
                todoText: asdf
            }
        })

        this.props.onTodoSearch(asdf);

    }

    handleRefInputEvent(refInput) {
        // to make auto focus
        refInput.focus();
    }

    render() {

        return(
            <form className="form-group" onSubmit={this.handleFormSubmit}>
                <input 
                    className="form-control" 
                    type="text" 
                    placeholder="Type to search or press enter to add todo" 
                    ref={this.handleRefInputEvent} 
                    onChange={this.handleOnChange}
                    value={this.state.todoText}
                />
            </form>
        )
    }
}

module.exports = TodoForm;