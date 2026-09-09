import type { ReadingGuide } from "../../types/readingGuide";

export const readingGuides: ReadingGuide[] = [
  {
    id: "love-and-relationships",
    title: "Amor y relaciones",
    description:
      "Claves para interpretar las cartas en consultas sobre amor y vínculos.",
    sourceIds: ["liz-dean-ultimate-guide"],
    sections: [
      {
        title: "La pregunta",
        content:
          "El significado depende de lo que estés preguntando y de la posición de la carta."
      },
      {
        title: "Los palos",
        items: [
          "Copas: sentimientos, emociones y vínculos.",
          "Bastos: pasión, deseo y acción.",
          "Espadas: pensamientos, comunicación y conflictos.",
          "Oros: estabilidad y aspectos prácticos."
        ]
      },
      {
        title: "Arcanos Mayores",
        content:
          "Pueden señalar temas importantes o etapas significativas."
      },
      {
        title: "Cartas invertidas",
        content:
          "No son necesariamente negativas. Pueden mostrar bloqueos, demoras o una energía diferente."
      },
      {
        title: "La combinación",
        content:
          "Leé las cartas en conjunto. Una puede modificar o complementar a otra."
      }
    ]
  },

  {
    id: "money-and-career",
    title: "Dinero y trabajo",
    description:
      "Claves para interpretar las cartas en consultas sobre trabajo, dinero y proyectos.",
    sourceIds: ["liz-dean-ultimate-guide"],
    sections: [
      {
        title: "La pregunta",
        content:
          "Definí si consultás por trabajo, dinero, un proyecto o una decisión."
      },
      {
        title: "Los palos",
        items: [
          "Oros: dinero, trabajo y estabilidad.",
          "Bastos: proyectos, iniciativa y ambición.",
          "Espadas: decisiones, estrategia y conflictos.",
          "Copas: satisfacción y motivación."
        ]
      },
      {
        title: "Arcanos Mayores",
        content:
          "Pueden señalar cambios o etapas importantes."
      },
      {
        title: "Cartas invertidas",
        content:
          "Pueden mostrar bloqueos, retrasos o dificultades, pero no significan automáticamente algo malo."
      },
      {
        title: "La combinación",
        content:
          "Mirá qué cartas predominan y cómo se relacionan entre sí."
      }
    ]
  }
];