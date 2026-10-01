export type CvItem = {
  readonly title: string;
  readonly date?: string;
  readonly detail?: string;
  readonly href?: string;
};

export type CvSection = {
  readonly id: string;
  readonly title: string;
  readonly items: readonly CvItem[];
};

export type ExperienceRole = {
  readonly role: string;
  readonly organisation: string;
  readonly period: string;
  readonly arrangement?: string;
  readonly location?: string;
  readonly description?: string;
  readonly responsibilities?: readonly string[];
};

export const skills: readonly string[] = [
  "Specialist ornithology research and fieldwork",
  "Technical report writing and reviewing",
  "GIS spatial analysis",
  "Data analysis in R",
  "Survey design and project management",
  "Bird-ringing training",
  "Teaching, seminars and lectures",
];

export const experience: readonly ExperienceRole[] = [
  {
    role: "Senior Ecologist (Ornithology)",
    organisation: "Tetra Tech Europe",
    period: "Jan 2026 – present",
    arrangement: "Full-time",
  },
  {
    role: "Specialist Consultant",
    organisation: "An Coimisiún Pleanála",
    period: "Aug 2025 – present",
    arrangement: "Freelance",
    location: "Dublin, County Dublin, Ireland",
    description: "Specialist consultancy in ornithology and ecology.",
  },
  {
    role: "Lecturer",
    organisation: "Belfast Metropolitan College",
    period: "Sep 2023 – present",
    arrangement: "Part-time",
    description: "Part-time lecturer in Biology.",
  },
  {
    role: "Ornithologist",
    organisation: "Tetra Tech Europe",
    period: "Apr 2022 – Jan 2026",
    arrangement: "Full-time",
    description:
      "Ornithologist and ecologist specialising in breeding bird surveys, waterbird surveys, high- and low-tide counts, WeBS, Phase 1 habitat surveys, avian disturbance and ecological assessments.",
  },
  {
    role: "PhD Researcher",
    organisation: "Queen's University Belfast",
    period: "Oct 2018 – Sep 2022",
    description: "The ecology of the Common Kestrel, Falco tinnunculus, in Ireland.",
  },
  {
    role: "Bird Surveyor",
    organisation: "British Trust for Ornithology (BTO)",
    period: "Apr 2021 – Apr 2022",
    arrangement: "Freelance",
    location: "Northern Ireland, United Kingdom",
    description: "EFS Farmland Birds & Habitat and waterbird disturbance research.",
  },
  {
    role: "Environmental Educator",
    organisation: "Mantella Environmental Education",
    period: "Mar 2016 – Oct 2018",
    location: "Northern Ireland",
    description:
      "Zoo-to-you environmental education, working with raptors, reptiles, mammals, amphibians and ‘mega beasts’.",
  },
  {
    role: "Aviculture Warden",
    organisation: "WWT (Wildfowl & Wetlands Trust)",
    period: "May 2014 – Sep 2018",
    location: "Castle Espie, Northern Ireland",
    description:
      "Lead keeper of the captive wildfowl population, responsible for animal-staff supervision, practical husbandry management, breeding and collection planning, health and safety, monitoring animal behaviour, veterinary treatment, pest management, public talks and tours, and record keeping.",
  },
  {
    role: "Account Manager",
    organisation: "WW Office Furniture trading as TSS Ltd",
    period: "Sep 2010 – May 2014",
    description:
      "Responsible for more than 60 customer accounts, including sales, invoices, deliveries, customer service, payments, SAGE 50, credit control and supplier accounts.",
  },
  {
    role: "Head Keeper",
    organisation: "World of Owls",
    period: "Jan 2008 – Aug 2010",
    description:
      "Husbandry of birds of prey, including training, medical attention and, in some cases, rehabilitation and release. Also responsible for reptiles, amphibians and arachnids, educational talks and presentations, and supervision of volunteers and other keepers.",
  },
  {
    role: "Animal Keeper",
    organisation: "Mountpanther Farm",
    period: "Jan 2006 – Jan 2008",
    location: "Newcastle",
    description:
      "Responsible for the husbandry of mammals and hoofstock—including llama, meerkat, ring-tailed lemur, raccoon and otter—and varied bird species including birds of paradise, macaws, parakeets and eagle owls.",
  },
];

