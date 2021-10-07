import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

function GetUsers() {
  const [users,setUsers] = useState([])
  const {error, loading, data} = useQuery(LOAD_USERS)
  useEffect(()=>{
    if(data){
      setUsers(data?.getAllUsers)
    }
  },[data])
  return (
    <div>
      {" "}
      {users.length > 0 && users.map((val) => {
        return <h1> {val.firstName}</h1>;
      })}
    </div>
  );
}

export default GetUsers;
