import Select from 'react-select';
import $ from "jquery";
import React from 'react'

var CustomSelect = React.createClass({
	getInitialState:function() {
	return({
		option:'Select'
	})
},

getOptions:function(input,callback) {
	var that = this;
$.ajax({
			url:'http://localhost:3000/'+that.props.selectData,
			method:'post',
			success: function(response) {
				console.log(response);
				var response_obj = $.parseJSON(response)
				var arr = $.map(response_obj, function(el) { return el });
				callback(null,{
					options:arr,
					complete:true
				});
			}
		});
},

logChange:function(val) {
    this.setState({
    	option:val
    })
    this.props.updatePreview(val);
},

 render: function() {
 		return(
 			<Select.Async
    name={this.props.selectData}
    value={this.state.option}
    loadOptions={this.getOptions}
    onChange={this.logChange}
    placeholder={this.props.placeholder}
/>
)},

});

export default CustomSelect;




