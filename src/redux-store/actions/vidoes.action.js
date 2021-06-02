import * as type from '../actionType'
import request from '../../api'
export const vidoesAction = () => async (dispatch,getState) => {
    dispatch({
        type:type.HOME_VIDEOS_REQUEST
    })
    try{
      const {data}  = await request('/videos', {
          params: {
              part: 'snippet,contentDetails,statistics',
              chart: "mostPopular",
              regionCode: 'BD',
              maxResults: '10',
              pageToken: getState().homeVideos.nextPageToken
          }
      })

        dispatch({
            type:type.HOME_VIDEOS_SUCCESS,
            payload:{
                videos: data.items,
                nextPageToken : data.nextPageToken,
                category : 'All'
            }
        })
    }catch (error){

        dispatch({
            type:type.HOME_VIDEOS_FAIL,
            payload: error.message
        })
    }
}


export const categoryBarAction = (keyword) => async (dispatch,getState) => {
    dispatch({
        type:type.HOME_VIDEOS_REQUEST
    })
    try{
      const {data}  = await request('/search', {
          params: {
              part: 'snippet',
              maxResults: '10',
              pageToken: getState().homeVideos.nextPageToken,
              q:keyword,
              type:'video'
          }
      })

        dispatch({
            type:type.HOME_VIDEOS_SUCCESS,
            payload:{
                videos: data.items,
                nextPageToken : data.nextPageToken,
                category : keyword
            }
        })
    }catch (error){

        dispatch({
            type:type.HOME_VIDEOS_FAIL,
            payload: error.message
        })
    }
}
