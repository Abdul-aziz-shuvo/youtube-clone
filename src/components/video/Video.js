import './_video.scss'
import {AiFillEye} from 'react-icons/ai'
const Video = () => {
    return (
        <div>
            <div className="video">
                <div className="video__top">
                    <img src="https://i.ytimg.com/vi/07bYkxI12DI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAY7XD_8CHWLpb13thzcE6NUiYYOQ" alt=""/>
                    <span className='video__top__duration'>05:45</span>
                </div>
                <div className="video__title">
                    Make a youtube clone with react js
                </div>
                <div className="video__details">
                    
                    <span> <AiFillEye/> 10m views</span>
                    <span>2 days ago</span>
                </div>
                <div className="video__channel">
                    <img src="https://yt3.ggpht.com/ytc/AAUvwngXVUOK3DI8g8BHFPtX7Gei9nok-D7yPAkUAo33=s48-c-k-c0x00ffffff-no-rj" alt=""/>
                    <p>Programmer King</p>
                </div>
            </div>
        </div>
    )
}

export default Video
