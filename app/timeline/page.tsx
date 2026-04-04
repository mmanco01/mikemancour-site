import SectionTitle from '@/components/SectionTitle';
import { siteCopy, timelineEras } from '@/data/media';

export default function TimelinePage() {
  return (
    <section className="section pageTopPad">
      <div className="container">
        <div className="timelineIntroShell">
          <SectionTitle
            eyebrow="Timeline"
            title="The official story spine"
            blurb="This public timeline is the backbone of the site: the clearest view of the long musical thread from Michigan foundations through Nashville years and into the current bands."
          />
          <p className="leadText">{siteCopy.archiveNote}</p>
        </div>

        <div className="timelineEraGrid">
          {timelineEras.map((era) => (
            <article key={era.title} className="timelineEraCard">
              <img src={era.image} alt={era.title} className="timelineEraImage" />
              <div className="timelineEraBody">
                <div className="pill">{era.years}</div>
                <h3>{era.title}</h3>
                <p className="timelineEraIntro">{era.intro}</p>
                <div className="timelineEntryList">
                  {era.entries.map((entry) => (
                    <div key={`${era.title}-${entry.years}-${entry.title}`} className="timelineEntry">
                      <div className="timelineYear">{entry.years}</div>
                      <div>
                        <h4>{entry.title}</h4>
                        <p>{entry.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
