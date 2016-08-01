import React from 'react';
import PaperCreatorTabs from './tabsPaper';
import PaperPreviewComponent from './paperPreviewComponent'


var PaperCreatorComponent = React.createClass({

	updatePreview:function(val) {
		console.log(val)
	},

	render:function() {
		return(
				<div>
				<PaperCreatorTabs updatePreview = {this.updatePreview}/>
				<PaperPreviewComponent/>
				</div>
			);
	}
});
export default PaperCreatorComponent;