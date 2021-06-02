import React,{useEffect} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import CategoriesBar from '../../categoriesBar/CategoriesBar'
import Video from "../../video/Video"
import {vidoesAction,categoryBarAction} from '../../../redux-store/actions/vidoes.action'
import {useDispatch,useSelector} from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import SkeletonVideo from '../SkeletonVideo'

const Homescreen = () => {

    const {videos,activeCategory,loading} = useSelector((state) => {
        return  state.homeVideos
    })
    const dispatch = useDispatch()
    useEffect(() => {
            if(videos.length === 0){
                dispatch(vidoesAction())
            }

        console.log(videos)
    },[])

    const fetchData = () => {
        if (activeCategory === 'All'){
            dispatch(vidoesAction())
        }else{
            dispatch(categoryBarAction(activeCategory))
        }
    }


    return (
        <div>
            <Container>
                <CategoriesBar/>

                    <InfiniteScroll
                        dataLength={videos.length}
                        next={fetchData}
                        hasMore={true}
                        loader={
                           <div className='spinner-border text-danger mx-auto d-block'></div>
                        }
                        className='row'
                    >
                        {
                          !loading ?  videos.map((video) => (
                                <Col lg={3} md={4} key={video.id?.videoId || video.id }>
                                    <Video videos={video}/>
                                </Col>
                            ))
                                : [...Array(20)].map((idx) => (
                                <Col lg={3} md={4} key={idx}>
                                    <SkeletonVideo/>
                                </Col>
                              ))

                        }



                    </InfiniteScroll>
            </Container>
        </div>
    )
}

export default Homescreen
