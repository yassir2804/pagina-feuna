import { HeroInternal } from "../HeroInternal";
import { 
  Shield, Users, UserCircle, UserCheck, CheckCircle, 
  BookOpen, FileText, Mail, MapPin, Building2, ChevronRight,
  Scale, MessageCircle, AlertCircle, GraduationCap, HandHeart
} from "lucide-react";
import { useState } from "react";

const roles = [
  {
    id: "todas",
    nombre: "Todos los roles",
    desc: "Visión general de la Defensoría Estudiantil, su estructura interna y su papel como instancia de vigilancia y resguardo de derechos estudiantiles.",
    icono: Users,
  },
  {
    id: "defensoria",
    nombre: "Defensoría",
    desc: "Rol principal de dirección y conducción del órgano. Coordina con la Defensoría institucional y lidera las estrategias de protección de derechos académicos y vida universitaria.",
    icono: UserCircle,
  },
  {
    id: "adjuntas",
    nombre: "Defensorías Adjuntas",
    desc: "Dos personas defensoras adjuntas que apoyan la vigilancia de derechos, coordinan procesos y acompañan al estudiantado en problemáticas académicas.",
    icono: UserCheck,
  },
];

const integrantes = [
  {
    nombre: "Defensor/a Estudiantil",
    rol: "defensoria",
    cargo: "Defensoría",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Campus Omar Dengo",
    periodo: "2025-2027",
    email: "defensoria.feuna@una.cr",
    iniciales: "DE",
  },
  {
    nombre: "Defensor/a Adjunto/a 1",
    rol: "adjuntas",
    cargo: "Defensoría Adjunta",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Sede Regional Chorotega",
    periodo: "2025-2027",
    email: "adjunta1@feuna.cr",
    iniciales: "D1",
  },
  {
    nombre: "Defensor/a Adjunto/a 2",
    rol: "adjuntas",
    cargo: "Defensoría Adjunta",
    asociacion: "Asociación de Estudiantes [nombre]",
    sede: "Sede Regional Brunca",
    periodo: "2025-2027",
    email: "adjunta2@feuna.cr",
    iniciales: "D2",
  },
];

