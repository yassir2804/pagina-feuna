import { Link } from "react-router";
import { HeroInternal } from "../HeroInternal";
import { Heart, FileText, Baby, Plane, HandHeart, ArrowRight, CheckCircle } from "lucide-react";

const serviciosFEUNA = [
  { 
    nombre: "Exoneración de matrícula", 
    desc: "Trámite para exonerarte del pago de matrícula. Requisitos, formularios y acompañamiento.", 
    href: "/tramites",
    icono: FileText,
    color: "#bb1f1f",
    detalles: [
      "Requisitos y documentación necesaria",
      "Plazos y fechas importantes",
      "Formularios oficiales",
      "Seguimiento de tu solicitud"
    ]
  },
  { 
    nombre: "Apoyo a madres y padres estudiantes", 
    desc: "Orientación, recursos y acompañamiento para estudiantes con responsabilidades parentales.", 
    href: "/apoyo-recursos/padres-madres",
    icono: Baby,
    color: "#034991",
    detalles: [
      "Permisos y facilidades académicas",
      "Recursos de cuido infantil",
      "Redes de apoyo",
      "Gestión ante instancias universitarias"
    ]
  },
  { 
    nombre: "Apoyo para viajes al extranjero", 
    desc: "Gestión de cartas de respaldo, coordinación y apoyo para intercambios o eventos internacionales.", 
    href: "/apoyo-recursos/viajes-extranjero",
    icono: Plane,
    color: "#2d7a3e",
    detalles: [
      "Cartas de respaldo institucional",
      "Coordinación con instancias UNA",
      "Orientación sobre trámites",
      "Seguimiento durante el proceso"
    ]
  },
  { 
    nombre: "Ayuda económica para giras", 
    desc: "Solicitud de apoyo económico para giras académicas, culturales o deportivas.", 
    href: "/apoyo-recursos/ayuda-giras",
    icono: HandHeart,
    color: "#c75b12",
    detalles: [
      "Requisitos de solicitud",
      "Montos y cobertura disponible",
      "Proceso de evaluación",
      "Rendición de cuentas"
    ]
  },
];

export function ApoyoServiciosPage() {
  return (
    <div>
      <HeroInternal
        title="Servicios FEUNA"
        subtitle="Servicios y apoyos que gestiona directamente la Federación de Estudiantes para tu vida universitaria."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Apoyo y recursos", href: "/apoyo-recursos/orientacion" }, { label: "Servicios FEUNA" }]}
      />

      {/* Introducción */}
      <section className="py-12 bg-white">
        <div className="max-w-[1000px] mx-auto px-5">
          <p className="text-[#666666] text-center max-w-[800px] mx-auto mb-8" style={{ fontSize: '16px', lineHeight: 1.8 }}>
            Como parte de nuestra función de representación estudiantil, <strong>la FEUNA gestiona servicios directos</strong> 
            para facilitar tu vida universitaria. Desde trámites hasta apoyos específicos, estamos para ayudarte.
          </p>
        </div>
      </section>

      {/* Servicios detallados */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="space-y-8">
            {serviciosFEUNA.map((servicio, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden border border-[#dddddd] hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row">
                  {/* Columna izquierda - Info principal */}
                  <div className="flex-1 p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <div 
                        className="w-16 h-16 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: servicio.color + '15' }}
                      >
                        <servicio.icono size={30} style={{ color: servicio.color }} />
                      </div>
                      <div>
                        <h3 className="mb-2" style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a' }}>
                          {servicio.nombre}
                        </h3>
                        <p className="text-[#666666]" style={{ fontSize: '15px', lineHeight: 1.6 }}>
                          {servicio.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="mb-3" style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>
                        ¿Qué incluye este servicio?
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {servicio.detalles.map((detalle, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle size={16} className="shrink-0 mt-0.5" style={{ color: servicio.color }} />
                            <span className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.5 }}>
                              {detalle}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={servicio.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded hover:shadow-md transition-all text-white"
                      style={{ backgroundColor: servicio.color, fontSize: '15px', fontWeight: 600 }}
                    >
                      Acceder al servicio
                      <ArrowRight size={18} />
                    </Link>
                  </div>

                  {/* Columna derecha - Destacado */}
                  <div 
                    className="w-full md:w-64 p-8 flex flex-col justify-center"
                    style={{ backgroundColor: servicio.color + '08' }}
                  >
                    <div className="text-center">
                      <div 
                        className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                        style={{ backgroundColor: servicio.color }}
                      >
                        <Heart size={26} className="text-white" />
                      </div>
                      <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                        <strong>Servicio gestionado directamente por la FEUNA</strong> como parte de nuestra función de representación estudiantil.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso general */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center mb-12" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            ¿Cómo acceder a estos servicios?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#bb1f1f] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                1
              </div>
              <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                Informate
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                Revisá requisitos, plazos y documentación necesaria para el servicio.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#bb1f1f] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                2
              </div>
              <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                Solicita
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                Completá formularios o contactá a la FEUNA según el servicio que necesités.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#bb1f1f] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                3
              </div>
              <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                Seguimiento
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                La FEUNA procesa tu solicitud y te mantiene informado sobre el avance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#bb1f1f] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                4
              </div>
              <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                Resultado
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                Recibís respuesta, orientación o el servicio solicitado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nota importante */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-[#bb1f1f]/5 border-l-4 border-[#bb1f1f] rounded-lg p-8">
            <h3 className="mb-3" style={{ fontSize: '20px', fontWeight: 700, color: '#bb1f1f' }}>
              Sobre los servicios FEUNA
            </h3>
            <div className="space-y-3 text-[#666666]" style={{ fontSize: '15px', lineHeight: 1.7 }}>
              <p>
                Estos servicios son parte de la función de <strong>representación y apoyo estudiantil</strong> que ejerce la FEUNA. 
                No son servicios externos, sino gestiones que realizamos directamente como organización estudiantil.
              </p>
              <p>
                Si tenés dudas sobre requisitos, procesos o necesitás acompañamiento, <strong>no dudes en contactarnos</strong>. 
                Estamos para ayudarte y garantizar que tengas acceso a estos recursos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#bb1f1f] to-[#8b1515]">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: '28px', fontWeight: 700 }}>
            ¿Necesitás ayuda con algún servicio?
          </h2>
          <p className="text-white/90 mb-8" style={{ fontSize: '16px', lineHeight: 1.7 }}>
            Contactanos y te orientamos sobre cómo acceder a los servicios FEUNA o te ayudamos en el proceso.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-white text-[#bb1f1f] px-8 py-4 rounded hover:bg-white/95 transition-colors"
            style={{ fontSize: '16px', fontWeight: 700 }}
          >
            Contactar FEUNA
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
