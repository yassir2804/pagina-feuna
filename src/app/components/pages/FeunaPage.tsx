import { Link } from "react-router";
import { HeroPageTitle } from "../HeroPageTitle";
import { Target, Eye, BookOpen, ArrowRight } from "lucide-react";
import organos from "../../data/organos";

export function FeunaPage() {
  return (
    <div>
      <HeroPageTitle
        title="¿Qué es la FEUNA?"
        subtitle="La Federación de Estudiantes de la Universidad Nacional: tu gobierno estudiantil autónomo e independiente."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Información general" }]}
      />

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="mb-4" style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a' }}>La Federación de Estudiantes</h2>
              <p className="text-[#333333] mb-4" style={{ fontSize: '15px', lineHeight: 1.7 }}>
                La FEUNA es el gobierno estudiantil de la Universidad Nacional de Costa Rica. Es un ente autónomo e independiente cuyo propósito fundamental es representar, defender y promover los intereses del estudiantado ante las autoridades universitarias y la sociedad en general.
              </p>
              <p className="text-[#333333] mb-4" style={{ fontSize: '15px', lineHeight: 1.7 }}>
                Fundada como expresión del movimiento estudiantil costarricense, la FEUNA trabaja por una educación superior pública de calidad, inclusiva, participativa y comprometida con el desarrollo social del país.
              </p>
              <p className="text-[#333333] mb-6" style={{ fontSize: '15px', lineHeight: 1.7 }}>
                A través de sus órganos, comisiones y programas, la FEUNA gestiona servicios estudiantiles, canaliza demandas, promueve la participación, fiscaliza recursos y representa al estudiantado en los órganos de gobierno de la Universidad.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#f5f5f5] rounded-lg p-6">
                  <div className="w-10 h-10 bg-[#bb1f1f]/10 rounded-lg flex items-center justify-center mb-3">
                    <Target size={20} className="text-[#bb1f1f]" />
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>Misión</h3>
                  <p className="text-[#666666] mt-2" style={{ fontSize: '14px', lineHeight: 1.5 }}>
                    Representar al estudiantado de la UNA, defendiendo sus derechos, promoviendo su bienestar y fomentando su participación activa en la vida universitaria y social.
                  </p>
                </div>
                <div className="bg-[#f5f5f5] rounded-lg p-6">
                  <div className="w-10 h-10 bg-[#034991]/10 rounded-lg flex items-center justify-center mb-3">
                    <Eye size={20} className="text-[#034991]" />
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>Visión</h3>
                  <p className="text-[#666666] mt-2" style={{ fontSize: '14px', lineHeight: 1.5 }}>
                    Ser la federación estudiantil más participativa, transparente y eficiente del país, contribuyendo a una universidad pública de excelencia al servicio de la sociedad.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#f5f5f5] rounded-lg p-6 mb-6">
                <h3 className="mb-4" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>Principios</h3>
                <ul className="space-y-3">
                  {["Autonomía e independencia", "Transparencia y rendición de cuentas", "Participación democrática", "Inclusión y equidad", "Defensa de la educación pública", "Compromiso social"].map((p) => (
                    <li key={p} className="flex items-start gap-2" style={{ fontSize: '14px', color: '#333333' }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#bb1f1f] mt-2 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#bb1f1f] rounded-lg p-6 text-white">
                <h3 className="mb-3" style={{ fontSize: '16px', fontWeight: 600 }}>Documentos clave</h3>
                <ul className="space-y-2">
                  <li><Link to="/estatuto" className="flex items-center gap-2 text-white/80 hover:text-white" style={{ fontSize: '14px' }}><BookOpen size={14} /> Estatuto FEUNA</Link></li>
                  <li><Link to="/plan-trabajo" className="flex items-center gap-2 text-white/80 hover:text-white" style={{ fontSize: '14px' }}><BookOpen size={14} /> Plan de trabajo</Link></li>
                  <li><Link to="/transparencia" className="flex items-center gap-2 text-white/80 hover:text-white" style={{ fontSize: '14px' }}><BookOpen size={14} /> Informes y actas</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Órganos */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="mb-8" style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a' }}>Estructura organizativa</h2>
          <div className="flex gap-6 overflow-hidden pb-2" style={{ alignItems: 'stretch' }}>
            {organos.map((o) => (
              <Link
                key={o.id}
                to={`/${o.id}`}
                className="bg-white rounded-lg p-6 border border-[#dddddd] hover:shadow-md hover:border-[#bb1f1f]/30 transition-all group"
                style={{ minHeight: 220, minWidth: 0, flex: '1 1 0' }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#bb1f1f]/10 flex items-center justify-center mb-4 group-hover:bg-[#bb1f1f] transition-colors">
                  <o.icono size={22} className="text-[#bb1f1f] group-hover:text-white transition-colors" />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>{o.sigla}</h3>
                <p className="text-[#666666] mt-1" style={{ fontSize: '14px' }}>{o.descripcion}</p>
                <span className="inline-flex items-center gap-1 text-[#bb1f1f] mt-3" style={{ fontSize: '13px', fontWeight: 500 }}>
                  Ver más <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}