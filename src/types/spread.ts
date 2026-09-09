export interface SpreadPosition {
  number: number;
  name: string;
  description: string;
  x?: number;
  y?: number;
}

export interface TarotSpread {
  id: string;
  name: string;
  description: string;
  cardCount: number;
  category: string[];
  positions: SpreadPosition[];
  layout: string;
  sourceIds: string[];
  status: "documented" | "modern-variant" | "custom" | "unverified";
}

