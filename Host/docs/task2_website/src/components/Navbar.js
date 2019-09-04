import React, { Component } from 'react';
import './Navbar.css';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom'; 

export default class Navbar extends Component {
   state={
       isOpen: false
   };
   handleToggle = () =>{
       this.setState({
           isOpen: !this.state.isOpen
       });
   }

   
    render() {
        const sections = ['Home','Acadamics','News and Events','Placements','Courses','Announcements','Contact Us'];
        const navLinks = sections.map( section =>{
     return(
         <li><a href={'#' + section}>{section}</a></li>
     )
     
 }

 );
        return(
        <div className="App" id="Home">
            <nav>
            <h2>{this.props.title}</h2>
            <button type="button" className="nav-btn" onClick={this.handleToggle}>
                <FaAlignRight className="nav-icon"/>
            </button>
            <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
            <li>
                  <Link to="/">Rules</Link>
            </li>
            <li>
                  <Link to="/">Feedback</Link>
            </li>
            </ul>
            </nav>

        
            <div>
            <nav>
            <ul className="nav-menu">
             {navLinks}
            </ul>
            </nav>
            </div>
            <div className="mess">
            <p>
               <a href="#button">{this.props.index}</a>
            </p>
             </div>
             </div>
        );
    }
}

