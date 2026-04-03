import { HeroPageTitle } from "../HeroPageTitle";
import { FileText, Download, Calendar, BookOpen, Scale, Gavel } from "lucide-react";
import { useState } from "react";

const documentos = [
  { tipo: "Estatuto", titulo: "Estatuto de la FEUNA vigente", fecha: "Última reforma 2024", archivo: "#", desc: "Marco normativo fundamental de la Federación de Estudiantes" },
  { tipo: "Estatuto", titulo: "Estatuto de la FEUNA (versión anterior)", fecha: "2020", archivo: "#", desc: "Versión histórica del estatuto" },
  { tipo: "Reglamento", titulo: "Reglamento del Directorio Ejecutivo (DEUNA)", fecha: "Vigente 2025", archivo: "#", desc: "Funcionamiento y organización del DEUNA" },
  { tipo: "Reglamento", titulo: "Reglamento Electoral Estudiantil", fecha: "Vigente 2024", archivo: "#", desc: "Normativa de procesos electorales estudiantiles" },
  { tipo: "Reglamento", titulo: "Reglamento de Asambleas Estudiantiles", fecha: "Vigente 2023", archivo: "#", desc: "Organización y procedimiento de asambleas" },
  { tipo: "Reglamento", titulo: "Reglamento de Comisiones del DEUNA", fecha: "Vigente 2025", archivo: "#", desc: "Funcionamiento de comisiones ejecutivas" },
  { tipo: "Reglamento", titulo: "Reglamento de Administración de Recursos", fecha: "Vigente 2024", archivo: "#", desc: "Gestión financiera y presupuestaria" },
  { tipo: "Lineamiento", titulo: "Lineamientos de Transparencia y Rendición de Cuentas", fecha: "2025", archivo: "#", desc: "Principios de transparencia y acceso a información" },
  { tipo: "Lineamiento", titulo: "Lineamientos de Participación Estudiantil", fecha: "2024", archivo: "#", desc: "Mecanismos de participación y consulta" },
  { tipo: "Política", titulo: "Política de Género y Diversidad", fecha: "2024", archivo: "#", desc: "Marco de acción en materia de género y diversidad" },
  { tipo: "Política", titulo: "Política de Accesibilidad e Inclusión", fecha: "2023", archivo: "#", desc: "Derechos y servicios para estudiantes con discapacidad" },
];

const categorias = ["Todos", "Estatuto", "Reglamento", "Lineamiento", "Política"];

const infoEstatuto = [
  {
    icono: Scale,
    titulo: "Marco normativo fundamental",
    desc: "El Estatuto de la FEUNA es la norma fundamental que rige la organización, funcionamiento y gobierno estudiantil de la Universidad Nacional.",
  },
  {
    icono: Users,
    titulo: "Cogobierno estudiantil",
    desc: "Define la estructura de representación estudiantil en órganos universitarios y la participación del 25% en cogobierno.",
  },
  {
    icono: Gavel,
    titulo: "Derechos y deberes",
    desc: "Establece derechos estudiantiles, deberes de representantes, mecanismos de participación y procedimientos democráticos.",
  },
];

