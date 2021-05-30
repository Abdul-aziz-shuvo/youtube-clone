import React from 'react';
import './_LoginScreen.scss'
const LoginScreen = () => {
    return (
        <div className='login'>
            <div className="login__container">
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG102354.png" alt=""/>
                <button>Login with Google</button>
                <p>This is a youtube clone project</p>
            </div>
        </div>
    );
};

export default LoginScreen;