import React from 'react';
import './_comments.scss'
const Comment = () => {
    return (
        <div className='comment p-2 d-flex'>
            <img
                src='https://www.pngarts.com/files/5/User-Avatar-PNG-Image.png'
                alt=''
                className='mr-3 rounded-circle img-fluid'
            />
            <div className='comment__body'>
                <p className='mb-1 comment__header'>
                        Sumit . 8 hours ago
                </p>
                <p className='mb-0'>
                    fasdfasdfasdfasdfasdf
                </p>
            </div>

        </div>
    );
};

export default Comment;