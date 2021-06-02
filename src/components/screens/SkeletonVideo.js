import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import React from 'react';

const SkeletonVideo = () => {
    return (
        <div style={{width:'100%',margin:'2rem 0'}}>
            <SkeletonTheme color="#343a40" highlightColor="#3c4147">
                    <Skeleton height={100}/>
                <div>
                    <Skeleton circle width={40} height={40} style={{margin:'0.5rem'}}/>
                    <Skeleton height={40} width='75%'/>
                </div>

            </SkeletonTheme>
        </div>
    )
};

export default SkeletonVideo;