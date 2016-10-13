import injectTapEventPlugin from 'react-tap-event-plugin';
import Divider from 'material-ui/Divider';
// Needed  onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import CustomSelect from './customSelectComponent'
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Slider from 'rc-slider';
import moment from 'moment';
import {DateField} from 'react-date-picker';
import ReactSelectize from "react-selectize";
import YearSelectComponent from './customYearComponent'
var SimpleSelect = ReactSelectize.SimpleSelect;


const muiTheme = getMuiTheme({
    userAgent: 'all',
});

const style = {width: 300, margin: 30};

var PaperCreatorStepper = React.createClass({
    getInitialState(){
        return({
            marks:50,
            standard:undefined
        })
    },

percentFormatter(v) {
  return v ;
},
showDuration(v){
  return v+' mins';
},
onSelect(val,field){
  var val = val.value
  this.setState({
    [field]: val
  });
},

onPrint(){
    
     window.print();
     
},

render:function() {
  var now = moment().format('D-MM-YYYY');
  
    return(
    <MuiThemeProvider muiTheme={muiTheme}>
        <div className = 'row'>
                <Paper zDepth={2} className='col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-xs-offset-1 col-sm-4 col-md-4 col-lg-4 col-xs-4' style={{padding:'10px'}}>
                    <label htmlFor="nameOfCenter" className="col-sm-4 col-md-4 col-xs-4 col-lg-4 " style={{marginTop:'12px'}}>Name of Center:</label>
                    <TextField id = 'nameOfCentre' hintText="Name of Center/School" /> 
                    <br/><br/>
                    <label htmlFor="standard" className="col-sm-2 col-md-2 col-xs-2 col-lg-2 " style={{marginRight:'8px'}}>Standard:</label>
                    <CustomSelect id ='standard' onSelect = {this.onSelect} selectData='standard' placeholder ='Select Standard' />
                    <br/>
                    <label htmlFor="medium" className="col-sm-2 col-md-2 col-xs-2 col-lg-2 " style={{marginRight:'8px'}}>Medium:</label>
                    <CustomSelect id ='medium' onSelect = {this.onSelect} selectData='medium' placeholder ='Select Medium' />
                    <br/>
                    <label htmlFor="boards" className="col-sm-2 col-md-2 col-xs-2 col-lg-2 " style={{marginRight:'8px'}}>Board:</label>
                    <CustomSelect id = 'boards'   selectData='boards' onSelect = {this.onSelect} placeholder ='Select Board' />
                    <br/>
                    <label htmlFor="year" className="col-sm-2 col-md-2 col-xs-2 col-lg-2 " style={{marginRight:'8px'}}>Year:</label>
                    <YearSelectComponent id='year' name= 'year' placeholder='Select year' />
                    <br/>
                    <label htmlFor="subject" className="col-sm-2 col-md-2 col-xs-2 col-lg-2 " style={{marginRight:'8px'}}>Subject:</label>
                    <CustomSelect id = 'subject' standard = {this.state.standard} medium={this.state.medium} boards= {this.state.boards} selectData='subject' placeholder ='Select Subject' />
                    <br/>
    
                    <label htmlFor="testType" className="col-sm-3 col-md-3 col-xs-3 col-lg-3 " style={{marginRight:'8px'}}>Test type:</label>
                    <CustomSelect id = 'testType' selectData='testType' placeholder ='Select Test Type' />
                    <br/>

                    <label htmlFor="marks" className="col-sm-2 col-md-2 col-xs-2 col-lg-2 " style={{marginRight:'8px'}}>Marks:</label>
                    <div style={style}>
                    <Slider tipFormatter={this.percentFormatter} tipTransitionName="rc-slider-tooltip-zoom-down" onAfterChange={this.log} />
                    <span> {this.percentFormatter} </span>
                    </div>
                    <br/>
                    <label htmlFor="duration" className="col-sm-2 col-md-2 col-xs-2 col-lg-2 " style={{marginRight:'8px'}}>Duration:</label>
                    <div style={style}>
                    <Slider step = {5} max={180} tipFormatter={this.showDuration} tipTransitionName="rc-slider-tooltip-zoom-down" onAfterChange={this.log} />
                    <span> {this.showDuration} </span>
                    </div>
                    <br/>
                    <label htmlFor="date" className="col-sm-2 col-md-2 col-xs-2 col-lg-2 " style={{marginRight:'8px'}}>Date:</label>
                    <DateField
                        id = 'date'
                        forceValidDate
                        defaultValue= {moment().format('DD-MM-YYYY')}
                        collapseOnDateClick updateOnDateClick 
                        dateFormat="DD-MM-YYYY"
                        minDate = {moment().format('DD-MM-YYYY')}
                      />
                      <br/>
                      
                      
                </Paper>
                <div className = "print_this">
            <object id = "paper" data = 'file.pdf' type ="application/pdf" />
            
            </div>
            <button type="button" className="btn btn-default" onClick = {this.onPrint} >print</button>
        </div>


      </MuiThemeProvider>
      )
}
});




export default PaperCreatorStepper;
