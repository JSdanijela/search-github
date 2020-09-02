import React, {useEffect, useState} from "react";

export default function User(props){

    const [numberOfFollowers, getFollowers] = useState();

    //here we are fetching the number of followers per user
    useEffect(() =>{
    fetch(`https://api.github.com/users/${props.name}/followers?per_page=1000`, {
        method: "GET",
        headers: {
          "Authorization": "6a68aec627e98cb1f6452ddcd223117acf492781"
        }})
    .then(response => response.json())
    .then(data => {
        getFollowers(data.length)
    })
    },[props.followers,props.name])
  
    
    const link = "https://github.com/";
    const name = props.name;
    const avatar = props.avatar;
    return(
        <li id="user">
    <img alt="" src={avatar} style={{width:50, height: 50, borderRadius:"50%"}} />   
     {/*here we are concatenating two strings (github link) and username to get a link to the users profile*/}  
     <a href={link.concat(name)} rel="noopener noreferrer" target="_blank" ><h4>{props.name}</h4></a>
     <h4><i className="fas fa-user-friends"></i> {numberOfFollowers}</h4>
        </li>
    )
}