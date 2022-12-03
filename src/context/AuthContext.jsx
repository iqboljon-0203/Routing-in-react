import {createContext,useState,useEffect } from "react";
import { useHistory } from "react-router-dom";

const Context=createContext();
const Provider=({children})=>{
    const history=useHistory();
    const [token,setToken]=useState(JSON.parse(window.localStorage.getItem("token")));
    useEffect(()=>{
        if(token){
            window.localStorage.setItem("token",JSON.stringify(token));
            history.push("/");
        }else{
            window.localStorage.clear();
        }
    },[token,history])
    return(
        <Context.Provider value={{
            token,
            setToken
        }}>
            {children}
        </Context.Provider>
    )
}
export {Context,Provider};