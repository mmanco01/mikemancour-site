import SectionTitle from '@/components/SectionTitle';
import AudioCard from '@/components/AudioCard';
import { allAudio, galleryImages } from '@/data/media';

const groups = ['TSI', 'Hot Ice', 'Acoustic'];

export default function ListenPage() {
  const banner = galleryImages.find((img) => img.src.includes('hot-ice-2')) ?? galleryImages[0];

  return (
    <section className="section pageTopPad">
      <div className="container">
        <figure className="pageBanner cinematicBanner">
          <img src={banner.src} alt={banner.alt} />
          <figcaption>
            <strong>{banner.caption}</strong>
            {banner.era && <span>{banner.era}</span>}
          </figcaption>
        </figure>
        <SectionTitle
          eyebrow="Listen"
          title="Recordings from the archive"
          blurb="These tracks turn scattered links into a cleaner public listening page — a few markers from the Michigan foundations, early recordings, and later acoustic work."
        />
        {groups.map((group) => {
          const tracks = allAudio.filter((track) => track.project === group);
          if (!tracks.length) return null;

          return (
            <div key={group} className="contentBlock">
              <h3 className="groupTitle">{group}</h3>
              <div className="grid threeUp">
                {tracks.map((track) => <AudioCard key={track.url} track={track} />)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
