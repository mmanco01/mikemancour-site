import { VideoItem } from '@/data/media';

export default function VideoCard({ video }: { video: VideoItem }) {
  return (
    <article className="card videoCard">
      <div className="videoFrame">
        <iframe
          src={video.embedUrl}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="pill">{video.project}</div>
      <h3>{video.title}</h3>
      {video.note ? <p>{video.note}</p> : null}
      <a className="buttonSecondary" href={video.url} target="_blank" rel="noreferrer">
        Watch on YouTube
      </a>
    </article>
  );
}
