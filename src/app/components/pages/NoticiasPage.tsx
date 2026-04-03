import { useState } from "react";
import { Link } from "react-router";
import { HeroInternal } from "../HeroInternal";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowRight, Calendar } from "lucide-react";

const categorias = ["Todas", "FEUNA", "Becas", "Académico", "Representación", "Servicios", "Oportunidades"];

const noticias = [
  { id: 1, title: "Convocatoria de becas para el II ciclo 2026", category: "Becas", date: "28 Mar 2026", excerpt: "Se abre el período de solicitud de becas socioeconómicas para el segundo ciclo lectivo. Conocé los requisitos y fechas importantes.", img: "https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwbGlicmFyeSUyMHVuaXZlcnNpdHl8ZW58MXx8fHwxNzc1MDY3NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 2, title: "Resultados de las elecciones estudiantiles 2026", category: "FEUNA", date: "25 Mar 2026", excerpt: "El Tribunal Electoral Estudiantil publica los resultados oficiales del proceso eleccionario para el período 2026-2028.", img: "https://images.unsplash.com/photo-1551731409-43eb3e517a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbWVldGluZyUyMGRpc2N1c3Npb24lMjBncm91cHxlbnwxfHx8fDE3NzUwNjc2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 3, title: "Programa de voluntariado comunitario abre inscripciones", category: "Oportunidades", date: "20 Mar 2026", excerpt: "La FEUNA junto con la Vicerrectoría de Extensión lanza un nuevo programa de voluntariado para comunidades rurales.", img: "https://images.unsplash.com/photo-1544928938-6852c1925194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwdm9sdW50ZWVyaW5nJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzc1MDI4NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 4, title: "Nuevo convenio de salud mental para estudiantes", category: "Servicios", date: "15 Mar 2026", excerpt: "Se firma convenio con el Colegio de Psicólogos para ofrecer atención psicológica gratuita a estudiantes de la UNA.", img: "https://images.unsplash.com/photo-1770721666620-65cb94e2df3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmclMjB0cm9waWNhbHxlbnwxfHx8fDE3NzUwNjc2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 5, title: "Aprobación de reforma al reglamento de becas", category: "Representación", date: "10 Mar 2026", excerpt: "El CONSACA aprobó la reforma impulsada por representantes estudiantiles para ampliar la cobertura de becas.", img: "https://images.unsplash.com/photo-1738949538812-aebbb54a0592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc3NTAyNDMwMHww&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 6, title: "Taller de habilidades blandas para el mercado laboral", category: "Académico", date: "5 Mar 2026", excerpt: "Inscribite en el taller gratuito sobre comunicación, liderazgo y trabajo en equipo organizado por la comisión de Asuntos Académicos.", img: "https://images.unsplash.com/photo-1703779406420-2bbdfd76e41d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBsYXRpbiUyMGFtZXJpY2F8ZW58MXx8fHwxNzc1MDY3NjY1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
];

export function NoticiasPage() {
  const [filtro, setFiltro] = useState("Todas");
  const filtradas = filtro === "Todas" ? noticias : noticias.filter(n => n.category === filtro);

  return (
    <div>
      <HeroInternal
        title="Noticias"
        subtitle="Mantente al día con las noticias más relevantes de la FEUNA y la comunidad universitaria."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Noticias" }]}
      />
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtradas.map((n) => (
              <article key={n.id} className="bg-white rounded-lg border border-[#dddddd] overflow-hidden hover:shadow-md transition-shadow group">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback src={n.img} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#bb1f1f]/10 text-[#bb1f1f] px-2.5 py-0.5 rounded" style={{ fontSize: '12px', fontWeight: 600 }}>{n.category}</span>
                    <span className="flex items-center gap-1 text-[#999]" style={{ fontSize: '12px' }}><Calendar size={12} /> {n.date}</span>
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a', lineHeight: 1.4 }}>{n.title}</h3>
                  <p className="text-[#666666] mt-2" style={{ fontSize: '14px', lineHeight: 1.5 }}>{n.excerpt}</p>
                  <Link
                    to={`/noticias/${n.id}`}
                    className="inline-flex items-center gap-1 text-[#bb1f1f] mt-3 hover:underline"
                    style={{ fontSize: '14px', fontWeight: 500 }}
                  >
                    Leer más <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}