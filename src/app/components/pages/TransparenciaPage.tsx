import { HeroInternal } from "../HeroInternal";
import { FileText, Download, Calendar, ChevronRight } from "lucide-react";

const documentos = [
  { tipo: "Presupuesto", titulo: "Presupuesto ordinario 2026", fecha: "Enero 2026", archivo: "#" },
  { tipo: "Presupuesto", titulo: "Ejecución presupuestaria I semestre 2025", fecha: "Julio 2025", archivo: "#" },
  { tipo: "Acta", titulo: "Acta DEUNA sesión ordinaria #45", fecha: "15 Mar 2026", archivo: "#" },
  { tipo: "Acta", titulo: "Acta DEUNA sesión ordinaria #44", fecha: "1 Mar 2026", archivo: "#" },
  { tipo: "Informe", titulo: "Informe de gestión anual 2025", fecha: "Diciembre 2025", archivo: "#" },
  { tipo: "Informe", titulo: "Informe de labores I semestre 2025", fecha: "Julio 2025", archivo: "#" },
  { tipo: "Acuerdo", titulo: "Acuerdo DEUNA-2026-012: Reforma al reglamento de becas", fecha: "10 Mar 2026", archivo: "#" },
  { tipo: "Acuerdo", titulo: "Acuerdo DEUNA-2026-011: Convenio salud mental", fecha: "20 Feb 2026", archivo: "#" },
];

const categorias = ["Todos", "Presupuesto", "Acta", "Informe", "Acuerdo"];

import { useState } from "react";

export function TransparenciaPage() {
  const [filtro, setFiltro] = useState("Todos");
  const filtrados = filtro === "Todos" ? documentos : documentos.filter(d => d.tipo === filtro);

  return (
    <div>
      <HeroInternal
        title="Transparencia y rendición de cuentas"
        subtitle="Accedé a presupuestos, actas, informes, acuerdos y documentos públicos de la FEUNA."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Participá" }, { label: "Transparencia" }]}
      />
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Filtros */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categorias.map((c) => (
              <button
                key={c}
                onClick={() => setFiltro(c)}
                className={`px-4 py-2 rounded transition-colors ${filtro === c ? 'bg-[#bb1f1f] text-white' : 'bg-[#f5f5f5] text-[#333333] hover:bg-[#dddddd]'}`}
                style={{ fontSize: '14px', fontWeight: 500 }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Tabla/listado */}
          <div className="bg-white rounded-lg border border-[#dddddd] overflow-hidden">
            <div className="hidden md:grid grid-cols-[140px_1fr_140px_100px] gap-4 px-6 py-3 bg-[#f5f5f5] border-b border-[#dddddd]" style={{ fontSize: '12px', fontWeight: 600, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              <span>Tipo</span>
              <span>Documento</span>
              <span>Fecha</span>
              <span className="text-right">Acción</span>
            </div>
            {filtrados.map((doc, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[140px_1fr_140px_100px] gap-2 md:gap-4 px-6 py-4 border-b border-[#f5f5f5] hover:bg-[#f5f5f5]/50 transition-colors items-center">
                <span className="inline-flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded ${
                    doc.tipo === 'Presupuesto' ? 'bg-[#034991]/10 text-[#034991]' :
                    doc.tipo === 'Acta' ? 'bg-[#bb1f1f]/10 text-[#bb1f1f]' :
                    doc.tipo === 'Informe' ? 'bg-[#3d5a80]/10 text-[#3d5a80]' :
                    'bg-[#8b1515]/10 text-[#8b1515]'
                  }`} style={{ fontSize: '12px', fontWeight: 600 }}>{doc.tipo}</span>
                </span>
                <span className="flex items-center gap-2" style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>
                  <FileText size={16} className="text-[#999] shrink-0" />
                  {doc.titulo}
                </span>
                <span className="flex items-center gap-1 text-[#666666]" style={{ fontSize: '13px' }}>
                  <Calendar size={14} className="shrink-0" /> {doc.fecha}
                </span>
                <a href={doc.archivo} className="flex items-center gap-1 text-[#bb1f1f] hover:underline justify-end" style={{ fontSize: '13px', fontWeight: 500 }}>
                  <Download size={14} /> Descargar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
