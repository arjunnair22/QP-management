import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FirstTab from './paperFirstTab'
import PaperSecondTab from './paperSecondTab'

const muiTheme = getMuiTheme({
    userAgent: 'all',
});

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

function handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

var PaperCreatorTabs = React.createClass({
    getInitialState: function() {
        return ({totalQuestion:0, value:'a'});
    },
    updateTotalQuestion:function(totalQuestion) {
        this.setState({ totalQuestion:totalQuestion, value:'b'});

    },
    handleTabChange:function(value) {
        if (typeof(value)!='string') return;
        this.setState({
      value: value
    });
    },
    render: function() {
        
        return ( < div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12' >
            < MuiThemeProvider muiTheme = { muiTheme } >
            < Tabs value = {this.state.value} onChange={this.handleTabChange}>
            < Tab label = "Item One" value = 'a'>
            < div >
            < h2 style = { styles.headline } > Tab One {this.state.totalQuestion} < /h2> 
            < FirstTab updateTotalQuestion = {this.updateTotalQuestion} updatePreview = { this.props.updatePreview } / > 
            < /div> 
            < /Tab > 
            < Tab label = "Item Two" value='b'>
            < div >
            < h2 style = { styles.headline } > Tab Two < /h2> 
            < PaperSecondTab numberOfQuestions = {this.state.totalQuestion} / > 
            < /div> 
            < /Tab > 
        
            < /Tabs >
            < /MuiThemeProvider>
            </div>
        )
    }
})

export default PaperCreatorTabs;
