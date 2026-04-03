import { HeroInternal } from "../HeroInternal";
import { 
  Users, FileText, DollarSign, Scale, Shield, BookOpen, 
  Building2, MapPin, Sprout, MessageSquare, ChevronRight, Mail
} from "lucide-react";
import { useState } from "react";

const funcionesCaeuna = [
  { icono: BookOpen, titulo: "Reglamentos", desc: "Aprueba, reforma y publica reglamentos del movimiento estudiantil" },
  { icono: DollarSign, titulo: "Presupuesto", desc: "Asigna y distribuye presupuesto a las asociaciones estudiantiles" },
  { icono: Scale, titulo: "Control político", desc: "Fiscaliza y ejerce control sobre órganos de la FEUNA" },
  { icono: Users, titulo: "Representación", desc: "Articula y coordina la representación estudiantil" },
  { icono: Shield, titulo: "Fortalecimiento", desc: "Fortalece capacidades de las asociaciones estudiantiles" },
  { icono: MessageSquare, titulo: "Posicionamiento", desc: "Dialoga y toma postura ante problemáticas estudiantiles" },
];

const coordinaciones = [
  {
    id: "todos",
    nombre: "Todas las coordinaciones",
    desc: "La Mesa Coordinadora es el equipo operativo-político que dirige, documenta, articula y da seguimiento al trabajo del CAEUNA. Está compuesta por 7 coordinaciones funcionales.",
    icono: Users,
  },
  {
    id: "general",
    nombre: "Coordinación General",
    desc: "Preside y coordina el trabajo del CAEUNA. Firma junto con Finanzas órdenes de pago, representa al Consejo y dirige las sesiones plenarias.",
    icono: Users,
  },
  {
    id: "adjunta",
    nombre: "Coordinación Adjunta",
    desc: "Gestiona la documentación oficial, actas y correspondencia. Articula con otros órganos de la FEUNA y sustituye a la Coordinación General cuando corresponde.",
    icono: FileText,
  },
  {
    id: "estudiantiles",
    nombre: "Asuntos Estudiantiles",
    desc: "Impulsa la agenda estudiantil, defiende derechos del estudiantado, coordina con DEUNA y Consejo Universitario, y representa al CAEUNA ante Vida Estudiantil.",
    icono: Users,
  },
  {
    id: "finanzas",
    nombre: "Finanzas",
    desc: "Custodia y distribuye fondos del CAEUNA. Elabora auditorías, informes semestrales y coordina apoyos económicos a las asociaciones estudiantiles.",
    icono: DollarSign,
  },
  {
    id: "regionales",
    nombre: "Asuntos Regionales",
    desc: "Atiende agenda regional, defiende derechos en sedes y secciones regionales, coordina fondos para regiones y representa al CAEUNA en Vida Estudiantil.",
    icono: MapPin,
  },
  {
    id: "politicos",
    nombre: "Asuntos Políticos",
    desc: "Impulsa la agenda política estudiantil y elabora posicionamientos vinculantes sobre temas nacionales que afectan al estudiantado y la universidad pública.",
    icono: MessageSquare,
  },
  {
    id: "ecologicos",
    nombre: "Asuntos Ecológicos",
    desc: "Impulsa la agenda socioambiental del movimiento estudiantil, coordina la comisión ambiental y elabora posicionamientos sobre problemas socioambientales.",
    icono: Sprout,
  },
];

