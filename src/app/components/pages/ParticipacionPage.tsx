import { Link } from "react-router";
import { HeroInternal } from "../HeroInternal";
import { FileSignature, Users, Megaphone, MessageSquare, Mail, ArrowRight, AlertTriangle } from "lucide-react";

const formas = [
  { icon: FileSignature, title: "E-Peticiones", desc: "Enviá una petición formal al gobierno estudiantil. Cada petición será atendida y respondida oficialmente.", href: "/epeticiones", cta: "Enviar petición" },
  { icon: Megaphone, title: "Propuestas y proyectos", desc: "Proponé ideas, proyectos o iniciativas para mejorar la vida universitaria. Tu voz importa.", href: "/participa/propone", cta: "Hacer propuesta" },
  { icon: Users, title: "Asambleas y espacios", desc: "Participá en asambleas generales, foros temáticos y espacios de diálogo estudiantil.", href: "/eventos", cta: "Ver agenda" },
  { icon: AlertTriangle, title: "Denuncias y sugerencias", desc: "Canal seguro y confidencial para denuncias de irregularidades o sugerencias de mejora.", href: "/denuncias", cta: "Enviar denuncia" },
];

export function ParticipacionPage() {
  return (
    <div>
      <HeroInternal
        title="Participación estudiantil"
        subtitle="La FEUNA es tu espacio. Hacé oír tu voz, proponé cambios y construí la universidad que querés."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Participá" }, { label: "Participación" }]}
      />
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {formas.map((f) => (
              <div key={f.title} className="bg-white rounded-lg p-6 border border-[#dddddd] hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#bb1f1f]/10 flex items-center justify-center shrink-0">
                    <f.icon size={22} className="text-[#bb1f1f]" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a' }}>{f.title}</h3>
                    <p className="text-[#666666] mt-2" style={{ fontSize: '14px', lineHeight: 1.6 }}>{f.desc}</p>
                    <Link to={f.href} className="inline-flex items-center gap-1 text-[#bb1f1f] mt-3 hover:underline" style={{ fontSize: '14px', fontWeight: 500 }}>
                      {f.cta} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Canales de contacto */}
          <div className="bg-[#f5f5f5] rounded-lg p-8">
            <h2 className="mb-6" style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a' }}>Canales oficiales</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-[#bb1f1f]" />
                <div>
                  <p style={{ fontSize: '13px', color: '#666666' }}>Correo electrónico</p>
                  <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>deuna@una.cr</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare size={20} className="text-[#bb1f1f]" />
                <div>
                  <p style={{ fontSize: '13px', color: '#666666' }}>Redes sociales</p>
                  <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>@feuna_oficial</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users size={20} className="text-[#bb1f1f]" />
                <div>
                  <p style={{ fontSize: '13px', color: '#666666' }}>Atención presencial</p>
                  <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>Edificio FEUNA, Campus Omar Dengo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
