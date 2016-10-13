import React from 'react'

var PaperPreview = React.createClass({

render:function() {
	<div>
	<object id = "paper" data = 'file.pdf' type ="application/pdf" />
	<button type = 'button' onClick= {this.print}> Print </button>
	</div>
}

});


