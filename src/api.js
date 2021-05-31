import axios from 'axios'

const request  = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    param:{
        key:"AIzaSyCnjnZuzbpblEUGFtA7KBLW_5nZCHypD8g",
    },

})

export default request