import React from "react";

const VideoHead = () => {
  return (
    <section className="z-0 my-20 mr-40 ml-auto flex h-[80vh] w-3/4 items-end ">
      <h1 className="leading z-10 mb-16 -mr-48 font-serif text-5xl font-bold leading-none drop-shadow-lg">
        filmreifer <br />
        Auftritt
      </h1>
      <div className="shd aspect-video w-full border">
        <iframe
          src="https://www.youtube.com/embed/OW1nCawRknk?autoplay=1&loop=1&modestbranding=1&rel=0&fs=0&color=white&controls=0&disablekb=1&playlist=OW1nCawRknk&mute=1"
          title="Website Loop Opener"
          className="h-full w-full"
        ></iframe>
      </div>
    </section>
  );
};

export default VideoHead;
