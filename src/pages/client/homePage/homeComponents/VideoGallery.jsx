import React from 'react';

const VideoGallery = () => {
    return (
        <div className="px-4">
            <h1 className="text-2xl ml-12 md:text-5xl text-gray-400 mt-10">Video Gallery</h1>
            <div className="grid grid-cols-1  md:grid-cols-3 gap-4  mt-6">
                <div>
                    <img src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736069505/ronjona/uacpdp2e2gz8plklnfza.png" alt="Video Thumbnail" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736069505/ronjona/uacpdp2e2gz8plklnfza.png" alt="Video Thumbnail" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736069505/ronjona/uacpdp2e2gz8plklnfza.png" alt="Video Thumbnail" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736069505/ronjona/uacpdp2e2gz8plklnfza.png" alt="Video Thumbnail" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736069505/ronjona/uacpdp2e2gz8plklnfza.png" alt="Video Thumbnail" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736069505/ronjona/uacpdp2e2gz8plklnfza.png" alt="Video Thumbnail" />
                </div>
            </div>
        </div>

    );
};

export default VideoGallery;