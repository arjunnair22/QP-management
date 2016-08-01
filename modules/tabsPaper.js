import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FirstTab from './paperFirstTab'

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
  render : function() {
    return(
        <div className = 'col-xs-6 col-sm-6 col-md-6 col-lg-6'>
  <MuiThemeProvider muiTheme={muiTheme}>  
  <Tabs>
    <Tab label="Item One" >
      <div>
        <h2 style={styles.headline}>Tab One</h2>
        <FirstTab updatePreview = {this.props.updatePreview} />
      </div>
    </Tab>
    
  </Tabs>
  </MuiThemeProvider>
  </div>
      )
  }
})

export default PaperCreatorTabs;