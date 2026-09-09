import type {
  TarotCard,
  ContextualMeaning,
} from "../../types/card";

const sourceIds = [
  "waite-pictorial-key",
  "liz-dean-tarot-card-meanings",
];

const contextualMeanings: Record<string, ContextualMeaning> = {
  // =====================================================
  // COPAS
  // =====================================================

  "ace-of-cups": {
    home: "Nuevo comienzo emocional en el hogar.",
    love: "Enamoramiento y apertura emocional.",
    careerMoney: "Proyecto que entusiasma y satisface.",
    spiritual: "Apertura emocional e intuición."
  },

  "two-of-cups": {
    home: "Armonía y entendimiento en casa.",
    love: "Atracción mutua y vínculo significativo.",
    careerMoney: "Acuerdo o colaboración beneficiosa.",
    spiritual: "Conexión y reconocimiento mutuo."
  },

  "three-of-cups": {
    home: "Reuniones y celebraciones familiares.",
    love: "Alegría, encuentros y vida social.",
    careerMoney: "Buen ambiente y celebración de logros.",
    spiritual: "Comunidad, amistad y conexión."
  },

  "four-of-cups": {
    home: "Aburrimiento o falta de entusiasmo.",
    love: "Descontento o apatía afectiva.",
    careerMoney: "Falta de motivación laboral.",
    spiritual: "Mirar hacia dentro y reconocer lo ignorado."
  },

  "five-of-cups": {
    home: "Tristeza o decepción familiar.",
    love: "Pérdida o decepción afectiva.",
    careerMoney: "Decepción laboral o por una oportunidad.",
    spiritual: "Aceptar la pérdida y valorar lo que queda."
  },

  "six-of-cups": {
    home: "Recuerdos, nostalgia o reencuentros.",
    love: "Reencuentro o sentimientos del pasado.",
    careerMoney: "Contacto con experiencias laborales anteriores.",
    spiritual: "Memoria y conexión con el pasado."
  },

  "seven-of-cups": {
    home: "Muchas opciones, pero poca claridad.",
    love: "Fantasías u opciones afectivas.",
    careerMoney: "Varias posibilidades; esperar información.",
    spiritual: "Distinguir intuición de fantasía."
  },

  "eight-of-cups": {
    home: "Alejarse de una situación que ya no satisface.",
    love: "Dejar atrás una situación afectiva.",
    careerMoney: "Abandonar un trabajo o proyecto insatisfactorio.",
    spiritual: "Buscar algo con mayor sentido."
  },

  "nine-of-cups": {
    home: "Bienestar y satisfacción en casa.",
    love: "Satisfacción afectiva y deseo cumplido.",
    careerMoney: "Éxito y satisfacción con los resultados.",
    spiritual: "Gratitud por lo conseguido."
  },

  "ten-of-cups": {
    home: "Felicidad y armonía familiar.",
    love: "Relación feliz y estable.",
    careerMoney: "Bienestar con lo conseguido.",
    spiritual: "Paz, conexión y plenitud."
  },

  "page-of-cups": {
    home: "Compartir con jóvenes o iniciar algo familiar.",
    love: "Mensaje o interés romántico.",
    careerMoney: "Idea o propuesta que entusiasma.",
    spiritual: "Sensibilidad, intuición e imaginación."
  },

  "knight-of-cups": {
    home: "Invitación, visita o movimiento afectivo.",
    love: "Propuesta o acercamiento romántico.",
    careerMoney: "Oferta atractiva; comprobar su autenticidad.",
    spiritual: "Búsqueda guiada por ideales e intuición."
  },

  "queen-of-cups": {
    home: "Cuidado y comprensión en casa.",
    love: "Amor, empatía y sensibilidad.",
    careerMoney: "Creatividad e intuición en el trabajo.",
    spiritual: "Intuición y conexión emocional."
  },

  "king-of-cups": {
    home: "Comprensión y protección familiar.",
    love: "Madurez y estabilidad emocional.",
    careerMoney: "Equilibrio emocional para manejar situaciones.",
    spiritual: "Dominio y comprensión de las emociones."
  },

  // =====================================================
  // BASTOS
  // =====================================================

  "ace-of-wands": {
    home: "Nuevo proyecto o cambio con energía.",
    love: "Pasión, atracción y nuevo comienzo.",
    careerMoney: "Nueva oportunidad o proyecto con potencial.",
    spiritual: "Inspiración y nueva motivación."
  },

  "two-of-wands": {
    home: "Planificar un cambio o nueva etapa.",
    love: "Evaluar el futuro de la relación.",
    careerMoney: "Planificar y decidir el próximo paso.",
    spiritual: "Definir una nueva dirección."
  },

  "three-of-wands": {
    home: "Expansión, viajes o nuevas experiencias.",
    love: "Relación que empieza a desarrollarse.",
    careerMoney: "Expansión y resultados que comienzan a llegar.",
    spiritual: "Ampliar horizontes."
  },

  "four-of-wands": {
    home: "Hogar estable y celebración.",
    love: "Alegría y estabilidad en la relación.",
    careerMoney: "Logro y ambiente favorable.",
    spiritual: "Estabilidad y libertad."
  },

  "five-of-wands": {
    home: "Diferencias y necesidad de límites.",
    love: "Competencia o discusiones.",
    careerMoney: "Competencia y lucha por una oportunidad.",
    spiritual: "Aprender mediante el desafío."
  },

  "six-of-wands": {
    home: "Reconocimiento y éxito en casa.",
    love: "Avance y reconocimiento afectivo.",
    careerMoney: "Éxito, victoria y reconocimiento.",
    spiritual: "Confianza tras superar una dificultad."
  },

  "seven-of-wands": {
    home: "Defender la estabilidad y los límites.",
    love: "Defender la relación o la propia posición.",
    careerMoney: "Mantenerse firme ante la competencia.",
    spiritual: "Defender las propias creencias."
  },

  "eight-of-wands": {
    home: "Noticias, viajes o cambios rápidos.",
    love: "Mensajes y avance de la relación.",
    careerMoney: "Noticias y proyectos que avanzan rápido.",
    spiritual: "Inspiración y evolución rápida."
  },

  "nine-of-wands": {
    home: "Proteger el espacio propio.",
    love: "Cautela tras experiencias difíciles.",
    careerMoney: "Esfuerzo acumulado; cuidar la energía.",
    spiritual: "Perseverar pese al cansancio."
  },

  "ten-of-wands": {
    home: "Exceso de responsabilidades en casa.",
    love: "Relación cargada de responsabilidades.",
    careerMoney: "Sobrecarga laboral.",
    spiritual: "Soltar cargas innecesarias."
  },

  "page-of-wands": {
    home: "Noticias o nuevas actividades en casa.",
    love: "Entusiasmo y nueva experiencia afectiva.",
    careerMoney: "Oportunidad o noticia sobre un proyecto.",
    spiritual: "Curiosidad y entusiasmo por aprender."
  },

  "knight-of-wands": {
    home: "Movimiento, viaje o cambio rápido.",
    love: "Pasión intensa y acercamiento impulsivo.",
    careerMoney: "Acción rápida y nuevos proyectos.",
    spiritual: "Entusiasmo y deseo de experimentar."
  },

  "queen-of-wands": {
    home: "Energía, independencia y mejora del entorno.",
    love: "Confianza, magnetismo y pasión.",
    careerMoney: "Creatividad, liderazgo e iniciativa.",
    spiritual: "Confianza, creatividad e intuición."
  },

  "king-of-wands": {
    home: "Liderazgo y organización en casa.",
    love: "Pasión, seguridad y carácter fuerte.",
    careerMoney: "Liderazgo y visión para dirigir proyectos.",
    spiritual: "Voluntad para convertir ideas en acción."
  },

  // =====================================================
  // ESPADAS
  // =====================================================

  "ace-of-swords": {
    home: "Decisión clara para resolver algo en casa.",
    love: "Verdad y conversación necesaria.",
    careerMoney: "Victoria, estrategia y decisión favorable.",
    spiritual: "Claridad mental y comprensión."
  },

  "two-of-swords": {
    home: "Dificultad para decidir en casa.",
    love: "Indecisión emocional.",
    careerMoney: "Decisión aplazada; falta información.",
    spiritual: "Bloqueo mental ante una decisión."
  },

  "three-of-swords": {
    home: "Dolor o conflicto familiar.",
    love: "Ruptura, pérdida o decepción.",
    careerMoney: "Decepción o pérdida laboral.",
    spiritual: "Atravesar y comprender el dolor."
  },

  "four-of-swords": {
    home: "Descanso y tranquilidad.",
    love: "Pausa o necesidad de distancia.",
    careerMoney: "Actividad temporalmente detenida.",
    spiritual: "Retiro y recuperación interior."
  },

  "five-of-swords": {
    home: "Conflicto y tensión.",
    love: "Enfrentamiento y desgaste.",
    careerMoney: "Competencia agresiva o conflicto costoso.",
    spiritual: "Saber cuándo abandonar una lucha."
  },

  "six-of-swords": {
    home: "Alejarse de una dificultad.",
    love: "Avanzar hacia una etapa más tranquila.",
    careerMoney: "Cambio o traslado hacia mayor estabilidad.",
    spiritual: "Transición y alejamiento de una etapa difícil."
  },

  "seven-of-swords": {
    home: "Proteger lo personal y cuidar la confianza.",
    love: "Evasión o falta de transparencia.",
    careerMoney: "Estrategia y cautela.",
    spiritual: "Observar lo oculto y cuestionar apariencias."
  },

  "eight-of-swords": {
    home: "Sensación de estar atrapado.",
    love: "Miedo o bloqueo en la relación.",
    careerMoney: "Restricciones y sensación de no tener opciones.",
    spiritual: "Limitaciones mentales que bloquean."
  },

  "nine-of-swords": {
    home: "Preocupaciones que afectan el hogar.",
    love: "Ansiedad y pensamientos repetitivos.",
    careerMoney: "Estrés y presión laboral.",
    spiritual: "Afrontar pensamientos que generan sufrimiento."
  },

  "ten-of-swords": {
    home: "Final definitivo de una situación difícil.",
    love: "Final doloroso de una etapa.",
    careerMoney: "Final de un trabajo o proyecto.",
    spiritual: "Cierre que permite empezar de nuevo."
  },

  "page-of-swords": {
    home: "Noticias y conversaciones importantes.",
    love: "Curiosidad y comunicación que necesita claridad.",
    careerMoney: "Noticias, documentos o contratos.",
    spiritual: "Curiosidad y búsqueda de información."
  },

  "knight-of-swords": {
    home: "Cambio o conflicto rápido.",
    love: "Confrontación o avance impulsivo.",
    careerMoney: "Acción rápida y determinación.",
    spiritual: "Claridad y acción; evitar precipitarse."
  },

  "queen-of-swords": {
    home: "Independencia y límites claros.",
    love: "Honestidad e independencia.",
    careerMoney: "Análisis y decisiones difíciles.",
    spiritual: "Discernimiento y objetividad."
  },

  "king-of-swords": {
    home: "Orden y decisiones racionales.",
    love: "Claridad y límites.",
    careerMoney: "Autoridad, estrategia y decisiones.",
    spiritual: "Disciplina mental y búsqueda de la verdad."
  },

  // =====================================================
  // OROS
  // =====================================================

  "ace-of-pentacles": {
    home: "Nueva oportunidad de estabilidad.",
    love: "Comienzo estable y duradero.",
    careerMoney: "Nueva oportunidad laboral o económica.",
    spiritual: "Construir una base estable."
  },

  "two-of-pentacles": {
    home: "Adaptación y equilibrio de responsabilidades.",
    love: "Equilibrar relación y obligaciones.",
    careerMoney: "Organizar dinero y responsabilidades.",
    spiritual: "Mantener el equilibrio ante los cambios."
  },

  "three-of-pentacles": {
    home: "Construcción o mejora del hogar.",
    love: "Relación basada en cooperación.",
    careerMoney: "Trabajo, aprendizaje y colaboración.",
    spiritual: "Crecer mediante la práctica."
  },

  "four-of-pentacles": {
    home: "Seguridad y protección de recursos.",
    love: "Apego o necesidad de seguridad.",
    careerMoney: "Conservar dinero y buscar estabilidad.",
    spiritual: "Equilibrar seguridad y apertura."
  },

  "five-of-pentacles": {
    home: "Dificultades materiales o sensación de exclusión.",
    love: "Rechazo, abandono o falta de apoyo.",
    careerMoney: "Problemas económicos o laborales.",
    spiritual: "Reconocer el apoyo disponible."
  },

  "six-of-pentacles": {
    home: "Ayuda y generosidad.",
    love: "Dar y recibir apoyo en equilibrio.",
    careerMoney: "Ayuda económica o intercambio de recursos.",
    spiritual: "Generosidad y reciprocidad."
  },

  "seven-of-pentacles": {
    home: "Paciencia con proyectos que aún crecen.",
    love: "Evaluar lo construido y tener paciencia.",
    careerMoney: "Esfuerzos con resultados a largo plazo.",
    spiritual: "Reconocer el crecimiento y perseverar."
  },

  "eight-of-pentacles": {
    home: "Trabajo constante para mejorar el hogar.",
    love: "Construir la relación con dedicación.",
    careerMoney: "Trabajo, aprendizaje y perfeccionamiento.",
    spiritual: "Disciplina y práctica."
  },

  "nine-of-pentacles": {
    home: "Seguridad y disfrute del propio espacio.",
    love: "Independencia y bienestar.",
    careerMoney: "Éxito y seguridad financiera.",
    spiritual: "Autonomía y valoración de los logros."
  },

  "ten-of-pentacles": {
    home: "Estabilidad familiar y patrimonio.",
    love: "Relación estable y proyecto familiar.",
    careerMoney: "Prosperidad y seguridad económica.",
    spiritual: "Familia, legado y continuidad."
  },

  "page-of-pentacles": {
    home: "Nueva oportunidad práctica.",
    love: "Interés estable que crece lentamente.",
    careerMoney: "Empleo, noticia económica o aprendizaje.",
    spiritual: "Convertir conocimiento en habilidad."
  },

  "knight-of-pentacles": {
    home: "Estabilidad y constancia en casa.",
    love: "Relación estable que avanza lentamente.",
    careerMoney: "Trabajo constante y progreso sostenido.",
    spiritual: "Disciplina y paciencia."
  },

  "queen-of-pentacles": {
    home: "Seguridad y buena administración del hogar.",
    love: "Relación estable y afectuosa.",
    careerMoney: "Éxito y buena gestión de recursos.",
    spiritual: "Estabilidad y conexión con lo cotidiano."
  },

  "king-of-pentacles": {
    home: "Estabilidad y seguridad material.",
    love: "Compromiso y apoyo práctico.",
    careerMoney: "Éxito material y estabilidad económica.",
    spiritual: "Seguridad con responsabilidad y generosidad."
  }
};

