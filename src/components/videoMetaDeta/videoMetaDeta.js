import React from 'react';
import './_videoMetaDeta.scss'
import numeral from 'numeral'
import moment from 'moment'
import {MdThumbUp,MdThumbDown} from 'react-icons/md'
const VideoMetaDeta = () => {
    return (
        <div>
            <div className="videoMetaData py-2">
                <div className="videoMetaData__top  pb-2 ">
                    <div className="d-flex justify-content-between algain-item-center py-1">
                         <div className='d-flex flex-column'>
                             <h5>Video Title</h5>
                             <div>
                                 {numeral(10000).format('0.0a')} views  &nbsp;  &nbsp; &nbsp;
                                 {moment('2020-05-01').fromNow()}
                             </div>
                         </div>

                        <div className='mt-4'>
                            <span>
                                <MdThumbUp/> {numeral(10000).format('0.0a')} Like  &nbsp;  &nbsp; &nbsp;
                            </span>
                                <span>
                                <MdThumbDown/> {numeral(10000).format('0.0a')} Dislike  &nbsp;  &nbsp; &nbsp;
                            </span>
                        </div>
                    </div>

                </div>
                <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-1 border-top border-bottom">

                       <div className='d-flex mt-2 '>
                           <img src="https://www.pngarts.com/files/5/User-Avatar-PNG-Image.png" className='rounded img-fluid ' alt=""/>
                            <div className='d-flex flex-column mx-3'>
                                <div>BackBencher</div>
                                <div> {numeral(10000).format('0.0a')} subscriber </div>
                            </div>

                       </div>


                        <button className='btn btn-danger'>Subscribe</button>

                </div>
                <div className="videoMetaData__description">
                    <p className='ml-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis dicta eaque id, neque nesciunt quae quam quasi sapiente velit!</p>
                </div>
            </div>
        </div>
    );
};

export default VideoMetaDeta;