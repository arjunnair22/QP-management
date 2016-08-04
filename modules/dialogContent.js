import React from 'react'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
var DialogContent = React.createClass({
	getInitialState:function() {
		return({totalQuestion:0})
	},

	handleClose:function() {
		this.props.handleClose(this.state.totalQuestion);
		
	},
	handleTotalQuestionChange:function(e) {
		this.state.totalQuestion = $(e.target).val();
	},
	render:function() {
		return (
			<div className = 'row'>
			<div className="col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1
				col-xs-2 col-sm-2 col-md-2 col-lg-2
			"> 
					<TextField id = 'number_of_question' hintText = "maximum value allowed is 20"
            floatingLabelText = "Number of Questions"
            type = 'number' min={1} max={20}
      		onChange= {this.handleTotalQuestionChange}
    />
    <br/>
    <FlatButton
        label="Submit"
        primary={true}
        
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />
    </div>
    
      </div>

			);
	}
});

export default DialogContent;