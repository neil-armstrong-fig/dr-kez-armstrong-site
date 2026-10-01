export type Service = {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly details: readonly string[];
};

export const services: readonly Service[] = [
  {
    number: "01",
    title: "Specialist ornithology",
    description:
      "Bespoke support for avian research, ecological fieldwork and projects that need confident identification and practical survey experience.",
    details: ["Survey design", "Specialist fieldwork", "Research collaboration"],
  },
  {
    number: "02",
    title: "Technical reporting",
    description:
      "Clear, careful ecological writing grounded in field evidence, with independent reviewing for reports, research outputs and project material.",
    details: ["Technical report writing", "Peer review", "Research communication"],
  },
  {
    number: "03",
    title: "GIS & data analysis",
    description:
      "Spatial and statistical analysis that turns field observations into useful evidence for ecological decisions and communication.",
    details: ["GIS spatial analysis", "Data analysis in R", "Mapping and interpretation"],
  },
  {
    number: "04",
    title: "Bird ringing & training",
    description:
      "Licensed bird-ringing demonstrations and training informed by work with passerines, seabirds, waterfowl, waders and raptors.",
    details: ["Bird-ringing training", "Public demonstrations", "Project support"],
  },
];
