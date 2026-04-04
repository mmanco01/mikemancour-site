import SectionTitle from '@/components/SectionTitle';
import VideoCard from '@/components/VideoCard';
import { allVideos, galleryImages } from '@/data/media';

const groups = ['Featured', 'BluesSlinger', 'Instigator', 'Gritz & Glory', 'Orange Crush'];

export default function WatchPage() {
  const banner = galleryImages.find((img) => img.src.includes('bluesslinger')) ?? galleryImages[0];

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
          eyebrow="Watch"
          title="Live clips, band highlights, and stage proof"
          blurb="This page gives the archive motion: the room, the phrasing, the crowd energy, and the live-band chemistry that still sits at the center of the story."
        />
        {groups.map((group) => {
          const videos = allVideos.filter((video) => video.project === group);
          if (!videos.length) return null;

          return (
            <div key={group} className="contentBlock">
              <h3 className="groupTitle">{group}</h3>
              <div className="grid videoGrid">
                {videos.map((video) => <VideoCard key={video.url} video={video} />)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
