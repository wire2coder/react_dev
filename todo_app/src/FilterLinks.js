var React = require('react');

var constants = require('./constants.js');
var ALL = constants.ALL;
var ACTIVE = constants.ACTIVE;
var COMPLETED = constants.COMPLETED;

var FilterLinks = function(props) {
        // props.onFilterChange
        // props.currentFilter
    
        // return JSX
        return (
            <div>
                {'Display: '}
                <Link onFilterChange = 
                    {props.onFilterChange} 
                    filterName={ALL} 
                    currentFilter={props.currentFilter}
                />
                <Link onFilterChange = 
                    {props.onFilterChange} 
                    filterName={ACTIVE} 
                    currentFilter={props.currentFilter}
                />
                <Link onFilterChange = 
                    {props.onFilterChange} 
                    filterName={COMPLETED} 
                    currentFilter={props.currentFilter}
                />
            </div>
        );
}

var Link = function(props) {

    var style1 = {
        marginLeft: "3px",
        marginRight: "3px"
    }
    
    var selected = {
        marginLeft: "3px",
        marginRight: "3px",
        backgroundColor: "#E6E6E6",
        borderColor: "#ADADAD",
        lineHeight: "1.5"
    }

    if (props.currentFilter === props.filterName) {
        style1 = selected;
    }

    // return JSX
    return (
        <a href="#" className="btn btn-default" 
            style={style1} 
            onClick={ function(event) {
                props.onFilterChange(event, props.filterName)
            } } 
        > 

            {props.filterName} 
        </a>
    )
}

module.exports = FilterLinks;