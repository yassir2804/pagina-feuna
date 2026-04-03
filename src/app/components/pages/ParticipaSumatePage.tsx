import { Link } from "react-router";
import { HeroInternal } from "../HeroInternal";
import { Users, Send, ArrowRight, CheckCircle } from "lucide-react";

const comisiones = [
  { title: "Comisión de Asuntos Académicos", desc: "Proyectos para mejorar la calidad académica y defender derechos estudiantiles.", href: "/participa/formulario/academicos" },
  { title: "Comisión de Acción Social", desc: "Voluntariado, proyectos comunitarios y extensión universitaria.", href: "/participa/formulario/accion-social" },
  { title: "Comisión de Asuntos Socioeconómicos", desc: "Gestión de becas, ayudas y apoyo económico estudiantil.", href: "/participa/formulario/socioeconomicos" },
  { title: "Comisión de Vida Estudiantil", desc: "Salud mental, bienestar, cultura y deporte.", href: "/participa/formulario/vida-estudiantil" },
  { title: "Comisión de Comunicación", desc: "Difusión, redes sociales, diseño gráfico y contenidos.", href: "/participa/formulario/comunicacion" },
  { title: "Comisión de Género y Diversidad", desc: "Promoción de igualdad, prevención de violencias y derechos.", href: "/participa/formulario/genero" },
  { title: "Comisión de Sede Regionales", desc: "Articulación entre sedes y proyectos descentralizados.", href: "/participa/formulario/sedes" },
  { title: "Comisión de Ambiente", desc: "Sostenibilidad, reciclaje y campañas ambientales.", href: "/participa/formulario/ambiente" },
];

export function ParticipaSumatePage() {
  return (
    <div>
      <HeroInternal
        title="Sumate a la FEUNA"
        subtitle="Intégrá a la vida organizativa de la FEUNA. Participá en comisiones, equipos de trabajo, voluntariado y colaborá en proyectos estudiantiles."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Participa", href: "/participa" }, { label: "Sumate" }]}
      />

      {/* Introducción */}
      <section className="py-12 bg-white">
        <div className="max-w-[1000px] mx-auto px-5">
          <p className="text-[#666666] text-center max-w-[800px] mx-auto mb-8" style={{ fontSize: '16px', lineHeight: 1.8 }}>
            La FEUNA se construye con la participación activa del estudiantado. Hay múltiples formas de sumarte: 
            desde integrarte a una comisión permanente, colaborar en proyectos puntuales, participar en campañas, 
            o aportar desde tus habilidades específicas (diseño, comunicación, logística, investigación, etc.).
          </p>
          <div className="bg-[#bb1f1f]/5 border-l-4 border-[#bb1f1f] rounded-lg p-6">
            <h3 className="mb-2" style={{ fontSize: '18px', fontWeight: 700, color: '#bb1f1f' }}>
              No necesitás experiencia previa
            </h3>
            <p className="text-[#666666]" style={{ fontSize: '15px', lineHeight: 1.7 }}>
              Todas las comisiones y equipos de trabajo reciben y capacitan a estudiantes que quieran participar. 
              Lo importante es tu compromiso, tu interés por mejorar la vida universitaria y tu disposición a aprender 
              y trabajar en equipo.
            </p>
          </div>
        </div>
      </section>

      {/* Comisiones */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="mb-3" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
              Comisiones de trabajo
            </h2>
            <p className="text-[#666666] max-w-[700px] mx-auto" style={{ fontSize: '16px', lineHeight: 1.6 }}>
              Elegí la comisión que más se alinee con tus intereses. Cada una tiene su formulario de inscripción.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {comisiones.map((item, idx) => (
              <Link
                key={idx}
                to={item.href}
                className="bg-white rounded-lg p-6 border border-[#dddddd] hover:border-[#bb1f1f] hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-[#bb1f1f]/10 rounded-lg flex items-center justify-center group-hover:bg-[#bb1f1f] transition-colors">
                    <Users size={18} className="text-[#bb1f1f] group-hover:text-white transition-colors" />
                  </div>
                  <ArrowRight size={18} className="text-[#999] group-hover:text-[#bb1f1f] transition-colors" />
                </div>
                <h3 className="mb-2" style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Otras formas de sumarte */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center mb-10" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            Otras formas de participar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f5f5f5] rounded-lg p-8">
              <div className="w-14 h-14 bg-[#034991]/10 rounded-lg flex items-center justify-center mb-5">
                <Users size={26} className="text-[#034991]" />
              </div>
              <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>
                Proyectos puntuales
              </h3>
              <p className="text-[#666666] mb-5" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                Colaborá en campañas específicas, eventos o iniciativas sin necesidad de integrarte permanentemente a una comisión.
              </p>
            </div>

            <div className="bg-[#f5f5f5] rounded-lg p-8">
              <div className="w-14 h-14 bg-[#2d7a3e]/10 rounded-lg flex items-center justify-center mb-5">
                <CheckCircle size={26} className="text-[#2d7a3e]" />
              </div>
              <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>
                Desde tus habilidades
              </h3>
              <p className="text-[#666666] mb-5" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                ¿Sos bueno en diseño, programación, fotografía, redacción? Podés aportar desde tus talentos específicos.
              </p>
            </div>

            <div className="bg-[#f5f5f5] rounded-lg p-8">
              <div className="w-14 h-14 bg-[#c75b12]/10 rounded-lg flex items-center justify-center mb-5">
                <Send size={26} className="text-[#c75b12]" />
              </div>
              <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>
                Voluntariado ocasional
              </h3>
              <p className="text-[#666666] mb-5" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                Apoyá en actividades, logística de eventos, recolección de firmas o tareas operativas cuando se necesite.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-[#034991]/5 border-l-4 border-[#034991] rounded-lg p-8">
            <h4 className="mb-3" style={{ fontSize: '18px', fontWeight: 700, color: '#034991' }}>
              ¿No encontrás una comisión específica para lo que querés hacer?
            </h4>
            <p className="text-[#666666] mb-5" style={{ fontSize: '15px', lineHeight: 1.7 }}>
              También podés completar el formulario general de participación. Nos contás tus intereses, habilidades y disponibilidad, 
              y te contactamos cuando surjan oportunidades que se ajusten a tu perfil.
            </p>
            <Link
              to="/participa/formulario/general"
              className="inline-flex items-center gap-2 bg-[#034991] text-white px-6 py-3 rounded hover:bg-[#023166] transition-colors"
              style={{ fontSize: '15px', fontWeight: 600 }}
            >
              Completar formulario general
              <Send size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#bb1f1f] to-[#8b1515]">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: '28px', fontWeight: 700 }}>
            La FEUNA se hace realidad con tu participación
          </h2>
          <p className="text-white/90 mb-8" style={{ fontSize: '16px', lineHeight: 1.7 }}>
            Cada persona que se suma fortalece la representación estudiantil y hace posible mejores condiciones para toda la comunidad universitaria.
          </p>
          <Link
            to="/participa"
            className="inline-flex items-center gap-2 bg-white text-[#bb1f1f] px-8 py-4 rounded hover:bg-white/95 transition-colors"
            style={{ fontSize: '16px', fontWeight: 700 }}
          >
            Ver todas las formas de participar
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
