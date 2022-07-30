import React from "react";

function Users(props) {
    return(
        (props.users.map((user,key)=> <li key={key}>{user}</li>))
    )

}

export default Users;