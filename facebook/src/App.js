
import './App.css';
import Header from './header';
import Body from './body';
import React,{Component} from 'react';



function App() {
  const jsonArray=[{
    "name":"Pradnya",
    "pic":"https://woocommerce.com/wp-content/plugins/wccom-facebook-product-header/client/assets/images/facebook-icon.png",
    "post":"hello everyone",
    "likes":20,
    "comments":88,
  },
  {
    "name":"Pradnya",
    "pic":"https://woocommerce.com/wp-content/plugins/wccom-facebook-product-header/client/assets/images/facebook-icon.png",
    "post":"hello everyone",
    "likes":1200,
    "comments":88,
  }]


  
 
const element=(
  
  <div>
   <Header/>
    {
      jsonArray.map((value)=> {
      const{name,pic,post}=value;
      return <Body name={name} pic={pic} post={post} />

      })
    }
   

  </div> 

 
  )
 return element;
};
export default App;
