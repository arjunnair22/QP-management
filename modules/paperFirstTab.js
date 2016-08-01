import React from 'react';
import TextField from 'material-ui/TextField';
import CustomSelect from './customSelectComponent'

var FirstTab = React.createClass({


	render: function() {
		return(
				<div>

					<CustomSelect  updatePreview={this.props.updatePreview} selectData='boards' placeholder ='Select Board' />
					
					<TextField
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
				</div>
			)
	}

});

export default FirstTab