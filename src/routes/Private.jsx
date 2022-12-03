import { Route,useHistory } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
const Private=({path,component,exact})=>{
    const history=useHistory();
    const [token]=UseAuth();
    if(token){
        return <Route path={path} component={component} exact={exact}/>
    }
     return history.push("/login")
    
}
export default Private;