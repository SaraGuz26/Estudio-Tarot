export type CombinationCardCount = 2 | 3 | 4 | 5;

export type CardOrientation = "upright" | "reversed";

export interface TarotCombination {
  id: string;
  cardCount: CombinationCardCount;
  cardIds: string[];
  orientations?: CardOrientation[];
  interpretation: string;
  sourceIds: string[];
  note?: string;
}