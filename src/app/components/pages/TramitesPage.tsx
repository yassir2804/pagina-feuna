import { Link } from "react-router";
import { HeroInternal } from "../HeroInternal";
import { FileText, Download, FileSignature, FileCheck, Mail, Users, Heart, Briefcase, GraduationCap, AlertCircle } from "lucide-react";

const categorias = {
  solicitudes: {
    titulo: "Solicitudes y peticiones",
    color: "#bb1f1f",
    icono: FileSignature,
    documentos: [
      { nombre: "Solicitud de exoneración de matrícula", desc: "Plantilla para solicitar exoneración del pago de matrícula por condición socioeconómica.", formato: "DOCX / PDF" },
      { nombre: "Solicitud de ayuda económica para gira", desc: "Formato para solicitar apoyo económico de la FEUNA para giras académicas, culturales o deportivas.", formato: "DOCX / PDF" },
      { nombre: "Solicitud de carta de respaldo FEUNA", desc: "Plantilla para pedir carta de respaldo de la FEUNA ante trámites, viajes u otras gestiones.", formato: "DOCX / PDF" },
      { nombre: "Formulario de ayuda a madres/padres estudiantes", desc: "Solicitud de apoyo y orientación para estudiantes con responsabilidades parentales.", formato: "DOCX / PDF" },
    ]
  },
  oficios: {
    titulo: "Oficios y comunicaciones oficiales",
    color: "#034991",
    icono: Mail,
    documentos: [
      { nombre: "Oficio de petición formal", desc: "Plantilla de oficio para presentar peticiones formales ante la FEUNA u otras instancias universitarias.", formato: "DOCX / PDF" },
      { nombre: "Oficio de solicitud de reunión", desc: "Formato para solicitar audiencia o reunión con el DEUNA o representantes estudiantiles.", formato: "DOCX / PDF" },
      { nombre: "Carta de justificación académica", desc: "Modelo de carta para justificar ausencias, solicitar permisos o explicar situaciones académicas.", formato: "DOCX / PDF" },
      { nombre: "Oficio a instancias universitarias", desc: "Plantilla genérica para dirigir comunicaciones oficiales a unidades académicas o administrativas de la UNA.", formato: "DOCX / PDF" },
    ]
  },
  asociaciones: {
    titulo: "Asociaciones estudiantiles",
    color: "#2d7a3e",
    icono: Users,
    documentos: [
      { nombre: "Acta de asamblea estudiantil", desc: "Plantilla para levantar actas de asambleas generales o extraordinarias de asociaciones.", formato: "DOCX / PDF" },
      { nombre: "Solicitud de reconocimiento de asociación", desc: "Documentos necesarios para registrar una nueva asociación estudiantil ante el CAEUNA.", formato: "DOCX / PDF" },
      { nombre: "Plan de trabajo anual (asociación)", desc: "Formato para presentar plan de trabajo de una asociación estudiantil.", formato: "DOCX / PDF" },
      { nombre: "Informe de gestión (asociación)", desc: "Plantilla de informe para rendir cuentas sobre las actividades de una asociación.", formato: "DOCX / PDF" },
    ]
  },
  propuestas: {
    titulo: "Propuestas y proyectos",
    color: "#8e44ad",
    icono: Briefcase,
    documentos: [
      { nombre: "Formulario de propuesta estudiantil", desc: "Plantilla para presentar propuestas de mejora o proyectos ante la FEUNA.", formato: "DOCX / PDF" },
      { nombre: "Proyecto de actividad cultural/deportiva", desc: "Formato para proponer actividades culturales, deportivas o recreativas.", formato: "DOCX / PDF" },
      { nombre: "Solicitud de financiamiento FEUNA", desc: "Documento para solicitar apoyo económico para proyectos estudiantiles.", formato: "DOCX / PDF" },
      { nombre: "Propuesta de reforma estatutaria", desc: "Plantilla para proponer modificaciones al Estatuto de la FEUNA.", formato: "DOCX / PDF" },
    ]
  },
  academicos: {
    titulo: "Trámites académicos",
    color: "#c75b12",
    icono: GraduationCap,
    documentos: [
      { nombre: "Apelación de calificación", desc: "Formato para apelar una calificación ante instancias académicas con acompañamiento de la FEUNA.", formato: "DOCX / PDF" },
      { nombre: "Solicitud de cambio de curso", desc: "Plantilla para solicitar cambios de grupo, horario o curso ante Registro.", formato: "DOCX / PDF" },
      { nombre: "Justificación de retiro de curso", desc: "Documento para justificar el retiro de un curso ante situaciones especiales.", formato: "DOCX / PDF" },
      { nombre: "Solicitud de reconocimiento de créditos", desc: "Formato para solicitar convalidación o reconocimiento de cursos.", formato: "DOCX / PDF" },
    ]
  },
};

