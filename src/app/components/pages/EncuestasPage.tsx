import { Link } from "react-router";
import { HeroInternal } from "../HeroInternal";
import { BarChart3, MessageSquareText, GraduationCap, Users, Heart, Briefcase, FileText, CheckCircle, Clock, TrendingUp, Target } from "lucide-react";

const encuestasActivas = [
  {
    id: 1,
    titulo: "Satisfacción con servicios FEUNA",
    descripcion: "¿Cómo valorás los servicios que ofrece la FEUNA? Tu opinión nos ayuda a mejorar.",
    color: "#bb1f1f",
    icono: MessageSquareText,
    duracion: "5 min aprox.",
    estado: "Activa",
    respuestas: 234
  },
  {
    id: 2,
    titulo: "Necesidades académicas estudiantiles",
    descripcion: "Contanos sobre los desafíos académicos que enfrentás y qué apoyo necesitás.",
    color: "#034991",
    icono: GraduationCap,
    duracion: "8 min aprox.",
    estado: "Activa",
    respuestas: 187
  },
  {
    id: 3,
    titulo: "Participación estudiantil",
    descripcion: "¿Cómo te gustaría participar más en las actividades y decisiones de la FEUNA?",
    color: "#2d7a3e",
    icono: Users,
    duracion: "6 min aprox.",
    estado: "Activa",
    respuestas: 156
  },
  {
    id: 4,
    titulo: "Bienestar y salud mental",
    descripcion: "Conocé tu opinión sobre el bienestar estudiantil y los servicios de salud mental.",
    color: "#8e44ad",
    icono: Heart,
    duracion: "7 min aprox.",
    estado: "Activa",
    respuestas: 298
  },
  {
    id: 6,
    titulo: "Acceso a becas y ayuda económica",
    descripcion: "Tu experiencia con el sistema de becas y apoyo económico de la UNA.",
    color: "#bb1f1f",
    icono: FileText,
    duracion: "5 min aprox.",
    estado: "Activa",
    respuestas: 203
  },
];

const encuestasCerradas = [
  {
    id: 5,
    titulo: "Oportunidades laborales y prácticas",
    descripcion: "¿Qué tipo de apoyo necesitás para conseguir prácticas profesionales y empleo?",
    color: "#c75b12",
    icono: Briefcase,
    duracion: "6 min aprox.",
    estado: "Cerrada",
    respuestas: 421
  },
];

