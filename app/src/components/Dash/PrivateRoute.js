import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

const PrivateRoute=({children})=>{
    const navigate=useNavigate();
    const authentication=useStoreState((state)=>state.authentication);
    const authorizationToken=useStoreState((state)=>state.authorizationToken);

    const resetResponse=useStoreActions((actions)=>actions.resetResponse);
    const checkAuthorization=useStoreActions((actions)=>actions.checkAuthorization);

    

    useEffect(()=>{
        checkAuthorization();

    },[]);
    useEffect(()=>{
        if(!authentication || authorizationToken==="" || !authorizationToken){
            navigate("/login");
        
        }else{
            resetResponse();
        }
    },[authentication]);


    return authentication?children:<div>Redirecting....</div>;
}
export default PrivateRoute;