const miembrosMesa = [
  {
    nombre: "Coordinador/a General",
    coordinacion: "general",
    cargo: "Coordinación General",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025-2026",
    email: "caeuna.general@una.cr",
    iniciales: "CG",
  },
  {
    nombre: "Coordinador/a Adjunto/a",
    coordinacion: "adjunta",
    cargo: "Coordinación Adjunta",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025-2026",
    email: "caeuna.adjunta@una.cr",
    iniciales: "CA",
  },
  {
    nombre: "Coordinador/a de Asuntos Estudiantiles",
    coordinacion: "estudiantiles",
    cargo: "Asuntos Estudiantiles",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025-2026",
    email: "caeuna.estudiantiles@una.cr",
    iniciales: "AE",
  },
  {
    nombre: "Coordinador/a de Finanzas",
    coordinacion: "finanzas",
    cargo: "Finanzas",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025-2026",
    email: "caeuna.finanzas@una.cr",
    iniciales: "CF",
  },
  {
    nombre: "Coordinador/a de Asuntos Regionales",
    coordinacion: "regionales",
    cargo: "Asuntos Regionales",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Sede Regional Brunca",
    periodo: "2025-2026",
    email: "caeuna.regionales@una.cr",
    iniciales: "AR",
  },
  {
    nombre: "Coordinador/a de Asuntos Políticos",
    coordinacion: "politicos",
    cargo: "Asuntos Políticos",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025-2026",
    email: "caeuna.politicos@una.cr",
    iniciales: "AP",
  },
  {
    nombre: "Coordinador/a de Asuntos Ecológicos",
    coordinacion: "ecologicos",
    cargo: "Asuntos Ecológicos",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025-2026",
    email: "caeuna.ecologicos@una.cr",
    iniciales: "AE",
  },
];