export function EncuestasPage() {
  return (
    <div>
      <HeroInternal
        title="Encuestas estudiantiles"
        subtitle="Tu opinión importa. Participá en nuestras encuestas y ayudanos a tomar decisiones basadas en las necesidades reales del estudiantado."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Apoyo y recursos", href: "/apoyo-recursos/orientacion" }, { label: "Encuestas" }]}
      />

      {/* Introducción */}
      <section className="py-12 bg-white">
        <div className="max-w-[1000px] mx-auto px-5">
          <p className="text-[#666666] text-center max-w-[800px] mx-auto" style={{ fontSize: '16px', lineHeight: 1.8 }}>
            Las encuestas estudiantiles son una herramienta fundamental para que la FEUNA conozca tus necesidades, 
            preocupaciones y sugerencias. <strong>Todas las respuestas son completamente anónimas</strong> y los resultados 
            se utilizan exclusivamente para mejorar la representación y los servicios que te ofrecemos.
          </p>
        </div>
      </section>

      {/* ¿Por qué participar? */}
      <section className="py-12 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center mb-10" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            ¿Por qué participar?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center border-t-4 border-[#bb1f1f]">
              <div className="w-12 h-12 bg-[#bb1f1f]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquareText size={24} className="text-[#bb1f1f]" />
              </div>
              <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                Tu voz cuenta
              </h3>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                Cada respuesta nos ayuda a entender mejor las necesidades del estudiantado.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center border-t-4 border-[#034991]">
              <div className="w-12 h-12 bg-[#034991]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={24} className="text-[#034991]" />
              </div>
              <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                Decisiones informadas
              </h3>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                Los resultados guían nuestras acciones y prioridades de representación.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center border-t-4 border-[#2d7a3e]">
              <div className="w-12 h-12 bg-[#2d7a3e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={24} className="text-[#2d7a3e]" />
              </div>
              <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                100% anónimo
              </h3>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                Tus respuestas son confidenciales y no se pueden rastrear.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center border-t-4 border-[#8e44ad]">
              <div className="w-12 h-12 bg-[#8e44ad]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-[#8e44ad]" />
              </div>
              <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                Rápido y fácil
              </h3>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                La mayoría de encuestas toman menos de 10 minutos en completarse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Encuestas activas */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle size={24} className="text-green-600" />
            </div>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
              Encuestas activas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {encuestasActivas.map((encuesta) => {
              const Icono = encuesta.icono;
              return (
                <div key={encuesta.id} className="bg-white rounded-lg border-2 border-[#dddddd] p-6 hover:shadow-xl hover:border-current transition-all" style={{ borderColor: encuesta.color }}>
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: encuesta.color + '15' }}>
                      <Icono size={20} style={{ color: encuesta.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2" style={{ fontSize: '17px', fontWeight: 700, color: '#1a1a1a' }}>
                        {encuesta.titulo}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-[#666666] mb-4" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                    {encuesta.descripcion}
                  </p>
                  
                  <div className="flex items-center justify-between gap-2 text-[#999] mb-4" style={{ fontSize: '12px' }}>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
                        {encuesta.estado}
                      </span>
                      <span>• {encuesta.respuestas} respuestas</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[#999] mb-4" style={{ fontSize: '12px' }}>
                    <Clock size={14} />
                    <span>{encuesta.duracion}</span>
                  </div>
                  
                  <button 
                    className="w-full text-white px-4 py-2.5 rounded hover:opacity-90 transition-all"
                    style={{ backgroundColor: encuesta.color, fontSize: '14px', fontWeight: 600 }}
                  >
                    Responder encuesta
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Encuestas cerradas */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <BarChart3 size={24} className="text-gray-600" />
            </div>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
              Encuestas cerradas
            </h2>
          </div>

          <p className="text-[#666666] mb-6" style={{ fontSize: '14px', lineHeight: 1.7 }}>
            Estas encuestas ya finalizaron. Próximamente publicaremos los resultados y las acciones que tomaremos basadas en tus respuestas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {encuestasCerradas.map((encuesta) => {
              const Icono = encuesta.icono;
              return (
                <div key={encuesta.id} className="bg-white rounded-lg border-2 border-[#dddddd] p-6 opacity-75">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: encuesta.color + '15' }}>
                      <Icono size={20} style={{ color: encuesta.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2" style={{ fontSize: '17px', fontWeight: 700, color: '#1a1a1a' }}>
                        {encuesta.titulo}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-[#666666] mb-4" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                    {encuesta.descripcion}
                  </p>
                  
                  <div className="flex items-center justify-between gap-2 text-[#999] mb-4" style={{ fontSize: '12px' }}>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full font-semibold">
                        {encuesta.estado}
                      </span>
                      <span>• {encuesta.respuestas} respuestas</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[#999] mb-4" style={{ fontSize: '12px' }}>
                    <Clock size={14} />
                    <span>{encuesta.duracion}</span>
                  </div>
                  
                  <button 
                    disabled
                    className="w-full bg-gray-300 text-gray-600 px-4 py-2.5 rounded cursor-not-allowed"
                    style={{ fontSize: '14px', fontWeight: 600 }}
                  >
                    Encuesta cerrada
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compromiso con la transparencia */}
      <section className="py-16 bg-white">
        <div className="max-w-[1000px] mx-auto px-5">
          <h2 className="text-center mb-8" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            Compromiso con la transparencia
          </h2>

          <div className="bg-gradient-to-r from-[#034991] to-[#023166] rounded-lg p-8 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <BarChart3 size={24} />
              </div>
              <div>
                <h3 className="mb-3" style={{ fontSize: '20px', fontWeight: 700 }}>
                  Resultados públicos
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.95 }}>
                  Una vez cerradas, publicamos los resultados agregados y anónimos de cada encuesta en nuestra sección de{" "}
                  <Link to="/transparencia" className="underline font-semibold">
                    Transparencia
                  </Link>
                  . Además, compartimos las acciones concretas que tomaremos basadas en tus respuestas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <Target size={24} />
              </div>
              <div>
                <h3 className="mb-3" style={{ fontSize: '20px', fontWeight: 700 }}>
                  De la opinión a la acción
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.95 }}>
                  No solo recopilamos opiniones: las convertimos en propuestas concretas, proyectos de mejora 
                  y acciones de representación ante las autoridades universitarias. Tu voz genera cambios reales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-gradient-to-r from-[#bb1f1f] to-[#8e1515]">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: '28px', fontWeight: 700 }}>
            ¿Tenés una idea para una encuesta?
          </h2>
          <p className="text-white/90 mb-8" style={{ fontSize: '16px', lineHeight: 1.7 }}>
            Si querés que investiguemos algún tema específico o tenés sugerencias para futuras encuestas, 
            contáctanos. Estamos siempre abiertos a escuchar tus propuestas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/participa/propone"
              className="inline-flex items-center gap-2 bg-white text-[#bb1f1f] px-8 py-4 rounded hover:bg-white/95 transition-colors"
              style={{ fontSize: '16px', fontWeight: 700 }}
            >
              <MessageSquareText size={20} />
              Proponer encuesta
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded hover:bg-white/20 transition-colors"
              style={{ fontSize: '16px', fontWeight: 600 }}
            >
              Contactar FEUNA
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}