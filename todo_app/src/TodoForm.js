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
        console.log(this.refInput.value);
    }

    handleRefInputEvent(refInput) {
        // console.log('handleRefInputEvent')
        this.refInput = refInput;
    }

    render() {

        return(
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" placeholder="Add a todo item" ref={this.handleRefInputEvent} />
            </form>
        )
    }
}

module.exports = TodoForm;