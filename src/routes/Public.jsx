import { Route } from "react-router-dom";
const Public=({path,component,exact})=>{
    return <Route path={path} component={component} exact={exact}></Route>
}
export default Public;