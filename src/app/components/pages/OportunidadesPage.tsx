import { Link } from "react-router";
import { HeroInternal } from "../HeroInternal";
import { Briefcase, Globe, GraduationCap, Clock, Heart, Megaphone, ArrowRight, Send, Filter, Tag } from "lucide-react";
import { useState } from "react";

const categorias = ["Todas", "Empleo", "Becas", "Voluntariado", "Académico", "Capacitación", "Eventos"];

const oportunidades = [
  { id: 1, titulo: "Pasantía en Diseño Gráfico - ONG Ambiental", categoria: "Empleo", tipo: "Remunerado", sede: "Heredia", plazo: "15 Abr 2026", desc: "Organización ambiental busca estudiante de Diseño Gráfico para apoyo en campañas visuales y redes sociales." },
  { id: 2, titulo: "Beca Chevening 2026-2027 (Reino Unido)", categoria: "Becas", tipo: "Internacional", sede: "Extranjero", plazo: "30 Abr 2026", desc: "Beca completa para maestrías en universidades del Reino Unido. Incluye matrícula, manutención y pasajes." },
  { id: 3, titulo: "Voluntariado en alfabetización digital - Comunidades rurales", categoria: "Voluntariado", tipo: "No remunerado", sede: "Sedes regionales", plazo: "20 Abr 2026", desc: "Proyecto de extensión universitaria busca voluntarios para enseñar herramientas digitales básicas en comunidades rurales." },
  { id: 4, titulo: "Asistente de investigación - Escuela de Ciencias Ambientales", categoria: "Académico", tipo: "Horas asistente", sede: "Heredia", plazo: "10 Abr 2026", desc: "Se requiere estudiante avanzado en carrera de ciencias ambientales para apoyo en proyecto de investigación sobre biodiversidad." },
  { id: 5, titulo: "Taller de liderazgo estudiantil - CONARE", categoria: "Capacitación", tipo: "Gratuito", sede: "Virtual", plazo: "25 Abr 2026", desc: "Taller intensivo sobre habilidades de liderazgo, gestión de proyectos y trabajo en equipo para líderes estudiantiles." },
  { id: 6, titulo: "Congreso Latinoamericano de Estudiantes de Sociología", categoria: "Eventos", tipo: "Inscripción abierta", sede: "Costa Rica", plazo: "1 May 2026", desc: "Encuentro regional de estudiantes de sociología y ciencias sociales. Incluye ponencias, talleres y networking." },
  { id: 7, titulo: "Horas asistente - Biblioteca Joaquín García Monge", categoria: "Académico", tipo: "Horas asistente", sede: "Heredia", plazo: "12 Abr 2026", desc: "Se busca estudiante para apoyo en atención al público, organización de material bibliográfico y servicios de la biblioteca." },
  { id: 8, titulo: "Beca DAAD para estudios en Alemania", categoria: "Becas", tipo: "Internacional", sede: "Extranjero", plazo: "15 May 2026", desc: "Servicio Alemán de Intercambio Académico ofrece becas completas para maestrías y doctorados en universidades alemanas." },
];

