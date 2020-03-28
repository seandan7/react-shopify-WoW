import React from "react";
import HeroText from "./HeroText";
class Video extends React.Component {
  render() {
    return (
      <div>
        <video autoPlay muted loop id="myVideo">
          <source src="//cdn.shopify.com/s/files/1/0371/0920/3084/t/3/assets/Indoor-Market.mp4?v=11075433551183558481" />
          Your browser does not support HTML5 video.
        </video>
        <HeroText />
      </div>
    );
  }
}

export default Video;
