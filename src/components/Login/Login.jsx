import { useRef } from "react";
import UseAuth from "../../hooks/UseAuth";
const Login=()=>{
    ///custom hook
    const [token,setToken]=UseAuth(true);
    ////ref
    const userNameRef=useRef();
    const passwordRef=useRef();
    ///login function
    const handleLogin=(evt)=>{
        evt.preventDefault();
        const userInfo={
            username:userNameRef.current.value,
            userpassword:passwordRef.current.value
        }
        setToken(userInfo)
    }
    return(
        <form  onSubmit={handleLogin}>
            <input ref={userNameRef} type="text" minLength="3" required />
            <input ref={passwordRef} type="password" minLength="6" required />
            <button type="submit">Login</button>
        </form>
    )
}
export default Login;