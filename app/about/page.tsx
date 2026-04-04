import SectionTitle from '@/components/SectionTitle';
import { contactEmail, galleryImages, siteCopy } from '@/data/media';

export default function AboutPage() {
  const banner = galleryImages.find((img) => img.src.includes('vassers-fiddle')) ?? galleryImages[0];

  const values = [
    'Connection over ego',
    'Craft that serves the song',
    'Groove, feel, and phrasing over empty flash',
    'Joy, gratitude, and meaning in the room',
    'Preserve the story with honesty and warmth',
  ];

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

        <div className="splitSection aboutGrid premiumAboutGrid">
          <div>
            <SectionTitle eyebrow="About Mike" title="A working musician’s life" blurb={siteCopy.aboutShort} />
            <p>{siteCopy.aboutLead}</p>
            <p>
              The public story starts in Michigan, where the early bands helped form the instincts for groove,
              band chemistry, improvisation, and stage identity. It deepens in Tennessee after the move to Nashville,
              where the work expanded into rock and blues clubs, show bands, Broadway nights, regional one-nighters,
              songwriter circles, car-show bands, benefit gigs, and long-running live projects.
            </p>
            <p>
              Along the way, the music has crossed blues, rock, country, roots, classic rock, improvisation,
              and crowd-facing variety work. The common denominator is not genre. It is presence: finding the right note,
              serving the room, lifting the song, and making a band feel like one living thing.
            </p>
          </div>

          <aside className="ctaPanel premiumPanel">
            <h3>What shapes the work</h3>
            <ul className="elegantList">
              {values.map((value) => <li key={value}>{value}</li>)}
            </ul>
            <a className="buttonPrimary fullWidthButton" href={`mailto:${contactEmail}?subject=Message from MikeMancour.com`}>Email Mike</a>
          </aside>
        </div>

        <div className="sectionDivider" />

        <div className="splitSection premiumAboutGrid">
          <div>
            <SectionTitle eyebrow="Mission" title="Why this site exists" />
            <p>{siteCopy.mission}</p>
            <p>
              It is built to honor the truth of a real musical life: not just one polished chapter, but the full thread of bands,
              media, friendships, influences, clubs, stages, and current work. In that sense, the site is both public-facing and archival.
            </p>
            <p>
              It also makes room for a deeper philosophy that has followed the creative work for years: songs are often caught,
              not forced. Some arrive through story. Some through feel. Some through memory. Some through the chemistry of a band in a room.
            </p>
          </div>

          <div>
            <SectionTitle eyebrow="Philosophy" title="Soul, story, and groove" />
            <p>{siteCopy.philosophy}</p>
            <p>
              The vision going forward is simple: preserve the past without getting trapped in it, keep the present alive,
              and make room for future expansions like a deeper archive, band pages, photo stories, and more documented performances.
            </p>
            <p>
              The result should feel less like a brochure and more like a living artist legacy — rooted, musical, memorable, and unmistakably Mike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
