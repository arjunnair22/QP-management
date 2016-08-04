import React from 'react';
import TextField from 'material-ui/TextField';
import CustomSelect from './customSelectComponent'
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import DialogContent from './dialogContent'

var FirstTab = React.createClass({
	handleOpen :function() {this.setState({open: true});},
    handleClose: function(totalQuestion) {
    	var that = this;
    this.setState(
    	{open: false}
    )
        	this.props.updateTotalQuestion(totalQuestion);
},


    
    
  
  getInitialState:function() {
  	return({open:false})
  },
	render: function() {
	// const actions = [
		
 //    ];

    const customContentStyle = {
  width: '25%',
  
};

    const customTitleStyle = {
    	textAlign:'center',
    	fontWeight:'bold'
};

		return(
			<div>
				<div>
					<CustomSelect  updatePreview={this.props.updatePreview} selectData='boards' placeholder ='Select Board' />
					
					<TextField id='center_name'
      						hintText="Hint Text"
      						floatingLabelText="Name of Center"
      						fullWidth={true}
    				/>
    				<br />
					<br/>
					<br/>
					<CustomSelect selectData='medium' placeholder ='Select Medium' updatePreview={this.props.updatePreview}/>
					<br />
					<CustomSelect selectData='standard' placeholder ='Select Standard' updatePreview={this.props.updatePreview}/>
					<br />
					<CustomSelect selectData='subject' placeholder ='Select Subject' updatePreview={this.props.updatePreview}/>
					<br />
					<CustomSelect selectData='testType' placeholder ='Select Test Type' updatePreview={this.props.updatePreview}/>
					<br/>

				</div>
				<div className ='row'>
				<div className="col-xs-offset-8 col-sm-offset-8 col-md-offset-8 col-lg-offset-8"> 
					<RaisedButton label="Modal Dialog" onTouchTap={this.handleOpen} />
				        <Dialog
				          title="Total Questions"
				          // actions={actions}
				          modal={true}
				          open={this.state.open}
				          contentStyle={customContentStyle}
				          titleStyle = {customTitleStyle}
				        >
				        <DialogContent handleClose = {this.handleClose} />
				        </Dialog>
				</div>
				</div>
				</div>
			)
	}

});

export default FirstTab