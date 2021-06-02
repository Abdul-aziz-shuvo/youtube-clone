import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL,LOAD_PROFILE,LOG_OUT} from '../actionType'
const initialState = {
    user : sessionStorage.getItem('yt-user') ? sessionStorage.getItem('yt-user') : null,
    accessToken : sessionStorage.getItem('yt-access-token') ? sessionStorage.getItem('yt-access-token') : null,
    loading : false
}
export const authReducer = (state = initialState,action) => {
    const {type,payload} = action
    switch (type) {
        case LOGIN_REQUEST :
            return {...state.loading, loading: true}
        case LOGIN_SUCCESS :
            return {...state, loading: false, accessToken: payload}
        case LOGIN_FAIL :
            return {...state, loading: false, accessToken: null, error: payload}
        case LOAD_PROFILE :
            return {...state, use: payload}
        case LOG_OUT :
            return {...state,accessToken: null,use: null}
        default :
            return state;
    }
}
