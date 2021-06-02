import React from 'react';
import './_videoHorizontal.scss'
import { AiFillEye } from 'react-icons/ai'


import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Col, Row } from 'react-bootstrap'
const VideoHorizontal = () => {

        return (
            <Row
                className='py-2 m-1 videoHorizontal align-items-center'>


                <Col
                    xs={6}
                    md=''
                    className='videoHorizontal__left'>
                    <LazyLoadImage
                        src='https://i.ytimg.com/vi/Ht0IbFNbfSY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDCl0LuRPwZAVYuFlomONY-v1Byig'
                        effect='blur'
                        className={`videoHorizontal__thumbnail  `}
                        wrapperClassName='videoHorizontal__thumbnail-wrapper'
                    />

                        <span className='videoHorizontal__duration'>1.22</span>

                </Col>
                <Col
                    xs={6}
                    md=''
                    className='p-0 videoHorizontal__right'>
                    <p className='mb-1 videoHorizontal__title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, possimus.</p>


                        <div className='videoHorizontal__details'>
                            <AiFillEye /> {numeral(10000).format('0.a')} Views •
                            {moment('2020-01-02').fromNow()}
                        </div>






                    <div className='my-1 videoHorizontal__channel d-flex align-items-center'>
                        {/*{isVideo && (*/}
                        {/*    <LazyLoadImage src='https://www.pngarts.com/files/5/User-Avatar-PNG-Image.png' effect='blur' />*/}
                        {/*)}*/}
                        <p className='mb-0'>channel title</p>
                    </div>


                </Col>
            </Row>
        );

}

export default VideoHorizontal;