export type Arcana = "major" | "minor";
export type Suit = "cups" | "wands" | "swords" | "pentacles";
export type YesNoAnswer = "yes" | "no" | "neutral";

export interface CardMeaning {
  keywords: string[];
  meaning: string;
}

export interface YesNoMethod {
  methodId: string;
  answer: YesNoAnswer;
  note?: string;
}

export interface TarotCard {
  id: string;
  name: string;
  number?: number;
  arcana: Arcana;
  suit?: Suit;
  image: string;
  upright: CardMeaning;
  reversed: CardMeaning;
  symbolism: string;
  contextual?: ContextualMeaning;
  yesNo: YesNoMethod[];
  sourceIds: string[];
}

export interface ContextualMeaning {
  home?: string;
  love?: string;
  careerMoney?: string;
  spiritual?: string;
}