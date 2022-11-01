import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const VideoHead = () => {
  return (
    <section className="h-content relative box-border grid w-screen place-items-center overflow-hidden">
      <iframe
        src="https://www.youtube.com/embed/OW1nCawRknk?autoplay=1&loop=1&modestbranding=1&rel=0&fs=0&color=white&controls=0&disablekb=1&mute=1"
        title="Website Loop Opener"
        className="pointer-events-none aspect-video w-full"
      ></iframe>
    </section>
  );
};

export default VideoHead;
