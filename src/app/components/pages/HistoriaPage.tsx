import { HeroPageTitle } from "../HeroPageTitle";
import { BookOpen, Users, Scale, Clock, ChevronRight, Archive, FileText, Quote } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

const conceptosClave = [
  { icono: Clock, titulo: "Memoria estudiantil", desc: "La historia viva del movimiento estudiantil de la UNA" },
  { icono: Scale, titulo: "Cogobierno universitario", desc: "Representación estudiantil en la toma de decisiones" },
  { icono: Users, titulo: "Representación y organización", desc: "Gobierno estudiantil democrático y participativo" },
  { icono: Archive, titulo: "Continuidad histórica", desc: "Herencia normalista y tradición de lucha" },
];

const antecedentes = [
  {
    titulo: "Escuela Normal de Costa Rica",
    periodo: "1914-1940",
    desc: "Tradición de educación popular, formación docente y compromiso social que hereda el movimiento estudiantil universitario.",
  },
  {
    titulo: "Escuela Normal Superior",
    periodo: "1968-1973",
    desc: "Antecedente directo de la UNA. Formación de maestros de secundaria con visión crítica y compromiso social.",
  },
  {
    titulo: "Lucha contra Alcoa",
    periodo: "1970",
    desc: "Hito de politización estudiantil. Movimiento que articuló estudiantes normalistas contra la explotación de bauxita.",
  },
];

const etapas = [
  {
    titulo: "Antecedentes y herencia normalista",
    periodo: "1914-1973",
    desc: "Tradición educativa heredada de las Escuelas Normales. Compromiso social, formación crítica y defensa de la educación pública.",
    hitos: ["Escuela Normal de Costa Rica (1914)", "Escuela Normal Superior (1968)", "Movimiento contra Alcoa (1970)"],
  },
  {
    titulo: "Nacimiento de la UNA y primeras luchas",
    periodo: "1973-1974",
    desc: "Creación de la Universidad Nacional como 'Universidad Necesaria'. Inicio del movimiento estudiantil y primeras formas de organización estudiantil.",
    hitos: ["Fundación de la UNA (1973)", "Primeras organizaciones estudiantiles", "Creación de la FEUNA (1974)"],
  },
  {
    titulo: "Consolidación de la FEUNA",
    periodo: "1974-1985",
    desc: "Consolidación del gobierno estudiantil federado. Fortalecimiento del 25% de representación en órganos universitarios y construcción institucional.",
    hitos: ["Formalización de la FEUNA (1974)", "Consolidación del estatuto", "Representación del 25% en cogobierno"],
  },
  {
    titulo: "Reconfiguraciones y luchas de los 80 y 90",
    periodo: "1985-2000",
    desc: "Defensa del presupuesto universitario, consolidación del sistema de becas y lucha por derechos estudiantiles en contexto de ajuste estructural.",
    hitos: ["Defensa del FEES", "Luchas por becas socioeconómicas", "Regionalización universitaria"],
  },
  {
    titulo: "Transformaciones del siglo XXI",
    periodo: "2000-2015",
    desc: "Nuevas agendas: accesibilidad, diversidad, género, derechos humanos. Luchas contra el TLC y defensa de la universidad pública.",
    hitos: ["Movimiento contra el TLC (2007)", "Agenda de accesibilidad y LESCO", "Derechos de madres y padres estudiantes"],
  },
  {
    titulo: "Etapas recientes",
    periodo: "2015-actualidad",
    desc: "Renovación del movimiento estudiantil. Énfasis en salud mental, diversidad sexual, enfoque de género y defensa integral de derechos.",
    hitos: ["Servicios de salud mental", "Políticas de género y diversidad", "Digitalización y transparencia"],
  },
];

