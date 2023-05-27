import { createStore,thunk,action } from "easy-peasy";
import api from './api/api';

export default createStore({
    teamName:"",
    setTeamName:action((state,payload)=>{ state.teamName=payload;}),
    userName:"",
    setUserName:action((state,payload)=>{ state.userName=payload;}),
    password:"",
    setPassword:action((state,payload)=>{ state.password=payload;}),
    authorizationToken:"",
    setAuthorizationToken:action((state,payload)=>{state.authorizationToken=payload}),
    error:{},
    setError:action((state,payload)=>{state.error=payload}),
    authentication:false,
    setAuthentication:action((state,payload)=>{state.authentication=payload}),

    response:{},
    setResponse:action((state,payload)=>{state.response=payload}),
    resetResponse:action((state)=>{state.response={}}),

    saveTeam:thunk(async (actions, newTeam,helpers)=>{
        actions.setResponse({});
        try {
            const request=await api.post('/team',newTeam);
            await actions.setResponse(request.data);
            const {userName,password}= helpers.getState()
            const newAdmin= {name:userName,password:password,teamId:request.data._id};
            await api.post('/admin',newAdmin);
            actions.setTeamName("");
            actions.setUserName("");
            actions.setPassword("");
        } catch (error) {
            actions.setResponse(error.response.data);
            console.log(error.response.data);
        }
    }),
    login:thunk(async (actions,loginData)=>{
        try {
            const request=await api.post('/login',loginData,{withCredentials:true});
            if(request.error){
                await actions.setResponse(request);
            }else if(request.data){
                await actions.setResponse(request.data);
            }
            
            actions.setUserName("");
            actions.setPassword("");
        } catch (error) {
            actions.setResponse(error.response.data);
        }
    }),
    refreshToken:thunk(async (actions)=>{
        try {
            const response=await api.get('/refresh',{withCredentials:true});
            await actions.setResponse(response.data);
        } catch (error) {
            actions.setResponse(error);
        }
    }),
    checkAuthorization:thunk(async (actions,nopay,helpers)=>{
        try {
            const {authorizationToken}=helpers.getState();
            const response=await api.get('/check',{
                headers:{
                    'Authorization':authorizationToken}
            });
            if(response.status<400){
                actions.setAuthentication(true);
            } else{
                actions.setAuthentication(false);
            }
        } catch (error) {
            actions.setAuthentication(false);
            console.log(error.response);
        }
    }),
});