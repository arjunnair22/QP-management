import React from 'react'
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl/lib/Layout';


var App = React.createClass({

	render: function() {
		return (
        <div style={{height:'900px' ,position: 'relative'}}>
            <Layout fixedHeader >
                <Header scroll title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
                    <Navigation>
                        <a href="">Link</a>
                        <a href="">Link</a>
                        <a href="">Link</a>
                        <a href="">Link</a>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <a href="">Link</a>
                        <a href="">Link</a>
                        <a href="">Link</a>
                        <a href="">Link</a>
                    </Navigation>
                </Drawer>
                <Content>
                <div className = 'container-fluid' style={{display: 'inherit',justifyContent: 'center',alignItems: 'center',marginTop:'20px' }}>
                    <div className = 'row'>
                    
                {this.props.children}
                
                </div>
                </div>
                </Content>
            </Layout>
        </div>
        
      );
	}

});

export default App;