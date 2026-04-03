import { HeroInternal } from "../HeroInternal";
import { 
  Heart, Users, UserCircle, UserCheck, CheckCircle, 
  FileText, Mail, MapPin, Building2, ChevronRight,
  Globe, Star, DollarSign, Eye, Vote, Calendar
} from "lucide-react";
import { useState } from "react";

const roles = [
  {
    id: "todas",
    nombre: "Todos los roles",
    desc: "Visión general del Movimiento Estudiantil Indígena, su estructura interna y su papel en la integración y promoción de la diversidad cultural.",
    icono: Users,
  },
  {
    id: "coordinacion",
    nombre: "Coordinación",
    desc: "Rol principal de dirección y conducción del movimiento, designado anualmente en asamblea general de la comunidad estudiantil indígena.",
    icono: UserCircle,
  },
  {
    id: "suplencia-coordinacion",
    nombre: "Suplencia de Coordinación",
    desc: "Persona suplente de la coordinación que asume funciones cuando la coordinación lo requiere.",
    icono: UserCheck,
  },
  {
    id: "finanzas",
    nombre: "Encargado/a de Finanzas",
    desc: "Persona encargada de finanzas del movimiento, sujeta a las funciones de tesorería de una asociación de estudiantes.",
    icono: DollarSign,
  },
  {
    id: "caeuna",
    nombre: "Representantes CAEUNA",
    desc: "Dos representaciones del movimiento ante el Consejo Asesor Estudiantil (CAEUNA), electas anualmente en asamblea.",
    icono: Vote,
  },
  {
    id: "asesoria",
    nombre: "Asesoría",
    desc: "Persona asesora del movimiento que brinda orientación y acompañamiento técnico, designada en asamblea general.",
    icono: Star,
  },
  {
    id: "suplencia-asesoria",
    nombre: "Suplencia de Asesoría",
    desc: "Persona suplente de la asesoría que asume funciones cuando la asesoría lo requiere.",
    icono: Star,
  },
];

const integrantes = [
  {
    nombre: "Coordinador/a del Movimiento",
    rol: "coordinacion",
    cargo: "Coordinación",
    pueblo: "Pueblo [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025",
    email: "asomei@una.cr",
    iniciales: "CM",
  },
  {
    nombre: "Suplente de Coordinación",
    rol: "suplencia-coordinacion",
    cargo: "Suplencia de Coordinación",
    pueblo: "Pueblo [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025",
    email: "asomei@una.cr",
    iniciales: "SC",
  },
  {
    nombre: "Encargado/a de Finanzas",
    rol: "finanzas",
    cargo: "Finanzas",
    pueblo: "Pueblo [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025",
    email: "asomei@una.cr",
    iniciales: "EF",
  },
  {
    nombre: "Representante CAEUNA 1",
    rol: "caeuna",
    cargo: "Representante ante CAEUNA",
    pueblo: "Pueblo [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025",
    email: "asomei@una.cr",
    iniciales: "R1",
  },
  {
    nombre: "Representante CAEUNA 2",
    rol: "caeuna",
    cargo: "Representante ante CAEUNA",
    pueblo: "Pueblo [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025",
    email: "asomei@una.cr",
    iniciales: "R2",
  },
  {
    nombre: "Asesor/a del Movimiento",
    rol: "asesoria",
    cargo: "Asesoría",
    pueblo: "Pueblo [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025",
    email: "asomei@una.cr",
    iniciales: "AM",
  },
  {
    nombre: "Suplente de Asesoría",
    rol: "suplencia-asesoria",
    cargo: "Suplencia de Asesoría",
    pueblo: "Pueblo [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025",
    email: "asomei@una.cr",
    iniciales: "SA",
  },
];

