import React, {useState, useReducer} from "react";

const User = () =>{
    const initialUserState = {
        name: "John",
        age: 30,
        country: "Kenya",
        course: "Accounts",
        profession: "accountant"
    }

    const [state, dispatch] = useReducer(userReducer, initialUserState)

    const updateUser = () =>{
        dispatch({
            type: "update_user",
            payload: {
                name: "Kevin",
                age: 20,
                country: "TZ",
                course: "Law",
                profession: "Lawyer"
            }
        })
    }

    return(
        <>
            <h1>User</h1>
            <h2>Name: {state.name}</h2>
            <h2>Age: {state.age}</h2>
            <h2>Country: {state.country}</h2>
            <h2>Course: {state.course}</h2>
            <h2>profession: {state.profession}</h2>

            <button onClick={updateUser}>Update User</button>
            <button onClick={()=>dispatch({type: "update_name", payload: "Alvin"})}>Update Name</button>
            <button onClick={()=>dispatch({type: "update_profession", payload: "SE"})}>Update profession</button>
            <button onClick={()=>dispatch({type: "check_eligibility"})}>Check Eligibility</button>


        </>
    )
}

const userReducer = (state, action) =>{
    switch(action.type){
        case "update_user":
            return action.payload
        case "update_name":
            return {...state, name: action.payload}
        case "update_profession":
            return {...state, profession: action.payload}
        case "check_eligibility":
            if(state.age > 18){
                console.log("Allowed")
            }else{
                console.log("Not Allowed")
            }
            return state;
        default:
            return state

    }
}

export default User;