import React from "react";

const VideoHead = () => {
  return (
    <section className=" relative mt-28 box-border flex w-screen flex-col-reverse place-items-center gap-8 sm:px-8 sm:py-80">
      <h1 className="z-10 font-serif text-5xl font-bold leading-none drop-shadow-lg sm:absolute sm:left-1/3 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
        filmreifer <br />
        Auftritt
      </h1>
      <div className="shd w-7/8 relative aspect-video border sm:absolute sm:left-2/3 sm:top-1/2 sm:w-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
        <iframe
          src="https://www.youtube.com/embed/OW1nCawRknk?autoplay=1&loop=1&modestbranding=1&rel=0&fs=0&color=white&controls=0&disablekb=1&mute=1"
          title="Website Loop Opener"
          className="pointer-events-none h-full w-full"
        ></iframe>
      </div>
    </section>
  );
};

export default VideoHead;
