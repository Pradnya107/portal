import React, { Component } from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep( );
    };

    render() {
        const { values , handleChange } = this.props;
        return (
           <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title="enter user details"  />
                   <TextField 
                      hintText="Enter Your Name"
                      floatingLabelText="Name"
                      onChange={handleChange('Name')}
                      defaultValue={values.Name}
                   />
                   <br/>
                   <TextField 
                      hintText="PRN"
                      floatingLabelText="Enter your PRN"
                      onChange={handleChange('PRN')}
                      defaultValue={values.PRN}
                   />
                   <br/>
                   <TextField 
                      hintText="Email"
                      floatingLabelText="Enter your Email"
                      onChange={handleChange('Email')}
                      defaultValue={values.Email}
                   />
                   <br/>
                   <TextField 
                      hintText="Gender"
                      floatingLabelText="Gender"
                      onChange={handleChange('Gender')}
                      defaultValue={values.Gender}
                   />
                   <br/>
                   <RaisedButton  
                       label="Continue"
                       primary={true}
                       style={styles.button}
                       onClick = {this.continue}
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
export default FormUserDetails;
