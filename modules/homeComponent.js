import React from 'react'
import CardComponent from './cardComponent'



var Home = React.createClass({
	render: function() {
		return (
			

			
			<div style={{display: 'inline-flex', padding:'50px',margin:'50px'}}>
        		<CardComponent imageText = "Download Board Questions" linkText="Click Here"/>
        		<CardComponent imageText = "Create your own Question paper" linkText="Click Here"/>
			</div>
			
      );
	}
});

export default Home;