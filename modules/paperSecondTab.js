import React from 'react'
import TextField from 'material-ui/TextField';
import Test from './questionStepper'



var PaperSecondTab = React.createClass({
	getInitialState:function() {
		return ({numberOfQuestions:0})
	},
	
	handleChange: function(e) {
		console.log(e);
		var numberOfQuestions  = $(e.target).val();
		this.state.numberOfQuestions = numberOfQuestions;
		
	},
    render: function() {
        return ( 
        	<Test numberOfQuestions={this.props.numberOfQuestions}/>
        )
    }
});

export default PaperSecondTab;