export function TramitesPage() {
  return (
    <div>
      <HeroInternal
        title="Plantillas y formularios"
        subtitle="Plantillas y formularios para facilitar tus trámites estudiantiles y gestiones ante la FEUNA."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Apoyo y recursos", href: "/apoyo-recursos/orientacion" }, { label: "Plantillas" }]}
      />

      {/* Introducción */}
      <section className="py-12 bg-white">
        <div className="max-w-[1000px] mx-auto px-5">
          <p className="text-[#666666] text-center max-w-[800px] mx-auto mb-8" style={{ fontSize: '16px', lineHeight: 1.8 }}>
            Ponemos a tu disposición <strong>plantillas y documentos modelo</strong> para facilitar tus gestiones estudiantiles. 
            Estos formatos están diseñados para agilizar trámites ante la FEUNA, asociaciones y distintas instancias universitarias.
          </p>
        </div>
      </section>

      {/* Nota importante */}
      <section className="py-8 bg-[#fff3cd]">
        <div className="max-w-[1000px] mx-auto px-5">
          <div className="flex items-start gap-4">
            <AlertCircle size={24} className="text-[#856404] shrink-0 mt-1" />
            <div>
              <h3 className="mb-2" style={{ fontSize: '17px', fontWeight: 700, color: '#856404' }}>
                Importante sobre el uso de estas plantillas
              </h3>
              <p className="text-[#856404]" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                Estas son plantillas <strong>modelo</strong>. Debés adaptarlas a tu situación específica, completar todos los campos requeridos 
                y verificar con la instancia correspondiente si hay requisitos adicionales. Si tenés dudas, <Link to="/apoyo-recursos/orientacion" className="underline font-semibold">contactá a la FEUNA</Link> para orientación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías de documentos */}
      {Object.entries(categorias).map(([key, categoria]) => (
        <section key={key} className="py-16 bg-white odd:bg-[#f5f5f5]">
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="flex items-center gap-4 mb-8">
              <div 
                className="w-14 h-14 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: categoria.color + '15' }}
              >
                <categoria.icono size={26} style={{ color: categoria.color }} />
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
                {categoria.titulo}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {categoria.documentos.map((doc, idx) => (
                <div key={idx} className="bg-white border border-[#dddddd] rounded-lg p-6 hover:shadow-md hover:border-current transition-all" style={{ borderColor: categoria.color }}>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="mb-2 flex items-center gap-2" style={{ fontSize: '17px', fontWeight: 700, color: '#1a1a1a' }}>
                        <FileText size={18} style={{ color: categoria.color }} />
                        {doc.nombre}
                      </h3>
                      <p className="text-[#666666] mb-3" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                        {doc.desc}
                      </p>
                      <div className="flex items-center gap-2 text-[#999]" style={{ fontSize: '12px', fontWeight: 600 }}>
                        <FileCheck size={14} />
                        {doc.formato}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded border-2 transition-all text-white"
                      style={{ 
                        backgroundColor: categoria.color,
                        borderColor: categoria.color
                      }}
                    >
                      <Download size={16} />
                      <span style={{ fontSize: '14px', fontWeight: 600 }}>Descargar</span>
                    </button>
                    <button
                      className="px-4 py-2.5 rounded border-2 transition-all bg-white"
                      style={{ 
                        borderColor: categoria.color,
                        color: categoria.color
                      }}
                      title="Vista previa"
                    >
                      <FileText size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ¿Cómo usar estas plantillas? */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center mb-12" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            ¿Cómo usar estas plantillas?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#bb1f1f] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                1
              </div>
              <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                Descargá
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                Descargá el documento en formato DOCX o PDF según tu necesidad.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#bb1f1f] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                2
              </div>
              <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                Completá
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                Llenás los campos con tu información personal y detalles de tu solicitud.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#bb1f1f] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                3
              </div>
              <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                Revisá
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                Verificá que toda la información esté correcta y completa antes de enviar.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#bb1f1f] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                4
              </div>
              <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                Presentá
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                Entregá el documento a la instancia correspondiente según el trámite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ rápido */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center mb-10" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            Preguntas frecuentes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#bb1f1f]">
              <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                ¿Son oficiales estas plantillas?
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                Son modelos que la FEUNA pone a disposición para facilitar trámites. Para documentos de instancias universitarias específicas, 
                verificá con la oficina correspondiente si tienen formato oficial.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-[#034991]">
              <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                ¿Puedo modificar las plantillas?
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                Sí, son plantillas modelo. Adaptálas a tu situación, agregá información relevante y modificá lo necesario 
                manteniendo el formato profesional y completo.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-[#2d7a3e]">
              <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                ¿A dónde entrego estos documentos?
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                Depende del trámite. Algunos van a la FEUNA, otros a tu asociación, registro u otras instancias. 
                Si tenés dudas, <Link to="/apoyo-recursos/orientacion" className="text-[#2d7a3e] font-semibold underline">solicitá orientación</Link>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-[#c75b12]">
              <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                ¿Necesito ayuda para completarlos?
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                Si tenés dudas sobre cómo llenar un documento o qué información incluir, contactá a la FEUNA. 
                Podemos orientarte o acompañarte en el proceso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA de orientación */}
      <section className="py-16 bg-gradient-to-r from-[#034991] to-[#023166]">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: '28px', fontWeight: 700 }}>
            ¿No encontrás el documento que necesitás?
          </h2>
          <p className="text-white/90 mb-8" style={{ fontSize: '16px', lineHeight: 1.7 }}>
            Contactanos y te orientamos sobre qué documentos necesitás para tu trámite específico 
            o te ayudamos a conseguir plantillas adicionales.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/apoyo-recursos/orientacion"
              className="inline-flex items-center gap-2 bg-white text-[#034991] px-8 py-4 rounded hover:bg-white/95 transition-colors"
              style={{ fontSize: '16px', fontWeight: 700 }}
            >
              <Heart size={20} />
              Solicitar orientación
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded hover:bg-white/20 transition-colors"
              style={{ fontSize: '16px', fontWeight: 600 }}
            >
              <Mail size={20} />
              Contactar FEUNA
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}