const presidencias = [
  {
    nombre: "Quince Duncan Moodie",
    periodo: "Década de 1970",
    desc: "Uno de los primeros presidentes del movimiento estudiantil de la UNA. Intelectual afrodescendiente, escritor y defensor de derechos humanos.",
    hitos: ["Consolidación del movimiento estudiantil naciente", "Articulación con luchas sociales"],
    etiqueta: "Fundacional",
  },
  {
    nombre: "Olman Segura Bonilla",
    periodo: "Década de 1980",
    desc: "Dirigente estudiantil durante periodo de consolidación institucional y defensa de la universidad pública.",
    hitos: ["Defensa del presupuesto universitario", "Fortalecimiento del cogobierno"],
    etiqueta: "Consolidación",
  },
  {
    nombre: "Jaime Gamboa Goldenberg",
    periodo: "Década de 1990",
    desc: "Liderazgo estudiantil en periodo de transformaciones económicas y sociales. Defensa del modelo de universidad pública.",
    hitos: ["Luchas contra ajuste estructural", "Defensa de becas y servicios"],
    etiqueta: "Resistencia",
  },
  {
    nombre: "Franky González Conejo",
    periodo: "Década de 2000",
    desc: "Participación activa en movimiento contra el TLC y defensa de la educación superior pública costarricense.",
    hitos: ["Movimiento contra el TLC", "Articulación nacional estudiantil"],
    etiqueta: "Movilización",
  },
  {
    nombre: "Daniela Alpízar Hidalgo",
    periodo: "Década de 2010",
    desc: "Liderazgo con enfoque de género y derechos humanos. Impulso de agendas de diversidad e inclusión en el movimiento estudiantil.",
    hitos: ["Políticas de género", "Servicios de salud integral"],
    etiqueta: "Transformación",
  },
  {
    nombre: "Marco Zúñiga Badilla",
    periodo: "Década de 2010",
    desc: "Gestión enfocada en transparencia, modernización institucional y fortalecimiento de servicios estudiantiles.",
    hitos: ["Modernización de servicios", "Fortalecimiento institucional"],
    etiqueta: "Modernización",
  },
  {
    nombre: "Raquel Loría Quesada",
    periodo: "2023-2025",
    desc: "Gestión reciente enfocada en consolidación institucional y continuidad de agendas de derechos estudiantiles.",
    hitos: ["Fortalecimiento de servicios", "Agenda de derechos estudiantiles"],
    etiqueta: "Reciente",
  },
  {
    nombre: "Marco Víquez Fallas",
    periodo: "2025-actualidad",
    desc: "Gestión actual del gobierno estudiantil. Continuidad de agendas históricas y nuevos desafíos contemporáneos.",
    hitos: ["Gestión actual en desarrollo", "Agenda en construcción"],
    etiqueta: "Actual",
  },
];

const hitosTemáticos = [
  { titulo: "Cogobierno estudiantil", periodo: "Desde 1973", desc: "Representación estudiantil en la toma de decisiones universitarias." },
  { titulo: "Representación del 25%", periodo: "Desde formalización", desc: "Participación estudiantil en todos los órganos de gobierno universitario." },
  { titulo: "Presupuesto y FEES", periodo: "Lucha histórica", desc: "Defensa del financiamiento público de la educación superior." },
  { titulo: "Becas socioeconómicas", periodo: "Conquista permanente", desc: "Sistema de becas para garantizar acceso a la educación." },
  { titulo: "Costo del crédito", periodo: "Agenda permanente", desc: "Lucha por gratuidad y accesibilidad económica a la universidad." },
  { titulo: "Regionalización", periodo: "Desde los 80", desc: "Defensa de sedes regionales y descentralización universitaria." },
  { titulo: "Accesibilidad y LESCO", periodo: "Siglo XXI", desc: "Derechos de estudiantes con discapacidad y reconocimiento de LESCO." },
  { titulo: "Madres y padres estudiantes", periodo: "Agenda reciente", desc: "Derechos y servicios para estudiantes con responsabilidades parentales." },
  { titulo: "Diversidad y género", periodo: "Transformación actual", desc: "Políticas de inclusión, enfoque de género y diversidad sexual." },
  { titulo: "Derechos humanos", periodo: "Eje transversal", desc: "Defensa integral de derechos estudiantiles y humanos." },
  { titulo: "Salud mental", periodo: "Agenda contemporánea", desc: "Servicios de atención psicológica y bienestar emocional." },
  { titulo: "Participación política", periodo: "Derecho fundamental", desc: "Espacios democráticos de participación y toma de decisiones." },
];

