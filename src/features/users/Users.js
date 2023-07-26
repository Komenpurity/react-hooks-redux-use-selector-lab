import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here

function Users() {

  const users = useSelector((state) => state.users); 

  return (
    <div>
      <ul>
        Users!
        {users.map( (e) => {
          return (
            <div>
              <p>{e.username} </p>
            </div>
          )
        })}
        {users.length} 
      </ul>
    </div>
  );
}

export default Users;