export const volunteering: readonly ExperienceRole[] = [
  {
    role: "Director",
    organisation: "Copeland Bird Observatory",
    period: "May 2025 – present",
    arrangement: "Environment",
  },
  {
    role: "President",
    organisation: "Copeland Bird Observatory",
    period: "Apr 2023 – present",
    arrangement: "Environment",
  },
  {
    role: "Regional Representative",
    organisation: "British Trust for Ornithology (BTO)",
    period: "Jun 2020 – present",
    arrangement: "Environment",
    description:
      "Local leader for the BTO in County Down and a key point of contact for local members and volunteers.",
  },
  {
    role: "Alumni Ambassador",
    organisation: "Friends Forever International",
    period: "Sep 2019 – present",
    arrangement: "Civil rights and social action",
    description:
      "Supporting the alumni network through workshops, seminars, community projects and subsequent programmes, helping former participants continue as fellows and leaders.",
  },
  {
    role: "A/S Licence Bird Ringer",
    organisation: "British Trust for Ornithology (BTO)",
    period: "Nov 2014 – present",
    arrangement: "Environment",
    description:
      "A-permit licensed bird ringer and trainer, safely catching, ringing and releasing birds for population, migration and behavioural studies on behalf of the BTO.",
  },
  {
    role: "Copeland Bird Observatory Committee Member",
    organisation: "Copeland Bird Observatory",
    period: "May 2019 – Apr 2023",
    arrangement: "Environment",
    description: "Committee member supporting the governance of the Bird Observatory.",
  },
  {
    role: "Conference Helper",
    organisation: "British Ecological Society",
    period: "Dec 2019",
    arrangement: "Science and technology",
    description: "Conference helper for setup, running and general duties.",
  },
  {
    role: "Scouter",
    organisation: "Scouting Ireland",
    period: "Sep 2018 – Jan 2025",
  },
  {
    role: "Belfast & Down Ringing Group Secretary",
    organisation: "British Trust for Ornithology (BTO)",
    period: "Apr 2016 – Mar 2022",
    arrangement: "Environment",
    description: "Responsible for the documentation and communication of the Belfast & Down Ringing Group.",
    responsibilities: [
      "Prepared agendas with the Chair and circulated agendas and supporting papers.",
      "Received agenda items, recorded meetings and circulated draft minutes.",
      "Tracked agreed actions and maintained signed, approved meeting records.",
      "Circulated AGM and general-meeting material.",
      "Maintained current records of committee membership, licences and bird-ringing legislation.",
    ],
  },
  {
    role: "Surveyor",
    organisation: "British Trust for Ornithology (BTO)",
    period: "Nov 2014 – present",
    arrangement: "Environment",
    description: "Wetland Bird Survey (WeBS) and Breeding Bird Survey (BBS) surveyor.",
  },
  {
    role: "Volunteer",
    organisation: "RSPB",
    period: "Sep 2014 – present",
    arrangement: "Environment",
    description: "Conducting bird surveys and reserve habitat management.",
  },
  {
    role: "Challenge Event Team Leader",
    organisation: "Childreach International",
    period: "Sep 2010 – Sep 2012",
    arrangement: "Children",
    description:
      "Recruited, managed and led fundraising teams completing challenge events for Childreach International.",
    responsibilities: [
      "Mount Kilimanjaro, June 2011 — £44,000 raised.",
      "Atlas Ascent, August 2012 — £27,000 raised.",
    ],
  },
];

