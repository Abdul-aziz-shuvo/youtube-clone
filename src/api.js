import axios from 'axios'

const request  = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params:{
        key:'AIzaSyDsPB69-es-MEBKPc-iuDWqcxh6NG4fbb4'
    },

})

export default request