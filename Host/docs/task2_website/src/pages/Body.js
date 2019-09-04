import React,{Component} from 'react';

class Body extends Component  {
    render(){
 const sections = ['Home','Acadamics','News and Events','Placements','Courses','Announcements','Contact Us'];
 const navLinks = sections.map( section =>{
     return(
         <li><a href={'#' + section}>{section}</a></li>
     )
}

 );
    
    return (
        <div>
        <nav>
            <ul className="nav-menu">
             {navLinks}
            </ul>
            
        </nav>
        </div>
    )
}}

export default Body;
