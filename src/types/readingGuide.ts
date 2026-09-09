export interface ReadingGuide {
  id: string;
  title: string;
  description: string;
  sections: ReadingGuideSection[];
  sourceIds: string[];
}

export interface ReadingGuideSection {
  title: string;
  content?: string;
  items?: string[];
}