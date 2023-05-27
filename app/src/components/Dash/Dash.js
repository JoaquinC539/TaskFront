import './Dash.scss';
import { useEffect } from 'react';
import { useStoreState } from 'easy-peasy';
const Dash=()=>{

    const authorizationToken=useStoreState((state)=>state.authorizationToken);
    const response=useStoreState((state)=>state.response);
    useEffect(()=>{
        console.log(authorizationToken);
        console.log(response)
    },[])

    return(
        <div className='Dash '>
            My dash
        </div>
    )
}

export default Dash;