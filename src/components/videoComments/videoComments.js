import React from 'react';
import './_videoCommetns.scss'
import Comment from '../comment/comment'
const VideoComments = () => {

        return (
            <div className='comments'>
                <p> Comments</p>
                <div className='my-2 comments__form d-flex w-100'>
                    <img src='https://www.pngarts.com/files/5/User-Avatar-PNG-Image.png' alt='avatar' className='mr-3 rounded-circle' />
                    <form  className='d-flex flex-grow-1'>
                        <input
                            type='text'
                            className='flex-grow-1'
                            placeholder='Write a comment...'

                        />
                        <button className='p-2 border-0'>Comment</button>
                    </form>
                </div>
                <div className='comments__list'>
                    {[...Array(10)].map(() => (
                        <Comment  />
                    ))}
                </div>
            </div>
        );
    }


export default VideoComments;