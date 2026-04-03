import { Link } from "react-router";
import { HeroInternal } from "../HeroInternal";
import {
  DollarSign, HeartPulse, BookOpen, Monitor, GraduationCap,
  FileText, Shield, Handshake, ArrowRight, ExternalLink
} from "lucide-react";

const serviciosFEUNA = [
  { icon: FileText, title: "Exoneración y trámites", desc: "Gestión de exoneración de matrícula, constancias y trámites estudiantiles ante la FEUNA.", href: "/tramites" },
  { icon: Shield, title: "DEFEUNA (Defensoría Estudiantil)", desc: "Asesoría y defensa de derechos estudiantiles ante instancias universitarias.", href: "/defensoria" },
  { icon: Handshake, title: "Orientación y servicios", desc: "Acompañamiento, orientación y apoyo general para el estudiantado.", href: "/apoyo-recursos/servicios" },
];

const serviciosUNA = [
  { icon: DollarSign, title: "Becas y apoyo económico", desc: "Información sobre becas socioeconómicas, de estímulo y apoyo financiero de la UNA.", href: "/becas", external: true },
  { icon: HeartPulse, title: "Salud y bienestar", desc: "Servicios de salud, atención psicológica y programas de bienestar estudiantil.", href: "/salud", external: true },
  { icon: BookOpen, title: "Guías y recursos", desc: "Material de apoyo académico, guías de matrícula y recursos prácticos.", href: "/guias" },
  { icon: GraduationCap, title: "Vida universitaria", desc: "Actividades culturales, deportivas, artísticas y de vida estudiantil.", href: "/vida-universitaria", external: true },
  { icon: Monitor, title: "Plataformas y sistemas", desc: "Acceso a sistemas de matrícula, notas, aulas virtuales y plataformas digitales.", href: "/sistemas", external: true },
];

export function ServiciosPage() {
  return (
    <div>
      <HeroInternal
        title="Servicios"
        subtitle="Recursos, trámites y apoyo para tu vida universitaria. Todo lo que necesitás en un solo lugar."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]}
      />
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-6 bg-[#bb1f1f] rounded" />
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a' }}>Gestionados por FEUNA</h2>
            </div>
            <p className="text-[#666666] ml-3" style={{ fontSize: '14px' }}>Servicios directos del gobierno estudiantil</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {serviciosFEUNA.map((s) => (
                <Link key={s.title} to={s.href} className="bg-white rounded-lg p-6 border border-[#dddddd] hover:shadow-md hover:border-[#bb1f1f]/30 transition-all group">
                  <div className="w-11 h-11 rounded-lg bg-[#bb1f1f]/10 flex items-center justify-center mb-4 group-hover:bg-[#bb1f1f] transition-colors">
                    <s.icon size={20} className="text-[#bb1f1f] group-hover:text-white transition-colors" />
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>{s.title}</h3>
                  <p className="text-[#666666] mt-2" style={{ fontSize: '14px', lineHeight: 1.5 }}>{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-[#bb1f1f] mt-3" style={{ fontSize: '13px', fontWeight: 500 }}>
                    Más información <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-6 bg-[#034991] rounded" />
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a' }}>Enlaces a servicios UNA</h2>
            </div>
            <p className="text-[#666666] ml-3" style={{ fontSize: '14px' }}>Servicios gestionados por dependencias de la Universidad Nacional</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {serviciosUNA.map((s) => (
                <Link key={s.title} to={s.href} className="bg-white rounded-lg p-6 border border-[#dddddd] hover:shadow-md hover:border-[#034991]/30 transition-all group">
                  <div className="w-11 h-11 rounded-lg bg-[#034991]/10 flex items-center justify-center mb-4 group-hover:bg-[#034991] transition-colors">
                    <s.icon size={20} className="text-[#034991] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="flex items-center gap-2" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
                    {s.title}
                    {s.external && <ExternalLink size={14} className="text-[#999]" />}
                  </h3>
                  <p className="text-[#666666] mt-2" style={{ fontSize: '14px', lineHeight: 1.5 }}>{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}