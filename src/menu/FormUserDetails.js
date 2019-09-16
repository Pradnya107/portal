import React, { Component } from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './decorate.scss';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep( );
    };

    render() {
        const { values , handleChange } = this.props;
        return (
           <MuiThemeProvider className='form'>
               <React.Fragment>
                   <div className='container'>
                   <AppBar
                   title="ENTER YOUR DETAILS"   />
                   <div className='inside'>
                   <TextField 
                      hintText="Enter Your Name"
                      floatingLabelText="Name"
                      onChange={handleChange('Name')}
                      defaultValue={values.Name}
                   />
                   <br/><br/>
                   <TextField 
                      hintText="PRN"
                      floatingLabelText="Enter your PRN"
                      onChange={handleChange('PRN')}
                      defaultValue={values.PRN}
                   />
                   <br/><br/>
                   <TextField 
                      hintText="Email"
                      floatingLabelText="Enter your Email"
                      onChange={handleChange('Email')}
                      defaultValue={values.Email}
                   />
                   <br/><b/>
                   <TextField 
                      hintText="Gender"
                      floatingLabelText="Gender"
                      onChange={handleChange('Gender')}
                      defaultValue={values.Gender}
                   />
                   <br/><br/><br/>
                   <RaisedButton  
                       label="Continue"
                       primary={true}
                       style={styles.button}
                       onClick = {this.continue}
                       />
                       </div>
                       </div>
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