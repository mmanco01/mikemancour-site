export type AudioTrack = {
  title: string;
  artist: string;
  project: string;
  url: string;
  note?: string;
  featured?: boolean;
};

export type VideoItem = {
  title: string;
  project: string;
  url: string;
  embedUrl: string;
  note?: string;
  featured?: boolean;
};

export type SiteImage = {
  src: string;
  alt: string;
  caption?: string;
  era?: string;
  featured?: boolean;
};

export type LegacyMarker = {
  label: string;
  value: string;
  note: string;
};

export type CurrentProject = {
  name: string;
  years: string;
  style: string;
  body: string;
  image: string;
};

export type TimelineEntry = {
  years: string;
  title: string;
  body: string;
};

export type TimelineEra = {
  title: string;
  years: string;
  intro: string;
  image: string;
  entries: TimelineEntry[];
};

export const contactEmail = 'mmanco01@msn.com';

export const siteCopy = {
  heroTitle: 'Mike Mancour',
  heroSubtitle: 'Guitarist • Singer • Songcatcher',
  heroBlurb:
    `From Michigan roots to Nashville stages, Mike Mancour's musical life spans blues rooms, car shows, club bands, songwriter circles, classic rock sets, charity stages, and the living joy of performance. This site gathers the recordings, photos, videos, and story into one public home.`,
  intro:
    `This is not a one-band bio or a one-season highlight reel. It is the front door to a lifetime of music: the rooms, the roads, the friendships, the grooves, the experiments, and the performances that kept the thread alive from the late 1970s to the present.`,
  legacyStatement:
    `The through-line is simple: catch the song, serve the room, honor the craft, and leave behind something true.`,
  aboutShort:
    `Mike Mancour is a working musician whose story runs from Michigan bands of the late 1970s through Nashville club work, songwriter friendships, variety bands, blues projects, rock stages, and current live performance.`,
  aboutLead:
    `For decades, Mike has lived music from inside the room — not as a distant idea, but as rehearsal, set lists, load-ins, one-nighters, charity gigs, songwriter circles, club stages, car shows, and the deep satisfaction of a band locking together at exactly the right moment.`,
  mission:
    `This site exists to preserve that body of work, make the media easy to find, and tell the story with the dignity of a real artist legacy rather than a pile of scattered links.`,
  philosophy:
    `The music crosses blues, rock, country, roots, classic rock, and spontaneous improvisation, but the deeper thread is connection: songs with soul, groove with intention, and performance as a way of bringing joy, memory, and meaning into a room.`,
  archiveNote:
    `More bands, photos, stories, posters, and memories will expand later as the archive grows. The goal here is to stay curated first, then go wider.`,
};

export const legacyMarkers: LegacyMarker[] = [
  {
    label: 'Story span',
    value: '1978–present',
    note: 'A public timeline that begins in the Michigan years and stays alive in the current bands.',
  },
  {
    label: 'Geography',
    value: 'Michigan → Nashville',
    note: 'Roots in Michigan, then decades of growth in Tennessee stages, clubs, and communities.',
  },
  {
    label: 'Musical thread',
    value: 'Blues • Rock • Country • Roots',
    note: 'A working catalog built from live rooms more than branding campaigns.',
  },
  {
    label: 'Why this site exists',
    value: 'Preserve the legacy',
    note: 'To gather recordings, videos, photos, and stories into one clear artist home.',
  },
];

export const currentProjects: CurrentProject[] = [
  {
    name: 'KnuckleBall',
    years: '2026–present',
    style: 'Yacht rock and classic rock',
    body: 'A current chapter built on groove, hooks, tasteful guitar work, and songs that land with an audience.',
    image: '/images/fender-rules.jpg',
  },
  {
    name: 'Gritz & Glory',
    years: '2025–present',
    style: 'Old country and old rock',
    body: 'A set-driven band chapter mixing familiar songs, shared vocals, and rootsy room energy.',
    image: '/images/orange-crush-2.jpg',
  },
  {
    name: 'BluesSlinger',
    years: '2023–present',
    style: 'Blues-rooted live performance',
    body: `Feel-first performances that put phrasing, soul, and restraint ahead of flash for its own sake.`,
    image: '/images/bluesslinger-2.jpg',
  },
];

