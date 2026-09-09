import type { TarotSource } from "../../types/source";

export const sources: TarotSource[] = [
  {
    id: "waite-pictorial-key",
    title: "The Pictorial Key to the Tarot",
    author: "Arthur Edward Waite",
    year: 1911,
    kind: "book",
    url: "https://en.wikisource.org/wiki/The_Pictorial_Key_to_the_Tarot",
    notes:
      "Fuente principal para los significados adivinatorios y el simbolismo del sistema Rider-Waite-Smith."
  },

  {
    id: "liz-dean-ultimate-guide",
    title: "The Ultimate Guide to Tarot Spreads",
    author: "Liz Dean",
    year: 2016,
    kind: "book",
    notes:
      "Fuente utilizada para el método de lectura Sí / No / Neutral mediante tres cartas."
  },

  {
    id: "dorothy-kelly-combinaciones",
    title: "Combinaciones con el Tarot",
    author: "Dorothy Kelly",
    year: 2006,
    kind: "book",
    notes:
      "Guía dedicada al estudio e interpretación de combinaciones de cartas. Incluye combinaciones de 2, 3, 4 y 5 cartas."
  }

  ,{
    id: "liz-dean-tarot-card-meanings",
    title: "Tarot Card Meanings",
    author: "Liz Dean",
    year: 2018,
    kind: "manual",
    url: "https://lizdean.info/wp-content/uploads/2018/01/Tarot-Card-Meanings.pdf",
    notes:
      "Guía de significados de las cartas con apartados específicos para hogar, relaciones y amor, carrera y dinero, y desarrollo espiritual."
  },
];