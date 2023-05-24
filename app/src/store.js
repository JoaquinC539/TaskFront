import { createStore,thunk,action } from "easy-peasy";
import api from './api/api';

export default createStore({
    teamName:"",
    setTeamName:action((state,payload)=>{ state.teamName=payload;}),
    userName:"",
    setUserName:action((state,payload)=>{ state.userName=payload;}),
    password:"",
    setPassword:action((state,payload)=>{ state.password=payload;}),
    
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

});