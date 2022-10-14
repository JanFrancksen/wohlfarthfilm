import React from "react";

const VideoHead = () => {
  return (
    <section className="z-0 h-[80vh] w-screen bg-red-400">
      <iframe
        src="https://www.youtube.com/embed/OW1nCawRknk?autoplay=1&loop=1&modestbranding=1&rel=0&fs=0&color=white&controls=0&disablekb=1&playlist=OW1nCawRknk&mute=1"
        title="Website Loop Opener"
        className="h-full w-full object-cover"
      ></iframe>
    </section>
  );
};

export default VideoHead;
