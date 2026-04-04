import { AudioTrack } from '@/data/media';

export default function AudioCard({ track }: { track: AudioTrack }) {
  return (
    <article className="card">
      <div className="pill">{track.project}</div>
      <h3>{track.title}</h3>
      <p className="muted">{track.artist}</p>
      {track.note ? <p>{track.note}</p> : null}
      <a className="buttonSecondary" href={track.url} target="_blank" rel="noreferrer">
        Listen
      </a>
    </article>
  );
}
