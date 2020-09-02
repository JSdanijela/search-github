import React from "react";
import User from "./User.js";

export default function ListOfUsers(props){
  
  //mapping through user data to create individual users
    const usersList = props.users.map(user =>
    <User
      key={user.id}
      name={user.login}
      avatar = {user.avatar_url} />
    )

return(
          <ul id="users">
          {usersList}
          </ul>        
    )
}