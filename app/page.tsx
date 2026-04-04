import Link from 'next/link';
import AudioCard from '@/components/AudioCard';
import SectionTitle from '@/components/SectionTitle';
import VideoCard from '@/components/VideoCard';
import {
  contactEmail,
  currentProjects,
  featuredAudio,
  featuredVideos,
  galleryImages,
  legacyMarkers,
  siteCopy,
  timelineEras,
} from '@/data/media';

export default function HomePage() {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: "linear-gradient(rgba(7,11,18,.22), rgba(7,11,18,.86)), url('/images/starspangledbanner.jpg')" }}
      >
        <div className="container heroInner">
          <div className="heroPanel">
            <p className="eyebrow">Artist legacy site</p>
            <h1>{siteCopy.heroTitle}</h1>
            <p className="heroSubtitle">{siteCopy.heroSubtitle}</p>
            <p className="heroBlurb">{siteCopy.heroBlurb}</p>
            <div className="buttonRow">
              <Link href="/listen" className="buttonPrimary">Listen</Link>
              <Link href="/watch" className="buttonSecondary">Watch</Link>
              <Link href="/timeline" className="buttonSecondary">Timeline</Link>
              <a className="buttonSecondary" href={`mailto:${contactEmail}?subject=Message from MikeMancour.com`}>Email Mike</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow centerCopy">
          <SectionTitle
            eyebrow="The front door"
            title="A lifetime of music, finally gathered in one place"
            blurb={siteCopy.intro}
          />
          <p className="leadText">{siteCopy.legacyStatement}</p>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <div className="statGrid">
            {legacyMarkers.map((item) => (
              <article key={item.label} className="statCard">
                <div className="pill">{item.label}</div>
                <h3>{item.value}</h3>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Current chapter"
            title="The story is still active"
            blurb="The legacy matters because the music never really stopped. These are living bands, living songs, and living rooms — not just archive memories."
          />
          <div className="projectGrid">
            {currentProjects.map((project) => (
              <article key={project.name} className="projectCard">
                <img src={project.image} alt={project.name} />
                <div>
                  <div className="pill">{project.years}</div>
                  <h3>{project.name}</h3>
                  <p className="muted projectStyle">{project.style}</p>
                  <p>{project.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <SectionTitle eyebrow="Featured recordings" title="Listen first" blurb="A few starting points from the archive — early experimentation, formative band years, and songs that still carry the thread." />
          <div className="grid threeUp">
            {featuredAudio.map((track) => <AudioCard key={track.url} track={track} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Featured videos" title="Watch the live side" blurb="Performance is a huge part of the story. These clips show the room, the phrasing, the band feel, and the lived reality behind the archive." />
          <div className="grid videoGrid">
            {featuredVideos.map((video) => <VideoCard key={video.url} video={video} />)}
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <SectionTitle
            eyebrow="Story spine"
            title="Selected eras from the public timeline"
            blurb="Michigan foundations, Nashville working years, modern band chapters, and the present-day legacy build all belong to the same long musical thread."
          />
          <div className="eraFeatureGrid">
            {timelineEras.slice(0, 3).map((era) => (
              <article key={era.title} className="eraFeatureCard">
                <img src={era.image} alt={era.title} />
                <div>
                  <div className="pill">{era.years}</div>
                  <h3>{era.title}</h3>
                  <p>{era.intro}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Archive gallery"
            title="Photos that prove the miles"
            blurb="Not staged placeholders — real archive images from real bands, real rooms, and real chapters of the story."
          />
          <div className="photoStrip">
            {galleryImages.slice(0, 8).map((item) => (
              <figure key={item.src} className="imageCard">
                <img src={item.src} alt={item.alt} />
                <figcaption>
                  <strong>{item.caption}</strong>
                  {item.era && <span>{item.era}</span>}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container splitSection">
          <div>
            <SectionTitle eyebrow="Why this matters" title="A real artist legacy, not scattered fragments" />
            <p>
              The point of this site is to make the body of work visible: the bands, the media,
              the current projects, the earlier years, and the lived musician story behind all of it.
            </p>
            <p>
              It is meant to feel curated, warm, and credible — part archive, part public home,
              and part invitation to listen more closely.
            </p>
          </div>
          <div className="ctaPanel premiumPanel">
            <h3>Connect</h3>
            <p>
              For booking, collaboration, media, or just to say hello, the simplest next step is still the best one.
            </p>
            <div className="buttonRow">
              <a className="buttonPrimary" href={`mailto:${contactEmail}?subject=Message from MikeMancour.com`}>Email Mike</a>
              <Link href="/about" className="buttonSecondary">Read the story</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
