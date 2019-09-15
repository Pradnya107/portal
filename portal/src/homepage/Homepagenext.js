import React, { Component } from 'react';
import './homepage.style.scss';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import GoogleLogin from 'react-google-login';
import UserForm from '..//menu/UserForm';


export class Homepagenext extends Component {

    register = e => {
        e.preventDefault();
        this.props.UserForm();
    };

   

    render() {
        const { UserForm } = this.props;
        const responseGoogle = (response) => {
            console.log(response);
          }

        return (
            <MuiThemeProvider>
                <React.Fragment>
                <div className='main'> 
                <div className='bottom'> 
                <h2>Welcome to SIESGST Portal</h2>
                <span>Sign Up to SIES GST portal with your GST Gmail account to get college updates,railway concession,hallts,results and other features.</span>
                <GoogleLogin  style="margin:5px;" 
                     clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                     buttonText="Signin with Google"
                     onSuccess={responseGoogle}
                     onFailure={responseGoogle}
                     cookiePolicy={'single_host_origin'}
                 />
                    <RaisedButton style="margin-right: 10px"
                        label="Register"
                        primary={true}
                        style={styles.button}
                        onClick ={this.register}
                    />
                        </div>
            </div>
            
            <UserForm
            nextStep= {this.nextStep}
                         prevStep={this.prevStep}
                />
            
                 </React.Fragment>
            </MuiThemeProvider>

           
         );
     }
 }
 
 const styles = {
     button:{
         margin : 15
     }
 }

export default Homepagenext;
