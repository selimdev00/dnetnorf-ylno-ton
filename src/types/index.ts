export type EventItem = {
  year: string;
  description: string;
};

export type SectionItem = {
  startYear: string;
  endYear: string;
  topic: string;
  events: EventItem[];
};
