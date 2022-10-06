import React, { useState, useEffect } from "react";
import "./Video.css";
import { createClient } from "pexels";

const Video = ({ countryName }) => {
  const [video, setVideo] = useState({});
  useEffect(() => {
    const client = createClient(
      "563492ad6f91700001000001158bec2226694dadb1f5a4fa1903e34b"
    );
    const query = countryName;
    client.videos.search({ query, per_page: 1 }).then((videos) => {
      setVideo(videos);
    });
  }, [countryName]);

  return (
    <div className="wrapper">
      {video.videos && (
        <iframe
          className="country_video"
          title="country-video"
          src={video.videos[0].video_files[0].link}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default Video;
