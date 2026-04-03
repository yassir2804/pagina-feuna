import { useParams, Link, useNavigate } from "react-router";
import { HeroInternal } from "../HeroInternal";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Calendar, User, Tag, Share2, ArrowLeft, ArrowRight, Facebook, Mail } from "lucide-react";

interface Noticia {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  img: string;
  author: string;
  contenido: string[];
  imagenSecundaria?: string;
  tags: string[];
  relacionadas?: number[];
}

const noticiasCompletas: Noticia[] = [
  {
    id: 1,
    title: "Convocatoria de becas para el II ciclo 2026",
    category: "Becas",
    date: "28 Mar 2026",
    author: "Comisión de Becas FEUNA",
    excerpt: "Se abre el período de solicitud de becas socioeconómicas para el segundo ciclo lectivo. Conocé los requisitos y fechas importantes.",
    img: "https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwbGlicmFyeSUyMHVuaXZlcnNpdHl8ZW58MXx8fHwxNzc1MDY3NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    imagenSecundaria: "scholarship-application-form",
    contenido: [
      "La Federación de Estudiantes de la Universidad Nacional (FEUNA) informa que desde el 1 de abril hasta el 30 de abril de 2026 estará abierto el período de solicitud de becas socioeconómicas para el segundo ciclo lectivo del año 2026.",
      "Las becas están dirigidas a estudiantes de la UNA que se encuentren en condición socioeconómica vulnerable y que cumplan con los requisitos académicos establecidos en el Reglamento General de Becas de la Universidad Nacional.",
      "Para aplicar a la beca, los estudiantes deberán completar el formulario en línea disponible en el Sistema de Becas UNA (SIBEU) y adjuntar la documentación requerida: comprobantes de ingresos familiares, recibos de servicios públicos, certificación de matrícula activa y récord académico actualizado.",
      "Los criterios de evaluación incluyen: índice de condición socioeconómica (60%), rendimiento académico (25%), y avance en el plan de estudios (15%). Las becas pueden cubrir desde el 25% hasta el 100% del costo de matrícula según la condición socioeconómica del estudiante.",
      "Es importante recordar que los estudiantes becados deben mantener un promedio ponderado mínimo de 7.0 y aprobar al menos el 75% de los créditos matriculados para renovar su beneficio en ciclos posteriores.",
      "La Comisión de Becas de la FEUNA estará realizando talleres informativos durante la primera semana de abril en el Campus Omar Dengo y las sedes regionales para orientar a los estudiantes sobre el proceso de solicitud. Se recomienda asistir con documentación en mano para resolver dudas específicas.",
    ],
    tags: ["Becas", "Ayuda Económica", "Estudiantes", "SIBEU", "Matrícula"],
    relacionadas: [5, 4]
  },
  {
    id: 2,
    title: "Resultados de las elecciones estudiantiles 2026",
    category: "FEUNA",
    date: "25 Mar 2026",
    author: "TEEUNA - Tribunal Electoral Estudiantil",
    excerpt: "El Tribunal Electoral Estudiantil publica los resultados oficiales del proceso eleccionario para el período 2026-2028.",
    img: "https://images.unsplash.com/photo-1551731409-43eb3e517a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbWVldGluZyUyMGRpc2N1c3Npb24lMjBncm91cHxlbnwxfHx8fDE3NzUwNjc2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imagenSecundaria: "voting-ballot-election-results",
    contenido: [
      "El Tribunal Electoral Estudiantil de la Universidad Nacional (TEEUNA) publica los resultados oficiales del proceso electoral estudiantil 2026, después de concluir el escrutinio final y resolver las impugnaciones presentadas.",
      "La participación estudiantil alcanzó un histórico 68% del padrón electoral, con 4,523 votos válidos emitidos de un total de 6,652 estudiantes habilitados para votar. Este es el porcentaje de participación más alto de los últimos 10 años, lo que refleja el alto interés del estudiantado en los asuntos de representación.",
      "La coalición 'Universidad para Todas' obtuvo la mayoría de escaños en el Consejo de Asamblea Estudiantil (CAEUNA) con 12 de 21 representaciones, seguida por 'Movimiento Estudiantil Progresista' con 6 escaños y representaciones independientes con 3 escaños.",
      "Para los cargos ejecutivos de la FEUNA, resultó electa la fórmula encabezada por María González (Presidenta) y Carlos Ramírez (Vicepresidente), quienes obtuvieron el 52.3% de los votos válidos. La fórmula ganadora inicia su período el 1 de mayo de 2026 y lo concluirá el 30 de abril de 2028.",
      "El TEEUNA destaca la limpieza y transparencia del proceso electoral, que incluyó fiscales de todas las agrupaciones en cada mesa de votación, transmisión en vivo del conteo de votos, y publicación inmediata de actas digitalizadas. No se reportaron irregularidades graves que afectaran la validez del proceso.",
      "Los nuevos representantes estudiantiles recibirán su credencial oficial en ceremonia de juramentación que se llevará a cabo el próximo 28 de abril en el Auditorio Clodomiro Picado. Se invita a toda la comunidad estudiantil a participar en este acto democrático.",
    ],
    tags: ["Elecciones", "TEEUNA", "CAEUNA", "Democracia", "Participación"],
    relacionadas: [3, 6]
  },
  {
    id: 3,
    title: "Programa de voluntariado comunitario abre inscripciones",
    category: "Oportunidades",
    date: "20 Mar 2026",
    author: "Vicerrectoría de Extensión UNA",
    excerpt: "La FEUNA junto con la Vicerrectoría de Extensión lanza un nuevo programa de voluntariado para comunidades rurales.",
    img: "https://images.unsplash.com/photo-1544928938-6852c1925194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwdm9sdW50ZWVyaW5nJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzc1MDI4NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    imagenSecundaria: "community-volunteer-work-students",
    contenido: [
      "La Federación de Estudiantes (FEUNA) en alianza con la Vicerrectoría de Extensión de la Universidad Nacional lanza el programa 'UNA con las Comunidades', una iniciativa de voluntariado estudiantil dirigida a comunidades rurales de Costa Rica.",
      "El programa busca vincular el conocimiento universitario con las necesidades reales de comunidades en condición de vulnerabilidad, mediante proyectos de acción social en áreas como educación, salud comunitaria, desarrollo productivo, tecnología y medio ambiente.",
      "Los estudiantes voluntarios podrán participar en proyectos de corta duración (fines de semana) o de inmersión completa (una semana durante períodos de receso académico). Todas las actividades están supervisadas por profesores responsables y cuentan con el respaldo institucional de la UNA.",
      "Las comunidades participantes incluyen: San Isidro de Pérez Zeledón, Upala, Los Chiles, Buenos Aires de Puntarenas, y zonas indígenas de Talamanca. Los proyectos específicos se diseñan en conjunto con las organizaciones comunales para garantizar pertinencia y sostenibilidad.",
      "Los estudiantes interesados deben inscribirse mediante el formulario en línea disponible en el portal de Extensión UNA. Se requiere carta de motivación, hoja de vida y disponibilidad para participar en al menos dos proyectos durante el año. La participación es reconocida con un certificado de horas de voluntariado y puede ser incorporada al expediente académico.",
      "Las inscripciones estarán abiertas del 20 de marzo al 10 de abril de 2026. Habrá una sesión informativa obligatoria el 15 de abril a las 3:00 pm en el Auditorio de la Facultad de Ciencias Sociales. El primer proyecto inicia el 25 de abril en la comunidad de Upala.",
    ],
    tags: ["Voluntariado", "Extensión", "Acción Social", "Comunidades", "Oportunidades"],
    relacionadas: [6, 1]
  },
  {
    id: 4,
    title: "Nuevo convenio de salud mental para estudiantes",
    category: "Servicios",
    date: "15 Mar 2026",
    author: "Comisión de Vida Estudiantil FEUNA",
    excerpt: "Se firma convenio con el Colegio de Psicólogos para ofrecer atención psicológica gratuita a estudiantes de la UNA.",
    img: "https://images.unsplash.com/photo-1770721666620-65cb94e2df3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmclMjB0cm9waWNhbHxlbnwxfHx8fDE3NzUwNjc2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imagenSecundaria: "mental-health-counseling-therapy",
    contenido: [
      "La FEUNA y el Colegio Profesional de Psicólogos de Costa Rica firmaron un convenio de cooperación para brindar atención psicológica gratuita a estudiantes de la Universidad Nacional que enfrenten situaciones de crisis emocional, ansiedad, depresión o estrés académico.",
      "El convenio, gestionado por la Comisión de Vida Estudiantil de la FEUNA, permitirá que estudiantes accedan a hasta 10 sesiones de terapia psicológica sin costo durante el año 2026. El servicio es completamente confidencial y voluntario.",
      "Los estudiantes interesados podrán solicitar cita mediante el correo saludmental@feuna.cr o de manera presencial en las oficinas de la FEUNA. Un equipo de psicólogos colegiados atenderá en modalidad presencial en el Campus Omar Dengo y en modalidad virtual para estudiantes de sedes regionales.",
      "Este convenio surge de la necesidad identificada por la FEUNA de fortalecer los servicios de salud mental estudiantil, especialmente después de la pandemia por COVID-19 que incrementó los casos de ansiedad y depresión en población universitaria.",
      "Además del servicio individual de terapia, el convenio incluye talleres grupales sobre manejo de estrés académico, habilidades socioemocionales, y primeros auxilios psicológicos. También se realizarán campañas de sensibilización para reducir el estigma asociado a la atención en salud mental.",
      "La FEUNA hace un llamado a todos los estudiantes a priorizar su salud mental y utilizar los recursos disponibles. 'La salud mental es tan importante como la salud física, y buscar apoyo es un acto de valentía, no de debilidad', destacó la Comisión de Vida Estudiantil.",
    ],
    tags: ["Salud Mental", "Psicología", "Bienestar Estudiantil", "Servicios", "Apoyo"],
    relacionadas: [6, 3]
  },
  {
    id: 5,
    title: "Aprobación de reforma al reglamento de becas",
    category: "Representación",
    date: "10 Mar 2026",
    author: "Representación Estudiantil CONSACA",
    excerpt: "El CONSACA aprobó la reforma impulsada por representantes estudiantiles para ampliar la cobertura de becas.",
    img: "https://images.unsplash.com/photo-1738949538812-aebbb54a0592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc3NTAyNDMwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    imagenSecundaria: "university-council-meeting-approval",
    contenido: [
      "El Consejo Superior Académico (CONSACA) de la Universidad Nacional aprobó por unanimidad la reforma al Reglamento General de Becas, una propuesta impulsada durante meses por la representación estudiantil en el máximo órgano académico de la institución.",
      "La reforma introduce cambios sustanciales que beneficiarán a miles de estudiantes: amplía de 2 a 3 años el período de gracia para estudiantes que pierden beca por bajo rendimiento, elimina la restricción de edad para estudiantes adultos mayores, y permite la acumulación de beca socioeconómica con beca por mérito académico.",
      "Uno de los cambios más significativos es la inclusión de un componente de 'beca de emergencia' que permitirá otorgar apoyos temporales a estudiantes que enfrenten crisis económicas súbitas como desempleo de encargados, desastres naturales, o emergencias médicas familiares.",
      "La representación estudiantil en CONSACA, encabezada por Andrea Mora y Luis Hernández, presentó evidencia recopilada durante dos años sobre casos de estudiantes que abandonaron la universidad por perder becas tras un solo ciclo de bajo rendimiento, muchas veces causado por situaciones de crisis personal.",
      "La reforma también establece un nuevo mecanismo de apelación más transparente y expedito, con plazos claros de respuesta (máximo 15 días hábiles) y la posibilidad de presentar nuevos documentos probatorios durante el proceso de apelación.",
      "Los cambios entrarán en vigencia a partir del segundo ciclo lectivo 2026 y se aplicarán retroactivamente a estudiantes que perdieron beca en el primer ciclo 2026, quienes podrán solicitar revisión de su caso bajo los nuevos criterios.",
    ],
    tags: ["Becas", "Representación", "CONSACA", "Reforma", "Estudiantes"],
    relacionadas: [1, 2]
  },
  {
    id: 6,
    title: "Taller de habilidades blandas para el mercado laboral",
    category: "Académico",
    date: "5 Mar 2026",
    author: "Comisión de Asuntos Académicos FEUNA",
    excerpt: "Inscribite en el taller gratuito sobre comunicación, liderazgo y trabajo en equipo organizado por la comisión de Asuntos Académicos.",
    img: "https://images.unsplash.com/photo-1703779406420-2bbdfd76e41d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBsYXRpbiUyMGFtZXJpY2F8ZW58MXx8fHwxNzc1MDY3NjY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    imagenSecundaria: "professional-workshop-leadership-training",
    contenido: [
      "La Comisión de Asuntos Académicos de la FEUNA, en alianza con la Cámara de Comercio de Costa Rica, lanza el programa 'Potenciá tu perfil profesional', un ciclo de talleres gratuitos sobre habilidades blandas esenciales para el mercado laboral del siglo XXI.",
      "El programa incluye cuatro talleres intensivos: (1) Comunicación efectiva y presentaciones ejecutivas, (2) Liderazgo y gestión de equipos, (3) Resolución de conflictos y negociación, y (4) Inteligencia emocional en el trabajo. Cada taller tiene una duración de 6 horas distribuidas en dos sesiones.",
      "Los talleres serán facilitados por profesionales del área de recursos humanos y desarrollo organizacional con amplia experiencia en empresas nacionales e internacionales. Incluyen ejercicios prácticos, simulaciones de casos reales, y retroalimentación personalizada.",
      "Esta iniciativa surge del diagnóstico realizado por la Comisión de Asuntos Académicos que identificó que, si bien los estudiantes de la UNA poseen sólida formación técnica, muchos carecen de entrenamiento formal en habilidades interpersonales que son altamente valoradas por empleadores.",
      "Los talleres están abiertos a estudiantes de todas las carreras y niveles académicos. Cupo limitado a 30 personas por taller. Los participantes que completen el ciclo completo recibirán un certificado avalado por la FEUNA y la Cámara de Comercio, útil para incluir en el currículum vitae.",
      "Las inscripciones se realizan mediante formulario en línea disponible en el sitio web de FEUNA. El primer taller inicia el 15 de abril de 2026. Se dará prioridad a estudiantes de últimos años de carrera y egresados recientes que estén en búsqueda activa de empleo.",
    ],
    tags: ["Habilidades Blandas", "Empleabilidad", "Talleres", "Desarrollo Profesional", "Académico"],
    relacionadas: [3, 4]
  },
];