function cardImage(suit: string, file: string) {
  return new URL(`./${suit}/${file}`, import.meta.url).href;
}

const minorArcanaBase: TarotCard[] = [
  // =====================================================
  // COPAS
  // =====================================================

  {
    id: "ace-of-cups",
    name: "As de Copas",
    number: 1,
    arcana: "minor",
    suit: "cups",
    image: cardImage("cups", "ace-of-cups.png"),
    upright: {
      keywords: ["amor", "felicidad", "inicio emocional"],
      meaning:
        "Inicio de una experiencia emocional positiva, amor, alegría y plenitud."
    },
    reversed: {
      keywords: ["bloqueo emocional", "vacío", "inestabilidad"],
      meaning:
        "Dificultad para expresar o recibir emociones; puede señalar un comienzo emocional frustrado."
    },
    symbolism:
      "La copa representa el mundo emocional y la capacidad de recibir y contener sentimientos.",
    yesNo: [],
    sourceIds
  },

  {
    id: "two-of-cups",
    name: "Dos de Copas",
    number: 2,
    arcana: "minor",
    suit: "cups",
    image: cardImage("cups", "2-of-cups.png"),
    upright: {
      keywords: ["unión", "amor", "acuerdo"],
      meaning:
        "Unión, atracción, vínculo afectivo y acuerdo entre dos personas."
    },
    reversed: {
      keywords: ["separación", "desacuerdo", "tensión"],
      meaning:
        "Desequilibrio en una relación, separación o dificultad para llegar a un acuerdo."
    },
    symbolism:
      "Dos personas intercambian copas, representando reciprocidad, unión y vínculo."
    ,
    yesNo: [],
    sourceIds
  },

  {
    id: "three-of-cups",
    name: "Tres de Copas",
    number: 3,
    arcana: "minor",
    suit: "cups",
    image: cardImage("cups", "3-of-cups.png"),
    upright: {
      keywords: ["celebración", "amistad", "alegría"],
      meaning:
        "Celebración, alegría, compañía y buenos momentos compartidos."
    },
    reversed: {
      keywords: ["exceso", "dispersión", "conflicto"],
      meaning:
        "Excesos, dispersión o dificultades dentro del entorno social."
    },
    symbolism:
      "Tres figuras celebran juntas, destacando comunidad, amistad y alegría compartida.",
    yesNo: [],
    sourceIds
  },

  {
    id: "four-of-cups",
    name: "Cuatro de Copas",
    number: 4,
    arcana: "minor",
    suit: "cups",
    image: cardImage("cups", "4-of-cups.png"),
    upright: {
      keywords: ["apatía", "contemplación", "descontento"],
      meaning:
        "Insatisfacción, contemplación y dificultad para reconocer una oportunidad."
    },
    reversed: {
      keywords: ["nueva motivación", "aceptación", "movimiento"],
      meaning:
        "Comienza a superarse la apatía y aparece una mayor disposición a actuar."
    },
    symbolism:
      "La figura sentada y las copas representan introspección, apatía y una oportunidad que puede pasar desapercibida.",
    yesNo: [],
    sourceIds
  },

  {
    id: "five-of-cups",
    name: "Cinco de Copas",
    number: 5,
    arcana: "minor",
    suit: "cups",
    image: cardImage("cups", "5-of-cups.png"),
    upright: {
      keywords: ["pérdida", "dolor", "arrepentimiento"],
      meaning:
        "Pérdida, decepción, tristeza y atención centrada en aquello que se ha perdido."
    },
    reversed: {
      keywords: ["recuperación", "aceptación", "superación"],
      meaning:
        "Comienza la recuperación después de una pérdida o decepción."
    },
    symbolism:
      "Las copas derramadas representan pérdida y pesar, mientras que las restantes señalan que no todo está perdido.",
    yesNo: [],
    sourceIds
  },

  {
    id: "six-of-cups",
    name: "Seis de Copas",
    number: 6,
    arcana: "minor",
    suit: "cups",
    image: cardImage("cups", "6-of-cups.png"),
    upright: {
      keywords: ["pasado", "recuerdos", "nostalgia"],
      meaning:
        "Recuerdos, pasado, afecto y retorno a experiencias conocidas."
    },
    reversed: {
      keywords: ["pasado superado", "inmadurez", "idealización"],
      meaning:
        "Dificultad para dejar atrás el pasado o tendencia a idealizarlo."
    },
    symbolism:
      "Las flores y los niños evocan inocencia, memoria y experiencias del pasado.",
    yesNo: [],
    sourceIds
  },

  {
    id: "seven-of-cups",
    name: "Siete de Copas",
    number: 7,
    arcana: "minor",
    suit: "cups",
    image: cardImage("cups", "7-of-cups.png"),
    upright: {
      keywords: ["opciones", "fantasía", "elección"],
      meaning:
        "Muchas posibilidades, imaginación, deseos y dificultad para distinguir lo real de lo ilusorio."
    },
    reversed: {
      keywords: ["claridad", "decisión", "realismo"],
      meaning:
        "Reducción de la confusión y necesidad de elegir con mayor realismo."
    },
    symbolism:
      "Las siete copas presentan distintas posibilidades y tentaciones, representando imaginación y elección.",
    yesNo: [],
    sourceIds
  },

  {
    id: "eight-of-cups",
    name: "Ocho de Copas",
    number: 8,
    arcana: "minor",
    suit: "cups",
    image: cardImage("cups", "8-of-cups.png"),
    upright: {
      keywords: ["abandono", "búsqueda", "cambio"],
      meaning:
        "Abandonar una situación conocida para buscar algo diferente o más significativo."
    },
    reversed: {
      keywords: ["estancamiento", "retorno", "dificultad para dejar ir"],
      meaning:
        "Dificultad para abandonar una situación o tendencia a regresar a ella."
    },
    symbolism:
      "La figura alejándose de las copas representa abandono, búsqueda y transición.",
    yesNo: [],
    sourceIds
  },

  {
    id: "nine-of-cups",
    name: "Nueve de Copas",
    number: 9,
    arcana: "minor",
    suit: "cups",
    image: cardImage("cups", "9-of-cups.png"),
    upright: {
      keywords: ["satisfacción", "deseo cumplido", "placer"],
      meaning:
        "Satisfacción, bienestar, placer y realización de un deseo."
    },
    reversed: {
      keywords: ["insatisfacción", "exceso", "deseo frustrado"],
      meaning:
        "Satisfacción incompleta, excesos o deseos que no producen la felicidad esperada."
    },
    symbolism:
      "La figura rodeada de copas expresa satisfacción y abundancia emocional.",
    yesNo: [],
    sourceIds
  },

  {
    id: "ten-of-cups",
    name: "Diez de Copas",
    number: 10,
    arcana: "minor",
    suit: "cups",
    image: cardImage("cups", "10-of-cups.png"),
    upright: {
      keywords: ["familia", "felicidad", "armonía"],
      meaning:
        "Felicidad familiar, armonía, afecto y bienestar compartido."
    },
    reversed: {
      keywords: ["conflicto familiar", "desunión", "inestabilidad"],
      meaning:
        "Tensiones familiares o pérdida de armonía en el entorno afectivo."
    },
    symbolism:
      "El arco de copas y la familia representan plenitud afectiva, hogar y armonía.",
    yesNo: [],
    sourceIds
  },

  {
    id: "page-of-cups",
    name: "Sota de Copas",
    arcana: "minor",
    suit: "cups",
    image: cardImage("cups", "page-of-cups.png"),
    upright: {
      keywords: ["sensibilidad", "mensaje", "intuición"],
      meaning:
        "Persona sensible, mensaje afectivo, imaginación y apertura emocional."
    },
    reversed: {
      keywords: ["inmadurez", "sensibilidad excesiva", "bloqueo"],
      meaning:
        "Inmadurez emocional, sensibilidad mal gestionada o dificultad para expresar sentimientos."
    },
    symbolism:
      "La copa y el pez representan imaginación, sensibilidad y mensajes inesperados.",
    yesNo: [],
    sourceIds
  },

  {
    id: "knight-of-cups",
    name: "Caballero de Copas",
    arcana: "minor",
    suit: "cups",
    image: cardImage("cups", "knight-of-cups.png"),
    upright: {
      keywords: ["propuesta", "romanticismo", "movimiento"],
      meaning:
        "Propuesta, invitación, movimiento guiado por sentimientos e idealismo."
    },
    reversed: {
      keywords: ["engaño", "inestabilidad", "idealización"],
      meaning:
        "Idealización excesiva, inestabilidad emocional o promesas poco fiables."
    },
    symbolism:
      "El caballero lleva una copa mientras avanza lentamente, combinando movimiento y emoción.",
    yesNo: [],
    sourceIds
  },

  {
    id: "queen-of-cups",
    name: "Reina de Copas",
    arcana: "minor",
    suit: "cups",
    image: cardImage("cups", "queen-of-cups.png"),
    upright: {
      keywords: ["intuición", "amor", "comprensión"],
      meaning:
        "Persona sensible, afectuosa, intuitiva y comprensiva."
    },
    reversed: {
      keywords: ["inseguridad", "dependencia", "emocionalidad"],
      meaning:
        "Emociones desbordadas, dependencia o dificultad para mantener límites."
    },
    symbolism:
      "La reina contempla su copa, destacando sensibilidad, intuición y profundidad emocional.",
    yesNo: [],
    sourceIds
  },

  {
    id: "king-of-cups",
    name: "Rey de Copas",
    arcana: "minor",
    suit: "cups",
    image: cardImage("cups", "king-of-cups.png"),
    upright: {
      keywords: ["madurez emocional", "control", "sabiduría"],
      meaning:
        "Madurez emocional, equilibrio, comprensión y dominio de los sentimientos."
    },
    reversed: {
      keywords: ["descontrol", "manipulación", "inestabilidad"],
      meaning:
        "Emociones mal gestionadas, manipulación o falta de equilibrio."
    },
    symbolism:
      "El rey permanece firme en medio del agua, representando dominio y equilibrio emocional.",
    yesNo: [],
    sourceIds
  },

  // =====================================================
  // BASTOS
  // =====================================================

  {
    id: "ace-of-wands",
    name: "As de Bastos",
    number: 1,
    arcana: "minor",
    suit: "wands",
    image: cardImage("wands", "ace-of-wands.png"),
    upright: {
      keywords: ["inicio", "creatividad", "energía"],
      meaning:
        "Inicio, creación, iniciativa, energía y nacimiento de un proyecto."
    },
    reversed: {
      keywords: ["caída", "bloqueo", "fracaso"],
      meaning:
        "Bloqueo de energía, caída o proyecto que pierde impulso."
    },
    symbolism:
      "La mano que surge de la nube sosteniendo el basto representa una nueva fuerza creadora.",
    yesNo: [],
    sourceIds
  },

  {
    id: "two-of-wands",
    name: "Dos de Bastos",
    number: 2,
    arcana: "minor",
    suit: "wands",
    image: cardImage("wands", "2-of-wands.png"),
    upright: {
      keywords: ["planificación", "visión", "decisión"],
      meaning:
        "Planificación, visión del futuro y consideración de nuevas posibilidades."
    },
    reversed: {
      keywords: ["miedo", "indecisión", "limitación"],
      meaning:
        "Dificultad para actuar, temor ante lo desconocido o falta de decisión."
    },
    symbolism:
      "La figura contempla el mundo mientras sostiene un basto, expresando planificación y visión.",
    yesNo: [],
    sourceIds
  },

  {
    id: "three-of-wands",
    name: "Tres de Bastos",
    number: 3,
    arcana: "minor",
    suit: "wands",
    image: cardImage("wands", "3-of-wands.png"),
    upright: {
      keywords: ["expansión", "espera", "progreso"],
      meaning:
        "Expansión, progreso y expectativa de resultados futuros."
    },
    reversed: {
      keywords: ["retraso", "obstáculo", "falta de previsión"],
      meaning:
        "Retrasos, obstáculos o expectativas que no se desarrollan como se esperaba."
    },
    symbolism:
      "La figura observa desde una altura hacia el horizonte, asociándose con expansión y espera.",
    yesNo: [],
    sourceIds
  },

  {
    id: "four-of-wands",
    name: "Cuatro de Bastos",
    number: 4,
    arcana: "minor",
    suit: "wands",
    image: cardImage("wands", "4-of-wands.png"),
    upright: {
      keywords: ["celebración", "hogar", "armonía"],
      meaning:
        "Celebración, hogar, descanso, armonía y prosperidad."
    },
    reversed: {
      keywords: ["inestabilidad", "tensión", "cambio"],
      meaning:
        "Inestabilidad o dificultad para disfrutar plenamente de una situación favorable."
    },
    symbolism:
      "Los cuatro bastos forman una estructura decorada que representa refugio, celebración y estabilidad.",
    yesNo: [],
    sourceIds
  },

  {
    id: "five-of-wands",
    name: "Cinco de Bastos",
    number: 5,
    arcana: "minor",
    suit: "wands",
    image: cardImage("wands", "5-of-wands.png"),
    upright: {
      keywords: ["competencia", "conflicto", "desafío"],
      meaning:
        "Competencia, lucha, desacuerdo y necesidad de superar obstáculos."
    },
    reversed: {
      keywords: ["conflicto interno", "tensión", "evitación"],
      meaning:
        "Conflicto que se evita o tensión que permanece sin resolverse."
    },
    symbolism:
      "Las figuras cruzan los bastos entre sí, representando competencia y confrontación.",
    yesNo: [],
    sourceIds
  },

  {
    id: "six-of-wands",
    name: "Seis de Bastos",
    number: 6,
    arcana: "minor",
    suit: "wands",
    image: cardImage("wands", "6-of-wands.png"),
    upright: {
      keywords: ["victoria", "reconocimiento", "éxito"],
      meaning:
        "Victoria, reconocimiento, triunfo y avance favorable."
    },
    reversed: {
      keywords: ["fracaso", "orgullo", "falta de reconocimiento"],
      meaning:
        "Falta de reconocimiento, orgullo herido o triunfo que no llega como se esperaba."
    },
    symbolism:
      "El jinete coronado representa triunfo, reconocimiento y éxito público.",
    yesNo: [],
    sourceIds
  },

  {
    id: "seven-of-wands",
    name: "Siete de Bastos",
    number: 7,
    arcana: "minor",
    suit: "wands",
    image: cardImage("wands", "7-of-wands.png"),
    upright: {
      keywords: ["defensa", "coraje", "resistencia"],
      meaning:
        "Defender una posición, afrontar oposición y mantener la propia determinación."
    },
    reversed: {
      keywords: ["agotamiento", "vulnerabilidad", "rendición"],
      meaning:
        "Cansancio ante la oposición o dificultad para sostener una posición."
    },
    symbolism:
      "La figura situada en altura defiende su posición frente a varios bastos.",
    yesNo: [],
    sourceIds
  },

  {
    id: "eight-of-wands",
    name: "Ocho de Bastos",
    number: 8,
    arcana: "minor",
    suit: "wands",
    image: cardImage("wands", "8-of-wands.png"),
    upright: {
      keywords: ["rapidez", "movimiento", "noticias"],
      meaning:
        "Movimiento rápido, progreso, noticias y acontecimientos que se desarrollan con rapidez."
    },
    reversed: {
      keywords: ["retraso", "interrupción", "frustración"],
      meaning:
        "Retrasos, interrupciones o pérdida de velocidad."
    },
    symbolism:
      "Los ocho bastos avanzan por el aire, expresando rapidez y movimiento.",
    yesNo: [],
    sourceIds
  },

  {
    id: "nine-of-wands",
    name: "Nueve de Bastos",
    number: 9,
    arcana: "minor",
    suit: "wands",
    image: cardImage("wands", "9-of-wands.png"),
    upright: {
      keywords: ["resistencia", "prudencia", "perseverancia"],
      meaning:
        "Resistencia, preparación, cautela y perseverancia ante nuevas dificultades."
    },
    reversed: {
      keywords: ["agotamiento", "obstáculo", "debilidad"],
      meaning:
        "Cansancio, vulnerabilidad o dificultad para continuar resistiendo."
    },
    symbolism:
      "La figura herida y rodeada de bastos representa resistencia después de experiencias difíciles.",
    yesNo: [],
    sourceIds
  },

  {
    id: "ten-of-wands",
    name: "Diez de Bastos",
    number: 10,
    arcana: "minor",
    suit: "wands",
    image: cardImage("wands", "10-of-wands.png"),
    upright: {
      keywords: ["carga", "responsabilidad", "opresión"],
      meaning:
        "Carga, responsabilidad y presión derivadas de llevar demasiado peso."
    },
    reversed: {
      keywords: ["dificultades", "intrigas", "sobrecarga"],
      meaning:
        "Dificultades, obstáculos e intrigas asociadas a una carga excesiva."
    },
    symbolism:
      "La figura lleva diez bastos sobre sí, representando peso, responsabilidad y opresión.",
    yesNo: [],
    sourceIds
  },

  {
    id: "page-of-wands",
    name: "Sota de Bastos",
    arcana: "minor",
    suit: "wands",
    image: cardImage("wands", "page-of-wands.png"),
    upright: {
      keywords: ["entusiasmo", "descubrimiento", "mensaje"],
      meaning:
        "Entusiasmo, descubrimiento, energía juvenil y noticias relacionadas con nuevos proyectos."
    },
    reversed: {
      keywords: ["inmadurez", "retraso", "frustración"],
      meaning:
        "Impulsividad, inmadurez o noticias que generan frustración."
    },
    symbolism:
      "La figura joven observa el basto con interés, expresando curiosidad y entusiasmo.",
    yesNo: [],
    sourceIds
  },

  {
    id: "knight-of-wands",
    name: "Caballero de Bastos",
    arcana: "minor",
    suit: "wands",
    image: cardImage("wands", "knight-of-wands.png"),
    upright: {
      keywords: ["acción", "aventura", "impulso"],
      meaning:
        "Acción rápida, aventura, energía y movimiento impulsivo."
    },
    reversed: {
      keywords: ["impulsividad", "conflicto", "inestabilidad"],
      meaning:
        "Impulsividad, conflicto, inestabilidad o precipitación."
    },
    symbolism:
      "El caballo en movimiento y el basto elevado representan acción y energía.",
    yesNo: [],
    sourceIds
  },

  {
    id: "queen-of-wands",
    name: "Reina de Bastos",
    arcana: "minor",
    suit: "wands",
    image: cardImage("wands", "queen-of-wands.png"),
    upright: {
      keywords: ["confianza", "independencia", "vitalidad"],
      meaning:
        "Confianza, vitalidad, independencia y capacidad de actuar."
    },
    reversed: {
      keywords: ["celos", "inseguridad", "temperamento"],
      meaning:
        "Inseguridad, celos o temperamento difícil de controlar."
    },
    symbolism:
      "La reina sostiene el basto y aparece acompañada por un girasol y un gato, asociados con vitalidad e independencia.",
    yesNo: [],
    sourceIds
  },

  {
    id: "king-of-wands",
    name: "Rey de Bastos",
    arcana: "minor",
    suit: "wands",
    image: cardImage("wands", "king-of-wands.png"),
    upright: {
      keywords: ["liderazgo", "visión", "autoridad"],
      meaning:
        "Liderazgo, visión, iniciativa y autoridad para llevar adelante proyectos."
    },
    reversed: {
      keywords: ["autoritarismo", "impulsividad", "intolerancia"],
      meaning:
        "Autoritarismo, impulsividad o dificultad para aceptar límites."
    },
    symbolism:
      "El rey sentado con su basto representa autoridad, iniciativa y dominio de la acción.",
    yesNo: [],
    sourceIds
  },

  // =====================================================
  // ESPADAS
  // =====================================================

  {
    id: "ace-of-swords",
    name: "As de Espadas",
    number: 1,
    arcana: "minor",
    suit: "swords",
    image: cardImage("swords", "ace-of-swords.png"),
    upright: {
      keywords: ["claridad", "verdad", "decisión"],
      meaning:
        "Claridad mental, verdad, decisión y capacidad de superar obstáculos."
    },
    reversed: {
      keywords: ["confusión", "error", "obstáculo"],
      meaning:
        "Confusión, error, dificultad para decidir o pensamiento bloqueado."
    },
    symbolism:
      "La espada elevada representa poder mental, claridad y victoria sobre la dificultad.",
    yesNo: [],
    sourceIds
  },

  {
    id: "two-of-swords",
    name: "Dos de Espadas",
    number: 2,
    arcana: "minor",
    suit: "swords",
    image: cardImage("swords", "2-of-swords.png"),
    upright: {
      keywords: ["indecisión", "equilibrio", "bloqueo"],
      meaning:
        "Indecisión, equilibrio entre dos alternativas y dificultad para actuar."
    },
    reversed: {
      keywords: ["confusión", "duda", "desequilibrio"],
      meaning:
        "Confusión, dificultad para mantener el equilibrio o decisión aplazada."
    },
    symbolism:
      "La figura vendada sostiene dos espadas cruzadas, representando bloqueo y decisión suspendida.",
    yesNo: [],
    sourceIds
  },

  {
    id: "three-of-swords",
    name: "Tres de Espadas",
    number: 3,
    arcana: "minor",
    suit: "swords",
    image: cardImage("swords", "3-of-swords.png"),
    upright: {
      keywords: ["dolor", "separación", "ruptura"],
      meaning:
        "Separación, dolor, pérdida o ruptura."
    },
    reversed: {
      keywords: ["confusión", "pérdida", "dolor interno"],
      meaning:
        "Confusión, pérdida o dificultad para procesar una experiencia dolorosa."
    },
    symbolism:
      "Tres espadas atraviesan un corazón bajo la lluvia, representando dolor y ruptura.",
    yesNo: [],
    sourceIds
  },

  {
    id: "four-of-swords",
    name: "Cuatro de Espadas",
    number: 4,
    arcana: "minor",
    suit: "swords",
    image: cardImage("swords", "4-of-swords.png"),
    upright: {
      keywords: ["descanso", "pausa", "recuperación"],
      meaning:
        "Descanso, retiro, recuperación y pausa antes de continuar."
    },
    reversed: {
      keywords: ["inquietud", "agotamiento", "recuperación lenta"],
      meaning:
        "Dificultad para descansar, agotamiento o recuperación incompleta."
    },
    symbolism:
      "La figura recostada en reposo representa pausa, retiro y recuperación.",
    yesNo: [],
    sourceIds
  },

  {
    id: "five-of-swords",
    name: "Cinco de Espadas",
    number: 5,
    arcana: "minor",
    suit: "swords",
    image: cardImage("swords", "5-of-swords.png"),
    upright: {
      keywords: ["conflicto", "derrota", "tensión"],
      meaning:
        "Conflicto, derrota, enfrentamiento y consecuencias de una lucha."
    },
    reversed: {
      keywords: ["reconciliación", "pérdida", "conflicto"],
      meaning:
        "Conflicto que deja consecuencias o posibilidad de abandonar una confrontación.",
    },
    symbolism:
      "La figura recoge las espadas después de una confrontación, mostrando victoria con un coste.",
    yesNo: [],
    sourceIds
  },

  {
    id: "six-of-swords",
    name: "Seis de Espadas",
    number: 6,
    arcana: "minor",
    suit: "swords",
    image: cardImage("swords", "6-of-swords.png"),
    upright: {
      keywords: ["transición", "viaje", "alejamiento"],
      meaning:
        "Viaje, transición, alejamiento de una dificultad y paso hacia otra etapa."
    },
    reversed: {
      keywords: ["estancamiento", "dificultad", "regreso"],
      meaning:
        "Dificultad para avanzar o tendencia a permanecer ligado al problema anterior."
    },
    symbolism:
      "La barca que atraviesa el agua representa transición y alejamiento de una situación.",
    yesNo: [],
    sourceIds
  },

  {
    id: "seven-of-swords",
    name: "Siete de Espadas",
    number: 7,
    arcana: "minor",
    suit: "swords",
    image: cardImage("swords", "7-of-swords.png"),
    upright: {
      keywords: ["estrategia", "plan", "evasión"],
      meaning:
        "Estrategia, intento, planificación y posible conflicto o evasión."
    },
    reversed: {
      keywords: ["consejo", "instrucción", "exposición"],
      meaning:
        "Consejo, instrucción o revelación de aquello que permanecía oculto."
    },
    symbolism:
      "La figura se lleva cinco espadas dejando dos atrás, sugiriendo estrategia y acción discreta.",
    yesNo: [],
    sourceIds
  },

  {
    id: "eight-of-swords",
    name: "Ocho de Espadas",
    number: 8,
    arcana: "minor",
    suit: "swords",
    image: cardImage("swords", "8-of-swords.png"),
    upright: {
      keywords: ["restricción", "miedo", "limitación"],
      meaning:
        "Restricción, aislamiento, miedo y sensación de estar atrapado."
    },
    reversed: {
      keywords: ["liberación", "dificultad", "inquietud"],
      meaning:
        "Posibilidad de liberarse de una restricción, aunque persisten dificultades."
    },
    symbolism:
      "La figura vendada y rodeada de espadas representa una sensación de limitación.",
    yesNo: [],
    sourceIds
  },

  {
    id: "nine-of-swords",
    name: "Nueve de Espadas",
    number: 9,
    arcana: "minor",
    suit: "swords",
    image: cardImage("swords", "9-of-swords.png"),
    upright: {
      keywords: ["preocupación", "ansiedad", "sufrimiento"],
      meaning:
        "Preocupación, miedo, sufrimiento mental y pensamientos difíciles."
    },
    reversed: {
      keywords: ["desesperación", "aislamiento", "preocupación"],
      meaning:
        "Preocupación intensa, desesperación o dificultad para encontrar alivio."
    },
    symbolism:
      "La figura despierta en la oscuridad mientras las espadas representan pensamientos y preocupaciones.",
    yesNo: [],
    sourceIds
  },

  {
    id: "ten-of-swords",
    name: "Diez de Espadas",
    number: 10,
    arcana: "minor",
    suit: "swords",
    image: cardImage("swords", "10-of-swords.png"),
    upright: {
      keywords: ["final", "derrota", "dolor"],
      meaning:
        "Final doloroso, derrota, pérdida y conclusión de una situación."
    },
    reversed: {
      keywords: ["recuperación", "resistencia", "dificultad"],
      meaning:
        "Dificultad posterior a una crisis o comienzo lento de la recuperación."
    },
    symbolism:
      "La figura tendida bajo las diez espadas representa un final definitivo y doloroso.",
    yesNo: [],
    sourceIds
  },

  {
    id: "page-of-swords",
    name: "Sota de Espadas",
    arcana: "minor",
    suit: "swords",
    image: cardImage("swords", "page-of-swords.png"),
    upright: {
      keywords: ["vigilancia", "curiosidad", "observación"],
      meaning:
        "Vigilancia, curiosidad, observación y disposición para actuar."
    },
    reversed: {
      keywords: ["espionaje", "malentendido", "precipitación"],
      meaning:
        "Espionaje, rumores, precipitación o comunicación problemática."
    },
    symbolism:
      "La figura joven sostiene la espada mientras observa el entorno, representando alerta y curiosidad.",
    yesNo: [],
    sourceIds
  },

  {
    id: "knight-of-swords",
    name: "Caballero de Espadas",
    arcana: "minor",
    suit: "swords",
    image: cardImage("swords", "knight-of-swords.png"),
    upright: {
      keywords: ["acción", "decisión", "velocidad"],
      meaning:
        "Acción rápida, decisión, movimiento y determinación."
    },
    reversed: {
      keywords: ["impulsividad", "conflicto", "precipitación"],
      meaning:
        "Impulsividad, precipitación y conflictos derivados de actuar demasiado rápido."
    },
    symbolism:
      "El caballero avanza rápidamente con la espada levantada, representando acción y velocidad.",
    yesNo: [],
    sourceIds
  },

  {
    id: "queen-of-swords",
    name: "Reina de Espadas",
    arcana: "minor",
    suit: "swords",
    image: cardImage("swords", "queen-of-swords.png"),
    upright: {
      keywords: ["claridad", "independencia", "discernimiento"],
      meaning:
        "Claridad mental, independencia, inteligencia y capacidad de discernimiento."
    },
    reversed: {
      keywords: ["frialdad", "prejuicio", "dureza"],
      meaning:
        "Frialdad, dureza, prejuicio o juicio excesivamente severo."
    },
    symbolism:
      "La reina sostiene una espada erguida y mira hacia delante, representando claridad y discernimiento.",
    yesNo: [],
    sourceIds
  },

  {
    id: "king-of-swords",
    name: "Rey de Espadas",
    arcana: "minor",
    suit: "swords",
    image: cardImage("swords", "king-of-swords.png"),
    upright: {
      keywords: ["autoridad", "razón", "juicio"],
      meaning:
        "Autoridad intelectual, razón, juicio y capacidad para tomar decisiones."
    },
    reversed: {
      keywords: ["abuso de poder", "crueldad", "rigidez"],
      meaning:
        "Abuso de autoridad, rigidez o uso injusto del poder intelectual."
    },
    symbolism:
      "El rey sentado con la espada representa autoridad, razón y poder de decisión.",
    yesNo: [],
    sourceIds
  },

  // =====================================================
  // OROS
  // =====================================================

  {
    id: "ace-of-pentacles",
    name: "As de Oros",
    number: 1,
    arcana: "minor",
    suit: "pentacles",
    image: cardImage("pentacles", "ace-of-pentacles.png"),
    upright: {
      keywords: ["prosperidad", "oportunidad", "riqueza"],
      meaning:
        "Prosperidad, bienestar material, oportunidad y condiciones favorables."
    },
    reversed: {
      keywords: ["pérdida", "materialismo", "mala oportunidad"],
      meaning:
        "Dificultad material, pérdida o uso poco favorable de los recursos."
    },
    symbolism:
      "La mano ofrece un pentáculo, símbolo de materia, recursos y prosperidad.",
    yesNo: [],
    sourceIds
  },

  {
    id: "two-of-pentacles",
    name: "Dos de Oros",
    number: 2,
    arcana: "minor",
    suit: "pentacles",
    image: cardImage("pentacles", "2-of-pentacles.png"),
    upright: {
      keywords: ["adaptación", "equilibrio", "cambio"],
      meaning:
        "Adaptación, equilibrio entre obligaciones y capacidad de manejar cambios."
    },
    reversed: {
      keywords: ["desequilibrio", "desorganización", "sobrecarga"],
      meaning:
        "Dificultad para equilibrar responsabilidades o exceso de demandas."
    },
    symbolism:
      "La figura mantiene dos pentáculos en movimiento, representando adaptación y equilibrio.",
    yesNo: [],
    sourceIds
  },

  {
    id: "three-of-pentacles",
    name: "Tres de Oros",
    number: 3,
    arcana: "minor",
    suit: "pentacles",
    image: cardImage("pentacles", "3-of-pentacles.png"),
    upright: {
      keywords: ["trabajo", "habilidad", "colaboración"],
      meaning:
        "Trabajo, habilidad, colaboración y reconocimiento del conocimiento técnico."
    },
    reversed: {
      keywords: ["falta de habilidad", "desacuerdo", "trabajo deficiente"],
      meaning:
        "Trabajo mal coordinado, falta de habilidad o dificultades de colaboración."
    },
    symbolism:
      "Las figuras trabajan en una estructura arquitectónica, representando cooperación y oficio.",
    yesNo: [],
    sourceIds
  },

  {
    id: "four-of-pentacles",
    name: "Cuatro de Oros",
    number: 4,
    arcana: "minor",
    suit: "pentacles",
    image: cardImage("pentacles", "4-of-pentacles.png"),
    upright: {
      keywords: ["seguridad", "posesión", "control"],
      meaning:
        "Conservación de recursos, seguridad, posesión y deseo de mantener el control."
    },
    reversed: {
      keywords: ["pérdida", "avaricia", "liberación"],
      meaning:
        "Apego excesivo, pérdida de control o necesidad de desprenderse."
    },
    symbolism:
      "La figura protege sus pentáculos con el cuerpo, mostrando apego y necesidad de seguridad.",
    yesNo: [],
    sourceIds
  },

  {
    id: "five-of-pentacles",
    name: "Cinco de Oros",
    number: 5,
    arcana: "minor",
    suit: "pentacles",
    image: cardImage("pentacles", "5-of-pentacles.png"),
    upright: {
      keywords: ["dificultad", "pobreza", "aislamiento"],
      meaning:
        "Dificultad material, pobreza, carencia y sensación de exclusión."
    },
    reversed: {
      keywords: ["recuperación", "ayuda", "mejora"],
      meaning:
        "Posibilidad de recuperación, ayuda o mejora de una situación difícil."
    },
    symbolism:
      "Las figuras avanzan en el frío frente a una iglesia, representando carencia y exclusión.",
    yesNo: [],
    sourceIds
  },

  {
    id: "six-of-pentacles",
    name: "Seis de Oros",
    number: 6,
    arcana: "minor",
    suit: "pentacles",
    image: cardImage("pentacles", "6-of-pentacles.png"),
    upright: {
      keywords: ["generosidad", "ayuda", "recursos"],
      meaning:
        "Generosidad, ayuda, intercambio de recursos y apoyo material."
    },
    reversed: {
      keywords: ["desigualdad", "dependencia", "interés"],
      meaning:
        "Desequilibrio en el intercambio, dependencia o ayuda condicionada."
    },
    symbolism:
      "La balanza y la distribución de monedas representan intercambio, ayuda y desigualdad.",
    yesNo: [],
    sourceIds
  },

  {
    id: "seven-of-pentacles",
    name: "Siete de Oros",
    number: 7,
    arcana: "minor",
    suit: "pentacles",
    image: cardImage("pentacles", "7-of-pentacles.png"),
    upright: {
      keywords: ["espera", "evaluación", "paciencia"],
      meaning:
        "Evaluación de resultados, paciencia y espera antes de recoger los frutos del trabajo."
    },
    reversed: {
      keywords: ["impaciencia", "esfuerzo perdido", "frustración"],
      meaning:
        "Impaciencia, resultados decepcionantes o esfuerzo que parece no producir frutos."
    },
    symbolism:
      "La figura contempla el crecimiento de los pentáculos, representando espera y evaluación.",
    yesNo: [],
    sourceIds
  },

  {
    id: "eight-of-pentacles",
    name: "Ocho de Oros",
    number: 8,
    arcana: "minor",
    suit: "pentacles",
    image: cardImage("pentacles", "8-of-pentacles.png"),
    upright: {
      keywords: ["trabajo", "habilidad", "aprendizaje"],
      meaning:
        "Trabajo, empleo, aprendizaje de una habilidad y perfeccionamiento."
    },
    reversed: {
      keywords: ["vanidad", "ambición", "engaño"],
      meaning:
        "Ambición mal dirigida, vanidad o habilidad utilizada de forma poco ética."
    },
    symbolism:
      "El artesano trabaja cuidadosamente los pentáculos, representando práctica y perfeccionamiento.",
    yesNo: [],
    sourceIds
  },

  {
    id: "nine-of-pentacles",
    name: "Nueve de Oros",
    number: 9,
    arcana: "minor",
    suit: "pentacles",
    image: cardImage("pentacles", "9-of-pentacles.png"),
    upright: {
      keywords: ["éxito", "seguridad", "independencia"],
      meaning:
        "Éxito, seguridad, bienestar material, prudencia y realización."
    },
    reversed: {
      keywords: ["engaño", "proyecto frustrado", "inseguridad"],
      meaning:
        "Proyecto frustrado, engaño o pérdida de la seguridad alcanzada."
    },
    symbolism:
      "La mujer rodeada de abundancia representa bienestar, seguridad y logro personal.",
    yesNo: [],
    sourceIds
  },

  {
    id: "ten-of-pentacles",
    name: "Diez de Oros",
    number: 10,
    arcana: "minor",
    suit: "pentacles",
    image: cardImage("pentacles", "10-of-pentacles.png"),
    upright: {
      keywords: ["riqueza", "familia", "legado"],
      meaning:
        "Riqueza, estabilidad, familia, patrimonio y seguridad a largo plazo."
    },
    reversed: {
      keywords: ["pérdida", "inestabilidad", "problemas familiares"],
      meaning:
        "Inestabilidad material, pérdida o conflictos relacionados con patrimonio y familia."
    },
    symbolism:
      "La escena familiar y los diez pentáculos representan patrimonio, continuidad y estabilidad.",
    yesNo: [],
    sourceIds
  },

  {
    id: "page-of-pentacles",
    name: "Sota de Oros",
    arcana: "minor",
    suit: "pentacles",
    image: cardImage("pentacles", "page-of-pentacles.png"),
    upright: {
      keywords: ["estudio", "oportunidad", "aprendizaje"],
      meaning:
        "Aprendizaje, estudio, oportunidad práctica y disposición para desarrollar una habilidad."
    },
    reversed: {
      keywords: ["falta de concentración", "oportunidad perdida", "inmadurez"],
      meaning:
        "Falta de concentración, inmadurez o dificultad para aprovechar una oportunidad."
    },
    symbolism:
      "La figura joven contempla el pentáculo, representando estudio, atención y oportunidad práctica.",
    yesNo: [],
    sourceIds
  },

  {
    id: "knight-of-pentacles",
    name: "Caballero de Oros",
    arcana: "minor",
    suit: "pentacles",
    image: cardImage("pentacles", "knight-of-pentacles.png"),
    upright: {
      keywords: ["constancia", "responsabilidad", "trabajo"],
      meaning:
        "Constancia, responsabilidad, trabajo cuidadoso y progreso lento pero seguro."
    },
    reversed: {
      keywords: ["estancamiento", "rutina", "lentitud"],
      meaning:
        "Estancamiento, exceso de rutina o lentitud que impide avanzar."
    },
    symbolism:
      "El caballero permanece quieto con su pentáculo, representando paciencia y constancia.",
    yesNo: [],
    sourceIds
  },

  {
    id: "queen-of-pentacles",
    name: "Reina de Oros",
    arcana: "minor",
    suit: "pentacles",
    image: cardImage("pentacles", "queen-of-pentacles.png"),
    upright: {
      keywords: ["practicidad", "cuidado", "prosperidad"],
      meaning:
        "Practicidad, seguridad, cuidado y capacidad para administrar recursos."
    },
    reversed: {
      keywords: ["inseguridad", "dependencia", "descuido"],
      meaning:
        "Inseguridad material, dependencia o dificultad para administrar recursos."
    },
    symbolism:
      "La reina contempla el pentáculo en un entorno fértil, combinando cuidado, abundancia y practicidad.",
    yesNo: [],
    sourceIds
  },

  {
    id: "king-of-pentacles",
    name: "Rey de Oros",
    arcana: "minor",
    suit: "pentacles",
    image: cardImage("pentacles", "king-of-pentacles.png"),
    upright: {
      keywords: ["riqueza", "estabilidad", "éxito"],
      meaning:
        "Éxito material, estabilidad, riqueza y capacidad para administrar recursos."
    },
    reversed: {
      keywords: ["avaricia", "corrupción", "inestabilidad"],
      meaning:
        "Avaricia, materialismo, corrupción o uso poco equilibrado del poder económico."
    },
    symbolism:
      "El rey rodeado de símbolos de riqueza representa dominio material, estabilidad y prosperidad.",
    yesNo: [],
    sourceIds
  }
];

export const minorArcana: TarotCard[] = minorArcanaBase.map((card) => ({
  ...card,
  contextual: contextualMeanings[card.id],
}));