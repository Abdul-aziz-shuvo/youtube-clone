import * as type from '../actionType'
import request from '../../api'
export const vidoesAction = () => async (dispatch) => {
    dispatch({
        type:type.HOME_VIDEO_REQUEST
    })
    try{
        alert('fasdf')
      const data  = await request('/videos', {
          params: {
              part: 'snippet,contentDetails,statistics',
              chart: "mostPopular",
              regionCode: 'BD',
              maxResults: '20',
              pageToken: ''
          }
      })
        console.log(data)
    }catch (error){
        console.log(error)
    }
}