export function NoticiaDetallePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const noticia = noticiasCompletas.find(n => n.id === Number(id));

  if (!noticia) {
    return (
      <div>
        <HeroInternal
          title="Noticia no encontrada"
          subtitle="La noticia que buscás no existe o fue movida."
          breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Noticias", href: "/noticias" }, { label: "No encontrada" }]}
        />
        <section className="py-16 text-center">
          <div className="max-w-[600px] mx-auto px-5">
            <p className="mb-6" style={{ fontSize: '16px', color: '#666666' }}>
              La noticia que intentás acceder no está disponible.
            </p>
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 bg-[#bb1f1f] text-white px-6 py-3 rounded hover:bg-[#a01919] transition-colors"
              style={{ fontSize: '15px', fontWeight: 600 }}
            >
              <ArrowLeft size={18} />
              Volver a noticias
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const noticiasRelacionadas = noticia.relacionadas
    ? noticiasCompletas.filter(n => noticia.relacionadas?.includes(n.id))
    : noticiasCompletas.filter(n => n.id !== noticia.id && n.category === noticia.category).slice(0, 2);

  return (
    <div>
      <HeroInternal
        title={noticia.title}
        subtitle=""
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Noticias", href: "/noticias" },
          { label: noticia.category }
        ]}
      />

      {/* Imagen destacada y metadatos */}
      <section className="py-8 bg-white border-b border-[#dddddd]">
        <div className="max-w-[900px] mx-auto px-5">
          {/* Metadatos */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-[#bb1f1f] text-white px-4 py-1.5 rounded" style={{ fontSize: '13px', fontWeight: 600 }}>
              {noticia.category}
            </span>
            <div className="flex items-center gap-2 text-[#666666]" style={{ fontSize: '14px' }}>
              <Calendar size={16} />
              <span>{noticia.date}</span>
            </div>
            <div className="flex items-center gap-2 text-[#666666]" style={{ fontSize: '14px' }}>
              <User size={16} />
              <span>{noticia.author}</span>
            </div>
          </div>

          {/* Imagen principal */}
          <div className="rounded-lg overflow-hidden mb-6">
            <ImageWithFallback
              src={noticia.img}
              alt={noticia.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Extracto */}
          <p className="text-[#666666] border-l-4 border-[#bb1f1f] pl-4 italic" style={{ fontSize: '17px', lineHeight: 1.7 }}>
            {noticia.excerpt}
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-12 bg-[#f5f5f5]">
        <div className="max-w-[900px] mx-auto px-5">
          <div className="bg-white rounded-lg border border-[#dddddd] p-8 lg:p-12">
            <div className="prose max-w-none">
              {noticia.contenido.map((parrafo, idx) => (
                <p
                  key={idx}
                  className="mb-5 text-[#333333]"
                  style={{ fontSize: '16px', lineHeight: 1.8 }}
                >
                  {parrafo}
                </p>
              ))}

              {/* Imagen secundaria (placeholder) */}
              {noticia.imagenSecundaria && (
                <div className="my-8 rounded-lg overflow-hidden border border-[#dddddd]">
                  <ImageWithFallback
                    src={`https://via.placeholder.com/900x500/e5e5e5/666666?text=${encodeURIComponent(noticia.imagenSecundaria)}`}
                    alt="Imagen relacionada"
                    className="w-full h-auto"
                  />
                  <div className="bg-[#f5f5f5] px-4 py-2 text-center">
                    <p className="text-[#999999]" style={{ fontSize: '13px', fontStyle: 'italic' }}>
                      Placeholder: {noticia.imagenSecundaria}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-[#dddddd]">
              <div className="flex items-center gap-2 mb-3">
                <Tag size={18} className="text-[#666666]" />
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Etiquetas
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {noticia.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#f5f5f5] text-[#666666] px-3 py-1 rounded border border-[#dddddd] hover:bg-[#034991]/10 hover:border-[#034991] hover:text-[#034991] transition-colors cursor-pointer"
                    style={{ fontSize: '13px', fontWeight: 500 }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Compartir */}
            <div className="mt-8 pt-6 border-t border-[#dddddd]">
              <div className="flex items-center gap-2 mb-4">
                <Share2 size={18} className="text-[#666666]" />
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Compartir esta noticia
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 bg-[#1877f2] text-white px-4 py-2 rounded hover:bg-[#1665d8] transition-colors">
                  <Facebook size={18} />
                  <span style={{ fontSize: '14px', fontWeight: 500 }}>Facebook</span>
                </button>
                <button className="flex items-center gap-2 bg-[#000000] text-white px-4 py-2 rounded hover:bg-[#111111] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  <span style={{ fontSize: '14px', fontWeight: 500 }}>TikTok</span>
                </button>
                <button className="flex items-center gap-2 bg-[#666666] text-white px-4 py-2 rounded hover:bg-[#555555] transition-colors">
                  <Mail size={18} />
                  <span style={{ fontSize: '14px', fontWeight: 500 }}>Email</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Noticias relacionadas */}
      {noticiasRelacionadas.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="mb-8" style={{ fontSize: '24px', fontWeight: 700, color: '#1a1a1a' }}>
              Noticias relacionadas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {noticiasRelacionadas.map((n) => (
                <Link
                  key={n.id}
                  to={`/noticias/${n.id}`}
                  className="bg-white rounded-lg border border-[#dddddd] overflow-hidden hover:shadow-md transition-shadow group"
                >
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={n.img}
                      alt={n.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-[#bb1f1f]/10 text-[#bb1f1f] px-2.5 py-0.5 rounded" style={{ fontSize: '12px', fontWeight: 600 }}>
                        {n.category}
                      </span>
                      <span className="flex items-center gap-1 text-[#999]" style={{ fontSize: '12px' }}>
                        <Calendar size={12} /> {n.date}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a', lineHeight: 1.4 }}>
                      {n.title}
                    </h3>
                    <p className="text-[#666666] mt-2" style={{ fontSize: '14px', lineHeight: 1.5 }}>
                      {n.excerpt}
                    </p>
                    <div className="inline-flex items-center gap-1 text-[#bb1f1f] mt-3 group-hover:underline" style={{ fontSize: '14px', fontWeight: 500 }}>
                      Leer más <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA de navegación */}
      <section className="py-12 bg-[#f5f5f5] border-t border-[#dddddd]">
        <div className="max-w-[900px] mx-auto px-5">
          <div className="flex flex-wrap gap-4 justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-[#666666] hover:text-[#bb1f1f] transition-colors"
              style={{ fontSize: '15px', fontWeight: 600 }}
            >
              <ArrowLeft size={18} />
              Volver atrás
            </button>
            <Link
              to="/noticias"
              className="flex items-center gap-2 bg-[#bb1f1f] text-white px-6 py-3 rounded hover:bg-[#a01919] transition-colors"
              style={{ fontSize: '15px', fontWeight: 600 }}
            >
              Ver todas las noticias
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
