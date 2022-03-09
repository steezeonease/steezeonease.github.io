import React from "react";
import styles from "./VideoPlayer.module.scss";

interface IVideoPlayer {
  videoSrc: string;
  maxWidth?: number;
}

export const VideoPlayer: React.FC<IVideoPlayer> = (props: IVideoPlayer) => {
  const { videoSrc, maxWidth } = props;

  return (
    <div
      className={styles.root}
      style={{
        maxWidth: maxWidth,
      }}
    >
      <video width="100%" src={videoSrc} autoPlay={true} loop={true} />
    </div>
  );
};