export function HistoriaPage() {
  const [etapaSeleccionada, setEtapaSeleccionada] = useState<number | null>(null);

  return (
    <div>
      {/* Hero Principal */}
      <HeroPageTitle
        title="Historia de la FEUNA"
        subtitle="Memoria, evolución y principales hitos del movimiento estudiantil federado en la Universidad Nacional"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Información general" }, { label: "Historia" }]}
      />

      {/* Bloque Introductorio */}
      <section className="py-12 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-[800px] mx-auto text-center mb-10">
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#333333' }}>
              La historia de la FEUNA debe entenderse como un <strong>proceso histórico y político</strong>, no solo como una lista de presidencias. 
              Es una historia de luchas, transformaciones, conquistas y construcción colectiva del movimiento estudiantil en la Universidad Nacional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conceptosClave.map((concepto, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-[#dddddd] text-center">
                <concepto.icono size={32} className="text-[#bb1f1f] mx-auto mb-3" />
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>{concepto.titulo}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>{concepto.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Antecedentes */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-[800px] mx-auto text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Antecedentes del movimiento estudiantil</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              La historia de la FEUNA no comienza de cero. Tiene raíces en la tradición normalista costarricense y en las luchas estudiantiles previas a la creación de la UNA.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {antecedentes.map((ant, i) => (
              <div key={i} className="bg-[#f5f5f5] p-8 rounded-lg border-l-4 border-[#bb1f1f]">
                <div className="text-[#bb1f1f] mb-2" style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {ant.periodo}
                </div>
                <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>{ant.titulo}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>{ant.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nace la UNA */}
      <section className="py-16 bg-[#034991] text-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block bg-white/10 px-4 py-1 rounded mb-4" style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.5px' }}>
                HITO FUNDACIONAL
              </div>
              <div className="text-white/60 mb-3" style={{ fontSize: '64px', fontWeight: 700, lineHeight: 1 }}>1973</div>
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: 700 }}>Nace la Universidad Nacional</h2>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: 1.7 }}>
                El 14 de febrero de 1973 se crea la <strong>Universidad Nacional</strong> como la "Universidad Necesaria": 
                un proyecto de educación superior pública, popular, regional y comprometida con la transformación social.
              </p>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: 1.7 }}>
                Desde el inicio de clases en 1973, surge un movimiento estudiantil activo que hereda la tradición normalista 
                y se articula en torno al nuevo proyecto universitario.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.7 }}>
                Este es el <strong>contexto de origen</strong> del gobierno estudiantil y de lo que posteriormente se formalizará como la FEUNA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Origen del gobierno estudiantil */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-[800px] mx-auto text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Creación de la FEUNA (1974)</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              En 1974 se formaliza la <strong>Federación de Estudiantes de la Universidad Nacional (FEUNA)</strong> mediante 
              un congreso estudiantil fundacional, consolidando las formas iniciales de organización estudiantil surgidas desde 
              la creación de la UNA.
            </p>
          </div>
          <div className="relative max-w-[900px] mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#dddddd] hidden md:block"></div>
            <div className="space-y-8">
              <div className="relative bg-[#f5f5f5] p-8 rounded-lg border-l-4 border-[#bb1f1f] md:ml-20">
                <div className="absolute -left-[90px] top-8 bg-[#bb1f1f] text-white px-3 py-1 rounded hidden md:block" style={{ fontSize: '12px', fontWeight: 700 }}>
                  1973
                </div>
                <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>Primeras formas de gobierno estudiantil</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  Desde la creación de la UNA en 1973, surgen formas iniciales de representación y organización estudiantil. 
                  Estudiantes participan en órganos universitarios y construyen espacios de articulación política y gremial.
                </p>
              </div>
              <div className="relative bg-[#f5f5f5] p-8 rounded-lg border-l-4 border-[#034991] md:ml-20">
                <div className="absolute -left-[90px] top-8 bg-[#034991] text-white px-3 py-1 rounded hidden md:block" style={{ fontSize: '12px', fontWeight: 700 }}>
                  1974
                </div>
                <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>Creación formal de la FEUNA</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  En 1974 se realiza el congreso estudiantil fundacional y se aprueba el estatuto que formaliza la 
                  <strong> Federación de Estudiantes de la Universidad Nacional (FEUNA)</strong> como órgano representativo 
                  oficial del estudiantado dentro del modelo de cogobierno universitario.
                </p>
              </div>
              <div className="relative bg-[#034991] text-white p-8 rounded-lg md:ml-20">
                <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: 700 }}>Consolidación del cogobierno estudiantil</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
                  La FEUNA se consolida como la federación que representa al estudiantado en los órganos de cogobierno universitario, 
                  con el <strong>25% de representación estudiantil</strong> en las instancias de decisión de la Universidad Nacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Etapas de la FEUNA */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Etapas de la FEUNA</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              La historia del movimiento estudiantil federado puede entenderse por grandes etapas históricas y políticas.
            </p>
          </div>
          <div className="space-y-6">
            {etapas.map((etapa, i) => (
              <div 
                key={i} 
                className="bg-white rounded-lg border border-[#dddddd] overflow-hidden cursor-pointer transition-shadow hover:shadow-md"
                onClick={() => setEtapaSeleccionada(etapaSeleccionada === i ? null : i)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-[#bb1f1f] text-white px-3 py-1 rounded" style={{ fontSize: '12px', fontWeight: 700 }}>
                          {etapa.periodo}
                        </span>
                        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a' }}>{etapa.titulo}</h3>
                      </div>
                      <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>{etapa.desc}</p>
                    </div>
                    <ChevronRight 
                      size={24} 
                      className={`text-[#999] transition-transform shrink-0 ${etapaSeleccionada === i ? 'rotate-90' : ''}`} 
                    />
                  </div>
                </div>
                {etapaSeleccionada === i && (
                  <div className="px-6 pb-6 pt-0 border-t border-[#f5f5f5]">
                    <p className="mb-3 mt-4" style={{ fontSize: '13px', fontWeight: 700, color: '#333333', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Hitos principales:
                    </p>
                    <ul className="space-y-2">
                      {etapa.hitos.map((hito, j) => (
                        <li key={j} className="flex items-start gap-2" style={{ fontSize: '14px', color: '#666666' }}>
                          <ChevronRight size={16} className="text-[#bb1f1f] mt-0.5 shrink-0" />
                          {hito}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presidencias y directorios */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Presidencias y directorios destacados</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              Algunas de las personas que han ejercido la presidencia de la FEUNA y han marcado momentos importantes del movimiento estudiantil.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {presidencias.map((pres, i) => (
              <div key={i} className="bg-[#f5f5f5] rounded-lg border border-[#dddddd] overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 rounded text-white ${
                      pres.etiqueta === 'Actual' ? 'bg-[#bb1f1f]' :
                      pres.etiqueta === 'Reciente' ? 'bg-[#034991]' :
                      'bg-[#666666]'
                    }`} style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {pres.etiqueta}
                    </span>
                    <Users size={20} className="text-[#999]" />
                  </div>
                  <h3 className="mb-1" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>{pres.nombre}</h3>
                  <div className="text-[#bb1f1f] mb-3" style={{ fontSize: '13px', fontWeight: 600 }}>
                    {pres.periodo}
                  </div>
                  <p className="mb-4" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>{pres.desc}</p>
                  <div className="space-y-1.5">
                    {pres.hitos.map((hito, j) => (
                      <div key={j} className="flex items-start gap-2" style={{ fontSize: '13px', color: '#666666' }}>
                        <ChevronRight size={14} className="text-[#bb1f1f] mt-0.5 shrink-0" />
                        <span>{hito}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hitos temáticos */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Hitos temáticos</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              La historia de la FEUNA también se cuenta por luchas, transformaciones y conquistas temáticas que han definido al movimiento estudiantil.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {hitosTemáticos.map((hito, i) => (
              <div key={i} className="bg-white p-5 rounded-lg border border-[#dddddd] hover:border-[#bb1f1f] transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#bb1f1f] mt-2 shrink-0"></div>
                  <div>
                    <h3 className="mb-1" style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>{hito.titulo}</h3>
                    <div className="text-[#999] mb-2" style={{ fontSize: '12px', fontWeight: 600 }}>{hito.periodo}</div>
                    <p style={{ fontSize: '13px', lineHeight: 1.5, color: '#666666' }}>{hito.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memoria visual */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Memoria visual</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              Galería histórica del movimiento estudiantil: fotografías, documentos, movilizaciones y momentos que construyen la memoria colectiva de la FEUNA.
            </p>
          </div>
          <div className="bg-[#f5f5f5] p-12 rounded-lg border border-[#dddddd] text-center">
            <Archive size={48} className="text-[#999] mx-auto mb-4" />
            <p style={{ fontSize: '15px', color: '#666666' }}>
              La galería histórica estará disponible próximamente con materiales de archivo, fotografías institucionales y memoria visual del movimiento estudiantil.
            </p>
          </div>
        </div>
      </section>

      {/* Fuentes y metodología */}
      <section className="py-16 bg-[#034991] text-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-[900px] mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <BookOpen size={32} className="text-white shrink-0" />
              <div>
                <h2 className="mb-2" style={{ fontSize: '28px', fontWeight: 700 }}>Fuentes y metodología</h2>
                <p style={{ fontSize: '15px', lineHeight: 1.7 }}>
                  La reconstrucción histórica de la FEUNA se apoya en fuentes bibliográficas, testimoniales, documentales e institucionales.
                </p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
              <p className="mb-4" style={{ fontSize: '15px', lineHeight: 1.7 }}>
                Este recorrido histórico está en <strong>construcción permanente</strong>. La memoria del movimiento estudiantil 
                se amplía con nuevas fuentes, testimonios, documentos y verificaciones históricas.
              </p>
              <p className="mb-4" style={{ fontSize: '15px', lineHeight: 1.7 }}>
                Algunas fechas, hitos o periodos pueden requerir ampliación o validación documental. 
                Este proceso forma parte del compromiso con el rigor histórico y la transparencia.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.7 }}>
                Si tenés información, documentos o memorias que puedan aportar a esta reconstrucción histórica, 
                contactanos para contribuir al archivo del movimiento estudiantil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historia reciente y en actualización */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#bb1f1f] text-white px-4 py-1 rounded mb-4" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.5px' }}>
              EN ACTUALIZACIÓN
            </div>
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Historia reciente</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              Los periodos más recientes del movimiento estudiantil continúan documentándose. Esta sección se actualiza regularmente 
              con nuevos hitos, materiales y memoria de las gestiones actuales.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg border-2 border-[#bb1f1f]/20">
            <div className="flex items-center gap-3 mb-6">
              <Clock size={24} className="text-[#bb1f1f]" />
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a' }}>Gestiones 2023-actualidad</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#f5f5f5] p-6 rounded-lg">
                <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>Raquel Loría Quesada (2023-2025)</h4>
                <p className="mb-4" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  Gestión enfocada en consolidación institucional, continuidad de servicios estudiantiles y fortalecimiento 
                  de agendas de derechos estudiantiles.
                </p>
                <p style={{ fontSize: '13px', color: '#999999', fontStyle: 'italic' }}>
                  Documentación y memoria de gestión en proceso de sistematización.
                </p>
              </div>
              <div className="bg-[#bb1f1f]/5 p-6 rounded-lg border-2 border-[#bb1f1f]/20">
                <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>Marco Víquez Fallas (2025-actualidad)</h4>
                <p className="mb-4" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  Gestión actual del gobierno estudiantil. Continuidad de agendas históricas del movimiento estudiantil 
                  y abordaje de nuevos desafíos contemporáneos.
                </p>
                <p style={{ fontSize: '13px', color: '#999999', fontStyle: 'italic' }}>
                  Agenda de trabajo y memoria en construcción.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-white">
        <div className="max-w-[900px] mx-auto px-5 text-center">
          <Quote size={40} className="text-[#bb1f1f] mx-auto mb-6" />
          <h2 className="mb-4" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            La historia de la FEUNA es la historia del movimiento estudiantil de la UNA
          </h2>
          <p className="mb-8" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
            Una historia de luchas, transformaciones y construcción colectiva. Una memoria viva que continúa escribiéndose.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/transparencia" className="inline-flex items-center gap-2 bg-[#bb1f1f] text-white px-6 py-3 rounded hover:bg-[#8b1515] transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <FileText size={18} />
              Explorar archivos y documentos
            </Link>
            <Link to="/feuna" className="inline-flex items-center gap-2 bg-[#034991] text-white px-6 py-3 rounded hover:bg-[#023166] transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <Users size={18} />
              Conocer la FEUNA actual
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}