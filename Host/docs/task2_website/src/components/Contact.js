import React,{Component} from 'react';



class Contact extends Component{
    render(){
        return(
            <div className="acad" id="Contact Us">
               <h2>{this.props.pks}</h2>
               <h4>Address</h4>
               <p>  Sri Chandrasekarendra Saraswati Vidyapuram Sector-V, Nerul Navi Mumbai - 400706.
<br></br> <br></br>
                   022-61082400<br></br>
                   022-61082402<br></br>
                   022-61082427<br></br>
                   022-61082417<br></br>
                   022-61082419 </p>
            </div>      
           
        );
    }
}

export default Contact;