export const cvSections: readonly CvSection[] = [
  {
    id: "education",
    title: "Education",
    items: [
      {title: "PhD — The Common Kestrel Falco tinnunculus in Ireland", date: "2022"},
      {title: "MSc Animal Behaviour and Welfare", detail: "Queen's University Belfast", date: "Dec 2012"},
      {title: "BSc Psychology", detail: "University of Ulster", date: "Dec 2008"},
    ],
  },
  {
    id: "honours",
    title: "Honours & awards",
    items: [
      {
        title: "Queen's University Belfast Medicine & Life Sciences Faculty Graduate Poster Competition",
        detail: "Winner, Best Faculty Poster",
        date: "Jun 2021",
      },
      {
        title: "British Ecological Society Conference Student Poster Prize",
        detail: "Runner-up, Best Poster",
        date: "Dec 2019",
      },
    ],
  },
  {
    id: "media",
    title: "Media",
    items: [
      {
        title: "BBC News — Kestrel camera offers candid look at Irish birds of prey",
        date: "May 2021",
        href: "https://www.bbc.co.uk/news/uk-northern-ireland-57275883",
      },
      {
        title: "Mooney Goes Wild (RTÉ Radio 1) — Kestrels in Ireland",
        date: "May 2021",
        href: "https://www.rte.ie/radio/radioplayer/html5/#/radio1/11311968",
      },
      {
        title: "BBC Homeground — Cannon netting waders on Carlingford Lough",
        date: "May 2021",
        href: "https://www.bbc.co.uk/programmes/p09g452s",
      },
      {
        title: "Swimming Head Productions — Conserving Kestrels",
        date: "Jul 2020",
        href: "https://youtu.be/17fyiTCl3rs",
      },
      {
        title: "BBC Homeground — Breeding Captive Waterfowl",
        date: "Jun 2018",
        href: "https://www.bbc.co.uk/programmes/p06kkdh1",
      },
    ],
  },
  {
    id: "publishing",
    title: "Publishing",
    items: [
      {
        title: "Birdwatch — Northern Ireland's Seabird Sanctuary: Copeland Bird Observatory",
        date: "Jan 2025",
      },
      {
        title: "Birdwatch Ireland, Wings 102 — Ringing Tales: Manx Shearwaters at Copeland Bird Observatory",
        date: "Autumn 2021",
      },
      {
        title: "British Ecological Society, The Niche — BES Conference Student Poster Prize Winner",
        date: "Mar 2020",
      },
      {
        title: "Northern Ireland Raptor Study Group Newsletter",
        detail: "Contributed article",
        date: "Mar 2020",
      },
      {title: "Scottish Raptor Monitoring Group Newsletter", detail: "Contributed article", date: "Oct 2019"},
    ],
  },
];

export const memberships: readonly string[] = [
  "BirdWatch Ireland",
  "British Ecological Society",
  "British Ornithologists' Union",
  "British Trust for Ornithology",
  "Chartered Institute of Ecology and Environmental Management (MCIEEM)",
  "Copeland Bird Observatory",
  "Northern Ireland Raptor Study Group",
  "Raptor Research Foundation",
  "RSPB",
];

export const conferences: readonly CvItem[] = [
  {title: "British Ecological Society", date: "Dec 2023"},
  {title: "Scottish Ornithologists' Club Annual Conference", date: "Nov 2022"},
  {title: "BTO Northern Ireland", date: "Nov 2022"},
  {title: "Irish Raptor Study Group Conference", date: "Mar 2022"},
  {title: "Raptor Research Foundation Conference", date: "Nov 2021"},
  {title: "BTO Northern Ireland", date: "Nov 2021"},
  {title: "Irish Ecological Association Conference", date: "Jan 2021"},
  {title: "BTO Northern Ireland", date: "Nov 2020"},
  {title: "Raptor Research Foundation Conference", date: "Dec 2020"},
  {title: "North American Ornithological Conference", date: "Jul 2020"},
  {title: "British Ecological Society", date: "Dec 2019"},
  {title: "BTO Northern Ireland", date: "Nov 2019"},
  {title: "Irish Ecological Association", date: "Jan 2019"},
  {title: "Frontiers and Horizons in Ecology", date: "Nov 2018"},
];
