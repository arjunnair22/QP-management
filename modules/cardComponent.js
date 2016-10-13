import React from 'react'
import {Card,CardActions,CardTitle} from 'react-mdl/lib/Card'
import Button from 'react-mdl/lib/Button'
import { browserHistory } from 'react-router'


var CardComponent = React.createClass({
	handleClick: function() {
		browserHistory.push('/createQuestionPaper');
	},

	render: function() {
		return (
			
        	<Card shadow={0} style={{width: '320px', height: '320px', margin: '30px'}}>
    			<CardTitle expand style={{color: '#fff', background: 'url() bottom right 15% no-repeat #46B6AC'}}>{this.props.imageText}</CardTitle>    				
    			<CardActions border>
        			<Button onClick = {this.handleClick} colored>{this.props.linkText}</Button>
    			</CardActions>
			</Card>
			
      );
	}
});

export default CardComponent;