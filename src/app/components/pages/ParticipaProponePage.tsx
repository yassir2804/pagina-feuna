import { Link } from "react-router";
import { HeroInternal } from "../HeroInternal";
import { Lightbulb, Send, ExternalLink, ArrowRight, CheckCircle, FileText } from "lucide-react";

const tiposPropuestas = [
  {
    icon: Lightbulb,
    title: "Propuesta de mejora",
    desc: "Ideas para mejorar servicios estudiantiles, procesos internos o condiciones universitarias.",
    ejemplos: ["Mejora de espacios estudiantiles", "Nuevos servicios FEUNA", "Optimización de trámites"]
  },
  {
    icon: Send,
    title: "Proyecto estudiantil",
    desc: "Iniciativas que requieren planificación, recursos y ejecución a mediano plazo.",
    ejemplos: ["Campañas de concientización", "Eventos culturales", "Programas de apoyo"]
  },
  {
    icon: FileText,
    title: "Iniciativa normativa",
    desc: "Propuestas de cambios reglamentarios o estatutarios en la FEUNA o la UNA.",
    ejemplos: ["Reforma de estatuto", "Nuevos reglamentos", "Modificación de políticas"]
  },
];

export function ParticipaProponePage() {
  return (
    <div>
      <HeroInternal
        title="Proponé iniciativas"
        subtitle="Presentá propuestas, proyectos o iniciativas estudiantiles. La FEUNA es el canal para que tus ideas se conviertan en acción."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Participa", href: "/participa" }, { label: "Proponé" }]}
      />

      {/* Introducción */}
      <section className="py-12 bg-white">
        <div className="max-w-[1000px] mx-auto px-5">
          <p className="text-[#666666] text-center max-w-[800px] mx-auto mb-8" style={{ fontSize: '16px', lineHeight: 1.8 }}>
            ¿Tenés una idea que puede mejorar la vida universitaria? ¿Identificaste un problema que necesita solución? 
            ¿Querés impulsar un proyecto estudiantil? La FEUNA te brinda los mecanismos para presentar propuestas, 
            impulsar iniciativas y transformar ideas en realidad.
          </p>
        </div>
      </section>

      {/* Tipos de propuestas */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center mb-10" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            ¿Qué podés proponer?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiposPropuestas.map((tipo, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border border-[#dddddd]">
                <div className="w-14 h-14 bg-[#034991]/10 rounded-lg flex items-center justify-center mb-5">
                  <tipo.icon size={26} className="text-[#034991]" />
                </div>
                <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>
                  {tipo.title}
                </h3>
                <p className="text-[#666666] mb-4" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                  {tipo.desc}
                </p>
                <div className="space-y-2">
                  <div className="text-[#999]" style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Ejemplos:
                  </div>
                  {tipo.ejemplos.map((ej, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#034991] mt-1.5 shrink-0" />
                      <span className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.5 }}>
                        {ej}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Herramientas para proponer */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center mb-10" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            Herramientas de incidencia
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/participa/proponer/formulario"
              className="bg-[#f5f5f5] rounded-lg p-8 hover:bg-white hover:shadow-md border border-transparent hover:border-[#034991] transition-all group"
            >
              <div className="w-14 h-14 bg-[#034991]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#034991] transition-colors">
                <Lightbulb size={26} className="text-[#034991] group-hover:text-white transition-colors" />
              </div>
              <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>
                Formulario de propuestas
              </h3>
              <p className="text-[#666666] mb-5" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                Enviá tu propuesta de forma estructurada. Incluye descripción, objetivos, recursos necesarios y beneficios esperados.
              </p>
              <div className="inline-flex items-center gap-2 text-[#034991] font-semibold group-hover:gap-3 transition-all" style={{ fontSize: '14px' }}>
                Enviar propuesta
                <ArrowRight size={16} />
              </div>
            </Link>

            <Link
              to="/participa/epeticion"
              className="bg-[#f5f5f5] rounded-lg p-8 hover:bg-white hover:shadow-md border border-transparent hover:border-[#bb1f1f] transition-all group"
            >
              <div className="w-14 h-14 bg-[#bb1f1f]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#bb1f1f] transition-colors">
                <Send size={26} className="text-[#bb1f1f] group-hover:text-white transition-colors" />
              </div>
              <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>
                E-Petición
              </h3>
              <p className="text-[#666666] mb-5" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                Herramienta digital para impulsar cambios mediante recolección de firmas estudiantiles y presentación formal ante órganos competentes.
              </p>
              <div className="inline-flex items-center gap-2 text-[#bb1f1f] font-semibold group-hover:gap-3 transition-all" style={{ fontSize: '14px' }}>
                Crear e-petición
                <ArrowRight size={16} />
              </div>
            </Link>

            <Link
              to="/participa/iniciativa"
              className="bg-[#f5f5f5] rounded-lg p-8 hover:bg-white hover:shadow-md border border-transparent hover:border-[#2d7a3e] transition-all group"
            >
              <div className="w-14 h-14 bg-[#2d7a3e]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#2d7a3e] transition-colors">
                <ExternalLink size={26} className="text-[#2d7a3e] group-hover:text-white transition-colors" />
              </div>
              <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>
                Iniciativa estudiantil
              </h3>
              <p className="text-[#666666] mb-5" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                Presentá proyectos de mayor envergadura que puedan requerir financiamiento, articulación institucional o aprobación de órganos.
              </p>
              <div className="inline-flex items-center gap-2 text-[#2d7a3e] font-semibold group-hover:gap-3 transition-all" style={{ fontSize: '14px' }}>
                Presentar iniciativa
                <ArrowRight size={16} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Proceso de evaluación */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-white rounded-lg p-10 border border-[#dddddd]">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-14 h-14 bg-[#bb1f1f]/10 rounded-lg flex items-center justify-center shrink-0">
                <CheckCircle size={28} className="text-[#bb1f1f]" />
              </div>
              <div>
                <h2 className="mb-2" style={{ fontSize: '24px', fontWeight: 700, color: '#1a1a1a' }}>
                  ¿Cómo se procesan las propuestas?
                </h2>
                <p className="text-[#666666]" style={{ fontSize: '16px', lineHeight: 1.7 }}>
                  Todas las propuestas son revisadas siguiendo un proceso transparente y democrático.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#034991] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                  1
                </div>
                <h4 className="mb-2" style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>
                  Recepción
                </h4>
                <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                  Tu propuesta se registra y se asigna a la comisión pertinente.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-[#034991] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                  2
                </div>
                <h4 className="mb-2" style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>
                  Evaluación
                </h4>
                <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                  Se analiza viabilidad, pertinencia, recursos necesarios y beneficio estudiantil.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-[#034991] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                  3
                </div>
                <h4 className="mb-2" style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>
                  Dictamen
                </h4>
                <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                  La comisión emite recomendación y, si procede, se lleva a instancias de aprobación.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-[#034991] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                  4
                </div>
                <h4 className="mb-2" style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>
                  Seguimiento
                </h4>
                <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                  Las propuestas aprobadas se ejecutan y se informa públicamente sobre su avance.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#dddddd]">
              <p className="text-[#666666] text-center" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                <strong>Importante:</strong> Todas las propuestas reciben respuesta. Aunque una propuesta no sea aprobada inmediatamente, 
                puede ser retomada en el futuro, reformulada o servir como insumo para otras iniciativas. 
                La participación estudiantil siempre es valorada y considerada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#034991] to-[#023166]">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: '28px', fontWeight: 700 }}>
            Tus ideas pueden transformar la universidad
          </h2>
          <p className="text-white/90 mb-8" style={{ fontSize: '16px', lineHeight: 1.7 }}>
            No esperés a que otros propongan. La FEUNA es tu canal democrático para impulsar cambios y mejoras.
          </p>
          <Link
            to="/participa/proponer/formulario"
            className="inline-flex items-center gap-2 bg-white text-[#034991] px-8 py-4 rounded hover:bg-white/95 transition-colors"
            style={{ fontSize: '16px', fontWeight: 700 }}
          >
            Enviar mi propuesta
            <Send size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
