import React,{Component} from 'react';
import './Banner.css';


class Banner extends Component{
    render(){
        return(
            <div className="Banner" id="Placements">
                
                <h2>{this.props.name}</h2>
                <div className="row">
                    <div>
                        <span>
                        <img src="https://design-language-api.eu-de.mybluemix.net/images/core-blue70.svg" width="150px" height="150px"/>
                        </span>
                    </div>
                    <div>
                        <span>
                            <img src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/052011/jacobs_logo_blue.png?itok=l9AKsPiB" width="250px" height="150px"/>
                        </span>
                    </div>
                    <div>
                        <span>
                        <img src="https://www.keytalk.com/hs-fs/hubfs/capgemini%20logo.png?width=275&name=capgemini%20logo.png" width="250px" height="150px"/>
                        </span>
                    </div>
                    <div>
                        <span>
                        <img src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/042011/cadbury.png?itok=pcBYqhvA" width="250px" height="150px" />
                        </span>
                    </div>
                </div>
               </div>      
           
        );
    }
}

export default Banner;