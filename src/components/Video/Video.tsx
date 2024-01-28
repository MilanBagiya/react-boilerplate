import { useRef } from 'react';

const Video = ({ videoSource }) => {
  const videoRef = useRef(null);

  const style = {
    height: '650px',
    borderRadius: '12px',
    border: '2px solid var(--light-3)',
    background:
      'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat',
  };

  return (
    <>
      <video
        ref={videoRef}
        src={videoSource}
        controls
        className="flex w-full justify-center items-center gap-6 mt-12"
        style={style}
      >
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Video;
