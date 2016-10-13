import Select from 'react-select';
import React from 'react'

var CustomSelect = React.createClass({
    getInitialState: function() {
        return ({
            option: ''
        })
    },

    componentDidMount: function() {
        if (this.props.selectData === 'subject') {
            this.setState({
                options: []
            });
            return;
        }

        var that = this;
        $.ajax({
            url: 'http://localhost:3000/' + that.props.selectData,
            method: 'post',
            success: function(response) {
                var response_obj = $.parseJSON(response)

                that.setState({
                    options: response_obj
                });
            }
        });

    },

    componentWillReceiveProps(nextProps) {
        var that = this;
        
        var data = {};
        data.standard = nextProps.standard;
        data.medium = nextProps.medium;
        data.boards = nextProps.boards;
        if (this.props.selectData == 'subject') {
            $.ajax({
                url: 'http://localhost:3000/subject',
                method: 'POST',
                data: JSON.stringify(data),
                contentType:'application/json',
                success: function(response) {
                    var response_obj = $.parseJSON(response)

                    that.setState({
                        options: response_obj
                    });
                }
            });

        }
    },

    logChange: function(val) {
        this.setState({
            option: val
        })
        this.props.onSelect(val, this.props.selectData);
    },

    render: function() {
        return ( < Select multi = { this.props.multiple }
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


export default CustomSelect;
