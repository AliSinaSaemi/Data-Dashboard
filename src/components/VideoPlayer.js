import React from 'react';
import ReactPlayer from 'react-player';
const VideoPlayer = () => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=I55ZrBlVSKI"
        width="100%"
        height="100%"
        constrols={true}
      />
    </div>
  );
}

export default VideoPlayer;