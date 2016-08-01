import React from 'react'
import CardComponent from './cardComponent'



var Home = React.createClass({
	render: function() {
		return (
			<div style={{display: 'inline-flex', padding:'50px',margin:'50px'}}>
        		<CardComponent/>
        		<CardComponent/>
			</div>
      );
	}
});

export default Home;