import type { TarotCard, YesNoAnswer } from "../../types/card";

export const LIZ_DEAN_YES_NO_METHOD =
  "liz-dean-yes-no";

const noCards = new Set([
  // Espadas
  "three-of-swords",
  "five-of-swords",
  "six-of-swords",
  "seven-of-swords",
  "eight-of-swords",
  "nine-of-swords",
  "ten-of-swords",
  "knight-of-swords",

  // Copas
  "five-of-cups",
  "seven-of-cups",
  "eight-of-cups",

  // Oros
  "five-of-pentacles",

  // Arcanos Mayores
  "death",
  "the-devil",
  "the-tower",
  "the-moon"
]);

const neutralCards = new Set([
  // Espadas
  "four-of-swords",

  // Copas
  "four-of-cups",

  // Arcanos Mayores
  "the-hermit",
  "the-hanged-man",

  // Casos especiales de Liz Dean
  "two-of-swords",
  "ten-of-wands"
]);

const notes: Record<string, string> = {
  "two-of-swords":
    "La respuesta todavía no está determinada.",

  "ten-of-wands":
    "La respuesta todavía no está determinada.",

  "five-of-wands":
    "Sí, pero tendrás que luchar por conseguirlo.",

  "seven-of-wands":
    "Sí, pero tendrás que luchar por conseguirlo."
};

export function getLizDeanYesNo(
  card: TarotCard
): {
  methodId: string;
  answer: YesNoAnswer;
  note?: string;
} {
  let answer: YesNoAnswer = "yes";

  if (noCards.has(card.id)) {
    answer = "no";
  }

  if (neutralCards.has(card.id)) {
    answer = "neutral";
  }

  return {
    methodId: LIZ_DEAN_YES_NO_METHOD,
    answer,
    ...(notes[card.id]
      ? { note: notes[card.id] }
      : {})
  };
}