import React from 'react';
import './body.css';


const Body = (props) => {
    let { name,pic, post, likes, comments} = props;
return(
<div>
<h2 className={"body"}>UPDATES</h2><h2 className={"body2"}>RECENTLY USED</h2>

<h2 >{post}</h2>
<h2 >{comments}</h2>
{
    post!== undefined ? <p>{comments}</p> : <p>{likes}</p>
}
<h2 >{likes}</h2>
<h2 >{name}</h2>
<h3>{pic}</h3>
</div>
);
};
export default Body;
