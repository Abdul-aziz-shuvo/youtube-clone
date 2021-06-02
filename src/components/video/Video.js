import './_video.scss'
import {AiFillEye} from 'react-icons/ai'
import {useEffect,useState} from 'react'
import moment from 'moment'
import numeral from 'numeral'
import request from '../../api'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import  {useHistory} from 'react-router-dom'
const Video = ({videos}) => {
    const {id,snippet:{title,channelId,channelTitle,publishedAt,thumbnails:{medium}}} = videos
    const [views,setViews] = useState(null)
    const [duration,setDuration] = useState(null)
    const [channelIcon,setChannelIcon] = useState(null)

    const _videoId = id?.videoId || id;   //if id is object then grab videoId or just grab id -- when its (All) category then only id is availble and for all other category its a (id object )

    useEffect(()=>{
       const get_video_details = async () => {
        const {data : {items}} = await request('/videos',{
               params:{
                   part :'contentDetails,snippet,statistics',
                   id:_videoId
               }
           })

           setViews(items[0].statistics.viewCount)
           setDuration(items[0].contentDetails.duration)
       }



         get_video_details()

        console.log(videos)

        const get_channel_icon = async () => {
            const {data : {items}} = await request('/channels',{
                params:{
                    part :'snippet',
                    id:channelId
                }
            })

            setChannelIcon(items[0].snippet.thumbnails.medium.url)
        }

        get_channel_icon()
    },[id,channelId,_videoId])



    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')
    const history = useHistory()

    const handleWatch = (id) => {
        history.push('/watch/'+id)
    }


    return (
        <div>
            <div className="video" onClick={() => handleWatch(_videoId)}>
                <div className="video__top">
                    {/*<img src={medium.url} alt=""/>*/}
                    <LazyLoadImage src={medium.url} effect='blur'/>
                    <span className='video__top__duration'>{_duration}</span>
                </div>
                <div className="video__title">
                    { title}
                </div>
                <div className="video__details">
                    
                    <span> <AiFillEye/> {numeral(views).format('0.0a')} views </span> &nbsp;  &nbsp; &nbsp;
                    <span className='ml-3'> {moment(publishedAt).fromNow()} </span>
                </div>
                <div className="video__channel">
                    {/*<img src={channelIcon} alt=""/>*/}
                    <LazyLoadImage  src={channelIcon} effect='blur'/>
                    <p>{channelTitle}</p>

                </div>
            </div>
        </div>
    )
}

export default Video
