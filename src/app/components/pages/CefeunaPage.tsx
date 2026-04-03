import { HeroInternal } from "../HeroInternal";
import { 
  FileCheck, Eye, Shield, DollarSign, Building2, AlertCircle,
  UserCircle, UserCheck, UsersRound, CheckCircle, ClipboardCheck,
  FileText, TrendingUp, Home, Mail, MapPin, Users, ChevronRight, Search
} from "lucide-react";
import { useState } from "react";

const funcionesContraloria = [
  { icono: FileCheck, titulo: "Revisión de informes", desc: "Revisa y dictamina informes financieros de las instancias federadas" },
  { icono: Eye, titulo: "Vigilancia institucional", desc: "Revisa periódicamente informes de labores de otros órganos FEUNA" },
  { icono: DollarSign, titulo: "Control de fondos", desc: "Genera estrategias de vigilancia sobre los fondos de la Federación" },
  { icono: ClipboardCheck, titulo: "Fiscalización de viáticos", desc: "Revisa facturas y justificaciones de viajes y viáticos" },
  { icono: Home, titulo: "Protección de espacios", desc: "Vela porque los espacios estudiantiles sean ocupados por estudiantes" },
  { icono: AlertCircle, titulo: "Canalización de denuncias", desc: "Eleva denuncias a instancias universitarias cuando corresponde" },
];

const roles = [
  {
    id: "todas",
    nombre: "Todos los roles",
    desc: "Visión general de la Contraloría Estudiantil, su estructura interna y su papel como instancia fiscalizadora de la FEUNA.",
    icono: Users,
  },
  {
    id: "contraloria",
    nombre: "Contraloría",
    desc: "Rol principal de dirección y conducción del órgano fiscalizador. Autoriza fondos y órdenes de pago, enfocado en revisión, vigilancia y seguimiento financiero e institucional.",
    icono: UserCircle,
  },
  {
    id: "subcontraloria",
    nombre: "Subcontralorías",
    desc: "Dos personas subcontraloras que apoyan la fiscalización, acompañan en la revisión de informes, fondos y espacios, garantizando continuidad funcional del órgano.",
    icono: UserCheck,
  },
];

const integrantes = [
  {
    nombre: "Contralor/a Estudiantil",
    rol: "contraloria",
    cargo: "Contraloría",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025-2027",
    email: "contraloria@feuna.cr",
    iniciales: "CE",
  },
  {
    nombre: "Subcontralor/a Estudiantil 1",
    rol: "subcontraloria",
    cargo: "Subcontraloría",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Sede Regional Chorotega",
    periodo: "2025-2027",
    email: "subcontraloria1@feuna.cr",
    iniciales: "S1",
  },
  {
    nombre: "Subcontralor/a Estudiantil 2",
    rol: "subcontraloria",
    cargo: "Subcontraloría",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Sede Regional Brunca",
    periodo: "2025-2027",
    email: "subcontraloria2@feuna.cr",
    iniciales: "S2",
  },
];

const areasFiscalizacion = [
  {
    titulo: "Informes financieros",
    desc: "Revisión y dictamen de todos los informes financieros de las instancias federadas para garantizar transparencia en el uso de fondos.",
    icono: FileCheck,
  },
  {
    titulo: "Informes de labores",
    desc: "Revisión semestral de informes de labores del DEUNA, coordinación del CAEUNA, TEEUNA y Defensoría Estudiantil.",
    icono: ClipboardCheck,
  },
  {
    titulo: "Uso de fondos",
    desc: "Vigilancia sobre el uso correcto de los fondos de la FEUNA y generación de estrategias de control financiero.",
    icono: DollarSign,
  },
  {
    titulo: "Viáticos y viajes",
    desc: "Fiscalización de facturas, justificaciones y documentación relacionada con viajes y viáticos de representaciones.",
    icono: TrendingUp,
  },
  {
    titulo: "Espacios estudiantiles",
    desc: "Vigilancia para que los espacios estudiantiles permanezcan bajo control y uso del estudiantado organizado.",
    icono: Building2,
  },
  {
    titulo: "Denuncias y seguimiento",
    desc: "Elevación de denuncias a la Contraloría Universitaria y otras instancias cuando se detectan irregularidades.",
    icono: AlertCircle,
  },
];