export function OportunidadesPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");

  const oportunidadesFiltradas = categoriaActiva === "Todas" 
    ? oportunidades 
    : oportunidades.filter(o => o.categoria === categoriaActiva);

  return (
    <div>
      <HeroInternal
        title="Oportunidades"
        subtitle="Tablero comunitario de convocatorias, empleos, becas, voluntariados y actividades para el estudiantado de la UNA."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Participa", href: "/participa/sumate" }, { label: "Oportunidades" }]}
      />

      {/* Banner de publicación */}
      <section className="py-8 bg-gradient-to-r from-[#8e44ad] to-[#732d91]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="flex-1 text-center md:text-left">
              <h2 className="mb-2" style={{ fontSize: '22px', fontWeight: 700 }}>
                ¿Tenés una oportunidad para compartir?
              </h2>
              <p className="text-white/90" style={{ fontSize: '15px', lineHeight: 1.6 }}>
                Si conocés una convocatoria, beca, voluntariado, pasantía o evento útil para estudiantes de la UNA, 
                solicitanos que la publiquemos. La FEUNA revisa cada solicitud antes de publicar.
              </p>
            </div>
            <Link
              to="/participa/publicar-oportunidad"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-[#8e44ad] px-6 py-3 rounded hover:bg-white/95 transition-colors shadow-lg"
              style={{ fontSize: '15px', fontWeight: 600 }}
            >
              <Send size={18} />
              Solicitar publicación
            </Link>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white border-b border-[#dddddd]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex items-center gap-3 mb-4">
            <Filter size={18} className="text-[#666666]" />
            <span className="text-[#666666]" style={{ fontSize: '14px', fontWeight: 600 }}>
              Filtrar por categoría:
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                className={`px-5 py-2 rounded-full border-2 transition-all ${
                  categoriaActiva === cat
                    ? 'bg-[#8e44ad] text-white border-[#8e44ad]'
                    : 'bg-white text-[#666666] border-[#dddddd] hover:border-[#8e44ad]'
                }`}
                style={{ fontSize: '14px', fontWeight: 500 }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Listado de oportunidades */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          {oportunidadesFiltradas.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[#999]" style={{ fontSize: '16px' }}>
                No hay oportunidades en esta categoría por el momento.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {oportunidadesFiltradas.map((op) => (
                <div key={op.id} className="bg-white rounded-lg p-6 border border-[#dddddd] hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="px-3 py-1 rounded text-white text-[11px] font-semibold uppercase"
                          style={{ backgroundColor: '#8e44ad' }}
                        >
                          {op.categoria}
                        </span>
                        <span className="text-[#999] flex items-center gap-1" style={{ fontSize: '13px' }}>
                          <Tag size={14} />
                          {op.tipo}
                        </span>
                      </div>
                      <h3 className="mb-2" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>
                        {op.titulo}
                      </h3>
                      <p className="text-[#666666] mb-3" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                        {op.desc}
                      </p>
                      <div className="flex flex-wrap gap-4 text-[#999]" style={{ fontSize: '13px' }}>
                        <span>📍 {op.sede}</span>
                        <span>⏰ Plazo: {op.plazo}</span>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <button
                        className="inline-flex items-center gap-2 bg-[#8e44ad] text-white px-5 py-2.5 rounded hover:bg-[#732d91] transition-colors"
                        style={{ fontSize: '14px', fontWeight: 600 }}
                      >
                        Ver más
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Información adicional */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-[#034991]/5 border-l-4 border-[#034991] rounded-lg p-8">
            <h3 className="mb-3" style={{ fontSize: '20px', fontWeight: 700, color: '#034991' }}>
              Sobre este tablero de oportunidades
            </h3>
            <p className="text-[#666666] mb-4" style={{ fontSize: '15px', lineHeight: 1.7 }}>
              Este espacio funciona como un tablero comunitario donde se publican oportunidades útiles para el estudiantado de la UNA. 
              <strong> No es una bolsa de empleo formal</strong>, sino un canal de difusión de convocatorias verificadas por la FEUNA.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#034991] mt-2 shrink-0" />
                <span className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                  Todas las oportunidades son revisadas antes de publicarse para verificar pertinencia y confiabilidad.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#034991] mt-2 shrink-0" />
                <span className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                  Pueden participar tanto estudiantes como organizaciones que quieran difundir convocatorias.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#034991] mt-2 shrink-0" />
                <span className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                  La FEUNA no se responsabiliza por el contenido de las convocatorias externas, pero sí por su verificación inicial.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-gradient-to-r from-[#8e44ad] to-[#732d91]">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: '28px', fontWeight: 700 }}>
            Ayudanos a mantener este tablero actualizado
          </h2>
          <p className="text-white/90 mb-8" style={{ fontSize: '16px', lineHeight: 1.7 }}>
            Si conocés oportunidades que puedan ser útiles para la comunidad estudiantil de la UNA, compartílas con nosotros.
          </p>
          <Link
            to="/participa/publicar-oportunidad"
            className="inline-flex items-center gap-2 bg-white text-[#8e44ad] px-8 py-4 rounded hover:bg-white/95 transition-colors"
            style={{ fontSize: '16px', fontWeight: 700 }}
          >
            <Send size={20} />
            Enviar oportunidad
          </Link>
        </div>
      </section>
    </div>
  );
}