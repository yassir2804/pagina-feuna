export interface Evento {
  id: number;
  titulo: string;
  fecha: string; // formato: "2026-04-15"
  horaInicio: string;
  horaFin: string;
  lugar: string;
  categoria: "feuna" | "cultural" | "deportivo" | "taller" | "foro" | "academico";
  organizador: string;
  descripcion: string;
  descripcionLarga?: string;
  imagen?: string;
  requisitos?: string[];
  cupoLimitado?: boolean;
  inscripcionRequerida?: boolean;
  contacto?: string;
}

export interface Categoria {
  id: string;
  nombre: string;
  color: string;
}

export const categorias: Categoria[] = [
  { id: "todas", nombre: "Todas", color: "#666666" },
  { id: "feuna", nombre: "FEUNA", color: "#bb1f1f" },
  { id: "taller", nombre: "Talleres", color: "#034991" },
  { id: "foro", nombre: "Foros", color: "#2d7a3e" },
  { id: "cultural", nombre: "Cultural", color: "#c75b12" },
  { id: "deportivo", nombre: "Deportivo", color: "#8e44ad" },
  { id: "academico", nombre: "Académico", color: "#16a085" },
];

export const eventos: Evento[] = [
  {
    id: 1,
    titulo: "Foro: Futuro de la educación superior pública",
    fecha: "2026-04-05",
    horaInicio: "14:00",
    horaFin: "17:00",
    lugar: "Auditorio Clodomiro Picado",
    categoria: "foro",
    organizador: "DEUNA",
    descripcion: "Espacio de diálogo sobre los retos y oportunidades de la educación superior pública en Costa Rica.",
    descripcionLarga: "Foro abierto para discutir el futuro de la educación superior pública en Costa Rica. Panelistas invitados incluyen rectores, representantes estudiantiles y expertos en educación. Se abordarán temas como financiamiento, acceso, calidad académica y autonomía universitaria. Habrá espacio para preguntas y participación del público. Este evento es fundamental para construir una visión compartida sobre el papel de las universidades públicas en el desarrollo del país.",
    imagen: "university-campus-building",
    inscripcionRequerida: false,
    cupoLimitado: false,
    contacto: "deuna@feuna.cr"
  },
  {
    id: 2,
    titulo: "Taller de primeros auxilios emocionales",
    fecha: "2026-04-12",
    horaInicio: "10:00",
    horaFin: "13:00",
    lugar: "Edificio de Vida Estudiantil",
    categoria: "taller",
    organizador: "Comisión de Vida Estudiantil",
    descripcion: "Aprende técnicas básicas de contención emocional y apoyo a compañeros en crisis.",
    descripcionLarga: "Taller práctico donde aprenderás técnicas de contención emocional, escucha activa y primeros auxilios psicológicos. El taller incluye ejercicios prácticos, simulaciones y discusión de casos reales. Es ideal para quienes desean desarrollar habilidades para apoyar a compañeros en momentos de crisis emocional. Facilitado por profesionales en psicología de la UNA.",
    imagen: "mental-health-support-group",
    inscripcionRequerida: true,
    cupoLimitado: true,
    requisitos: [
      "Ser estudiante activo de la UNA",
      "Inscripción previa obligatoria (cupo máximo: 30 personas)",
      "Compromiso de asistencia completa al taller"
    ],
    contacto: "vidaestudiantil@feuna.cr"
  },
  {
    id: 3,
    titulo: "Asamblea General Ordinaria FEUNA",
    fecha: "2026-04-18",
    horaInicio: "15:00",
    horaFin: "18:00",
    lugar: "Auditorio UNA Campus",
    categoria: "feuna",
    organizador: "CAEUNA",
    descripcion: "Asamblea general ordinaria para discutir temas de importancia estudiantil y aprobar iniciativas.",
    descripcionLarga: "Asamblea General Ordinaria de la FEUNA convocada según estatuto. En esta sesión se discutirán y aprobarán iniciativas estudiantiles, se presentarán informes de las comisiones, y se abordarán temas de interés general. Es un espacio democrático de participación donde todos los estudiantes pueden ejercer su voz y voto. Se tratarán propuestas de reforma reglamentaria, proyectos de inversión estudiantil y seguimiento a acuerdos previos.",
    imagen: "student-assembly-meeting",
    inscripcionRequerida: false,
    cupoLimitado: false,
    requisitos: [
      "Abierto a todo el estudiantado de la UNA",
      "Para ejercer derecho a voto: estar empadronado y presentar carné estudiantil",
      "Se levantará acta oficial de la sesión"
    ],
    contacto: "caeuna@feuna.cr"
  },
  {
    id: 4,
    titulo: "Festival Cultural Intercampus",
    fecha: "2026-04-20",
    horaInicio: "09:00",
    horaFin: "16:00",
    lugar: "Campus Omar Dengo",
    categoria: "cultural",
    organizador: "Movimiento Estudiantil Indígena",
    descripcion: "Celebración de la diversidad cultural con música, danza, gastronomía y artesanía de diferentes regiones.",
    descripcionLarga: "Festival multicultural que celebra la riqueza de los pueblos indígenas y la diversidad cultural de Costa Rica. Incluye presentaciones de danza tradicional, música autóctona, exposiciones de artesanía, venta de gastronomía típica y talleres culturales. Participan estudiantes de diferentes pueblos indígenas (Bribri, Cabécar, Maleku, Ngäbe, entre otros) y aliados que celebran la interculturalidad. Es una oportunidad única para aprender, compartir y valorar las tradiciones ancestrales.",
    imagen: "cultural-diversity-festival",
    inscripcionRequerida: false,
    cupoLimitado: false,
    contacto: "asomei@una.cr"
  },
  {
    id: 5,
    titulo: "Torneo Interfacultades de Fútbol",
    fecha: "2026-04-22",
    horaInicio: "08:00",
    horaFin: "12:00",
    lugar: "Cancha principal UNA",
    categoria: "deportivo",
    organizador: "Comisión de Deportes",
    descripcion: "Torneo deportivo con participación de equipos de todas las facultades y sedes.",
    descripcionLarga: "Torneo de fútbol interfacultades que reúne a equipos representantes de todas las facultades y sedes de la UNA. Es una jornada de sana competencia deportiva, compañerismo y espíritu universitario. Se jugarán partidos eliminatorios durante toda la mañana, con premiación a los tres primeros lugares. Incluye arbitraje oficial, premiación con trofeos y refrigerio para los participantes. Abierto a aficionados que deseen apoyar a sus facultades.",
    imagen: "university-soccer-tournament",
    inscripcionRequerida: true,
    cupoLimitado: true,
    requisitos: [
      "Equipos de máximo 12 jugadores por facultad",
      "Inscripción de equipos cierra el 15 de abril",
      "Cada jugador debe presentar carné estudiantil vigente"
    ],
    contacto: "deportes@feuna.cr"
  },
  {
    id: 6,
    titulo: "Charla: Derechos estudiantiles y reglamentos",
    fecha: "2026-04-25",
    horaInicio: "16:00",
    horaFin: "18:00",
    lugar: "Sala de Reuniones FEUNA",
    categoria: "academico",
    organizador: "Defensoría Estudiantil",
    descripcion: "Sesión informativa sobre derechos estudiantiles, reglamentos académicos y procedimientos de apelación.",
    descripcionLarga: "Charla informativa dirigida por la Defensoría Estudiantil sobre derechos y deberes del estudiantado según el Estatuto Orgánico y reglamentos de la UNA. Se explicarán procedimientos de apelación académica, recursos de revocatoria, derechos ante sanciones disciplinarias y mecanismos de defensa estudiantil. Incluye casos prácticos, preguntas frecuentes y espacio para consultas individuales. Fundamental para conocer tus derechos y hacerlos valer.",
    imagen: "students-studying-library",
    inscripcionRequerida: false,
    cupoLimitado: true,
    requisitos: [
      "Cupo limitado a 50 personas (por capacidad de sala)",
      "Se recomienda llevar libreta para tomar notas"
    ],
    contacto: "defensoria.feuna@una.cr"
  },
  {
    id: 7,
    titulo: "Taller de gestión de proyectos estudiantiles",
    fecha: "2026-04-28",
    horaInicio: "13:00",
    horaFin: "16:00",
    lugar: "Aula Magna",
    categoria: "taller",
    organizador: "DEUNA",
    descripcion: "Aprende a diseñar, gestionar y ejecutar proyectos estudiantiles de manera efectiva.",
    descripcionLarga: "Taller práctico de capacitación en gestión de proyectos estudiantiles. Aprenderás metodologías de planificación, formulación de objetivos, gestión de recursos, cronogramas y evaluación de impacto. Incluye ejercicios grupales donde diseñarás un proyecto desde cero. Ideal para estudiantes que lideran iniciativas, asociaciones o comisiones y desean profesionalizar su trabajo organizativo. Se entregará material didáctico y certificado de participación.",
    imagen: "project-management-workshop",
    inscripcionRequerida: true,
    cupoLimitado: true,
    requisitos: [
      "Inscripción previa obligatoria (cupo máximo: 40 personas)",
      "Llevar computadora portátil (opcional pero recomendado)",
      "Compromiso de asistencia completa"
    ],
    contacto: "capacitacion@feuna.cr"
  },
  {
    id: 8,
    titulo: "Foro: Transparencia y rendición de cuentas",
    fecha: "2026-05-03",
    horaInicio: "14:00",
    horaFin: "17:00",
    lugar: "Auditorio Clodomiro Picado",
    categoria: "foro",
    organizador: "CEFEUNA",
    descripcion: "Presentación de informes financieros y espacio de rendición de cuentas del gobierno estudiantil.",
    descripcionLarga: "Foro de transparencia donde la Contraloría Estudiantil (CEFEUNA) presenta el informe financiero del primer trimestre 2026. Se expondrán ingresos, egresos, proyectos financiados y auditorías realizadas. Es un espacio democrático donde el estudiantado puede solicitar aclaraciones, hacer consultas y fiscalizar el uso de recursos. Se entregarán copias impresas del informe y estará disponible en línea. Fundamental para ejercer contraloría social sobre la gestión estudiantil.",
    imagen: "financial-transparency-meeting",
    inscripcionRequerida: false,
    cupoLimitado: false,
    contacto: "cefeuna@feuna.cr"
  },
  {
    id: 9,
    titulo: "Semana de la Diversidad Cultural",
    fecha: "2026-05-10",
    horaInicio: "09:00",
    horaFin: "17:00",
    lugar: "Plaza Central UNA",
    categoria: "cultural",
    organizador: "Movimiento Estudiantil Indígena",
    descripcion: "Semana completa de actividades culturales, talleres de idiomas originarios, gastronomía y tradiciones.",
    descripcionLarga: "Semana intensiva de celebración de la diversidad cultural de los pueblos indígenas de Costa Rica. Programación completa de lunes a viernes con talleres de idiomas originarios (Bribri, Cabécar, Maleku), demostraciones de artesanía tradicional, cine-foros sobre pueblos indígenas, conferencias académicas sobre cosmovisión indígena, y presentaciones artísticas. Incluye feria gastronómica con platillos típicos y venta de artesanía hecha por estudiantes indígenas. Una oportunidad única de inmersión cultural y aprendizaje intercultural.",
    imagen: "indigenous-cultural-week",
    inscripcionRequerida: false,
    cupoLimitado: false,
    contacto: "asomei@una.cr"
  },
  {
    id: 10,
    titulo: "Asamblea extraordinaria de presupuesto",
    fecha: "2026-05-15",
    horaInicio: "15:00",
    horaFin: "19:00",
    lugar: "Auditorio UNA Campus",
    categoria: "feuna",
    organizador: "CAEUNA",
    descripcion: "Aprobación del presupuesto estudiantil para el segundo semestre 2026.",
    descripcionLarga: "Asamblea General Extraordinaria convocada específicamente para discutir y aprobar el presupuesto estudiantil del segundo semestre 2026. Se presentará el proyecto de presupuesto con desglose detallado de ingresos proyectados (FEES, ingresos propios) y egresos planificados por área (comisiones, proyectos, gastos administrativos). El estudiantado podrá proponer modificaciones, reasignaciones y nuevos proyectos. Se requiere quórum calificado para la aprobación. Ejercicio democrático fundamental de gestión financiera estudiantil.",
    imagen: "budget-assembly-voting",
    inscripcionRequerida: false,
    cupoLimitado: false,
    requisitos: [
      "Abierto a todo el estudiantado empadronado",
      "Derecho a voz: cualquier estudiante UNA",
      "Derecho a voto: estudiantes empadronados con carné vigente",
      "Se levantará acta oficial y será publicada en transparencia"
    ],
    contacto: "caeuna@feuna.cr"
  },
];

export const getCategoriaColor = (categoria: string): string => {
  return categorias.find(c => c.id === categoria)?.color || "#666666";
};
