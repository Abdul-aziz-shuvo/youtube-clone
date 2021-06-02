import React from 'react';
import './_watchScreen.scss'
import {useParams} from 'react-router-dom'
import {Row,Col} from 'react-bootstrap'
import VideoMetaDeta from '../../videoMetaDeta/videoMetaDeta'
import VideoComments from '../../videoComments/videoComments'
import VideoHorizontal from '../../videoHorizontal/videoHorizontal'

const WatchScreen = () => {
    const { id } = useParams()
    return (
        <div>
           <Row>
               <Col lg={8}>
                    <div className="watchScreen_player">
                        <iframe src={`https://www.youtube.com/embed/${id}`} title='MyVideo' frameBorder='0' width='100%' height='100%' allowFullScreen></iframe>
                    </div>
                   <VideoMetaDeta/>
                   <VideoComments/>
               </Col>
               <Col lg={4}>
                   {[...Array(10)].map(() => (
                       <VideoHorizontal/>
                   ))}
               </Col>
           </Row>
        </div>
    );
};

export default WatchScreen;