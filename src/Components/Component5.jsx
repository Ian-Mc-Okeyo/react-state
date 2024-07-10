import { useContext, useState } from "react";
import React from "react";
import { NameContext } from "../App";

const Component5 = () =>{
    const [user, setUser] = useContext(NameContext)

    function updateUserName(){
        setUser({...user, name: "Alvin", age: 30, country: "sudan"})
        
    }

   return  (
        <>
            <h5>Component5</h5>
            <p>Hello {user.name}  I am {user.age} years old from {user.country}</p>
            <button onClick={updateUserName}>Change Name</button>
            
        </>
    )
}

export default Component5