export const featuredAudio: AudioTrack[] = [
  {
    title: 'Whirlwind',
    artist: 'Total Spontaneous Improv',
    project: 'TSI',
    url: 'https://www.reverbnation.com/TotalSpontaneousImprov/song/19108787-whirlwind',
    note: `A TSI track with rising energy and wind-driven riffs toward the end.`,
    featured: true,
  },
  {
    title: 'Released',
    artist: 'Total Spontaneous Improv',
    project: 'TSI',
    url: 'https://www.reverbnation.com/TotalSpontaneousImprov/song/19108797-released',
    note: `An expressive early recording that captures the experimental side of the catalog.`,
    featured: true,
  },
  {
    title: 'Hold On Loosely',
    artist: 'Hot Ice',
    project: 'Hot Ice',
    url: 'https://www.reverbnation.com/hotice12/song/19268633-hold-on-loosely-mike',
    note: `A live-band era marker from the Hot Ice years.`,
    featured: true,
  },
];

export const allAudio: AudioTrack[] = [
  ...featuredAudio,
  {
    title: 'Copy Cats',
    artist: 'Total Spontaneous Improv',
    project: 'TSI',
    url: 'https://www.reverbnation.com/TotalSpontaneousImprov/song/19108814-copy-cats',
    note: `Built around bass and guitar answering and shadowing each other.`,
  },
  {
    title: 'All of My Love',
    artist: 'Hot Ice',
    project: 'Hot Ice',
    url: 'https://www.reverbnation.com/hotice12/song/19268604-all-of-my-love-mike',
    note: 'A melodic rock marker from an early foundational band chapter.',
  },
  {
    title: 'Garden Party',
    artist: 'AcousticRush',
    project: 'Acoustic',
    url: 'https://www.reverbnation.com/acousticrush/song/21167006-garden-party',
    note: `An acoustic-leaning cut that broadens the listening page beyond the heavier band years.`,
  },
];

export const featuredVideos: VideoItem[] = [
  {
    title: 'Life Is Beautiful',
    project: 'Featured',
    url: 'https://www.youtube.com/watch?v=MWEXfGnz3Bk',
    embedUrl: 'https://www.youtube.com/embed/MWEXfGnz3Bk',
    note: 'A feature performance with Queen Bee in the spotlight.',
    featured: true,
  },
  {
    title: 'Thrill Is Gone - BluesSlinger',
    project: 'BluesSlinger',
    url: 'https://www.youtube.com/watch?v=4hVoI9PiseY',
    embedUrl: 'https://www.youtube.com/embed/4hVoI9PiseY',
    note: 'A blues standard delivered with patience, phrasing, and room feel.',
    featured: true,
  },
  {
    title: 'Tennessee Whiskey - Mike Mancour - Instigator',
    project: 'Instigator',
    url: 'https://www.youtube.com/watch?v=KyDMhV7bRPg',
    embedUrl: 'https://www.youtube.com/embed/KyDMhV7bRPg',
    note: 'Blue Water Grille at Hurricane Marina on Memorial Day.',
    featured: true,
  },
];

export const allVideos: VideoItem[] = [
  ...featuredVideos,
  {
    title: 'Drown in My Own Tears - BluesSlinger',
    project: 'BluesSlinger',
    url: 'https://www.youtube.com/watch?v=X8QRtohvHIA',
    embedUrl: 'https://www.youtube.com/embed/X8QRtohvHIA',
    note: `BluesSlinger performance with added drum track and mixdown support from Tony Morra.`,
  },
  {
    title: 'Instigator - Never Been Any Reason - Just One More Bar - Manchester TN',
    project: 'Instigator',
    url: 'https://www.youtube.com/watch?v=N-fTY4qUbnY',
    embedUrl: 'https://www.youtube.com/embed/N-fTY4qUbnY',
    note: 'A live-band snapshot from the Instigator years.',
  },
  {
    title: 'Gritz & Glory',
    project: 'Gritz & Glory',
    url: 'https://www.youtube.com/watch?v=f7hWIXdvoz4',
    embedUrl: 'https://www.youtube.com/embed/f7hWIXdvoz4',
  },
  {
    title: 'Orange Crush - Compilation',
    project: 'Orange Crush',
    url: 'https://www.youtube.com/watch?v=EJ5PNzBSIK4',
    embedUrl: 'https://www.youtube.com/embed/EJ5PNzBSIK4',
  },
];

