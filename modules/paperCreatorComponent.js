import React from 'react';
import PaperCreatorStepper from './paperCreatorStepper';

var PaperCreatorComponent = React.createClass({

	render:function() {
		return(
				<div>
					<PaperCreatorStepper />
				</div>
			);
	}
});

export default PaperCreatorStepper;