function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function EstatutoPage() {
  const [filtro, setFiltro] = useState("Todos");
  const filtrados = filtro === "Todos" ? documentos : documentos.filter(d => d.tipo === filtro);

  return (
    <div>
      <HeroPageTitle
        title="Estatuto y reglamentos"
        subtitle="Marco normativo de la FEUNA: estatuto, reglamentos, lineamientos y políticas del gobierno estudiantil"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Información general" }, { label: "Estatuto" }]}
      />

      {/* Información sobre el estatuto */}
      <section className="py-12 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-[800px] mx-auto text-center mb-10">
            <h2 className="mb-4" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
              Marco normativo de la FEUNA
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              El estatuto y los reglamentos constituyen el <strong>marco jurídico y organizativo</strong> del gobierno estudiantil. 
              Definen estructura, competencias, derechos, procedimientos y mecanismos de participación democrática.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {infoEstatuto.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-[#dddddd]">
                <item.icono size={32} className="text-[#bb1f1f] mb-3" />
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>{item.titulo}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentos normativos */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="mb-8">
            <h2 className="mb-4" style={{ fontSize: '24px', fontWeight: 700, color: '#1a1a1a' }}>
              Documentos normativos
            </h2>
            <p className="mb-6" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              Accedé a todos los documentos normativos vigentes de la FEUNA. Podés filtrar por tipo de documento para encontrar 
              la normativa específica que necesitás consultar.
            </p>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categorias.map((c) => (
              <button
                key={c}
                onClick={() => setFiltro(c)}
                className={`px-4 py-2 rounded transition-colors ${
                  filtro === c ? 'bg-[#bb1f1f] text-white' : 'bg-[#f5f5f5] text-[#333333] hover:bg-[#dddddd]'
                }`}
                style={{ fontSize: '14px', fontWeight: 500 }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Tabla/listado de documentos */}
          <div className="bg-white rounded-lg border border-[#dddddd] overflow-hidden">
            <div className="hidden md:grid grid-cols-[120px_1fr_140px_100px] gap-4 px-6 py-3 bg-[#f5f5f5] border-b border-[#dddddd]" style={{ fontSize: '12px', fontWeight: 600, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              <span>Tipo</span>
              <span>Documento</span>
              <span>Fecha</span>
              <span className="text-right">Acción</span>
            </div>
            {filtrados.map((doc, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[120px_1fr_140px_100px] gap-2 md:gap-4 px-6 py-5 border-b border-[#f5f5f5] hover:bg-[#f5f5f5]/50 transition-colors items-center">
                <span className="inline-flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded ${
                    doc.tipo === 'Estatuto' ? 'bg-[#bb1f1f]/10 text-[#bb1f1f]' :
                    doc.tipo === 'Reglamento' ? 'bg-[#034991]/10 text-[#034991]' :
                    doc.tipo === 'Lineamiento' ? 'bg-[#3d5a80]/10 text-[#3d5a80]' :
                    'bg-[#666666]/10 text-[#666666]'
                  }`} style={{ fontSize: '12px', fontWeight: 600 }}>{doc.tipo}</span>
                </span>
                <div>
                  <div className="flex items-start gap-2 mb-1">
                    <FileText size={16} className="text-[#999] shrink-0 mt-0.5" />
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: '#1a1a1a', lineHeight: 1.4 }}>
                        {doc.titulo}
                      </div>
                      <div style={{ fontSize: '13px', color: '#666666', lineHeight: 1.5 }}>
                        {doc.desc}
                      </div>
                    </div>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-[#666666]" style={{ fontSize: '13px' }}>
                  <Calendar size={14} className="shrink-0" /> {doc.fecha}
                </span>
                <a href={doc.archivo} className="flex items-center gap-1 text-[#bb1f1f] hover:underline justify-start md:justify-end" style={{ fontSize: '13px', fontWeight: 500 }}>
                  <Download size={14} /> Descargar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Información adicional */}
      <section className="py-12 bg-[#034991] text-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-[900px] mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <BookOpen size={32} className="text-white shrink-0" />
              <div>
                <h2 className="mb-2" style={{ fontSize: '24px', fontWeight: 700 }}>¿Cómo se reforman las normas?</h2>
                <p style={{ fontSize: '15px', lineHeight: 1.7 }}>
                  Las reformas al estatuto y reglamentos de la FEUNA siguen procedimientos democráticos establecidos 
                  en la propia normativa.
                </p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 space-y-4">
              <div>
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700 }}>Reformas al Estatuto</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
                  Las reformas al Estatuto requieren aprobación en <strong>Congreso Estudiantil</strong> con mayorías 
                  calificadas y procesos de consulta al estudiantado.
                </p>
              </div>
              <div>
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700 }}>Reformas a reglamentos</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
                  Los reglamentos pueden ser modificados por el <strong>Directorio Ejecutivo (DEUNA)</strong> según 
                  los procedimientos establecidos en el estatuto.
                </p>
              </div>
              <div>
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700 }}>Participación estudiantil</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
                  Cualquier estudiante puede proponer reformas, participar en consultas y ejercer el derecho a incidir 
                  en el marco normativo del gobierno estudiantil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#f5f5f5]">
        <div className="max-w-[900px] mx-auto px-5 text-center">
          <h3 className="mb-4" style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a' }}>
            ¿Tenés dudas sobre la normativa?
          </h3>
          <p className="mb-6" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
            Si necesitás asesoría sobre el estatuto, reglamentos o procedimientos del gobierno estudiantil, 
            contactá con la secretaría del DEUNA o escribinos.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contacto" className="inline-flex items-center gap-2 bg-[#bb1f1f] text-white px-6 py-3 rounded hover:bg-[#8b1515] transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <FileText size={18} />
              Contactar
            </a>
            <a href="/faq" className="inline-flex items-center gap-2 bg-[#034991] text-white px-6 py-3 rounded hover:bg-[#023166] transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <BookOpen size={18} />
              Ver preguntas frecuentes
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}