export function CefeunaPage() {
  const [rolSeleccionado, setRolSeleccionado] = useState("todas");

  const integrantesFiltrados = rolSeleccionado === "todas"
    ? integrantes
    : integrantes.filter(m => m.rol === rolSeleccionado);

  const rolActivo = roles.find(c => c.id === rolSeleccionado);

  return (
    <div>
      {/* Hero */}
      <HeroInternal
        title="Contraloría Estudiantil FEUNA"
        subtitle="Instancia fiscalizadora de las finanzas y espacios estudiantiles de la FEUNA"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Órganos" }, { label: "Contraloría Estudiantil" }]}
      />

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-[900px] mx-auto text-center">
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#333333' }}>
              La Contraloría Estudiantil es la instancia <strong>fiscalizadora</strong> de las finanzas y espacios estudiantiles de la FEUNA, 
              con plena <strong>autonomía</strong> en estas materias. Revisa informes, vigila <strong>fondos</strong> y protege 
              que los <strong>espacios estudiantiles</strong> permanezcan bajo control del estudiantado.
            </p>
          </div>
        </div>
      </section>

      {/* ¿Qué fiscaliza? - SECCIÓN ÚNICA CONSOLIDADA */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>¿Qué fiscaliza la Contraloría Estudiantil?</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              La Contraloría ejerce vigilancia financiera e institucional en dos grandes áreas: fondos estudiantiles y espacios físicos.
            </p>
          </div>

          <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Finanzas */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#034991]">
              <div className="flex items-start gap-3 mb-4">
                <DollarSign size={32} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-2" style={{ fontSize: '18px', fontWeight: 700, color: '#034991' }}>Vigilancia Financiera</h3>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                  Informes financieros de instancias federadas
                </li>
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                  Informes de labores del DEUNA, CAEUNA, TEEUNA y Defensoría (semestralmente)
                </li>
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                  Uso y gestión de fondos de la FEUNA
                </li>
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                  Facturas y justificaciones de viáticos
                </li>
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                  Sanciones por actos ilegales en manejo de fondos
                </li>
              </ul>
            </div>

            {/* Espacios */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#bb1f1f]">
              <div className="flex items-start gap-3 mb-4">
                <Building2 size={32} className="text-[#bb1f1f] shrink-0" />
                <div>
                  <h3 className="mb-2" style={{ fontSize: '18px', fontWeight: 700, color: '#bb1f1f' }}>Vigilancia de Espacios Estudiantiles</h3>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#bb1f1f] shrink-0 mt-0.5" />
                  Vela porque los espacios estudiantiles sean ocupados por estudiantes
                </li>
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#bb1f1f] shrink-0 mt-0.5" />
                  Protege que personal académico o administrativo no intervenga en ellos
                </li>
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#bb1f1f] shrink-0 mt-0.5" />
                  Eleva denuncias a la Contraloría Universitaria cuando corresponde
                </li>
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#bb1f1f] shrink-0 mt-0.5" />
                  Protege derechos fundamentales del estudiantado
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
              La Contraloría Estudiantil actúa con autonomía en sus funciones de fiscalización y vigilancia.
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
                <Shield size={32} className="text-white mx-auto mb-2" />
                <div style={{ fontSize: '15px', fontWeight: 700 }}>Contraloría Estudiantil</div>
              </div>
              <ChevronRight size={24} className="text-[#999] rotate-90 md:rotate-0" />
              <div className="bg-[#034991] text-white px-6 py-4 rounded-lg text-center border-2 border-[#034991]">
                <Eye size={32} className="text-white mx-auto mb-2" />
                <div style={{ fontSize: '15px', fontWeight: 700 }}>Fiscalización</div>
              </div>
            </div>
          </div>

          {/* Nota de autonomía */}
          <div className="mt-12 max-w-[800px] mx-auto bg-[#034991]/5 p-6 rounded-lg border-l-4 border-[#034991]">
            <h3 className="mb-3" style={{ fontSize: '16px', fontWeight: 700, color: '#034991' }}>Autonomía y estructura</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={18} className="text-[#034991] shrink-0 mt-0.5" />
                La Contraloría Estudiantil es autónoma en sus materias
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={18} className="text-[#034991] shrink-0 mt-0.5" />
                Conformada por quien ejerce la contraloría y dos subcontraloras
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={18} className="text-[#034991] shrink-0 mt-0.5" />
                Sus integrantes son electos en el CAEUNA
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={18} className="text-[#034991] shrink-0 mt-0.5" />
                Su reglamento es aprobado y modificado por el CAEUNA
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Integrantes */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Contraloría Estudiantil CEFEUNA</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              Integrantes del órgano fiscalizador que vigilan el uso correcto de fondos y espacios estudiantiles.
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
            {integrantesFiltrados.map((miembro) => (
              <div key={miembro.email} className="bg-white rounded-lg border border-[#dddddd] overflow-hidden hover:shadow-md transition-shadow">
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

      {/* Funciones de la Contraloría */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Funciones de la Contraloría Estudiantil</h2>
          </div>

          {/* Funciones Generales */}
          <div className="mb-8 bg-[#034991]/5 p-6 rounded-lg border-l-4 border-[#034991]">
            <h3 className="mb-4" style={{ fontSize: '20px', fontWeight: 700, color: '#034991' }}>Funciones Generales del Órgano</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                Autorizar fondos y órdenes de pago ejecutados por los órganos de la FEUNA y sus liquidaciones
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                Revisar y dictaminar todos los informes de finanzas de las instancias federadas
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                Revisar semestralmente los informes de labores del DEUNA, Mesa Coordinadora del CAEUNA, TEEUNA y Defensoría Estudiantil
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                Generar estrategias necesarias para la vigilancia de los fondos de la FEUNA
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                Fijar sanciones a quienes incurran en actos ilegales en el manejo de fondos de la FEUNA
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                Velar por la buena gestión de los fondos de la FEUNA
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                Fiscalizar que los viajes y la entrega de viáticos estén debidamente justificadas por medio de facturas
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                Velar por que los espacios estudiantiles sean ocupados por estudiantes y que ninguna persona del sector académico o administrativo pueda intervenir, salvo por violaciones a derechos humanos fundamentales
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                Elevar denuncias relativas a espacios estudiantiles a la Contraloría Institucional y demás instancias pertinentes
              </li>
            </ul>
          </div>

          {/* Roles específicos */}
          <div className="space-y-4">
            {roles.slice(1).map((rol, i) => (
              <div key={i} className="bg-[#f5f5f5] p-6 rounded-lg border-l-4 border-[#bb1f1f]">
                <div className="flex items-start gap-4">
                  <rol.icono size={28} className="text-[#bb1f1f] shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="mb-2" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>
                      {rol.nombre}
                    </h3>
                    <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                      {rol.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estructuras de apoyo */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Estructuras de apoyo de la Contraloría Estudiantil</h2>
          </div>
          <div className="max-w-[900px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#f5f5f5] p-6 rounded-lg border border-[#dddddd] text-center">
                <FileCheck size={32} className="text-[#bb1f1f] mx-auto mb-3" />
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>Revisión de informes</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  Análisis de informes financieros y de labores de los órganos federativos
                </p>
              </div>
              <div className="bg-[#f5f5f5] p-6 rounded-lg border border-[#dddddd] text-center">
                <DollarSign size={32} className="text-[#bb1f1f] mx-auto mb-3" />
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>Vigilancia de fondos</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  Seguimiento al uso de recursos, viáticos, justificaciones y gestión financiera
                </p>
              </div>
              <div className="bg-[#f5f5f5] p-6 rounded-lg border border-[#dddddd] text-center">
                <Building2 size={32} className="text-[#bb1f1f] mx-auto mb-3" />
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>Resguardo de espacios</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  Defensa del uso estudiantil de los espacios y canalización de denuncias cuando corresponda
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué hace la Contraloría por el estudiantado? */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>¿Qué hace la Contraloría Estudiantil por el estudiantado?</h2>
          </div>
          <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#034991]">
              <div className="flex items-start gap-3">
                <Eye size={24} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                    Fortalece la transparencia
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                    Fortalece la transparencia dentro de la FEUNA mediante fiscalización constante
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#034991]">
              <div className="flex items-start gap-3">
                <DollarSign size={24} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                    Vigila el uso de fondos
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                    Vigila el uso correcto de fondos estudiantiles y gestión financiera
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#034991]">
              <div className="flex items-start gap-3">
                <Building2 size={24} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                    Protege espacios estudiantiles
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                    Protege los espacios estudiantiles para que permanezcan bajo control estudiantil
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#034991]">
              <div className="flex items-start gap-3">
                <FileCheck size={24} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                    Revisa informes
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                    Revisa informes de otros órganos federativos para garantizar rendición de cuentas
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#034991]">
              <div className="flex items-start gap-3">
                <AlertCircle size={24} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                    Activa denuncias
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                    Puede activar denuncias ante instancias universitarias cuando detecta irregularidades
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
          <h2 className="mb-4" style={{ fontSize: '28px', fontWeight: 700 }}>¿Querés saber más sobre la Contraloría Estudiantil?</h2>
          <p className="mb-8" style={{ fontSize: '15px', lineHeight: 1.7 }}>
            Un espacio para conocer cómo se fiscalizan los recursos y los espacios estudiantiles dentro de la FEUNA, y cómo se fortalece la transparencia en la representación estudiantil.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/transparencia" className="inline-flex items-center gap-2 bg-white text-[#034991] px-6 py-3 rounded hover:bg-white/90 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <FileText size={18} />
              Ver transparencia
            </a>
            <a href="/participacion" className="inline-flex items-center gap-2 bg-[#bb1f1f] text-white px-6 py-3 rounded hover:bg-[#8b1515] transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <Users size={18} />
              Conocer participación estudiantil
            </a>
            <a href="/faq" className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/20 px-6 py-3 rounded hover:bg-white/20 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <Search size={18} />
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