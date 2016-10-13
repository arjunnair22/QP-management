import Select from 'react-select';
import React from 'react'

var YearSelectComponent = React.createClass({
    getInitialState: function() {

        
        return ({
            option: ''
        })
    },
    componentWillMount:function() {
        var max = new Date().getFullYear();
        var min = 1995;
        var arrDates= [];
        for (var i = min ; i<=max; i++){
            var dates = {};
            dates.value = i;
            dates.label = i
            arrDates.push(dates)
        }
        this.setState({
            options:arrDates
        });
    },

    logChange: function(val) {
        this.setState({
            option: val
        })
        this.props.onSelect(val, this.props.selectData);
    },

    render: function() {
        return ( < Select 
            id = { this.props.id }
            name = { this.props.selectData }
            options = { this.state.options }
            value = { this.state.option }
            onChange = { this.logChange }
            placeholder = { this.props.placeholder }
            />
        )
    },

});

export default YearSelectComponent;