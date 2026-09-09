import type { TarotCard } from "../../types/card";

const waite = "waite-pictorial-key";
const lizDean = "liz-dean-tarot-card-meanings";

export const majorArcana: TarotCard[] = [
  {
    id: "the-fool",
    name: "El Loco",
    number: 0,
    arcana: "major",
    image: new URL("./major/00-the-fool.png", import.meta.url).href,
    upright: {
      keywords: ["libertad", "aventura", "espontaneidad", "riesgo"],
      meaning:
        "Representa un comienzo impulsivo y libre, con disposición a explorar lo desconocido aunque todavía no se conozca el resultado.",
    },
    reversed: {
      keywords: ["negligencia", "descuido", "apatía", "irresponsabilidad"],
      meaning:
        "Advierte sobre actuar sin cuidado, ignorar las consecuencias o afrontar una situación con apatía.",
    },
    symbolism:
      "Perro: instinto. Precipicio: riesgo. Viaje: desconocido.",
    contextual: {
      home:
        "Puede señalar a una persona joven que deja el hogar. También predice una etapa sociable, con visitas que pueden ayudar en un nuevo proyecto.",
      love:
        "Un nuevo camino puede llevar hacia el amor. Esta carta aparece con frecuencia después de una ruptura.",
      careerMoney:
        "Una gran oportunidad está disponible. Conviene aprovecharla mientras sea posible.",
      spiritual:
        "Nuevos descubrimientos y búsqueda del propio camino espiritual.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },

  {
    id: "the-magician",
    name: "El Mago",
    number: 1,
    arcana: "major",
    image: new URL("./major/01-the-magician.png", import.meta.url).href,
    upright: {
      keywords: ["habilidad", "iniciativa", "voluntad", "confianza"],
      meaning:
        "Representa la capacidad de actuar, utilizar los propios recursos y transformar una intención en acción.",
    },
    reversed: {
      keywords: ["bloqueo", "engaño", "inquietud", "mal uso"],
      meaning:
        "Puede indicar capacidades mal utilizadas, engaño o dificultad para actuar con claridad y confianza.",
    },
    symbolism:
      "Infinito: potencial. Vara: voluntad. Cuatro palos: recursos.",
    contextual: {
      home:
        "El hogar se convierte en un punto de encuentro donde se comparten ideas. Hay armonía y diversión.",
      love:
        "Buena comunicación en relaciones establecidas. Para personas solteras, puede señalar el comienzo de un nuevo amor.",
      careerMoney:
        "Puede aparecer inspiración de un líder o una nueva posición o dirección profesional. La creatividad favorece los ingresos.",
      spiritual:
        "La creatividad y la capacidad de actuar ayudan a desarrollar el propio potencial.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },

  {
    id: "the-high-priestess",
    name: "La Sacerdotisa",
    number: 2,
    arcana: "major",
    image: new URL(
      "./major/02-the-high-priestess.png",
      import.meta.url
    ).href,
    upright: {
      keywords: ["misterio", "secretos", "silencio", "sabiduría"],
      meaning:
        "Indica que todavía hay información oculta o aspectos que no han sido revelados; conviene observar antes de actuar.",
    },
    reversed: {
      keywords: ["pasión", "presunción", "superficialidad", "impulso"],
      meaning:
        "Puede señalar pasión intensa o una comprensión superficial de algo que todavía requiere profundidad.",
    },
    symbolism:
      "Columnas: dualidad. Velo: misterio. Libro: conocimiento.",
    contextual: {
      home:
        "Es un momento para la privacidad. Puede ser necesario estudiar, leer o disfrutar de paz y tranquilidad.",
      love:
        "Puede señalar asuntos ocultos o la necesidad de orientación en el amor.",
      careerMoney:
        "Consejo sabio de una fuente de confianza. El éxito puede llegar al observar qué falta en lugar de centrarse solamente en lo que ya existe.",
      spiritual:
        "Ayuda de un mentor y profundización del compromiso espiritual.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },

  {
    id: "the-empress",
    name: "La Emperatriz",
    number: 3,
    arcana: "major",
    image: new URL("./major/03-the-empress.png", import.meta.url).href,
    upright: {
      keywords: ["fertilidad", "crecimiento", "creación", "abundancia"],
      meaning:
        "Representa crecimiento y fertilidad: algo tiene condiciones para desarrollarse, producir resultados o dar frutos.",
    },
    reversed: {
      keywords: ["duda", "vacilación", "bloqueo", "claridad"],
      meaning:
        "Puede señalar dudas o dificultades para desarrollar algo, aunque también puede indicar que una situación comienza a aclararse.",
    },
    symbolism:
      "Estrellas: cielo. Venus: fertilidad. Trigo: abundancia. Agua: vida.",
    contextual: {
      home:
        "Contentamiento y armonía en el hogar. Puede surgir el deseo de ampliar o mejorar el espacio.",
      love:
        "Puede representar a una madre, mujer protectora, esposa o pareja. También habla de hijos, familia, amor y felicidad.",
      careerMoney:
        "Buena administración del dinero y otros recursos. Puede señalar crecimiento profesional y recompensa por esfuerzos anteriores.",
      spiritual:
        "Dedicar tiempo a proyectos creativos puede ayudar a conectar con el lado espiritual e intuitivo.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },

  {
    id: "the-emperor",
    name: "El Emperador",
    number: 4,
    arcana: "major",
    image: new URL("./major/04-the-emperor.png", import.meta.url).href,
    upright: {
      keywords: ["estabilidad", "autoridad", "poder", "control"],
      meaning:
        "Representa estabilidad y autoridad. Habla de establecer orden, asumir el control y actuar desde una posición firme.",
    },
    reversed: {
      keywords: ["obstrucción", "inmadurez", "confusión", "rigidez"],
      meaning:
        "Puede indicar abuso o pérdida de autoridad, inmadurez o dificultades para mantener el control.",
    },
    symbolism:
      "Corona: autoridad. Cetro: poder. Globo: dominio. Carneros: fuerza.",
    contextual: {
      home:
        "Cuidado del hogar, establecimiento de límites y recuperación del orden después de conflictos y discusiones.",
      love:
        "Puede representar una pareja, esposo, padre o figura paterna. Honrar los vínculos es importante.",
      careerMoney:
        "Liderazgo fuerte, promoción y éxito. También puede señalar un buen equilibrio entre trabajo y vida personal.",
      spiritual:
        "Sensación de protección y guía espiritual.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },

  {
    id: "the-hierophant",
    name: "El Hierofante",
    number: 5,
    arcana: "major",
    image: new URL("./major/05-the-hierophant.png", import.meta.url).href,
    upright: {
      keywords: ["tradición", "guía", "aprendizaje", "alianza"],
      meaning:
        "Representa aprendizaje, guía y tradición; puede señalar recurrir a alguien con experiencia o formar una alianza.",
    },
    reversed: {
      keywords: ["dependencia", "debilidad", "exceso", "conformismo"],
      meaning:
        "Puede indicar dependencia excesiva de una autoridad, falta de autonomía o una actitud demasiado complaciente.",
    },
    symbolism:
      "Llaves: conocimiento. Columnas: autoridad. Discípulos: enseñanza.",
    contextual: {
      home:
        "Progreso en proyectos y convivencia armoniosa al compartir el espacio con otras personas.",
      love:
        "Unidad e intimidad en las relaciones; puede señalar matrimonio y compromiso.",
      careerMoney:
        "Un enfoque diplomático favorece la carrera. La generosidad puede ayudar a que el dinero fluya.",
      spiritual:
        "Profundización de la comprensión espiritual, especialmente dentro de una comunidad de apoyo.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },

  {
    id: "the-lovers",
    name: "Los Enamorados",
    number: 6,
    arcana: "major",
    image: new URL("./major/06-the-lovers.png", import.meta.url).href,
    upright: {
      keywords: ["amor", "atracción", "unión", "elección"],
      meaning:
        "Representa atracción y unión, pero también una elección importante que puede poner a prueba el vínculo o el camino elegido.",
    },
    reversed: {
      keywords: ["conflicto", "fracaso", "frustración", "desacuerdo"],
      meaning:
        "Puede señalar conflictos, decisiones equivocadas o una unión que no consigue desarrollarse como se esperaba.",
    },
    symbolism:
      "Ángel: guía. Pareja: unión. Serpiente: elección y conocimiento.",
    contextual: {
      home:
        "Decisiones sobre dónde vivir y con quién, pensando en la felicidad futura.",
      love:
        "Una relación importante o el comienzo de un enamoramiento.",
      careerMoney:
        "Conviene considerar cuidadosamente las opciones. Una inversión o decisión a largo plazo puede aportar más satisfacción que una solución económica inmediata.",
      spiritual:
        "Sensación de estar en armonía con uno mismo y con el universo. La autocompasión favorece el equilibrio.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },

  {
    id: "the-chariot",
    name: "El Carro",
    number: 7,
    arcana: "major",
    image: new URL("./major/07-the-chariot.png", import.meta.url).href,
    upright: {
      keywords: ["avance", "determinación", "triunfo", "acción"],
      meaning:
        "Representa avance y determinación. La situación puede progresar cuando existe voluntad suficiente para dirigir las fuerzas en conflicto.",
    },
    reversed: {
      keywords: ["conflicto", "disputa", "desorden", "derrota"],
      meaning:
        "Puede indicar pérdida de control, conflictos o dificultades para mantener el rumbo y alcanzar la victoria.",
    },
    symbolism:
      "Esfinges: fuerzas opuestas. Carro: avance. Conductor: voluntad.",
    contextual: {
      home:
        "Los viajes pueden ser prioritarios frente a las comodidades del hogar. También puede señalar visitas de otros lugares.",
      love:
        "Una relación estable puede crecer. Después de una ruptura, puede señalar una decisión firme de seguir adelante.",
      careerMoney:
        "Grandes avances. Se está en el camino hacia el éxito y puede llegar una recompensa económica.",
      spiritual:
        "Liderazgo y trabajo con grupos para favorecer su aprendizaje. También puede ser necesario reservar tiempo para la reflexión personal.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },

  {
    id: "strength",
    name: "La Fuerza",
    number: 8,
    arcana: "major",
    image: new URL("./major/08-strength.png", import.meta.url).href,
    upright: {
      keywords: ["coraje", "fuerza", "energía", "dominio"],
      meaning:
        "Representa fuerza interior, coraje y capacidad para afrontar dificultades sin depender únicamente de la fuerza física.",
    },
    reversed: {
      keywords: ["debilidad", "abuso", "discordia", "descontrol"],
      meaning:
        "Puede señalar debilidad, abuso de poder o dificultad para controlar las propias reacciones.",
    },
    symbolism:
      "León: fuerza. Mujer: dominio. Infinito: poder interior.",
    contextual: {
      home:
        "Dar apoyo constante a otras personas que atraviesan momentos difíciles.",
      love:
        "Los problemas de pareja comienzan a sanar y el amor se fortalece.",
      careerMoney:
        "Conviene observar antes de reaccionar ante una confrontación. Defenderse con calma favorece el resultado y es importante cuidar los gastos.",
      spiritual:
        "Las propias creencias pueden ser puestas a prueba. Mantenerse firme.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },

  {
    id: "the-hermit",
    name: "El Ermitaño",
    number: 9,
    arcana: "major",
    image: new URL("./major/09-the-hermit.png", import.meta.url).href,
    upright: {
      keywords: ["prudencia", "reflexión", "cautela", "búsqueda"],
      meaning:
        "Invita a detenerse, reflexionar y actuar con prudencia antes de tomar una decisión.",
    },
    reversed: {
      keywords: ["ocultamiento", "miedo", "aislamiento", "cautela"],
      meaning:
        "Puede señalar miedo, ocultamiento o una cautela excesiva que termina dificultando el avance.",
    },
    symbolism:
      "Lámpara: guía. Bastón: experiencia. Soledad: búsqueda interior.",
    contextual: {
      home:
        "Momento para planificar y calcular cuidadosamente proyectos del hogar antes de comenzar.",
      love:
        "Período de sanación después del final de una relación. El foco está en uno mismo y en el propio camino.",
      careerMoney:
        "Cambio de ritmo: puede señalar una pausa, viaje o trabajo desde casa. El dinero no es la prioridad en este momento.",
      spiritual:
        "Retiro espiritual y mentoría. Tiempo tranquilo para leer, escribir y reflexionar.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },

  {
    id: "wheel-of-fortune",
    name: "La Rueda de la Fortuna",
    number: 10,
    arcana: "major",
    image: new URL(
      "./major/10-wheel-of-fortune.png",
      import.meta.url
    ).href,
    upright: {
      keywords: ["destino", "cambio", "suerte", "éxito"],
      meaning:
        "Representa un cambio de circunstancias y el movimiento de la fortuna; una situación puede cambiar de forma inesperada.",
    },
    reversed: {
      keywords: ["aumento", "abundancia", "exceso", "acumulación"],
      meaning:
        "Puede indicar aumento o abundancia, aunque también una cantidad que termina siendo excesiva o innecesaria.",
    },
    symbolism:
      "Rueda: ciclos. Movimiento: cambio. Figuras: fortuna cambiante.",
    contextual: {
      home:
        "Desarrollos inesperados en el hogar; personas que llegan y se van. Puede tratarse de una alteración temporal que termina siendo favorable.",
      love:
        "No es necesario forzar una relación; las circunstancias pueden acomodarse por sí mismas. Para quien busca pareja, puede aparecer en el momento adecuado.",
      careerMoney:
        "Mejora rápida de la situación. Conviene adaptarse al movimiento en lugar de analizarlo excesivamente.",
      spiritual:
        "Prestar atención a lo oculto. Pueden aparecer mensajes, sueños o encuentros relacionados con el inconsciente o con un guía espiritual.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },

  {
    id: "justice",
    name: "La Justicia",
    number: 11,
    arcana: "major",
    image: new URL("./major/11-justice.png", import.meta.url).href,
    upright: {
      keywords: ["equilibrio", "justicia", "verdad", "consecuencias"],
      meaning:
        "Indica equilibrio y decisiones basadas en la verdad y la justicia. Las acciones tienen consecuencias.",
    },
    reversed: {
      keywords: ["injusticia", "sesgo", "complicaciones", "severidad"],
      meaning:
        "Puede señalar parcialidad, injusticia o complicaciones derivadas de una decisión o asunto legal.",
    },
    symbolism:
      "Balanza: equilibrio. Espada: decisión. Trono: autoridad.",
    contextual: {
      home:
        "Los asuntos relacionados con propiedades pueden resolverse y pueden firmarse documentos legales.",
      love:
        "Encontrar maneras de pasar más tiempo con las personas queridas y mejorar el equilibrio entre vida personal y trabajo.",
      careerMoney:
        "Entrevistas y reuniones favorables, buenos resultados en negocios y proyectos, y resolución de deudas pendientes.",
      spiritual:
        "Posibilidad de equilibrar los intereses espirituales con la necesidad de mantener una actividad económica.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },

  {
    id: "the-hanged-man",
    name: "El Colgado",
    number: 12,
    arcana: "major",
    image: new URL(
      "./major/12-the-hanged-man.png",
      import.meta.url
    ).href,
    upright: {
      keywords: ["pausa", "sacrificio", "sabiduría", "perspectiva"],
      meaning:
        "Invita a detenerse y aceptar una pausa o sacrificio para comprender la situación desde una perspectiva diferente.",
    },
    reversed: {
      keywords: ["egoísmo", "resistencia", "estancamiento", "bloqueo"],
      meaning:
        "Puede indicar resistencia a soltar algo, estancamiento o preocupación excesiva por los propios intereses.",
    },
    symbolism:
      "Suspensión: pausa. Posición: perspectiva. Sacrificio: aprendizaje.",
    contextual: {
      home:
        "Los proyectos del hogar o una mudanza pueden posponerse. Conviene continuar planificando mientras se espera.",
      love:
        "Una relación puede quedar en pausa mientras una persona viaja o la pareja se toma un tiempo para decidir su futuro.",
      careerMoney:
        "Retrasos en el trabajo o proyectos y decisiones que permanecen pendientes.",
      spiritual:
        "Período de incubación y procesamiento de nuevas experiencias que amplían la perspectiva.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },

  {
    id: "death",
    name: "La Muerte",
    number: 13,
    arcana: "major",
    image: new URL("./major/13-death.png", import.meta.url).href,
    upright: {
      keywords: ["final", "cambio", "transformación", "pérdida"],
      meaning:
        "Representa el final de una etapa o situación y la transformación que surge a partir de ese cierre.",
    },
    reversed: {
      keywords: ["inercia", "estancamiento", "resistencia", "letargo"],
      meaning:
        "Puede señalar resistencia a cerrar una etapa, estancamiento o dificultad para aceptar un cambio necesario.",
    },
    symbolism:
      "Esqueleto: final. Caballo: avance. Estandarte: transformación.",
    contextual: {
      home:
        "Puede ser momento de dejar el hogar actual o transformarlo completamente para adaptarlo a nuevas circunstancias.",
      love:
        "Finales necesarios y alejamiento de relaciones establecidas que ya no corresponden al futuro.",
      careerMoney:
        "Cambio de carrera o posición que favorece los intereses a largo plazo. En dinero, conviene reducir gastos y concentrarse en lo que ofrece mayores recompensas.",
      spiritual:
        "Mayor conciencia de la dimensión espiritual y de la transformación de la energía más allá de lo físico.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },

  {
    id: "temperance",
    name: "La Templanza",
    number: 14,
    arcana: "major",
    image: new URL("./major/14-temperance.png", import.meta.url).href,
    upright: {
      keywords: ["equilibrio", "moderación", "armonía", "adaptación"],
      meaning:
        "Representa equilibrio y moderación; aconseja combinar elementos de forma cuidadosa y adaptarse a las circunstancias.",
    },
    reversed: {
      keywords: ["desunión", "exceso", "conflicto", "desorden"],
      meaning:
        "Puede indicar excesos, desunión o intereses que no logran combinarse de manera favorable.",
    },
    symbolism:
      "Copas: mezcla. Agua: fluidez. Tierra y agua: equilibrio.",
    contextual: {
      home:
        "Demandas de tiempo relacionadas con distintas generaciones y decisiones familiares sobre mejoras del hogar.",
      love:
        "Intento de satisfacer las expectativas de la pareja y resolver asuntos pendientes de relaciones anteriores.",
      careerMoney:
        "Prestar atención a los detalles y utilizar la experiencia pasada para resolver problemas y manejar situaciones difíciles.",
      spiritual:
        "Mantenerse centrado mientras otras personas reaccionan. Establecer límites adecuados.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },

  {
    id: "the-devil",
    name: "El Diablo",
    number: 15,
    arcana: "major",
    image: new URL("./major/15-the-devil.png", import.meta.url).href,
    upright: {
      keywords: ["fuerza", "intensidad", "poder", "fatalidad"],
      meaning:
        "Representa una fuerza intensa o una situación que ejerce gran poder sobre la persona y puede resultar difícil de controlar.",
    },
    reversed: {
      keywords: ["debilidad", "ceguera", "limitación", "fatalidad"],
      meaning:
        "Puede señalar debilidad, limitaciones o incapacidad para reconocer con claridad aquello que está condicionando la situación.",
    },
    symbolism:
      "Cadenas: atadura. Diablo: poder. Pareja: dependencia.",
    contextual: {
      home:
        "Sensación de inseguridad en el hogar relacionada con deudas o personas problemáticas que se toleran.",
      love:
        "Puede señalar triángulos amorosos, deseo, aventuras o una relación que se ha convertido en obligación.",
      careerMoney:
        "Sensación de estar atrapado económicamente en un trabajo insatisfactorio, o presencia de una persona manipuladora. También puede señalar préstamos o acuerdos que deben terminar.",
      spiritual:
        "Advertencia sobre influencias que absorben energía o condicionan la libertad personal.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },

  {
    id: "the-tower",
    name: "La Torre",
    number: 16,
    arcana: "major",
    image: new URL("./major/16-the-tower.png", import.meta.url).href,
    upright: {
      keywords: ["ruptura", "crisis", "catástrofe", "cambio"],
      meaning:
        "Representa una ruptura repentina o un acontecimiento inesperado que destruye una estructura establecida.",
    },
    reversed: {
      keywords: ["opresión", "prisión", "tiranía", "crisis"],
      meaning:
        "Puede indicar una crisis menos intensa o una situación de opresión, encierro o falta de libertad.",
    },
    symbolism:
      "Rayo: ruptura. Torre: estructura. Caída: cambio repentino.",
    contextual: {
      home:
        "Puede indicar verse obligado a abandonar el hogar, daños materiales o un cambio drástico de planes.",
      love:
        "Revelación impactante. Una relación que parecía estable puede no soportar la presión.",
      careerMoney:
        "Cambio repentino en la dirección o forma de trabajar y riesgo de pérdidas económicas.",
      spiritual:
        "Despertar espiritual intenso o atracción repentina hacia una nueva forma de creencia.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },

  {
    id: "the-star",
    name: "La Estrella",
    number: 17,
    arcana: "major",
    image: new URL("./major/17-the-star.png", import.meta.url).href,
    upright: {
      keywords: ["esperanza", "perspectivas", "pérdida", "abandono"],
      meaning:
        "Puede representar esperanza y buenas perspectivas, aunque Waite también contempla pérdida, privación o abandono.",
    },
    reversed: {
      keywords: ["arrogancia", "orgullo", "impotencia", "bloqueo"],
      meaning:
        "Puede señalar orgullo excesivo o una sensación de impotencia frente a las circunstancias.",
    },
    symbolism:
      "Estrella: guía. Agua: renovación. Tierra: fertilidad.",
    contextual: {
      home:
        "Enfoque en construir un espacio propio, ordenar y renovar la decoración. Sensación de estar a gusto con uno mismo.",
      love:
        "Armonía en las relaciones y posibilidad de sentirse guiado hacia una conexión significativa.",
      careerMoney:
        "Reconocimiento por el trabajo, sensación de estar en el lugar adecuado y llegada de recompensas o dinero.",
      spiritual:
        "Sensación de protección y orientación espiritual; puede aumentar el interés por la sanación y actividades creativas.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },

  {
    id: "the-moon",
    name: "La Luna",
    number: 18,
    arcana: "major",
    image: new URL("./major/18-the-moon.png", import.meta.url).href,
    upright: {
      keywords: ["incertidumbre", "engaño", "miedo", "oculto"],
      meaning:
        "Indica una situación poco clara donde puede haber miedo, engaño, peligro o información que todavía permanece oculta.",
    },
    reversed: {
      keywords: ["inestabilidad", "error", "engaño", "inconstancia"],
      meaning:
        "Puede indicar confusión e inestabilidad, aunque el engaño o el error pueden presentarse de forma menos intensa.",
    },
    symbolism:
      "Luna: incertidumbre. Torres: límites. Camino: desconocido.",
    contextual: {
      home:
        "Dudas sobre una decisión de mudanza o renovación. Necesidad de encontrar tranquilidad y espacio personal dentro del hogar.",
      love:
        "Sensación persistente de que algo no está bien; las emociones pueden generar una crisis de confianza en la relación.",
      careerMoney:
        "Puede surgir una duda sobre las propias ambiciones, y el dinero quizá no sea suficiente para convencerte de permanecer donde estás.",
      spiritual:
        "Mayor sensibilidad emocional y desarrollo de la intuición.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },

  {
    id: "the-sun",
    name: "El Sol",
    number: 19,
    arcana: "major",
    image: new URL("./major/19-the-sun.png", import.meta.url).href,
    upright: {
      keywords: ["felicidad", "éxito", "alegría", "satisfacción"],
      meaning:
        "Representa felicidad, satisfacción y resultados favorables; es una carta asociada con circunstancias positivas.",
    },
    reversed: {
      keywords: ["limitación", "demora", "satisfacción", "éxito"],
      meaning:
        "Mantiene el carácter positivo del Sol, pero sus beneficios pueden manifestarse de forma más limitada.",
    },
    symbolism:
      "Sol: claridad. Niño: vitalidad. Girasoles: vida y crecimiento.",
    contextual: {
      home:
        "Niños y amistades aportan calidez y diversión al hogar. Después de una mudanza, puede señalar una adaptación feliz.",
      love:
        "El amor funciona como refugio y fuente de bienestar. Para personas solteras, puede anunciar una nueva relación.",
      careerMoney:
        "Etapa para disfrutar del éxito y el reconocimiento. Los proyectos y el trabajo reciben aprobación.",
      spiritual:
        "Compartir creencias y experiencias con otras personas. Recuperación de la claridad después de una etapa difícil.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },

  {
    id: "judgement",
    name: "El Juicio",
    number: 20,
    arcana: "major",
    image: new URL("./major/20-judgement.png", import.meta.url).href,
    upright: {
      keywords: ["renovación", "cambio", "resultado", "decisión"],
      meaning:
        "Representa una renovación o cambio de situación y la llegada de un resultado que permite pasar a una nueva etapa.",
    },
    reversed: {
      keywords: ["debilidad", "indecisión", "deliberación", "sentencia"],
      meaning:
        "Puede señalar dificultad para decidir o la necesidad de afrontar una resolución pendiente.",
    },
    symbolism:
      "Trompeta: llamado. Figuras: despertar. Resurrección: renovación.",
    contextual: {
      home:
        "Segundas consideraciones sobre un asunto relacionado con una propiedad. También puede aparecer una casa o lugar conocido del pasado.",
      love:
        "Puede señalar una relación del pasado que todavía ocupa pensamientos o el regreso de una persona para intentarlo nuevamente.",
      careerMoney:
        "Disputas y bloqueos antiguos pueden desaparecer, liberando recursos y creando nuevas oportunidades profesionales.",
      spiritual:
        "Llamado o despertar espiritual y una conexión más fuerte con los guías.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },

  {
    id: "the-world",
    name: "El Mundo",
    number: 21,
    arcana: "major",
    image: new URL("./major/21-the-world.png", import.meta.url).href,
    upright: {
      keywords: ["éxito", "culminación", "recompensa", "viaje"],
      meaning:
        "Representa la culminación de un proceso, éxito y recompensa después de completar un ciclo.",
    },
    reversed: {
      keywords: ["estancamiento", "inercia", "bloqueo", "permanencia"],
      meaning:
        "Puede indicar dificultad para completar un ciclo, estancamiento o una situación que permanece sin resolverse.",
    },
    symbolism:
      "Corona: totalidad. Figura central: culminación. Cuatro figuras: totalidad.",
    contextual: {
      home:
        "Éxito en proyectos relacionados con el hogar. También puede surgir el deseo de buscar otra vivienda o un segundo hogar.",
      love:
        "Relación plena y feliz; posibilidad de celebraciones como bodas o aniversarios.",
      careerMoney:
        "Reconocimiento, viajes de negocios y éxito en exámenes o entrevistas. El dinero puede llegar gracias a esfuerzos anteriores y a la generosidad de otras personas.",
      spiritual:
        "Integración de los aspectos masculino y femenino de uno mismo y sensación de totalidad.",
    },
    yesNo: [],
    sourceIds: [waite, lizDean],
  },
];