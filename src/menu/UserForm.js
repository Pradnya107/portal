import React, {Component} from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import Homepagenext from '..//homepage/Homepagenext';

class UserForm extends Component {
    state = {
        step :1,
        Name : ' ' ,
        PRN : ' ' ,
        Email : ' ' ,
        Gender : ' ',
        Branch : ' ',
        Semester : ' ',
        Year : ' ',
        Contact  : ' ' ,
        Address : ' ' ,
        Interest : ' ',
    }

    nextStep = ( ) => {
        const { step } = this.state;
        this.setState ({
            step : step + 1
        });
    };

    prevStep = ( ) => {
        const { step } = this.state;
        this.setState ({
            step : step - 1
        });
    };

    handleChange = input => e => {
        this.setState ( { [ input ] : e.target.value } ) ;
    };


    render( ){
        const { step } = this.state;
        const { Name,PRN ,Email,Gender ,
            Branch,Semester,Year,Contact ,Address ,Interest } = this.state;
        const values = { Name,PRN ,Email,Gender ,Branch,Semester,Year,Contact ,Address ,Interest };

        switch (step) {

        case 1:
            return(
                <Homepagenext
                    nextStep={this.nextStep}
                />
             );

        case 2:
            return (
                <FormUserDetails
                    nextStep= {this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                 />
            );

        case 3:
            return (
                <FormPersonalDetails
                    nextStep= {this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
                   );

        case 4:
            return (
                <Confirm
                     nextStep= {this.nextStep}
                     prevStep={this.prevStep}
                     values={values}
                 />
               );
                
        case 5:
            return <Success />;    
                
        }
    }
}

export default UserForm; 