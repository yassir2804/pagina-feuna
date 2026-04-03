import { Link } from "react-router";
import { HeroInternal } from "../HeroInternal";
import { Calendar, Users, MessageCircle, ArrowRight, Megaphone, BookOpen, Send } from "lucide-react";

const tiposEspacios = [
  {
    icon: Users,
    title: "Asambleas estudiantiles",
    desc: "Espacio máximo de decisión estudiantil. Todos los estudiantes empadronados pueden participar con voz y voto.",
    caracteristicas: [
      "Convocadas por el CAEUNA o mediante petición estudiantil",
      "Toman decisiones vinculantes para la FEUNA",
      "Se levantan actas oficiales y públicas",
      "Quórum definido por estatuto"
    ]
  },
  {
    icon: MessageCircle,
    title: "Encuentros y cabildos",
    desc: "Espacios de diálogo para discutir temas específicos, construir propuestas o fortalecer la organización estudiantil.",
    caracteristicas: [
      "Pueden ser convocados por comisiones o estudiantes",
      "Orientados a discusión y construcción colectiva",
      "No requieren formalidades de asamblea",
      "Generan insumos para propuestas o políticas"
    ]
  },
  {
    icon: BookOpen,
    title: "Sesiones abiertas",
    desc: "Reuniones públicas de comisiones o equipos de trabajo donde el estudiantado puede observar y participar.",
    caracteristicas: [
      "Transparentan el trabajo de órganos y comisiones",
      "Permiten conocer cómo se toman decisiones",
      "Espacio para preguntas y consultas",
      "Fomentan contraloría social"
    ]
  },
];

