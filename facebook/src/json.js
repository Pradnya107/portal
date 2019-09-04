import React from 'react'

const profile = (props) => {
    let {alt}=props;
 return(
     <div>
      <img alt={"props.logo"} className={"pic"} src={logo}/>
      <h1>{props.profile}</h1>
     </div>
 );
 };
 
 export default profile;