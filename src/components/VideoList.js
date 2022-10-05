import React from "react";
import VideoItem from "./VideoItem";

// const VideoList = (props) => {
//   // props.videos
//   return <div>{props.videos.length}</div>;
// };

//  to not repeat props, onVideoSelect is a callback. we have to pass it down inturn on the video item.
const VideoList = ({ videos, onVideoSelect }) => {
  // props.videos
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
