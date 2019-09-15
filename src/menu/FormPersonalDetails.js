import React, { Component } from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep( );
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep( );
    };

    render() {
        const { values , handleChange } = this.props;
        return (
           <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title="ENTER YOUR DETAILS"  />
                   <TextField 
                      hintText="Enter Your Branch"
                      floatingLabelText="Branch"
                      onChange={handleChange('Branch')}
                      defaultValue={values.Branch}
                   />
                   <br/>
                   <TextField 
                      hintText="Semester"
                      floatingLabelText="Enter your Semester"
                      onChange={handleChange('Semester')}
                      defaultValue={values.Semester}
                   />
                   <br/>
                   <TextField 
                      hintText="Year"
                      floatingLabelText="Enter your Year"
                      onChange={handleChange('Year')}
                      defaultValue={values.Year}
                   />
                   <br/>
                   <TextField 
                      hintText="Contact"
                      floatingLabelText="Contact"
                      onChange={handleChange('Contact')}
                      defaultValue={values.Contact}
                   />
                   <br/>
                   <TextField 
                      hintText="Address"
                      floatingLabelText="Address"
                      onChange={handleChange('Address')}
                      defaultValue={values.Address}
                   />
                   <br/>
                   <TextField 
                      hintText="Interest"
                      floatingLabelText="Area of Interest"
                      onChange={handleChange('Interest')}
                      defaultValue={values.Interest}
                   />
                   <br/>
                   <RaisedButton  
                       label="Continue"
                       primary={true}
                       style={styles.button}
                       onClick = {this.continue}
                       />
                       <RaisedButton  
                       label="back"
                       primary={false}
                       style={styles.button}
                       onClick = {this.back}
                       />
                </React.Fragment>
           </MuiThemeProvider>
        )
    }
}

const styles = {
    button:{
        margin : 15
    }
}
export default FormPersonalDetails;