export function ParticipaEspaciosPage() {
  return (
    <div>
      <HeroInternal
        title="Espacios de participación"
        subtitle="Asambleas, encuentros, cabildos y sesiones abiertas. Espacios colectivos donde se construye democracia estudiantil."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Participa", href: "/participa" }, { label: "Espacios de participación" }]}
      />

      {/* Introducción */}
      <section className="py-12 bg-white">
        <div className="max-w-[1000px] mx-auto px-5">
          <p className="text-[#666666] text-center max-w-[800px] mx-auto mb-8" style={{ fontSize: '16px', lineHeight: 1.8 }}>
            La democracia estudiantil se ejerce de forma directa a través de espacios colectivos de participación. 
            Aquí es donde el estudiantado discute, debate, decide y construye políticas, proyectos y acuerdos que 
            transforman la universidad.
          </p>
        </div>
      </section>

      {/* Tipos de espacios */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center mb-12" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            Tipos de espacios de participación
          </h2>

          <div className="space-y-8">
            {tiposEspacios.map((espacio, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border border-[#dddddd]">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#2d7a3e]/10 rounded-lg flex items-center justify-center shrink-0">
                    <espacio.icon size={32} className="text-[#2d7a3e]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3" style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a' }}>
                      {espacio.title}
                    </h3>
                    <p className="text-[#666666] mb-5" style={{ fontSize: '15px', lineHeight: 1.7 }}>
                      {espacio.desc}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {espacio.caracteristicas.map((car, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#2d7a3e] mt-2 shrink-0" />
                          <span className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                            {car}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Próximas convocatorias */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-[#f5f5f5] rounded-lg p-12 text-center">
            <div className="w-20 h-20 bg-[#2d7a3e]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar size={36} className="text-[#2d7a3e]" />
            </div>
            <h2 className="mb-4" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
              Próximas convocatorias
            </h2>
            <p className="text-[#666666] max-w-[700px] mx-auto mb-8" style={{ fontSize: '16px', lineHeight: 1.7 }}>
              Cuando se habiliten asambleas estudiantiles, encuentros o espacios colectivos, 
              los encontrarás publicados aquí y en el calendario de eventos con toda la información 
              necesaria para participar (fecha, hora, lugar, agenda y modalidad).
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/eventos"
                className="inline-flex items-center gap-2 bg-[#2d7a3e] text-white px-6 py-3 rounded hover:bg-[#236030] transition-colors"
                style={{ fontSize: '15px', fontWeight: 600 }}
              >
                <Calendar size={18} />
                Ver calendario de eventos
              </Link>
              <Link
                to="/noticias"
                className="inline-flex items-center gap-2 bg-white text-[#2d7a3e] border-2 border-[#2d7a3e] px-6 py-3 rounded hover:bg-[#2d7a3e]/5 transition-colors"
                style={{ fontSize: '15px', fontWeight: 600 }}
              >
                <Megaphone size={18} />
                Ver noticias y convocatorias
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo participar */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center mb-12" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            ¿Cómo participar efectivamente?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-[#034991] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                1
              </div>
              <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                Informate
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                Revisá la agenda y materiales previos. Llegar informado enriquece el debate.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-[#034991] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                2
              </div>
              <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                Participá activamente
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                Opiná, preguntá, debatí. Tu voz es tan importante como cualquier otra.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-[#034991] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                3
              </div>
              <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                Respetá la diversidad
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                Escuchá posiciones diferentes. La democracia se construye con diálogo.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-[#034991] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                4
              </div>
              <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                Da seguimiento
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                Revisá actas y acuerdos. Exigí cumplimiento de lo decidido colectivamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solicitar un espacio */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-gradient-to-r from-[#034991] to-[#023166] rounded-lg p-10 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="mb-4" style={{ fontSize: '26px', fontWeight: 700 }}>
                  ¿Querés proponer un espacio de participación?
                </h2>
                <p className="text-white/90 mb-6" style={{ fontSize: '15px', lineHeight: 1.7 }}>
                  Si considerás necesario convocar un encuentro, cabildo o asamblea sobre un tema específico, 
                  podés solicitarlo formalmente. La FEUNA evaluará la pertinencia y apoyará la convocatoria.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                    <span style={{ fontSize: '14px', lineHeight: 1.6 }}>
                      Describí el tema y la necesidad del espacio
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                    <span style={{ fontSize: '14px', lineHeight: 1.6 }}>
                      Indicá tipo de espacio (asamblea, encuentro, cabildo)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                    <span style={{ fontSize: '14px', lineHeight: 1.6 }}>
                      Proponé agenda tentativa y objetivos
                    </span>
                  </li>
                </ul>
              </div>
              <div className="shrink-0">
                <Link
                  to="/participa/proponer-espacio"
                  className="inline-flex items-center gap-2 bg-white text-[#034991] px-8 py-4 rounded hover:bg-white/95 transition-colors shadow-lg"
                  style={{ fontSize: '16px', fontWeight: 700 }}
                >
                  <Send size={20} />
                  Solicitar espacio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Derechos y garantías */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center mb-10" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            Tus derechos en espacios de participación
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#2d7a3e]">
              <h4 className="mb-3" style={{ fontSize: '17px', fontWeight: 700, color: '#1a1a1a' }}>
                Derecho a voz y voto
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                Todo estudiante empadronado tiene derecho a participar, opinar y votar en asambleas estudiantiles.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-[#2d7a3e]">
              <h4 className="mb-3" style={{ fontSize: '17px', fontWeight: 700, color: '#1a1a1a' }}>
                Acceso a información
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                Se debe publicar con anticipación: agenda, convocatoria, materiales de análisis y actas previas.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-[#2d7a3e]">
              <h4 className="mb-3" style={{ fontSize: '17px', fontWeight: 700, color: '#1a1a1a' }}>
                Respeto y no discriminación
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                Todas las personas merecen respeto. No se tolera discriminación por ningún motivo.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-[#2d7a3e]">
              <h4 className="mb-3" style={{ fontSize: '17px', fontWeight: 700, color: '#1a1a1a' }}>
                Transparencia y rendición de cuentas
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                Las actas de asambleas y espacios formales deben ser públicas y accesibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#2d7a3e] to-[#236030]">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: '28px', fontWeight: 700 }}>
            La democracia estudiantil es participación directa
          </h2>
          <p className="text-white/90 mb-8" style={{ fontSize: '16px', lineHeight: 1.7 }}>
            No delegues tu voz. Los espacios colectivos son donde se construye universidad, se toman decisiones 
            y se ejerce poder estudiantil real.
          </p>
          <Link
            to="/participa"
            className="inline-flex items-center gap-2 bg-white text-[#2d7a3e] px-8 py-4 rounded hover:bg-white/95 transition-colors"
            style={{ fontSize: '16px', fontWeight: 700 }}
          >
            Ver todas las formas de participar
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
