import { HeroInternal } from "../HeroInternal";
import { 
  Users, Shield, Award, BookOpen, FileCheck, Vote,
  UserCircle, UserCheck, FileText, DollarSign, UsersRound,
  Building2, ChevronRight, Mail, MapPin, CheckCircle, AlertCircle, UserPlus, ClipboardCheck
} from "lucide-react";
import { useState } from "react";

const funcionesTeeuna = [
  { icono: Shield, titulo: "Fiscalización electoral", desc: "Supervisa procesos electorales de las asociaciones estudiantiles" },
  { icono: Vote, titulo: "Promoción de participación", desc: "Impulsa campañas e información para incentivar el voto y la organización estudiantil" },
  { icono: Award, titulo: "Acreditación", desc: "Acredita representaciones estudiantiles ante asambleas electorales y otros espacios" },
  { icono: BookOpen, titulo: "Capacitación", desc: "Genera formación y materiales para puestos de representación" },
  { icono: FileText, titulo: "Información electoral", desc: "Facilita estatuto, tutoriales, afiches, infografías y manuales" },
  { icono: CheckCircle, titulo: "Garantía democrática", desc: "Fortalece la legalidad y el orden en los procesos electorales estudiantiles" },
];

const roles = [
  {
    id: "todas",
    nombre: "Todos los roles",
    desc: "Visión general de la Junta Directiva del TEEUNA, sus roles internos y su función como órgano electoral estudiantil.",
    icono: Users,
  },
  {
    id: "presidencia",
    nombre: "Presidencia",
    desc: "Rol de conducción general del TEEUNA. Representa al órgano, dirige su trabajo y asume representación estudiantil ante el Tribunal Electoral Universitario cuando corresponde.",
    icono: UserCircle,
  },
  {
    id: "vicepresidencia",
    nombre: "Vicepresidencia",
    desc: "Rol de apoyo a la Presidencia y sustitución en caso de ausencia, con participación en la conducción del órgano electoral.",
    icono: UserCheck,
  },
  {
    id: "secretaria",
    nombre: "Secretaría",
    desc: "Rol vinculado al seguimiento organizativo, agenda, acreditaciones, documentación y apoyo en la gestión interna del Tribunal.",
    icono: FileText,
  },
  {
    id: "finanzas",
    nombre: "Finanzas",
    desc: "Rol relacionado con presupuesto electoral, materiales, apoyo logístico y administración de recursos del TEEUNA.",
    icono: DollarSign,
  },
  {
    id: "suplencias",
    nombre: "Suplencias",
    desc: "Integrantes que sostienen la continuidad funcional de la Junta Directiva y apoyan el trabajo electoral cuando se requiere.",
    icono: UsersRound,
  },
  {
    id: "representacion-teuna",
    nombre: "Representación TEUNA",
    desc: "Representación estudiantil ante el Tribunal Electoral Universitario, elegida desde el seno del TEEUNA.",
    icono: Building2,
  },
  {
    id: "representacion-tua",
    nombre: "Representación TUA",
    desc: "Representación estudiantil ante el Tribunal Universitario de Apelaciones, nombrada por el TEEUNA.",
    icono: Building2,
  },
];

const integrantes = [
  {
    nombre: "Presidente/a del TEEUNA",
    rol: "presidencia",
    cargo: "Presidencia",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025-2026",
    email: "presidencia.teeuna@una.cr",
    iniciales: "PT",
  },
  {
    nombre: "Vicepresidente/a del TEEUNA",
    rol: "vicepresidencia",
    cargo: "Vicepresidencia",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025-2026",
    email: "vicepresidencia.teeuna@una.cr",
    iniciales: "VT",
  },
  {
    nombre: "Secretario/a del TEEUNA",
    rol: "secretaria",
    cargo: "Secretaría",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Sede Regional Chorotega",
    periodo: "2025-2026",
    email: "secretaria.teeuna@una.cr",
    iniciales: "ST",
  },
  {
    nombre: "Encargado/a de Finanzas",
    rol: "finanzas",
    cargo: "Finanzas",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025-2026",
    email: "finanzas.teeuna@una.cr",
    iniciales: "FT",
  },
  {
    nombre: "Suplente 1",
    rol: "suplencias",
    cargo: "Suplencia",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Sede Regional Brunca",
    periodo: "2025-2026",
    email: "suplente1.teeuna@una.cr",
    iniciales: "S1",
  },
  {
    nombre: "Suplente 2",
    rol: "suplencias",
    cargo: "Suplencia",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025-2026",
    email: "suplente2.teeuna@una.cr",
    iniciales: "S2",
  },
  {
    nombre: "Suplente 3",
    rol: "suplencias",
    cargo: "Suplencia",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Sede Regional Huetar Norte",
    periodo: "2025-2026",
    email: "suplente3.teeuna@una.cr",
    iniciales: "S3",
  },
  {
    nombre: "Suplente 4",
    rol: "suplencias",
    cargo: "Suplencia",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025-2026",
    email: "suplente4.teeuna@una.cr",
    iniciales: "S4",
  },
  {
    nombre: "Representante ante TEUNA",
    rol: "representacion-teuna",
    cargo: "Representación ante Tribunal Electoral Universitario",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025-2026",
    email: "teuna.teeuna@una.cr",
    iniciales: "RT",
  },
  {
    nombre: "Representante ante TUA",
    rol: "representacion-tua",
    cargo: "Representación ante Tribunal Universitario de Apelaciones",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025-2026",
    email: "tua.teeuna@una.cr",
    iniciales: "RA",
  },
];

