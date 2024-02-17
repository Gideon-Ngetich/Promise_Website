// VideoComponent.js

import React, { useState } from 'react';
import YouTube from 'react-youtube';

const VideoComponent = () => {
  const [player, setPlayer] = useState(null);

  const videoOptions = {
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    setPlayer(event.target);
  };

  const pauseVideo = () => {
    if (player) {
      player.pauseVideo();
    }
  };

  const playVideo = () => {
    if (player) {
      player.playVideo();
    }
  };

  const seekForward = () => {
    if (player) {
      const currentTime = player.getCurrentTime();
      player.seekTo(currentTime + 10);
    }
  };

  return (
    <div>
      <YouTube
        videoId="https://youtu.be/XHQtsVsouqs"  // Replace with your specific YouTube video ID
        opts={videoOptions}
        onReady={onReady}
      />

      <div className="mt-4">
        <button onClick={pauseVideo} className="mr-2">
          Pause
        </button>
        <button onClick={playVideo} className="mr-2">
          Play
        </button>
        <button onClick={seekForward}>
          Seek Forward
        </button>
      </div>
    </div>
  );
};

export default VideoComponent;
