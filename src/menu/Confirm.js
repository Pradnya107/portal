import React, { Component } from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep( );
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep( );
    }; 

    render() {
        const { values : {Name,PRN ,Email,Gender ,
            Branch,Semester,Year,Contact ,Address ,Interest} } = this.props;
        return (
           <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title="Confirm"  />
                   <List>
                       <ListItem
                       primaryText="Name"
                       secondaryText={ Name }
                       />
                       <ListItem
                       primaryText="PRN"
                       secondaryText={ PRN }
                       /> <ListItem
                       primaryText="Email"
                       secondaryText={ Email }
                       />
                       <ListItem
                       primaryText="Gender"
                       secondaryText={ Gender }
                       />
                       <ListItem
                       primaryText="Branch"
                       secondaryText={ Branch }
                       />
                       <ListItem
                       primaryText="Semester"
                       secondaryText={ Semester }
                       />
                       <ListItem
                       primaryText="Year"
                       secondaryText={ Year }
                       />
                       <ListItem
                       primaryText="Contact"
                       secondaryText={ Contact }
                       />
                       <ListItem
                       primaryText="Address"
                       secondaryText={ Address }
                       />
                       <ListItem
                       primaryText="Interest"
                       secondaryText={ Interest }
                       />
                    </List>
                    <br/>
                    <RaisedButton
                          label="Confirm & continue"
                          primary ={true}
                          style={styles.button}
                          onClick={this.continue}
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
export default FormUserDetails;