const procesoElectoral = [
  {
    paso: 1,
    titulo: "Conformación de Juntas Electorales",
    desc: "Cada asociación estudiantil conforma su junta electoral para coordinar procesos locales",
    icono: UsersRound,
  },
  {
    paso: 2,
    titulo: "Convocatoria Electoral",
    desc: "El TEEUNA convoca oficialmente a elecciones estudiantiles según calendario aprobado",
    icono: Vote,
  },
  {
    paso: 3,
    titulo: "Fiscalización del Proceso",
    desc: "El TEEUNA supervisa que los procesos electorales se realicen conforme a normativa",
    icono: Shield,
  },
  {
    paso: 4,
    titulo: "Acreditación de Representaciones",
    desc: "Una vez electas, las representaciones son acreditadas oficialmente por el TEEUNA",
    icono: Award,
  },
  {
    paso: 5,
    titulo: "Juramentación",
    desc: "Las representaciones acreditadas son juramentadas para asumir sus funciones",
    icono: CheckCircle,
  },
  {
    paso: 6,
    titulo: "Divulgación y Participación",
    desc: "Se divulgan resultados y se promueve la participación estudiantil en futuros procesos",
    icono: FileText,
  },
];

export function TeeUnaPage() {
  const [rolSeleccionado, setRolSeleccionado] = useState("todas");

  const integrantesFiltrados = rolSeleccionado === "todas"
    ? integrantes
    : integrantes.filter(m => m.rol === rolSeleccionado);

  const rolActivo = roles.find(c => c.id === rolSeleccionado);

  return (
    <div>
      {/* Hero */}
      <HeroInternal
        title="Tribunal de Elecciones Estudiantiles de la Universidad Nacional (TEEUNA)"
        subtitle="Órgano electoral estudiantil de la FEUNA"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Órganos" }, { label: "TEEUNA" }]}
      />

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-[900px] mx-auto text-center">
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#333333' }}>
              El TEEUNA es un organismo <strong>independiente</strong> en el desempeño de sus funciones que fiscaliza <strong>elecciones</strong> de asociaciones, 
              promueve la <strong>participación</strong> estudiantil, <strong>acredita</strong> representaciones estudiantiles y actúa como garante 
              de <strong>transparencia</strong> y legalidad electoral.
            </p>
          </div>
        </div>
      </section>

      {/* ¿Qué es el TEEUNA? */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>¿Qué es el TEEUNA?</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              El TEEUNA es el órgano electoral que garantiza procesos democráticos, transparentes y ordenados dentro de la representación estudiantil.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funcionesTeeuna.map((func, i) => (
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
              El TEEUNA se organiza desde las asociaciones estudiantiles hasta la Junta Directiva que coordina todo el sistema electoral.
            </p>
          </div>
          <div className="max-w-[1100px] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <div className="bg-[#f5f5f5] px-6 py-4 rounded-lg text-center border-2 border-[#dddddd]">
                <Users size={32} className="text-[#666] mx-auto mb-2" />
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>Estudiantado</div>
              </div>
              <ChevronRight size={24} className="text-[#999] rotate-90 md:rotate-0" />
              <div className="bg-[#f5f5f5] px-6 py-4 rounded-lg text-center border-2 border-[#dddddd]">
                <Vote size={32} className="text-[#666] mx-auto mb-2" />
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>Juntas Electorales</div>
              </div>
              <ChevronRight size={24} className="text-[#999] rotate-90 md:rotate-0" />
              <div className="bg-[#bb1f1f]/10 px-6 py-4 rounded-lg text-center border-2 border-[#bb1f1f]">
                <UsersRound size={32} className="text-[#bb1f1f] mx-auto mb-2" />
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#bb1f1f' }}>Asamblea General</div>
              </div>
              <ChevronRight size={24} className="text-[#999] rotate-90 md:rotate-0" />
              <div className="bg-[#034991] text-white px-6 py-4 rounded-lg text-center border-2 border-[#034991]">
                <Shield size={32} className="text-white mx-auto mb-2" />
                <div style={{ fontSize: '15px', fontWeight: 700 }}>Junta Directiva</div>
              </div>
            </div>
          </div>

          {/* Nota de independencia */}
          <div className="mt-12 max-w-[800px] mx-auto bg-[#034991]/5 p-6 rounded-lg border-l-4 border-[#034991]">
            <h3 className="mb-3" style={{ fontSize: '16px', fontWeight: 700, color: '#034991' }}>Independencia y estructura</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={18} className="text-[#034991] shrink-0 mt-0.5" />
                El TEEUNA es independiente en sus funciones
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={18} className="text-[#034991] shrink-0 mt-0.5" />
                Es juramentado por el CAEUNA
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={18} className="text-[#034991] shrink-0 mt-0.5" />
                Cuenta con presupuesto propio
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={18} className="text-[#034991] shrink-0 mt-0.5" />
                Su reglamento es aprobado y reformado por el CAEUNA
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Integrantes del TEEUNA */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Junta Directiva del TEEUNA</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              Integrantes del órgano electoral estudiantil que garantizan procesos democráticos transparentes.
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

      {/* Funciones de cada rol */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Funciones de cada rol del TEEUNA</h2>
          </div>
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
            {/* Juntas Electorales de Asociación */}
            <div className="bg-[#f5f5f5] p-6 rounded-lg border-l-4 border-[#bb1f1f]">
              <div className="flex items-start gap-4">
                <Vote size={28} className="text-[#bb1f1f] shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="mb-2" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>
                    Juntas Electorales de Asociación
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                    Base organizativa del sistema electoral estudiantil. Fiscalización y acompañamiento de elecciones locales, vínculo entre asociaciones y TEEUNA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso Electoral */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>¿Cómo funciona el proceso electoral estudiantil?</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              Una guía rápida para entender cómo se organiza la elección de representaciones estudiantiles.
            </p>
          </div>

          <div className="max-w-[900px] mx-auto space-y-6">
            {procesoElectoral.map((paso) => (
              <div key={paso.paso} className="bg-white p-6 rounded-lg border border-[#dddddd] flex gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#034991] text-white flex items-center justify-center" style={{ fontSize: '20px', fontWeight: 700 }}>
                    {paso.paso}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <paso.icono size={24} className="text-[#bb1f1f] shrink-0 mt-0.5" />
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>{paso.titulo}</h3>
                  </div>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>{paso.desc}</p>
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
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Estructuras de apoyo del TEEUNA</h2>
          </div>
          <div className="max-w-[900px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#f5f5f5] p-6 rounded-lg border border-[#dddddd] text-center">
                <Vote size={32} className="text-[#bb1f1f] mx-auto mb-3" />
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>Juntas Electorales</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  Base organizativa de los procesos electorales estudiantiles en asociaciones y escuelas
                </p>
              </div>
              <div className="bg-[#f5f5f5] p-6 rounded-lg border border-[#dddddd] text-center">
                <BookOpen size={32} className="text-[#bb1f1f] mx-auto mb-3" />
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>Capacitación y materiales</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  Formación, manuales, tutoriales, afiches e infografías para quienes asumen representación
                </p>
              </div>
              <div className="bg-[#f5f5f5] p-6 rounded-lg border border-[#dddddd] text-center">
                <UserPlus size={32} className="text-[#bb1f1f] mx-auto mb-3" />
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>Participación estudiantil</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  Campañas informativas y acciones para fortalecer la participación democrática del estudiantado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué hace el TEEUNA por el estudiantado? */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>¿Qué hace el TEEUNA por el estudiantado?</h2>
          </div>
          <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#034991]">
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                    Procesos electorales confiables
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                    Garantiza procesos electorales más claros y confiables
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#034991]">
              <div className="flex items-start gap-3">
                <Vote size={24} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                    Promoción de participación
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                    Promueve la participación del estudiantado en procesos democráticos
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#034991]">
              <div className="flex items-start gap-3">
                <BookOpen size={24} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                    Formación de representantes
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                    Apoya la formación de quienes asumen representación estudiantil
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#034991]">
              <div className="flex items-start gap-3">
                <Shield size={24} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                    Legitimidad organizativa
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                    Fortalece la legitimidad de la organización estudiantil
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#034991]">
              <div className="flex items-start gap-3">
                <ClipboardCheck size={24} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                    Acreditaciones y acompañamiento
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                    Facilita acreditaciones y acompañamiento electoral
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
          <h2 className="mb-4" style={{ fontSize: '28px', fontWeight: 700 }}>¿Querés saber más sobre el TEEUNA?</h2>
          <p className="mb-8" style={{ fontSize: '15px', lineHeight: 1.7 }}>
            Un espacio para conocer el sistema electoral estudiantil, seguir los procesos de representación y acceder a información útil sobre participación universitaria.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/transparencia" className="inline-flex items-center gap-2 bg-white text-[#034991] px-6 py-3 rounded hover:bg-white/90 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <FileText size={18} />
              Ver transparencia
            </a>
            <a href="/participa/sumate" className="inline-flex items-center gap-2 bg-[#bb1f1f] text-white px-6 py-3 rounded hover:bg-[#8b1515] transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <UserPlus size={18} />
              Conocer participación estudiantil
            </a>
            <a href="/faq" className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/20 px-6 py-3 rounded hover:bg-white/20 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <FileCheck size={18} />
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