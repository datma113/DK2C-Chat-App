import React from 'react'

const VideoSended = ({src}) => {
     return (
          <video width={300} height={300} controls>
                    <source src={src} ></source>
                </video>
     )
}

export default VideoSended
