export default function SectionTitle({
  eyebrow,
  title,
  blurb,
}: {
  eyebrow?: string;
  title: string;
  blurb?: string;
}) {
  return (
    <div className="sectionTitle">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {blurb ? <p className="sectionBlurb">{blurb}</p> : null}
    </div>
  );
}
