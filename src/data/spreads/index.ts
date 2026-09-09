import type { TarotSpread } from "../../types/spread";

export const spreads: TarotSpread[] = [
  {
    id: "one-card",
    name: "Una carta",
    description:
      "Una lectura de una sola carta para obtener una reflexión, mensaje o consejo sobre la situación planteada.",
    cardCount: 1,
    category: ["general", "daily", "guidance"],
    positions: [
      {
        number: 1,
        name: "Carta",
        description:
          "Representa el mensaje principal, aquello que necesitas saber o el consejo que puede ofrecer la carta."
      }
    ],
    layout: "single",
    sourceIds: ["liz-dean-ultimate-guide"],
    status: "documented"
  },

  {
    id: "past-present-future",
    name: "Pasado · Presente · Futuro",
    description:
      "Una tirada de tres cartas que permite observar acontecimientos del pasado, la situación presente y su posible evolución futura.",
    cardCount: 3,
    category: ["general", "timeline", "guidance"],
    positions: [
      {
        number: 1,
        name: "Pasado",
        description:
          "Representa acontecimientos o influencias del pasado relacionados con la situación."
      },
      {
        number: 2,
        name: "Presente",
        description:
          "Representa la situación actual y las circunstancias que están actuando en este momento."
      },
      {
        number: 3,
        name: "Futuro",
        description:
          "Representa la posible evolución o dirección futura de la situación."
      }
    ],
    layout: "three-linear",
    sourceIds: ["liz-dean-ultimate-guide"],
    status: "documented"
  },

  {
    id: "what-shall-i-do",
    name: "¿Qué debo hacer?",
    description:
      "Una tirada de tres cartas para obtener orientación sobre qué evitar, comprender la situación y qué camino aceptar o seguir.",
    cardCount: 3,
    category: ["guidance", "decision", "three-card"],
    positions: [
      {
        number: 1,
        name: "Qué decir que no",
        description:
          "Representa aquello a lo que conviene decir que no o que debe evitarse en relación con la situación."
      },
      {
        number: 2,
        name: "La situación",
        description:
          "Representa la situación central que se está consultando."
      },
      {
        number: 3,
        name: "Qué decir que sí",
        description:
          "Representa aquello a lo que conviene decir que sí o que puede aceptarse como camino."
      }
    ],
    layout: "three-linear",
    sourceIds: ["liz-dean-ultimate-guide"],
    status: "documented"
  },

  {
    id: "star",
    name: "La Estrella",
    description:
      "Una tirada de siete cartas orientada a explorar si las esperanzas y los sueños pueden llegar a materializarse.",
    cardCount: 7,
    category: ["general", "guidance", "seven-card"],
    positions: [
      {
        number: 1,
        name: "El presente",
        description:
          "Representa la situación presente relacionada con la consulta."
      },
      {
        number: 2,
        name: "Emociones",
        description:
          "Representa el estado emocional y los sentimientos relacionados con la situación."
      },
      {
        number: 3,
        name: "Creencias",
        description:
          "Representa las creencias, ideas o convicciones que influyen en la situación."
      },
      {
        number: 4,
        name: "Corazón del asunto",
        description:
          "Representa el corazón de la cuestión y actúa como Significador de la lectura."
      },
      {
        number: 5,
        name: "El inconsciente",
        description:
          "Representa aquello que está oculto y que puede salir a la luz."
      },
      {
        number: 6,
        name: "Esperanzas y sueños",
        description:
          "Representa las esperanzas, deseos y sueños relacionados con la situación."
      },
      {
        number: 7,
        name: "Resultado",
        description:
          "Representa el posible resultado o evolución de la situación."
      }
    ],
    layout: "star",
    sourceIds: ["liz-dean-ultimate-guide"],
    status: "documented"
  },

  {
    id: "horseshoe",
    name: "La Herradura",
    description:
      "Una tirada clásica de decisión que permite observar cuestiones ocultas y futuras influencias para comprender mejor una situación.",
    cardCount: 7,
    category: ["decision", "guidance", "seven-card"],
    positions: [
      {
        number: 1,
        name: "El pasado",
        description:
          "Representa acontecimientos o influencias del pasado relacionados con la situación."
      },
      {
        number: 2,
        name: "El presente",
        description:
          "Representa la situación actual."
      },
      {
        number: 3,
        name: "Condiciones futuras",
        description:
          "Representa las condiciones o circunstancias que pueden desarrollarse en el futuro."
      },
      {
        number: 4,
        name: "El mejor camino a seguir",
        description:
          "Representa el camino o enfoque que puede resultar más conveniente seguir."
      },
      {
        number: 5,
        name: "Actitudes a tu alrededor",
        description:
          "Representa las actitudes, opiniones o influencias de las personas y circunstancias que te rodean."
      },
      {
        number: 6,
        name: "Obstáculos",
        description:
          "Representa las dificultades o factores que pueden bloquear o complicar el camino."
      },
      {
        number: 7,
        name: "Resultado",
        description:
          "Representa el posible resultado de la situación."
      }
    ],
    layout: "horseshoe",
    sourceIds: ["liz-dean-ultimate-guide"],
    status: "documented"
  },

  {
    id: "celtic-cross",
    name: "Cruz Celta",
    description:
      "Una tirada de diez cartas que ofrece una visión amplia de las circunstancias, influencias, entorno y posible evolución de una situación.",
    cardCount: 10,
    category: ["general", "deep-reading", "guidance"],
    positions: [
      {
        number: 1,
        name: "Circunstancias actuales",
        description:
          "Representa la situación actual de la consulta."
      },
      {
        number: 2,
        name: "Lo que cruza o complementa",
        description:
          "Representa aquello que cruza o complementa directamente la situación."
      },
      {
        number: 3,
        name: "Lo mejor que se puede esperar",
        description:
          "Representa aquello que puede esperarse favorablemente en el momento actual."
      },
      {
        number: 4,
        name: "Factores ocultos",
        description:
          "Representa factores o influencias ocultas alrededor de la situación."
      },
      {
        number: 5,
        name: "Acontecimientos del pasado",
        description:
          "Representa acontecimientos pasados que continúan influyendo en el presente."
      },
      {
        number: 6,
        name: "Próximo movimiento",
        description:
          "Representa el próximo movimiento o evolución de la situación."
      },
      {
        number: 7,
        name: "Cómo te ves / qué puedes hacer",
        description:
          "Representa cómo te ves frente a la situación y qué puedes hacer al respecto."
      },
      {
        number: 8,
        name: "Entorno",
        description:
          "Representa el entorno y las influencias externas que rodean la situación."
      },
      {
        number: 9,
        name: "Esperanzas y temores",
        description:
          "Representa las esperanzas, expectativas, preocupaciones y temores relacionados con la situación."
      },
      {
        number: 10,
        name: "Resultado",
        description:
          "Representa el resultado o evolución final de la situación."
      }
    ],
    layout: "celtic-cross",
    sourceIds: ["liz-dean-ultimate-guide"],
    status: "documented"
  },

  {
    id: "astrological-year",
    name: "Año astrológico",
    description:
      "Una lectura del año que utiliza una carta para cada mes y un Significador central que representa el tema general del período.",
    cardCount: 12,
    category: ["year-ahead", "astrology", "twelve-card"],
    positions: [
      {
        number: 1,
        name: "Mes 1",
        description:
          "Representa el primer mes del período consultado."
      },
      {
        number: 2,
        name: "Mes 2",
        description:
          "Representa el segundo mes del período consultado."
      },
      {
        number: 3,
        name: "Mes 3",
        description:
          "Representa el tercer mes del período consultado."
      },
      {
        number: 4,
        name: "Mes 4",
        description:
          "Representa el cuarto mes del período consultado."
      },
      {
        number: 5,
        name: "Mes 5",
        description:
          "Representa el quinto mes del período consultado."
      },
      {
        number: 6,
        name: "Mes 6",
        description:
          "Representa el sexto mes del período consultado."
      },
      {
        number: 7,
        name: "Mes 7",
        description:
          "Representa el séptimo mes del período consultado."
      },
      {
        number: 8,
        name: "Mes 8",
        description:
          "Representa el octavo mes del período consultado."
      },
      {
        number: 9,
        name: "Mes 9",
        description:
          "Representa el noveno mes del período consultado."
      },
      {
        number: 10,
        name: "Mes 10",
        description:
          "Representa el décimo mes del período consultado."
      },
      {
        number: 11,
        name: "Mes 11",
        description:
          "Representa el undécimo mes del período consultado."
      },
      {
        number: 12,
        name: "Mes 12",
        description:
          "Representa el duodécimo mes del período consultado."
      }
    ],
    layout: "astrological-year",
    sourceIds: ["liz-dean-ultimate-guide"],
    status: "documented"
  },

  {
    id: "chakra",
    name: "Los chakras",
    description:
      "Una tirada de siete cartas en la que cada carta representa uno de los siete chakras principales y permite explorar diferentes aspectos del cuerpo, la mente y el espíritu.",
    cardCount: 7,
    category: ["chakra", "self-development", "seven-card"],
    positions: [
      {
        number: 1,
        name: "Chakra raíz",
        description:
          "Representa el arraigo y la seguridad."
      },
      {
        number: 2,
        name: "Chakra sacro",
        description:
          "Representa la creatividad y la fertilidad."
      },
      {
        number: 3,
        name: "Plexo solar",
        description:
          "Representa la energía y el instinto."
      },
      {
        number: 4,
        name: "Chakra corazón",
        description:
          "Representa el amor."
      },
      {
        number: 5,
        name: "Chakra garganta",
        description:
          "Representa la comunicación."
      },
      {
        number: 6,
        name: "Tercer ojo",
        description:
          "Representa la percepción, comprensión e intuición."
      },
      {
        number: 7,
        name: "Chakra corona",
        description:
          "Representa la conexión con el espíritu."
      }
    ],
    layout: "chakra",
    sourceIds: ["liz-dean-ultimate-guide"],
    status: "documented"
  }
];