export const galleryImages: SiteImage[] = [
  {
    src: '/images/fender-rules.jpg',
    alt: 'Mike Mancour on stage holding a Fender baseball toward the camera.',
    caption: 'Fender Rules',
    era: 'Live stage moment',
    featured: true,
  },
  {
    src: '/images/bluesslinger-2.jpg',
    alt: 'BluesSlinger band image on a colorful background.',
    caption: 'BluesSlinger',
    era: 'Current chapter',
    featured: true,
  },
  {
    src: '/images/orange-crush-2.jpg',
    alt: 'Orange Crush performing live in a venue.',
    caption: 'Orange Crush',
    era: 'Variety-band years',
    featured: true,
  },
  {
    src: '/images/instigator-3.jpg',
    alt: 'Instigator band posed on a staircase.',
    caption: 'Instigator',
    era: 'Recent live era',
  },
  {
    src: '/images/telesis.jpg',
    alt: 'Black and white live band photo featuring Mike Mancour in an earlier era.',
    caption: 'Telesis',
    era: 'Early Michigan years',
  },
  {
    src: '/images/wolf-creek-2.jpg',
    alt: 'Mike Mancour with Vassar Clements outdoors, pointing at the fiddle.',
    caption: 'Wolf Creek / Vassar Clements memory',
    era: 'Michigan roots',
  },
  {
    src: '/images/hot-ice.jpg',
    alt: 'Band photo around vintage cars at night.',
    caption: 'Hot Ice',
    era: 'Foundational band era',
  },
  {
    src: '/images/hot-ice-2.jpg',
    alt: 'Group portrait of Hot Ice band members.',
    caption: 'Hot Ice portrait',
    era: 'Archive portrait',
  },
  {
    src: '/images/citizens-arrest-2.jpg',
    alt: 'Vintage performance photo of Citizens Arrest.',
    caption: 'Citizens Arrest',
    era: 'Archive',
  },
  {
    src: '/images/separate-checks-2.jpg',
    alt: 'Separate Checks band photo in black and white.',
    caption: 'Separate Checks',
    era: '1990s Nashville years',
  },
  {
    src: '/images/rackety-boom.jpg',
    alt: 'Rackety Boom trio posed with instruments by a vintage truck.',
    caption: 'Rackety Boom',
    era: 'Blues chapter',
  },
  {
    src: '/images/ocb.jpg',
    alt: 'Band image of Orange Crush on a colorful background.',
    caption: 'Orange Crush promo',
    era: 'Promo image',
  },
  {
    src: '/images/albatross-texas-flood.jpg',
    alt: 'Vintage newspaper-style image of a band performance.',
    caption: 'Albatross / Texas Flood clipping',
    era: 'Archive clipping',
  },
  {
    src: '/images/glam-rocker-hot-ice.jpg',
    alt: 'Young Mike Mancour seated at a table in a vintage candid photo.',
    caption: 'Young Mike',
    era: 'Archive portrait',
  },
  {
    src: '/images/golden-era-2.jpg',
    alt: 'Large band portrait in an indoor rehearsal space.',
    caption: 'Golden Era',
    era: 'Car-show years',
  },
  {
    src: '/images/sphinx-gbhs.jpg',
    alt: 'Vintage faded band photo in front of a tree.',
    caption: 'Sphinx',
    era: 'Early band years',
  },
  {
    src: '/images/vassers-fiddle.jpg',
    alt: 'Mike Mancour outdoors with Vassar Clements, holding an acoustic guitar.',
    caption: `Romie's All American Band / Vassar Clements`,
    era: 'Story photo',
  },
  {
    src: '/images/puppy-picker-2.jpg',
    alt: 'Small dog holding a guitar pick in its mouth.',
    caption: 'Backstage mascot energy',
    era: 'Fun extra',
  },
];

