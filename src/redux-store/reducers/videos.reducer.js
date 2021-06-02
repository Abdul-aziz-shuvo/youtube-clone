import * as videoType from '../actionType'

const initialState = {
    videos : [],
    loading: false,
    nextPageToken :null,
    activeCategory : 'All'
}

export const homeVideosReducer = (state = initialState,action) => {
    const {type,payload} = action
    switch (type) {
        case  videoType.HOME_VIDEOS_REQUEST :
            return {
                ...state,
                loading: true,
            }
        case  videoType.HOME_VIDEOS_SUCCESS :
            return {
                ...state,
                loading: false,
                videos: state.activeCategory === payload.category ? [...state.videos,...payload.videos] : payload.videos,
                nextPageToken: payload.nextPageToken,
                activeCategory:payload.category
            }
        case  videoType.HOME_VIDEOS_FAIL :
            return {
                ...state,
                loading: false,
                error: payload.error
            }
        default :
            return state;
    }
}

