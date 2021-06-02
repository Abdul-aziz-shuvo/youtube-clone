import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {authReducer} from '../redux-store/reducers/auth.reducer'
import {homeVideosReducer} from '../redux-store/reducers/videos.reducer'

const rootReducer = combineReducers({
    auth : authReducer,
    homeVideos : homeVideosReducer
})

const  store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))

export default store




