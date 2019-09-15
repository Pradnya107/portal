import React, { Component } from 'react';
import './homepage.style.scss';
import Homepagenext from './Homepagenext';
import UserForm from '..//menu/UserForm';

export class HomepageC extends Component{
  
    render() {
        
    return (

               <Homepagenext onclick={UserForm}
                        
                />
              
    );
     }
}


export default HomepageC;


