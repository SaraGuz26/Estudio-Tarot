import type { TarotCombination } from "../../types/combination";

export const combinations: TarotCombination[] = [
  // =====================================================
  // A. E. WAITE
  // =====================================================

  {
    id: "ten-of-wands-nine-of-swords",
    cardCount: 2,
    cardIds: ["ten-of-wands", "nine-of-swords"],
    orientations: ["upright", "upright"],
    interpretation:
      "El éxito o logro asociado al Diez de Bastos queda frustrado cuando el Nueve de Espadas aparece a continuación. En una cuestión legal, Waite señala además un resultado desfavorable.",
    sourceIds: ["waite-pictorial-key"],
    note:
      "Combinación mencionada explícitamente por A. E. Waite."
  },

  // =====================================================
  // DOROTHY KELLY — 2 CARTAS
  // =====================================================

  {
    id: "knight-of-swords-eight-of-cups",
    cardCount: 2,
    cardIds: ["knight-of-swords", "eight-of-cups"],
    orientations: ["upright", "upright"],
    interpretation:
      "Puede representar la partida inesperada de una persona joven.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Ejemplo de lectura presentado por Dorothy Kelly."
  },

  {
    id: "five-of-cups-hierophant",
    cardCount: 2,
    cardIds: ["five-of-cups", "the-hierophant"],
    orientations: ["upright", "upright"],
    interpretation:
      "Puede señalar rechazo o dificultad relacionada con una unión o matrimonio.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Ejemplo de lectura presentado por Dorothy Kelly."
  },

  {
    id: "two-of-swords-moon",
    cardCount: 2,
    cardIds: ["two-of-swords", "the-moon"],
    orientations: ["reversed", "reversed"],
    interpretation:
      "Las incertidumbres y la confusión desembocan en una situación de inestabilidad.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Ejemplo de lectura con ambas cartas invertidas."
  },

  {
    id: "nine-of-wands-king-of-pentacles",
    cardCount: 2,
    cardIds: ["nine-of-wands", "king-of-pentacles"],
    orientations: ["upright", "upright"],
    interpretation:
      "Sugiere actuar con cautela frente a una persona representada por las características del Rey de Oros.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Ejemplo de lectura presentado por Dorothy Kelly."
  },

  {
    id: "chariot-hermit",
    cardCount: 2,
    cardIds: ["the-chariot", "the-hermit"],
    orientations: ["upright", "upright"],
    interpretation:
      "Puede representar un viaje realizado en soledad o de manera independiente.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Ejemplo de lectura presentado por Dorothy Kelly."
  },

  {
    id: "ten-of-wands-seven-of-wands",
    cardCount: 2,
    cardIds: ["ten-of-wands", "seven-of-wands"],
    orientations: ["reversed", "reversed"],
    interpretation:
      "Puede señalar alivio respecto de obstáculos y dificultades relacionadas con el trabajo.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Ejemplo de lectura con ambas cartas invertidas."
  },

  {
    id: "devil-page-of-swords",
    cardCount: 2,
    cardIds: ["the-devil", "page-of-swords"],
    orientations: ["upright", "upright"],
    interpretation:
      "Puede señalar irritación o conflicto con una persona joven que presenta una actitud difícil.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Ejemplo de lectura presentado por Dorothy Kelly."
  },

  {
    id: "three-of-swords-page-of-swords",
    cardCount: 2,
    cardIds: ["three-of-swords", "page-of-swords"],
    orientations: ["reversed", "upright"],
    interpretation:
      "Puede anunciar la llegada de noticias tristes.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Ejemplo de lectura con el Tres de Espadas invertido."
  },

  // =====================================================
  // COPAS
  // =====================================================

  {
    id: "ace-of-cups-two-of-cups",
    cardCount: 2,
    cardIds: ["ace-of-cups", "two-of-cups"],
    orientations: ["upright", "upright"],
    interpretation:
      "Favorece una unión afectiva, una relación satisfactoria o un compromiso exitoso.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Combinación documentada por Dorothy Kelly."
  },

  {
    id: "ace-of-cups-two-of-cups-reversed",
    cardCount: 2,
    cardIds: ["ace-of-cups", "two-of-cups"],
    orientations: ["reversed", "reversed"],
    interpretation:
      "Se relaciona con insatisfacción, frustración y dificultades derivadas de una ruptura o separación.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Combinación documentada con ambas cartas invertidas."
  },

  {
    id: "ace-of-cups-two-of-cups-mixed",
    cardCount: 2,
    cardIds: ["ace-of-cups", "two-of-cups"],
    orientations: ["upright", "reversed"],
    interpretation:
      "Una satisfacción o unión inicialmente favorable puede transformarse en discordia o ruptura.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Combinación documentada con el Dos de Copas invertido."
  },

  {
    id: "ace-of-cups-ten-of-cups",
    cardCount: 2,
    cardIds: ["ace-of-cups", "ten-of-cups"],
    orientations: ["upright", "upright"],
    interpretation:
      "Favorece felicidad familiar, satisfacción y una relación o matrimonio floreciente.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Combinación documentada por Dorothy Kelly."
  },

  {
    id: "ace-of-cups-ten-of-cups-reversed",
    cardCount: 2,
    cardIds: ["ace-of-cups", "ten-of-cups"],
    orientations: ["upright", "reversed"],
    interpretation:
      "La felicidad o satisfacción inicial puede convertirse posteriormente en pesar o desunión.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Combinación documentada con el Diez de Copas invertido."
  },

  {
    id: "knight-of-cups-three-of-cups",
    cardCount: 2,
    cardIds: ["knight-of-cups", "three-of-cups"],
    orientations: ["upright", "upright"],
    interpretation:
      "Favorece una invitación, una celebración o una reunión social.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Combinación documentada por Dorothy Kelly."
  },

  {
    id: "knight-of-cups-three-of-cups-reversed",
    cardCount: 2,
    cardIds: ["knight-of-cups", "three-of-cups"],
    orientations: ["upright", "reversed"],
    interpretation:
      "Puede indicar una celebración o reunión que se aplaza o una propuesta que no llega a concretarse.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Combinación documentada con el Tres de Copas invertido."
  },

  {
    id: "queen-of-cups-four-of-cups",
    cardCount: 2,
    cardIds: ["queen-of-cups", "four-of-cups"],
    orientations: ["upright", "upright"],
    interpretation:
      "Puede relacionarse con pesar, separación o infelicidad dentro de una relación.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Combinación documentada por Dorothy Kelly."
  },

  {
    id: "five-of-cups-king-of-cups",
    cardCount: 2,
    cardIds: ["five-of-cups", "king-of-cups"],
    orientations: ["upright", "upright"],
    interpretation:
      "Puede señalar una separación de un hombre o el rechazo de su afecto.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Combinación documentada por Dorothy Kelly."
  },

  {
    id: "five-of-cups-king-of-cups-reversed",
    cardCount: 2,
    cardIds: ["five-of-cups", "king-of-cups"],
    orientations: ["upright", "reversed"],
    interpretation:
      "Puede advertir sobre una persona desleal o poco confiable y una pérdida relacionada con el engaño.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Combinación documentada con el Rey de Copas invertido."
  },

  // =====================================================
  // ESPADAS
  // =====================================================

  {
    id: "two-of-swords-six-of-swords-reversed",
    cardCount: 2,
    cardIds: ["two-of-swords", "six-of-swords"],
    orientations: ["reversed", "reversed"],
    interpretation:
      "La indecisión puede generar demoras, restricciones o cancelaciones provocadas por la incertidumbre.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Combinación documentada con ambas cartas invertidas."
  },

  {
    id: "king-of-swords-page-of-swords",
    cardCount: 2,
    cardIds: ["king-of-swords", "page-of-swords"],
    orientations: ["upright", "upright"],
    interpretation:
      "Puede señalar dificultades legales, oposición de una autoridad o un enfrentamiento con una persona de carácter obstinado.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Combinación documentada por Dorothy Kelly."
  },

  {
    id: "three-of-swords-nine-of-swords",
    cardCount: 2,
    cardIds: ["three-of-swords", "nine-of-swords"],
    orientations: ["upright", "upright"],
    interpretation:
      "Se relaciona con dolor, tristeza, conflicto emocional y angustia.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Combinación documentada por Dorothy Kelly."
  },

    // =====================================================
  // DOROTHY KELLY — 3 CARTAS
  // =====================================================

  {
    id: "lovers-hierophant-sun",
    cardCount: 3,
    cardIds: [
      "the-lovers",
      "the-hierophant",
      "the-sun"
    ],
    orientations: [
      "upright",
      "upright",
      "upright"
    ],
    interpretation:
      "La relación o unión recibe aprobación y se desarrolla favorablemente, con un resultado feliz.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Combinación de tres cartas documentada por Dorothy Kelly."
  },

  {
    id: "lovers-six-of-wands-four-of-wands",
    cardCount: 3,
    cardIds: [
      "the-lovers",
      "six-of-wands",
      "four-of-wands"
    ],
    orientations: [
      "upright",
      "upright",
      "upright"
    ],
    interpretation:
      "La relación alcanza el triunfo y conduce hacia felicidad, satisfacción y armonía.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Combinación de tres cartas documentada por Dorothy Kelly."
  },

  {
    id: "lovers-three-of-cups-ace-of-cups",
    cardCount: 3,
    cardIds: [
      "the-lovers",
      "three-of-cups",
      "ace-of-cups"
    ],
    orientations: [
      "upright",
      "upright",
      "upright"
    ],
    interpretation:
      "La relación celebra una unión feliz y satisfactoria; en contexto de pareja puede señalar celebración de un matrimonio.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Combinación de tres cartas documentada por Dorothy Kelly."
  },

  {
    id: "lovers-five-of-swords-devil",
    cardCount: 3,
    cardIds: [
      "the-lovers",
      "five-of-swords",
      "the-devil"
    ],
    orientations: [
      "upright",
      "upright",
      "upright"
    ],
    interpretation:
      "La relación se deteriora por conflicto, celos o dinámicas negativas que terminan favoreciendo la separación.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Combinación de tres cartas documentada por Dorothy Kelly."
  },

    // =====================================================
  // DOROTHY KELLY — 3 CARTAS
  // =====================================================

  {
    id: "lovers-hierophant-sun",
    cardCount: 3,
    cardIds: [
      "the-lovers",
      "the-hierophant",
      "the-sun"
    ],
    orientations: [
      "upright",
      "upright",
      "upright"
    ],
    interpretation:
      "La relación puede culminar en una unión exitosa; la aprobación de los involucrados aporta felicidad.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note: "Combinación documentada por Dorothy Kelly."
  },

  {
    id: "lovers-six-wands-four-wands",
    cardCount: 3,
    cardIds: [
      "the-lovers",
      "six-of-wands",
      "four-of-wands"
    ],
    orientations: [
      "upright",
      "upright",
      "upright"
    ],
    interpretation:
      "La relación alcanza el triunfo y conduce hacia satisfacción y armonía.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note: "Combinación documentada por Dorothy Kelly."
  },

  {
    id: "lovers-three-cups-ace-cups",
    cardCount: 3,
    cardIds: [
      "the-lovers",
      "three-of-cups",
      "ace-of-cups"
    ],
    orientations: [
      "upright",
      "upright",
      "upright"
    ],
    interpretation:
      "La relación se celebra con felicidad y satisfacción; puede señalar una unión o matrimonio celebrado.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note: "Combinación documentada por Dorothy Kelly."
  },

  {
    id: "lovers-five-swords-devil",
    cardCount: 3,
    cardIds: [
      "the-lovers",
      "five-of-swords",
      "the-devil"
    ],
    orientations: [
      "upright",
      "upright",
      "upright"
    ],
    interpretation:
      "La relación se deteriora por celos y termina conduciendo a una separación.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note: "Combinación documentada por Dorothy Kelly."
  },

  {
    id: "ace-cups-three-cups-reversed-four-wands",
    cardCount: 3,
    cardIds: [
      "ace-of-cups",
      "three-of-cups",
      "four-of-wands"
    ],
    orientations: [
      "upright",
      "reversed",
      "upright"
    ],
    interpretation:
      "Puede señalar una celebración matrimonial o un encuentro feliz, aunque el contexto de las cartas invertidas introduce matices sobre el desarrollo del acontecimiento.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note: "Combinación documentada por Dorothy Kelly."
  },

  {
    id: "ace-cups-seven-swords-reversed-two-wands-reversed",
    cardCount: 3,
    cardIds: [
      "ace-of-cups",
      "seven-of-swords",
      "two-of-wands"
    ],
    orientations: [
      "upright",
      "reversed",
      "reversed"
    ],
    interpretation:
      "La realización de una unión o proyecto resulta dudosa debido a adversidades y obstáculos.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note: "Combinación documentada por Dorothy Kelly."
  },

  {
    id: "ace-cups-three-pentacles-reversed-eight-pentacles",
    cardCount: 3,
    cardIds: [
      "ace-of-cups",
      "three-of-pentacles",
      "eight-of-pentacles"
    ],
    orientations: [
      "upright",
      "reversed",
      "upright"
    ],
    interpretation:
      "La combinación relaciona satisfacción y unión con el ámbito laboral; también puede señalar éxito moderado en estudios o trabajo.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note: "Combinación documentada por Dorothy Kelly."
  },

  {
    id: "queen-swords-star-reversed-nine-swords-reversed",
    cardCount: 3,
    cardIds: [
      "queen-of-swords",
      "the-star",
      "nine-of-swords"
    ],
    orientations: [
      "upright",
      "reversed",
      "reversed"
    ],
    interpretation:
      "Una separación, divorcio o viudedad aparece acompañada por circunstancias inesperadas y posteriores sentimientos de pesar.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note: "Combinación documentada por Dorothy Kelly."
  },

  {
    id: "queen-swords-two-wands-reversed-three-swords-reversed",
    cardCount: 3,
    cardIds: [
      "queen-of-swords",
      "two-of-wands",
      "three-of-swords"
    ],
    orientations: [
      "upright",
      "reversed",
      "reversed"
    ],
    interpretation:
      "Una separación o pérdida genera obstáculos, frustración y tristeza.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note: "Combinación documentada por Dorothy Kelly."
  },

  {
    id: "queen-swords-ace-cups-reversed-four-cups",
    cardCount: 3,
    cardIds: [
      "queen-of-swords",
      "ace-of-cups",
      "four-of-cups"
    ],
    orientations: [
      "upright",
      "reversed",
      "upright"
    ],
    interpretation:
      "Se observa descontento y cansancio emocional; una separación puede producir decepción y desesperación.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note: "Combinación documentada por Dorothy Kelly."
  },

  {
    id: "queen-swords-five-swords-reversed-devil",
    cardCount: 3,
    cardIds: [
      "queen-of-swords",
      "five-of-swords",
      "the-devil"
    ],
    orientations: [
      "upright",
      "reversed",
      "upright"
    ],
    interpretation:
      "Una pérdida o separación puede provocar depresión, resentimiento e ira.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note: "Combinación documentada por Dorothy Kelly."
  },

  {
    id: "queen-swords-ace-pentacles-reversed-ten-pentacles",
    cardCount: 3,
    cardIds: [
      "queen-of-swords",
      "ace-of-pentacles",
      "ten-of-pentacles"
    ],
    orientations: [
      "upright",
      "reversed",
      "upright"
    ],
    interpretation:
      "Una separación puede traer complicaciones económicas o familiares y preocupación respecto de la seguridad material.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note: "Combinación documentada por Dorothy Kelly."
  },

  {
    id: "death-eight-wands-reversed-hanged-man-reversed",
    cardCount: 3,
    cardIds: [
      "death",
      "eight-of-wands",
      "the-hanged-man"
    ],
    orientations: [
      "upright",
      "reversed",
      "reversed"
    ],
    interpretation:
      "Una situación que permanecía inmóvil comienza a avanzar; el final de las demoras permite recuperar el progreso.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note: "Combinación documentada por Dorothy Kelly."
  },

  {
    id: "death-eight-cups-reversed-three-cups-reversed",
    cardCount: 3,
    cardIds: [
      "death",
      "eight-of-cups",
      "three-of-cups"
    ],
    orientations: [
      "upright",
      "reversed",
      "reversed"
    ],
    interpretation:
      "Marca el final de reuniones, fiestas o de una etapa de acercamiento social.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note: "Combinación documentada por Dorothy Kelly."
  },

  {
    id: "death-two-swords-reversed-ten-cups-reversed",
    cardCount: 3,
    cardIds: [
      "death",
      "two-of-swords",
      "ten-of-cups"
    ],
    orientations: [
      "upright",
      "reversed",
      "reversed"
    ],
    interpretation:
      "Una decisión equivocada puede conducir a una pérdida y posteriores lamentaciones; también puede indicar el fin de la indecisión y de una situación infeliz.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note: "Combinación documentada por Dorothy Kelly."
  },

  {
    id: "death-nine-pentacles-reversed-ace-pentacles-reversed",
    cardCount: 3,
    cardIds: [
      "death",
      "nine-of-pentacles",
      "ace-of-pentacles"
    ],
    orientations: [
      "upright",
      "reversed",
      "reversed"
    ],
    interpretation:
      "Las dificultades y la inseguridad material llegan a su término, aunque la combinación también puede señalar pérdidas relacionadas con insuficiencia económica o deudas.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note: "Combinación documentada por Dorothy Kelly."
  },

  // =====================================================
  // COMBINACIONES DE 4 CARTAS
  // =====================================================

  {
    id: "king-of-wands-tower-three-of-wands-seven-of-pentacles",
    cardCount: 4,
    cardIds: [
      "king-of-wands",
      "the-tower",
      "three-of-wands",
      "seven-of-pentacles"
    ],
    orientations: [
      "upright",
      "upright",
      "upright",
      "upright"
    ],
    interpretation:
      "La secuencia describe a un hombre angustiado ante una caída o crisis relacionada con una actividad empresarial.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Ejemplo de lectura de cuatro cartas documentado por Dorothy Kelly."
  },

  {
    id: "page-of-wands-eight-of-pentacles-king-of-swords-six-of-wands",
    cardCount: 4,
    cardIds: [
      "page-of-wands",
      "eight-of-pentacles",
      "king-of-swords",
      "six-of-wands"
    ],
    orientations: [
      "upright",
      "upright",
      "upright",
      "upright"
    ],
    interpretation:
      "Puede señalar que el aprendizaje o formación de una persona joven resulta provechoso dentro de una entidad oficial.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Ejemplo de lectura de cuatro cartas documentado por Dorothy Kelly."
  },

  {
    id: "four-of-cups-three-of-swords-lovers-king-of-cups",
    cardCount: 4,
    cardIds: [
      "four-of-cups",
      "three-of-swords",
      "the-lovers",
      "king-of-cups"
    ],
    orientations: [
      "upright",
      "reversed",
      "upright",
      "reversed"
    ],
    interpretation:
      "La secuencia se relaciona con cansancio y confusión en torno a una relación con una persona infiel.",
    sourceIds: ["dorothy-kelly-combinaciones"],
    note:
      "Ejemplo de lectura de cuatro cartas documentado por Dorothy Kelly."
  }
];