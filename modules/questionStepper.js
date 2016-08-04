
import React from 'react';
import { Panel,PanelGroup } from 'react-bootstrap';

var Test = React.createClass({
  getInitialState:function() {
    return {
      activeKey: '1'
    };
  },
getItems:function()  {
    const items = [];
    for (let i = 0, len = this.props.numberOfQuestions; i < len; i++) {
      const key = i + 1;
      items.push(
        <Panel onSelect = {this.panelSelect} header={"Panel"+key} key= {key} eventKey={key}>Panel {key} content</Panel>
      );
    }

    return items;
  },
  handleSelect:function(activeKey) {
    this.setState({ activeKey: activeKey});
  },
  panelSelect:function() {
    console.log('x');
  },
  panelEnter:function() {
    console.log('y')
  },
  render: function() {
    return (
        <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
          {this.getItems()}     
          
        </PanelGroup>
      )
  }

});

export default Test;