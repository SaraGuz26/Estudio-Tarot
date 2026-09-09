export type SourceKind =
  | "book"
  | "manual"
  | "website"
  | "author"
  | "historical";

export interface TarotSource {
  id: string;
  title: string;
  author?: string;
  year?: number;
  kind: SourceKind;
  url?: string;
  notes?: string;
}