import { useContext } from "react";
import { Context } from "../context/AuthContext";
const UseAuth=(settrOnly)=>{
    const{token,setToken}=useContext(Context);
    
    return settrOnly?[token,setToken]:[token];
    
}
export default UseAuth;