export function DefensoriaPage() {
  const [rolSeleccionado, setRolSeleccionado] = useState("todas");

  const integrantesFiltrados = rolSeleccionado === "todas"
    ? integrantes
    : integrantes.filter(m => m.rol === rolSeleccionado);

  const rolActivo = roles.find(c => c.id === rolSeleccionado);

  return (
    <div>
      {/* Hero */}
      <HeroInternal
        title="Defensoría Estudiantil FEUNA"
        subtitle="Instancia autónoma de vigilancia y resguardo de los derechos estudiantiles"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Órganos" }, { label: "Defensoría Estudiantil" }]}
      />

      {/* Disclaimer importante */}
      <section className="py-8 bg-[#fff9e6] border-y border-[#ffd966]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex items-start gap-4">
            <AlertCircle size={24} className="text-[#c75b12] shrink-0 mt-0.5" />
            <div>
              <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                DEFEUNA vs. Defensoría Estudiantil UNA
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#666666' }}>
                La <strong>Defensoría Estudiantil FEUNA (DEFEUNA)</strong> es una instancia autónoma de la FEUNA que vela por los derechos estudiantiles ante situaciones internas de representación estudiantil. 
                Es diferente de la <strong>Defensoría Estudiantil de la UNA</strong>, que es una instancia institucional universitaria que atiende procesos académicos disciplinarios, apelaciones y defensa de derechos estudiantiles ante instancias oficiales de la Universidad.
              </p>
              <p className="mt-2" style={{ fontSize: '13px', lineHeight: 1.6, color: '#666666' }}>
                Para casos que requieren la Defensoría Estudiantil de la UNA, la FEUNA puede orientarte y acompañarte en el proceso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-[900px] mx-auto text-center">
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#333333' }}>
              La Defensoría Estudiantil es una instancia <strong>autónoma</strong> con competencias propias en la <strong>vigilancia</strong> y 
              el <strong>resguardo</strong> de los derechos estudiantiles de carácter <strong>académico</strong> y <strong>vida universitaria</strong>. 
              Coordina con la Defensoría institucional y genera estrategias para informar al estudiantado sobre sus derechos.
            </p>
          </div>
        </div>
      </section>

      {/* ¿Qué defiende? - SECCIÓN ÚNICA CONSOLIDADA */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>¿Qué defiende la Defensoría Estudiantil?</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              La Defensoría resguarda derechos estudiantiles en dos áreas fundamentales: asuntos académicos y vida universitaria.
            </p>
          </div>

          <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Derechos Académicos */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#034991]">
              <div className="flex items-start gap-3 mb-4">
                <GraduationCap size={32} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-2" style={{ fontSize: '18px', fontWeight: 700, color: '#034991' }}>Derechos Académicos</h3>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                  Vigilancia de cumplimiento del Reglamento de Enseñanza y Aprendizaje
                </li>
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                  Protección de derechos en procesos evaluativos
                </li>
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                  Acompañamiento en situaciones de conflicto académico
                </li>
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                  Información sobre procedimientos académicos y derechos estudiantiles
                </li>
              </ul>
            </div>

            {/* Vida Universitaria */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#bb1f1f]">
              <div className="flex items-start gap-3 mb-4">
                <HandHeart size={32} className="text-[#bb1f1f] shrink-0" />
                <div>
                  <h3 className="mb-2" style={{ fontSize: '18px', fontWeight: 700, color: '#bb1f1f' }}>Vida Universitaria</h3>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#bb1f1f] shrink-0 mt-0.5" />
                  Resguardo de derechos en espacios estudiantiles
                </li>
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#bb1f1f] shrink-0 mt-0.5" />
                  Coordinación con instancias universitarias en problemáticas estudiantiles
                </li>
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#bb1f1f] shrink-0 mt-0.5" />
                  Atención de situaciones que afectan la permanencia universitaria
                </li>
                <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  <CheckCircle size={16} className="text-[#bb1f1f] shrink-0 mt-0.5" />
                  Promoción de una cultura de respeto y defensa de derechos
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
              La Defensoría Estudiantil actúa con autonomía en sus competencias de vigilancia y resguardo de derechos.
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
                <div style={{ fontSize: '15px', fontWeight: 700 }}>Defensoría Estudiantil</div>
              </div>
              <ChevronRight size={24} className="text-[#999] rotate-90 md:rotate-0" />
              <div className="bg-[#034991] text-white px-6 py-4 rounded-lg text-center border-2 border-[#034991]">
                <Scale size={32} className="text-white mx-auto mb-2" />
                <div style={{ fontSize: '15px', fontWeight: 700 }}>Resguardo de Derechos</div>
              </div>
            </div>
          </div>

          {/* Nota de autonomía */}
          <div className="mt-12 max-w-[800px] mx-auto bg-[#034991]/5 p-6 rounded-lg border-l-4 border-[#034991]">
            <h3 className="mb-3" style={{ fontSize: '16px', fontWeight: 700, color: '#034991' }}>Autonomía y estructura</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={18} className="text-[#034991] shrink-0 mt-0.5" />
                La Defensoría Estudiantil es autónoma en sus competencias
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={18} className="text-[#034991] shrink-0 mt-0.5" />
                Conformada por quien ejerce la defensoría y dos defensorías adjuntas
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={18} className="text-[#034991] shrink-0 mt-0.5" />
                Cuenta con el apoyo de representantes de los consejos de unidad académica de cada asociación
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={18} className="text-[#034991] shrink-0 mt-0.5" />
                Sus integrantes electos deben ser estudiantes regulares, debidamente matriculados y empadronados
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
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Defensoría Estudiantil FEUNA</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              Integrantes del órgano que vigila y resguarda los derechos estudiantiles de carácter académico y vida universitaria.
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

      {/* Funciones */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Funciones de la Defensoría Estudiantil</h2>
          </div>

          {/* Funciones Generales */}
          <div className="mb-8 bg-[#034991]/5 p-6 rounded-lg border-l-4 border-[#034991]">
            <h3 className="mb-4" style={{ fontSize: '20px', fontWeight: 700, color: '#034991' }}>Funciones Generales del Órgano</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                Asistir a las reuniones de coordinación con la Defensoría Estudiantil institucional
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                Coordinar con la Defensoría Estudiantil institucional los procesos que impliquen problemáticas del estudiantado
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                Generar las estrategias necesarias para informar al estudiantado sobre el Reglamento General del Proceso de Enseñanza y Aprendizaje
              </li>
              <li className="flex items-start gap-2" style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                <CheckCircle size={16} className="text-[#034991] shrink-0 mt-0.5" />
                Las demás funciones que su propio reglamento indique
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
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Estructuras de apoyo de la Defensoría Estudiantil</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              La Defensoría cuenta con redes de apoyo para cumplir sus funciones de vigilancia y resguardo de derechos.
            </p>
          </div>
          <div className="max-w-[800px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-[#dddddd] text-center">
                <MessageCircle size={32} className="text-[#bb1f1f] mx-auto mb-3" />
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>Coordinación institucional</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  Reuniones con la Defensoría institucional para coordinar procesos de atención estudiantil
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-[#dddddd] text-center">
                <BookOpen size={32} className="text-[#bb1f1f] mx-auto mb-3" />
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>Red de apoyo CUA</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  Representantes de consejos de unidad académica de cada asociación que coayudan desde sus facultades
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>¿Qué hace la Defensoría Estudiantil por el estudiantado?</h2>
          </div>
          <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f5f5f5] p-6 rounded-lg border-l-4 border-[#034991]">
              <div className="flex items-start gap-3">
                <Scale size={24} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                    Protege derechos académicos
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                    Vigila el cumplimiento de normativas académicas y protege derechos estudiantiles
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#f5f5f5] p-6 rounded-lg border-l-4 border-[#034991]">
              <div className="flex items-start gap-3">
                <MessageCircle size={24} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                    Coordina con instancias
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                    Coordina con la Defensoría institucional para resolver problemáticas estudiantiles
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#f5f5f5] p-6 rounded-lg border-l-4 border-[#034991]">
              <div className="flex items-start gap-3">
                <BookOpen size={24} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                    Informa sobre derechos
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                    Genera estrategias para que el estudiantado conozca sus derechos y reglamentos
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#f5f5f5] p-6 rounded-lg border-l-4 border-[#034991]">
              <div className="flex items-start gap-3">
                <HandHeart size={24} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-1" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                    Acompaña al estudiantado
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                    Brinda acompañamiento en situaciones que afectan derechos y vida universitaria
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
          <h2 className="mb-4" style={{ fontSize: '28px', fontWeight: 700 }}>¿Querés saber más sobre la Defensoría Estudiantil?</h2>
          <p className="mb-8" style={{ fontSize: '15px', lineHeight: 1.7 }}>
            Un espacio para conocer cómo se resguardan tus derechos estudiantiles, académicos y de vida universitaria.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/servicios" className="inline-flex items-center gap-2 bg-white text-[#034991] px-6 py-3 rounded hover:bg-white/90 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <Shield size={18} />
              Ver servicios estudiantiles
            </a>
            <a href="/participacion" className="inline-flex items-center gap-2 bg-[#bb1f1f] text-white px-6 py-3 rounded hover:bg-[#8b1515] transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <Users size={18} />
              Conocer participación
            </a>
            <a href="/faq" className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/20 px-6 py-3 rounded hover:bg-white/20 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <AlertCircle size={18} />
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