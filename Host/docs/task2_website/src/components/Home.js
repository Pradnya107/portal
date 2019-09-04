import React,{Component} from 'react';
import './Home.css';


class Home extends Component{
    render(){
        return(
            <div className="acad" id="Acadamics" id="Courses">
               <h2>{this.props.pcs}</h2>
               <h4>Candidates can fill the online application form by <a href="#button">clicking here </a></h4>
               <p>
               *Applications are invited for the First Year and Direct Second Year (DSE) of the four-year degree program in Engineering in the following courses. 
               </p>
                <h3>An Overview</h3>
                <img src="http://www.siesgst.edu.in/assets/admission/ce.jpeg" height="300px"/>   
                <img src="http://www.siesgst.edu.in/assets/admission/it.jpeg" height="300px"/>   
                <img src="http://www.siesgst.edu.in/assets/admission/me.jpeg" height="300px"/>   
                <img src="http://www.siesgst.edu.in/assets/admission/extc.jpeg" height="300px"/>   
                <img src="http://www.siesgst.edu.in/assets/admission/ppt.jpeg" height="300px"/>   
            </div>      
           
        );
    }
}

export default Home;