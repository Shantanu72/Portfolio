import { useState } from "react";
import videoData from "../../data.json";

function getYoutubeThumbnail(url) {
  const videoId = new URL(url).searchParams.get("v");
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

function getYoutubeEmbedUrl(url) {
  const videoId = new URL(url).searchParams.get("v");
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}

export function Video() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="project-section" id="videos">
      <div className="only-experience">
        <h4>DEMO VIDEOS</h4>
      </div>

      {videoData.demo_video.map((video) => (
        <div key={video.id} className="experience">
          <div className="project-image" onClick={() => setSelectedVideo(video)}>
            <img
              className="img"
              src={getYoutubeThumbnail(video.youtubeUrl)}
              alt={video.title}
            />
          </div>

          <div className="description">
            <h3>{video.title}</h3>
          </div>
        </div>
      ))}

      {selectedVideo && (
        <div className="popup-overlay" onClick={() => setSelectedVideo(null)}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setSelectedVideo(null)}
            >
              &times;
            </button>
            <iframe
              width="100%"
              height="100%"
              src={getYoutubeEmbedUrl(selectedVideo.youtubeUrl)}
              title={selectedVideo.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
