import './Team.scss';
import team from '../../assets/team.jpg';
import {useNavigate} from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useEffect } from 'react';

const Team=()=>{

    const navigate=useNavigate();
    const teamName=useStoreState((state)=>state.teamName);
    const userName=useStoreState((state)=>state.userName);
    const password=useStoreState((state)=>state.password);
    const response=useStoreState((state)=>state.response);

    const resetResponse=useStoreActions((actions)=>actions.resetResponse);
    const setUserName=useStoreActions((actions)=>actions.setUserName);
    const setPassword=useStoreActions((actions)=>actions.setPassword);
    const setTeamName=useStoreActions((actions)=>actions.setTeamName);
    const saveTeam=useStoreActions((actions)=>actions.saveTeam);


    useEffect(()=>{
        if(response._id){
            setTimeout(()=>{                
                navigate("/dash");
                resetResponse();
            },5000);
        }

    },[navigate,resetResponse, response])
  

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            const newTeam=await{name:teamName};
            await saveTeam(newTeam);         

        } catch (error) {
            throw new Error(error);
        } 
    }

    return(
        <div className='Team'>
            <h3 className="mainTitle text-bg-primary">Create a new team and the first admin user</h3>
            <img src={team} className="rounded  image img-thumbnail" alt="team"></img>
            <form className="form" onSubmit={handleSubmit}>
               <div className="mb-3">
               <label className="form-label" htmlFor='teamName' >Team Name</label>
               <input type="text" className='form-control' id="teamName" required value={teamName} onChange={(e)=>{setTeamName(e.target.value)}} />
                </div> 
               <div className="mb-3">
               <label className="form-label" htmlFor='adminName' >User Name</label>
               <input type="text" className='form-control' id="adminName" required value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
                </div> 
               <div className="mb-3">
               <label className="form-label" htmlFor='password' > New Password</label>
               <input type="password" className='form-control' id="password" required value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                </div>                 
                <button type='submit' className='btn btn-primary'>Create Team</button>
            </form>
            {response.error ? <p className='Error text-light bg-danger'>An error ocurres: {response.description}</p>:<></>}
            {response._id?<p className='Success text-light bg-success'>Team and first Admin user created, redirecting to the dashboard...</p>:<></>}

        </div>
        

    );
}
export default Team;