export function CaeunaPage() {
  const [coordinacionSeleccionada, setCoordinacionSeleccionada] = useState("todos");

  const miembrosFiltrados = coordinacionSeleccionada === "todos"
    ? miembrosMesa
    : miembrosMesa.filter(m => m.coordinacion === coordinacionSeleccionada);

  const coordinacionActiva = coordinaciones.find(c => c.id === coordinacionSeleccionada);

  return (
    <div>
      {/* Hero */}
      <HeroInternal
        title="Consejo de Asociaciones Estudiantiles (CAEUNA)"
        subtitle="Órgano legislativo y de articulación del movimiento estudiantil de la Universidad Nacional"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Órganos" }, { label: "CAEUNA" }]}
      />

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-[900px] mx-auto text-center">
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#333333' }}>
              El CAEUNA reúne a las <strong>asociaciones estudiantiles</strong> para coordinar la representación estudiantil, 
              aprobar reglamentos, asignar presupuesto y ejercer control político sobre los órganos de la FEUNA.
            </p>
          </div>
        </div>
      </section>

      {/* ¿Qué es el CAEUNA? */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>¿Qué es el CAEUNA?</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              El CAEUNA es el órgano legislativo y plenario del movimiento estudiantil. Es donde las asociaciones deliberan, 
              toman decisiones y ejercen control político.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funcionesCaeuna.map((func, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-[#dddddd]">
                <func.icono size={32} className="text-[#bb1f1f] mb-3" />
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>{func.titulo}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>{func.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Cómo se organiza? */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>¿Cómo se organiza?</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              El CAEUNA es una estructura de representación que parte del estudiantado organizado en asociaciones.
            </p>
          </div>
          <div className="max-w-[1000px] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <div className="bg-[#f5f5f5] px-6 py-4 rounded-lg text-center border-2 border-[#dddddd]">
                <Users size={32} className="text-[#666] mx-auto mb-2" />
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>Estudiantado</div>
              </div>
              <ChevronRight size={24} className="text-[#999] rotate-90 md:rotate-0" />
              <div className="bg-[#f5f5f5] px-6 py-4 rounded-lg text-center border-2 border-[#dddddd]">
                <Building2 size={32} className="text-[#666] mx-auto mb-2" />
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>Asociaciones</div>
              </div>
              <ChevronRight size={24} className="text-[#999] rotate-90 md:rotate-0" />
              <div className="bg-[#bb1f1f]/10 px-6 py-4 rounded-lg text-center border-2 border-[#bb1f1f]">
                <Users size={32} className="text-[#bb1f1f] mx-auto mb-2" />
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#bb1f1f' }}>Representaciones</div>
              </div>
              <ChevronRight size={24} className="text-[#999] rotate-90 md:rotate-0" />
              <div className="bg-[#034991] text-white px-6 py-4 rounded-lg text-center border-2 border-[#034991]">
                <Scale size={32} className="text-white mx-auto mb-2" />
                <div style={{ fontSize: '15px', fontWeight: 700 }}>CAEUNA</div>
              </div>
              <ChevronRight size={24} className="text-[#999] rotate-90 md:rotate-0" />
              <div className="bg-[#bb1f1f] text-white px-6 py-4 rounded-lg text-center border-2 border-[#bb1f1f]">
                <Users size={32} className="text-white mx-auto mb-2" />
                <div style={{ fontSize: '15px', fontWeight: 700 }}>Mesa Coordinadora</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mesa Coordinadora */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Mesa Coordinadora del CAEUNA</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              Integrantes del equipo operativo-político que dirige, documenta, articula y da seguimiento al trabajo del CAEUNA.
            </p>
          </div>

          {/* Filtros */}
          <div className="mb-8">
            <h3 className="mb-3" style={{ fontSize: '13px', fontWeight: 600, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Filtrar por coordinación
            </h3>
            <div className="flex flex-wrap gap-2">
              {coordinaciones.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCoordinacionSeleccionada(c.id)}
                  className={`px-4 py-2 rounded transition-colors ${
                    coordinacionSeleccionada === c.id
                      ? 'bg-[#bb1f1f] text-white'
                      : 'bg-[#f5f5f5] text-[#333333] hover:bg-[#dddddd]'
                  }`}
                  style={{ fontSize: '14px', fontWeight: 500 }}
                >
                  {c.nombre}
                </button>
              ))}
            </div>
          </div>

          {/* Descripción */}
          {coordinacionActiva && (
            <div className="bg-white rounded-lg p-5 mb-8 border-l-4 border-[#bb1f1f]">
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>{coordinacionActiva.nombre}</h3>
              <p className="text-[#666666] mt-1" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                {coordinacionActiva.desc}
              </p>
            </div>
          )}

          {/* Grid de Miembros */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {miembrosFiltrados.map((miembro) => (
              <div key={miembro.nombre} className="bg-white rounded-lg border border-[#dddddd] overflow-hidden hover:shadow-md transition-shadow">
                {/* Foto tipo pasaporte - rectangular */}
                <div className="bg-[#f5f5f5] flex items-center justify-center" style={{ height: '200px' }}>
                  <div className="w-24 h-28 bg-[#dddddd] rounded flex items-center justify-center">
                    <span className="text-[#999]" style={{ fontSize: '28px', fontWeight: 600 }}>{miembro.iniciales}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a' }}>{miembro.nombre}</h4>
                  <p className="text-[#bb1f1f] mt-0.5" style={{ fontSize: '13px', fontWeight: 500 }}>{miembro.cargo}</p>
                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center gap-2 text-[#666666]" style={{ fontSize: '12px' }}>
                      <MapPin size={13} className="shrink-0" />
                      <span>{miembro.sede}</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#eeeeee]">
                    <a 
                      href={`mailto:${miembro.email}`} 
                      className="flex items-center gap-2 text-[#034991] hover:underline" 
                      style={{ fontSize: '12px', fontWeight: 500 }}
                    >
                      <Mail size={12} />
                      {miembro.email}
                    </a>
                  </div>
                  <span className="inline-block mt-3 bg-[#f5f5f5] text-[#666666] px-2 py-0.5 rounded" style={{ fontSize: '11px', fontWeight: 500 }}>
                    {coordinaciones.find(c => c.id === miembro.coordinacion)?.nombre}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funciones de cada coordinación */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Funciones de cada coordinación</h2>
          </div>
          <div className="space-y-4">
            {coordinaciones.slice(1).map((coord, i) => (
              <div key={i} className="bg-[#f5f5f5] p-6 rounded-lg border-l-4 border-[#bb1f1f]">
                <div className="flex items-start gap-4">
                  <coord.icono size={28} className="text-[#bb1f1f] shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="mb-2" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>
                      {coord.nombre}
                    </h3>
                    <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                      {coord.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asociaciones y representación */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Asociaciones y representación</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              Las asociaciones estudiantiles son la base de la representación en el CAEUNA.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg border border-[#dddddd]">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ChevronRight size={20} className="text-[#bb1f1f] mt-0.5 shrink-0" />
                <div>
                  <strong style={{ fontSize: '15px', color: '#1a1a1a' }}>Entes autónomos:</strong>
                  <span style={{ fontSize: '15px', color: '#666666' }}> Las asociaciones son organizaciones autónomas dentro del movimiento estudiantil.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight size={20} className="text-[#bb1f1f] mt-0.5 shrink-0" />
                <div>
                  <strong style={{ fontSize: '15px', color: '#1a1a1a' }}>Adscritas a la FEUNA:</strong>
                  <span style={{ fontSize: '15px', color: '#666666' }}> Todas las asociaciones están adscritas a la Federación de Estudiantes.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight size={20} className="text-[#bb1f1f] mt-0.5 shrink-0" />
                <div>
                  <strong style={{ fontSize: '15px', color: '#1a1a1a' }}>Representación en CAEUNA:</strong>
                  <span style={{ fontSize: '15px', color: '#666666' }}> Cada asociación tiene representación en el Consejo y participa del cogobierno.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight size={20} className="text-[#bb1f1f] mt-0.5 shrink-0" />
                <div>
                  <strong style={{ fontSize: '15px', color: '#1a1a1a' }}>Doble representación:</strong>
                  <span style={{ fontSize: '15px', color: '#666666' }}> Según su estructura, pueden tener hasta dos representaciones en el CAEUNA.</span>
                </div>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-[#dddddd]">
              <a 
                href="/asociaciones" 
                className="inline-flex items-center gap-2 text-[#bb1f1f] hover:underline" 
                style={{ fontSize: '15px', fontWeight: 600 }}
              >
                Ver directorio de asociaciones estudiantiles
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comisiones */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Comisiones de apoyo</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              El CAEUNA puede nombrar comisiones ad hoc o permanentes para trabajos específicos.
            </p>
          </div>
          <div className="max-w-[900px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#f5f5f5] p-6 rounded-lg border border-[#dddddd] text-center">
                <Users size={32} className="text-[#bb1f1f] mx-auto mb-3" />
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>Integración abierta</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  Pueden integrar representantes y cualquier estudiante interesado.
                </p>
              </div>
              <div className="bg-[#f5f5f5] p-6 rounded-lg border border-[#dddddd] text-center">
                <FileText size={32} className="text-[#bb1f1f] mx-auto mb-3" />
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>Trabajo específico</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  Se crean para proyectos, estudios o tareas concretas.
                </p>
              </div>
              <div className="bg-[#f5f5f5] p-6 rounded-lg border border-[#dddddd] text-center">
                <DollarSign size={32} className="text-[#bb1f1f] mx-auto mb-3" />
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>Presupuesto asignado</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  No tienen presupuesto salvo asignación de la Mesa Coordinadora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[#034991] text-white">
        <div className="max-w-[900px] mx-auto px-5 text-center">
          <h2 className="mb-4" style={{ fontSize: '28px', fontWeight: 700 }}>¿Querés saber más sobre el CAEUNA?</h2>
          <p className="mb-8" style={{ fontSize: '15px', lineHeight: 1.7 }}>
            Consultá documentos normativos, conocé las asociaciones estudiantiles, consultá preguntas frecuentes o contactá con la Mesa Coordinadora.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/transparencia" className="inline-flex items-center gap-2 bg-white text-[#034991] px-6 py-3 rounded hover:bg-white/90 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <FileText size={18} />
              Ver documentos
            </a>
            <a href="/asociaciones" className="inline-flex items-center gap-2 bg-[#bb1f1f] text-white px-6 py-3 rounded hover:bg-[#8b1515] transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <Building2 size={18} />
              Conocer asociaciones
            </a>
            <a href="/faq" className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/20 px-6 py-3 rounded hover:bg-white/20 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <MessageSquare size={18} />
              Preguntas frecuentes
            </a>
            <a href="/contacto" className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/20 px-6 py-3 rounded hover:bg-white/20 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <Mail size={18} />
              Contactar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}