export function MovimientoIndigenPage() {
  const [rolSeleccionado, setRolSeleccionado] = useState("todas");

  const integrantesFiltrados = rolSeleccionado === "todas"
    ? integrantes
    : integrantes.filter(m => m.rol === rolSeleccionado);

  const rolActivo = roles.find(c => c.id === rolSeleccionado);

  return (
    <div>
      {/* Hero */}
      <HeroInternal
        title="Movimiento Estudiantil Indígena"
        subtitle="Integración y promoción de la diversidad cultural de los pueblos indígenas en la UNA"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Órganos" }, { label: "Movimiento Estudiantil Indígena" }]}
      />

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-[900px] mx-auto text-center">
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#333333' }}>
              El Movimiento Estudiantil Indígena es <strong>autónomo</strong>, su principal objetivo es <strong>integrar</strong> al 
              estudiantado indígena en la educación superior y promover la <strong>diversidad cultural</strong> de los diferentes 
              pueblos indígenas al compartir su <strong>historia</strong>, <strong>idioma</strong> y <strong>tradiciones</strong> con 
              la comunidad universitaria de la Universidad Nacional.
            </p>
          </div>
        </div>
      </section>

      {/* ¿Qué hace el Movimiento? */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>¿Qué hace el Movimiento Estudiantil Indígena?</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              El movimiento trabaja en dos grandes áreas: integración del estudiantado indígena y promoción de la diversidad cultural.
            </p>
          </div>

          <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Integración */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#034991]">
              <div className="flex items-start gap-3 mb-4">
                <Users size={32} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-2" style={{ fontSize: '18px', fontWeight: 700, color: '#034991' }}>Integración Estudiantil</h3>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                  Integrar al estudiantado indígena en la educación superior
                </li>
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                  Facilitar la permanencia y éxito académico del estudiantado indígena
                </li>
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                  Construir espacios de encuentro y fortalecimiento comunitario
                </li>
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                  Representar al estudiantado indígena ante instancias universitarias
                </li>
              </ul>
            </div>

            {/* Promoción Cultural */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#bb1f1f]">
              <div className="flex items-start gap-3 mb-4">
                <Globe size={32} className="text-[#bb1f1f] shrink-0" />
                <div>
                  <h3 className="mb-2" style={{ fontSize: '18px', fontWeight: 700, color: '#bb1f1f' }}>Promoción de la Diversidad Cultural</h3>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#bb1f1f] shrink-0 mt-0.5" />
                  Compartir historia de los pueblos indígenas con la comunidad universitaria
                </li>
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#bb1f1f] shrink-0 mt-0.5" />
                  Promover idiomas originarios en espacios académicos
                </li>
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#bb1f1f] shrink-0 mt-0.5" />
                  Visibilizar tradiciones y prácticas culturales indígenas
                </li>
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#bb1f1f] shrink-0 mt-0.5" />
                  Fortalecer el diálogo intercultural en la UNA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cómo se organiza? */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>¿Cómo se organiza?</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              El Movimiento Estudiantil Indígena es autónomo y se organiza a través de una asamblea general anual.
            </p>
          </div>
          <div className="max-w-[1100px] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <div className="bg-[#f5f5f5] px-6 py-4 rounded-lg text-center border-2 border-[#dddddd]">
                <Building2 size={32} className="text-[#666] mx-auto mb-2" />
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>FEUNA</div>
              </div>
              <ChevronRight size={24} className="text-[#999] rotate-90 md:rotate-0" />
              <div className="bg-[#bb1f1f] text-white px-6 py-4 rounded-lg text-center border-2 border-[#bb1f1f]">
                <Heart size={32} className="text-white mx-auto mb-2" />
                <div style={{ fontSize: '15px', fontWeight: 700 }}>Movimiento Indígena</div>
              </div>
              <ChevronRight size={24} className="text-[#999] rotate-90 md:rotate-0" />
              <div className="bg-[#034991] text-white px-6 py-4 rounded-lg text-center border-2 border-[#034991]">
                <Globe size={32} className="text-white mx-auto mb-2" />
                <div style={{ fontSize: '15px', fontWeight: 700 }}>Diversidad Cultural</div>
              </div>
            </div>
          </div>

          {/* Nota de autonomía y estructura */}
          <div className="mt-12 max-w-[800px] mx-auto bg-[#034991]/5 p-6 rounded-lg border-l-4 border-[#034991]">
            <h3 className="mb-3" style={{ fontSize: '16px', fontWeight: 700, color: '#034991' }}>Autonomía y estructura</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={18} className="text-[#034991] shrink-0 mt-0.5" />
                El Movimiento Estudiantil Indígena es autónomo
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={18} className="text-[#034991] shrink-0 mt-0.5" />
                Conformado por estudiantes activos que pertenecen a alguna cultura indígena del país
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={18} className="text-[#034991] shrink-0 mt-0.5" />
                La comprobación de origen se realiza mediante clan, carta de Asociación de Desarrollo Integral, instancia universitaria, Consejo de Mayores u otra figura representativa de cada territorio
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={18} className="text-[#034991] shrink-0 mt-0.5" />
                Las representaciones se designan cada año en asamblea general de la comunidad estudiantil indígena
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={18} className="text-[#034991] shrink-0 mt-0.5" />
                El TEEUNA participa como observador en la asamblea general y emite acreditación en máximo 8 días hábiles
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={18} className="text-[#034991] shrink-0 mt-0.5" />
                Genera, modifica y presenta al CAEUNA su reglamento interno, que define sus funciones
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={18} className="text-[#034991] shrink-0 mt-0.5" />
                Forma parte del Campus Omar Dengo para asignación presupuestaria, con el mismo presupuesto que una asociación estudiantil de sede central
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Integrantes */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Movimiento Estudiantil Indígena</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              Integrantes del movimiento que trabajan en la integración y promoción de la diversidad cultural de los pueblos indígenas.
            </p>
          </div>

          {/* Filtros */}
          <div className="mb-8">
            <h3 className="mb-3" style={{ fontSize: '13px', fontWeight: 600, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Filtrar por rol
            </h3>
            <div className="flex flex-wrap gap-2">
              {roles.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setRolSeleccionado(c.id)}
                  className={`px-4 py-2 rounded transition-colors ${
                    rolSeleccionado === c.id
                      ? 'bg-[#bb1f1f] text-white'
                      : 'bg-white text-[#333333] hover:bg-[#dddddd]'
                  }`}
                  style={{ fontSize: '14px', fontWeight: 500 }}
                >
                  {c.nombre}
                </button>
              ))}
            </div>
          </div>

          {/* Descripción */}
          {rolActivo && (
            <div className="bg-white rounded-lg p-5 mb-8 border-l-4 border-[#bb1f1f]">
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>{rolActivo.nombre}</h3>
              <p className="text-[#666666] mt-1" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                {rolActivo.desc}
              </p>
            </div>
          )}

          {/* Grid de Integrantes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {integrantesFiltrados.map((miembro, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-[#dddddd] overflow-hidden hover:shadow-md transition-shadow">
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
                    {roles.find(c => c.id === miembro.rol)?.nombre}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Representaciones anuales */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Representaciones del Movimiento</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              El movimiento designa estas representaciones cada año en asamblea general de la comunidad estudiantil indígena.
            </p>
          </div>

          <div className="max-w-[900px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#f5f5f5] p-6 rounded-lg border-l-4 border-[#034991]">
                <div className="flex items-start gap-3">
                  <UserCircle size={24} className="text-[#034991] shrink-0" />
                  <div>
                    <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                      Coordinación
                    </h3>
                    <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                      Una coordinación y su suplencia, encargadas de dirigir el movimiento
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#f5f5f5] p-6 rounded-lg border-l-4 border-[#034991]">
                <div className="flex items-start gap-3">
                  <DollarSign size={24} className="text-[#034991] shrink-0" />
                  <div>
                    <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                      Finanzas
                    </h3>
                    <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                      Persona encargada de finanzas, sujeta a funciones de tesorería
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#f5f5f5] p-6 rounded-lg border-l-4 border-[#034991]">
                <div className="flex items-start gap-3">
                  <Vote size={24} className="text-[#034991] shrink-0" />
                  <div>
                    <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                      Representantes CAEUNA
                    </h3>
                    <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                      Dos representaciones ante el Consejo Asesor Estudiantil
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#f5f5f5] p-6 rounded-lg border-l-4 border-[#034991]">
                <div className="flex items-start gap-3">
                  <Star size={24} className="text-[#034991] shrink-0" />
                  <div>
                    <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                      Asesoría
                    </h3>
                    <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                      Una asesoría y su suplencia, que brindan orientación técnica
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presupuesto y rendición de cuentas */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Presupuesto y rendición de cuentas</h2>
          </div>
          <div className="max-w-[900px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-[#bb1f1f]">
                <div className="flex items-start gap-3">
                  <DollarSign size={24} className="text-[#bb1f1f] shrink-0" />
                  <div>
                    <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                      Asignación presupuestaria
                    </h3>
                    <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                      Forma parte del Campus Omar Dengo para asignación de presupuesto. Tiene el mismo presupuesto que una asociación estudiantil de sede central.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-[#bb1f1f]">
                <div className="flex items-start gap-3">
                  <Eye size={24} className="text-[#bb1f1f] shrink-0" />
                  <div>
                    <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                      Rendición de cuentas
                    </h3>
                    <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                      Debe brindar un informe financiero a la Contraloría Estudiantil una vez al año, garantizando transparencia en el uso de fondos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>¿Qué hace el Movimiento por el estudiantado?</h2>
          </div>
          <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f5f5f5] p-6 rounded-lg border-l-4 border-[#034991]">
              <div className="flex items-start gap-3">
                <Users size={24} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                    Integra al estudiantado indígena
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                    Facilita la permanencia y éxito académico del estudiantado indígena en la UNA
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#f5f5f5] p-6 rounded-lg border-l-4 border-[#034991]">
              <div className="flex items-start gap-3">
                <Globe size={24} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                    Promueve la diversidad cultural
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                    Visibiliza y comparte historia, idiomas y tradiciones de los pueblos indígenas
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#f5f5f5] p-6 rounded-lg border-l-4 border-[#034991]">
              <div className="flex items-start gap-3">
                <Heart size={24} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                    Fortalece la comunidad
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                    Construye espacios de encuentro y fortalecimiento comunitario indígena
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#f5f5f5] p-6 rounded-lg border-l-4 border-[#034991]">
              <div className="flex items-start gap-3">
                <FileText size={24} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                    Representa al estudiantado
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                    Tiene representación directa ante el CAEUNA y otras instancias universitarias
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[#034991] text-white">
        <div className="max-w-[900px] mx-auto px-5 text-center">
          <h2 className="mb-4" style={{ fontSize: '28px', fontWeight: 700 }}>¿Querés saber más sobre el Movimiento Estudiantil Indígena?</h2>
          <p className="mb-8" style={{ fontSize: '15px', lineHeight: 1.7 }}>
            Un espacio para conocer cómo se promueve la diversidad cultural y se integra al estudiantado indígena en la UNA.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/participa/sumate" className="inline-flex items-center gap-2 bg-white text-[#034991] px-6 py-3 rounded hover:bg-white/90 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <Users size={18} />
              Ver participación estudiantil
            </a>
            <a href="/apoyo-recursos/servicios" className="inline-flex items-center gap-2 bg-[#bb1f1f] text-white px-6 py-3 rounded hover:bg-[#8b1515] transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <Heart size={18} />
              Conocer servicios
            </a>
            <a href="/faq" className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/20 px-6 py-3 rounded hover:bg-white/20 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <FileText size={18} />
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