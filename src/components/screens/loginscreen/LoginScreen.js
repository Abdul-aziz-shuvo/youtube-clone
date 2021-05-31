import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import './_LoginScreen.scss'
import {login} from '../../../redux-store/actions/auth.action'


const LoginScreen = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const accesstoken = useSelector((state) => {
        return state.auth.accessToken;
    })
    const handleLogin = () =>{
       dispatch(login())

    }
    useEffect(() => {
        if (accesstoken) {
           return  history.push('/')
        }
    },[history,accesstoken])
    return (
        <div className='login'>
            <div className="login__container">
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG102354.png" alt=""/>
                <button onClick={handleLogin}>Login with Google</button>
                <p>This is a youtube clone project</p>
            </div>
        </div>
    );
};

export default LoginScreen;