import firebase from 'firebase/app'
import auth from '../../firebase'
import * as type from '../actionType'
export  const login = () => async dispatch => {

    dispatch({
        type: type.LOGIN_REQUEST
    })
    try{
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
      let res = await  auth.signInWithPopup(provider);
      const accessToken = res.credential.accessToken;
      dispatch({
          type : type.LOGIN_SUCCESS,
          payload : accessToken
      })


        const user ={
          name : res.additionalUserInfo.profile.name,
          picture : res.additionalUserInfo.profile.picture,
        }
        dispatch({
            type : type.LOAD_PROFILE,
            payload : user
        })

        sessionStorage.setItem('yt-access-token',accessToken);
        sessionStorage.setItem('yt-user',JSON.stringify(user));

    }catch (error){
        dispatch({
            type : type.LOGIN_FAIL,
            payload : error
        })
    }
}

export const logout = () => async (dispatch) => {
   await auth.signOut();
   dispatch({
       type:type.LOG_OUT,
   })
    sessionStorage.removeItem('yt-access-token')
    sessionStorage.removeItem('yt-user')
}


