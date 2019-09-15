import React, { Component } from 'react';
import './homepage.style.scss';
import GoogleLogin from 'react-google-login';
//import HomepageC from './HomepageC';
//import { signInWithGoogle } from '../firebase/firebase.utils';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export class Homepagenext extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep( );
    };
  
    render() {
 
        const responseGoogle = (response) => {
            console.log(response);
          }

        return (
                
                <div className='background'>
                <div className='main'> 
                <div className='bottom'> 
                <h2>Welcome to SIESGST Portal</h2>
                <span>Sign Up to SIES GST portal with your GST Gmail account to get college updates,railway concession,hallts,results and other features.</span>
                <br/>
              
                <Carousel  defaultWait={1000} className='corousel-effect'>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqTSqjXC1Ma3RoQouM_lIzErWUeZLCI0RsICGp_RisfNo4k9i" />
                    
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUeC0S5cY_DshihaSvNkK4VL1qzVTc6JW3zOkYYlVPU2aNXce" />
                   
                </div>
                <div>
                    <img src="https://previews.123rf.com/images/imagevectors/imagevectors1601/imagevectors160100814/50600321-flat-blue-pen-and-paper-icon-on-circle-web-button-on-white.jpg" />
                    
                </div>
            </Carousel>

          <div className='button'>
            <GoogleLogin 
                     clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                     buttonText="Signin with Google"
                     onSuccess={responseGoogle}
                     onFailure={responseGoogle}
                     cookiePolicy={'single_host_origin'}
                 />

            <button className='button-click'
            onClick={this.continue}> Register</button>  


           
                 </div>
           </div>

            </div>
            </div>
         );
     }
 }
 
export default Homepagenext;
