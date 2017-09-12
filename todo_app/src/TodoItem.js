var React = require('react');



class TodoItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            priority: 0
        }

        // bind stuff to this component
        this.handlePriorityClick = this.handlePriorityClick.bind(this);
    }

    // props.onDeleteButtonClick
    // props.onDeleteButtonClick(props.index)
    // props.onDeleteButtonClick

    handlePriorityClick(event) {
        
        // increase the value of this.state.priority
        this.setState( function(prevState) { 
            return {
                priority: prevState.priority + 1
            }
        })

    }

    render() {

        // return JSX
        return (
            <li className="list-group-item"> 
                <h3>
                    <button className="pull-left" onClick={this.handlePriorityClick} > {this.state.priority} </button>

                    { this.props.todo } 

                    <button 
                        className="btn btn-default btn-danger pull-right" 
                        onClick = { this.props.onDeleteButtonClick }
                        value = { this.props.index }
                    >
                        Delete</button>
                </h3>    

            </li>
        );
    }

}

module.exports = TodoItem;
