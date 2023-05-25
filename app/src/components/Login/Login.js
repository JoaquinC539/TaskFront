import './Login.scss';
import { useStoreActions,useStoreState } from 'easy-peasy';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Login=()=>{

    const navigate=useNavigate();
    const userName=useStoreState((state)=>state.userName);
    const password=useStoreState((state)=>state.password);
    const response=useStoreState((state)=>state.response);

    const resetResponse=useStoreActions((actions)=>actions.resetResponse);
    const setUserName=useStoreActions((actions)=>actions.setUserName);
    const setPassword=useStoreActions((actions)=>actions.setPassword);
    const login=useStoreActions((actions)=>actions.login);
    const refreshToken=useStoreActions((actions)=>actions.refreshToken);
    const setAuthorizationToken=useStoreActions((actions)=>actions.setAuthorizationToken);

    const handleClick=()=>{
        navigate('/team')
    }
    useEffect(()=>{
        if(response && response.data  && response.error==null){
            if(response.data.token){
                setAuthorizationToken(response.data.token);
                navigate('/dash');
                resetResponse();
            } 
        }
    },[navigate, refreshToken, resetResponse, response, setAuthorizationToken]);
    useEffect(()=>{
        try {
            if(!response || response==={} || !response.data){
                refreshToken();
            }
        } catch (error) {
            console.log(error);          
        }
    },[]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        try {
            const loginData={name:userName,password:password};
            login(loginData);            
        } catch (error) {
            throw new Error(error);
        }
    };



    return(
            <div className='Login'>
                <div className='login border border-primary'>
                <h3 className="mainTitle text-bg-primary">Login into your account</h3>
                <form className="form" onSubmit={handleSubmit} >
                <div className="mb-3">
                <label className="form-label text-label" htmlFor='user' >User Name</label>
                <input type="text" className='form-control' id="user" required value={userName} onChange={(e)=>{setUserName(e.target.value)}}  />
                    </div> 
                <div className="mb-3">
                <label className="form-label text-label" htmlFor='password' > Password</label>
                <input type="password" className='form-control' id="password" value={password} required onChange={(e)=>{setPassword(e.target.value)}}  />
                    </div>                 
                    <button type='submit' className='btn btn-primary'>Login</button>
                    {response.error?<p>An error ocurred : <span>{response.error}</span></p>:<></>}
                </form> 
                </div><br/>
                <div className='desc'>
                    <p className='fw-semibold'>You don't have an account or team?</p>
                    <p className='fw-semibold'>Create your own new team</p>
                    <button type='button' className='btn btn-primary' onClick={handleClick}>Create Team</button>
                </div>    
            </div>        
    );
}
export default Login;