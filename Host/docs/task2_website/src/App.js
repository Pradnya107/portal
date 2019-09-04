import React from 'react';
import Body from './pages/Body';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Banner from './components/Banner';
import Contact from './components/Contact';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById('root'));


function App() {
  return (
  <>
  <Navbar title="SIES GRADUATE SCHOOL OF TECHNOLOGY" index="Know More"/>
  <Body />
  <Home pcs="Acadamics 2018-19"/>
  <Banner name="Top Recruiter"/>
  <Contact pks="Contact Us"/>
  </>
   
  );
}

export default App;