export const timelineEras: TimelineEra[] = [
  {
    title: 'Michigan foundations',
    years: '1978–1990',
    intro:
      `The first stretch of the story was built in Michigan: early bands, rehearsal rooms, school-era photos, local stages, and the first years of serious live work. This is where the guitar, stage identity, and band instincts took hold.`,
    image: '/images/hot-ice.jpg',
    entries: [
      {
        years: 'Before 1978',
        title: 'Telesis, Sphinx, and Citizens Arrest',
        body: `The pre-history of the public timeline — early bands that helped shape the instinct for stage work and band chemistry.`,
      },
      {
        years: '1978–1981',
        title: 'Hot Ice',
        body: `Blues and rock with real visual identity, bigger energy, and the sense that live music could become a lifelong thread.`,
      },
      {
        years: '1981–1983',
        title: 'TSI (Totally Spontaneous Improv)',
        body: `A rock-improv three-piece that captured experimentation, instinct, and the thrill of catching songs in the moment.`,
      },
      {
        years: '1984–1986',
        title: 'Albatross',
        body: `A variety-band era that broadened the range and sharpened the ability to serve different rooms and audiences.`,
      },
      {
        years: '1986–1990',
        title: 'Wolf Creek',
        body: `A country band performing throughout Michigan, deepening the working-musician mileage before the Tennessee move.`,
      },
    ],
  },
  {
    title: 'Nashville arrival and working years',
    years: '1990–2006',
    intro:
      `After moving to Tennessee in 1990, the story widened into rock and blues clubs, Nashville show-band work, Broadway nights, hired-gun calls, songwriter friendships, and multiple chapters of regional live performance.`,
    image: '/images/vassers-fiddle.jpg',
    entries: [
      {
        years: '1990–1993',
        title: 'Bad Influence',
        body: `Rock and blues at Margie's on Thompson Road — a formative Tennessee chapter right after the move south.`,
      },
      {
        years: '1993',
        title: 'New Orleans Mardi Gras Blues Band',
        body: `A short but memorable blues chapter that added color and variety to the early Nashville years.`,
      },
      {
        years: '1994',
        title: `Romie's All American Band`,
        body: `A Nashville show-band chapter that sharpened stage professionalism and widened the performance lane.`,
      },
      {
        years: '1995–1997',
        title: 'Separate Checks',
        body: `An 80s-band chapter with strong visual identity and another layer of stage mileage in the Nashville scene.`,
      },
      {
        years: '1997–2000',
        title: 'Broadway and Middle Tennessee club work',
        body: `Not one single band name so much as a role: Mike as a hired gun, called to fill dozens of one-night gigs for bands that needed a guitar slinger.`,
      },
      {
        years: '2000–2005',
        title: 'Golden Era and the Hot Rods',
        body: `Car-show bands with fun, visual flair, and strong local presence. The Hot Rods chapter also featured songwriter Randy Thomas.`,
      },
      {
        years: '2006',
        title: 'Rackety Boom',
        body: `A blues-band chapter that fed the rootsier side of the catalog and the live identity.`,
      },
    ],
  },
  {
    title: 'Modern chapters',
    years: '2007–2022',
    intro:
      `This stretch kept the thread alive through variety bands, acoustic work, blues, rock projects, and modern local-band life — a steady continuation rather than a nostalgia act.`,
    image: '/images/orange-crush-2.jpg',
    entries: [
      {
        years: '2007–2015',
        title: 'Orange Crush Band (OCB)',
        body: `A long-running variety-band era with blues, rock, and broad crowd appeal.`,
      },
      {
        years: '2016',
        title: 'Acoustic Crush',
        body: `An acoustic chapter that put songs, touch, and arrangement forward in a different setting.`,
      },
      {
        years: '2017',
        title: 'Crazy Neighbors',
        body: `Another live-project chapter in the ongoing local band story.`,
      },
      {
        years: '2018',
        title: 'Thanks a Chameleon',
        body: `A distinct band chapter preserved here under its proper name.`,
      },
      {
        years: '2018–2019',
        title: 'Dirty South Band',
        body: `A rock project carrying the story forward into another lane of live work.`,
      },
      {
        years: '2020',
        title: 'Smoking Mirrors',
        body: `A rock chapter that kept the engine running during a changing period.`,
      },
      {
        years: '2021–2023',
        title: 'Instigator',
        body: `A modern live-band phase with documented video clips and crowd-friendly set energy.`,
      },
    ],
  },
  {
    title: 'Living present and legacy-building phase',
    years: '2023–present',
    intro:
      `The story is still active. These are not just memories; they are current rooms, current bands, current rehearsals, and current recordings. This is the phase where the legacy is finally being gathered into one coherent public home.`,
    image: '/images/bluesslinger-2.jpg',
    entries: [
      {
        years: '2023–present',
        title: 'BluesSlinger',
        body: `Blues-rooted performances with an emphasis on feel, soul, phrasing, and live chemistry.`,
      },
      {
        years: '2025–present',
        title: 'Gritz & Glory',
        body: `Old country and old rock with shared vocals, live-band dynamics, and set-list craftsmanship.`,
      },
      {
        years: '2026–present',
        title: 'KnuckleBall',
        body: `Yacht and classic rock delivered through groove, musicianship, and songs people carry with them.`,
      },
    ],
  },
];
