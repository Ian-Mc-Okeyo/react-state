import React, {useContext} from "react";
import Component4 from "./Component4";
import { NameContext } from "../App";

const Component3 = () =>{
    const [user, setuser] = useContext(NameContext)
   return  (
        <>
            <h3>Component3 {user.name}</h3>
            <Component4/>
        </>
    )
}

export default Component3