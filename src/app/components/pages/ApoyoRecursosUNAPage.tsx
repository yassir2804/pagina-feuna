import { Link } from "react-router";
import { HeroInternal } from "../HeroInternal";
import {
  BookOpen, Users, Home, Globe, Heart, Stethoscope, Activity, Shield,
  Book, Database, Scale, ExternalLink
} from "lucide-react";

const recursos = {
  vidaEstudiantil: [
    { nombre: "Vicerrectoría de Vida Estudiantil", brinda: "UNA", desc: "Coordina servicios de bienestar, cultura, deporte y desarrollo estudiantil.", url: "#", icono: Users },
    { nombre: "Residencias Estudiantiles", brinda: "UNA", desc: "Hospedaje para estudiantes de zonas alejadas con condición socioeconómica vulnerable.", url: "#", icono: Home },
    { nombre: "Programa de Movilidad e Intercambio", brinda: "UNA", desc: "Oportunidades de intercambio académico nacional e internacional.", url: "#", icono: Globe },
  ],
  saludBienestar: [
    { nombre: "Atención Psicológica", brinda: "UNA", desc: "Servicio de orientación y apoyo emocional para estudiantes.", url: "#", icono: Heart },
    { nombre: "Servicio Médico", brinda: "UNA", desc: "Atención médica general para estudiantes activos.", url: "#", icono: Stethoscope },
    { nombre: "Servicio de Nutrición", brinda: "UNA", desc: "Consulta nutricional y orientación alimentaria.", url: "#", icono: Activity },
    { nombre: "Servicio de Odontología", brinda: "UNA", desc: "Atención odontológica básica para estudiantes.", url: "#", icono: Stethoscope },
    { nombre: "Póliza Estudiantil", brinda: "UNA", desc: "Seguro contra accidentes para estudiantes activos.", url: "#", icono: Shield },
  ],
  academicos: [
    { nombre: "Bibliotecas UNA", brinda: "UNA", desc: "Sistema de bibliotecas con material físico y digital.", url: "#", icono: Book },
    { nombre: "Bases de Datos", brinda: "UNA", desc: "Acceso a revistas científicas, libros electrónicos y recursos académicos.", url: "#", icono: Database },
    { nombre: "Repositorio Institucional", brinda: "UNA", desc: "Trabajos finales de graduación y producción académica UNA.", url: "#", icono: BookOpen },
    { nombre: "Defensoría Estudiantil", brinda: "UNA", desc: "Asesoría y defensa de derechos estudiantiles ante procesos académicos o disciplinarios.", url: "#", icono: Scale },
  ],
};

const accesosRapidos = [
  { nombre: "Banner (Matrícula)", url: "#", color: "#bb1f1f" },
  { nombre: "SIDUNA", url: "#", color: "#034991" },
  { nombre: "Becas", url: "#", color: "#bb1f1f" },
  { nombre: "Correo UNA", url: "#", color: "#034991" },
  { nombre: "Estado de Cuenta", url: "#", color: "#bb1f1f" },
  { nombre: "Defensoría Estudiantil", url: "#", color: "#034991" },
  { nombre: "Vida Estudiantil", url: "#", color: "#bb1f1f" },
  { nombre: "Bibliotecas", url: "#", color: "#034991" },
];

export function ApoyoRecursosUNAPage() {
  return (
    <div>
      <HeroInternal
        title="Recursos de la Universidad"
        subtitle="Directorio completo de servicios y recursos que brinda la Universidad Nacional para el estudiantado."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Apoyo y recursos", href: "/apoyo-recursos/orientacion" }, { label: "Recursos UNA" }]}
      />

      {/* Introducción */}
      <section className="py-12 bg-white">
        <div className="max-w-[1000px] mx-auto px-5">
          <p className="text-[#666666] text-center max-w-[800px] mx-auto mb-8" style={{ fontSize: '16px', lineHeight: 1.8 }}>
            La Universidad Nacional cuenta con múltiples servicios y recursos para tu desarrollo académico, bienestar y vida universitaria. 
            <strong> La FEUNA puede orientarte</strong> si necesitás apoyo para acceder a estos servicios o si enfrentás dificultades en el proceso.
          </p>
        </div>
      </section>

      {/* Accesos Rápidos */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="mb-8" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            Accesos rápidos
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {accesosRapidos.map((acceso, idx) => (
              <a
                key={idx}
                href={acceso.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-5 hover:shadow-md transition-all group text-center border-2 border-transparent hover:border-current"
                style={{ color: acceso.color }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: acceso.color + '15' }}
                >
                  <ExternalLink size={20} style={{ color: acceso.color }} />
                </div>
                <h4 style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a' }}>
                  {acceso.nombre}
                </h4>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Vida Estudiantil */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="mb-8 pb-3 border-b-2 border-[#bb1f1f]" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            Vida estudiantil y bienestar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recursos.vidaEstudiantil.map((recurso, idx) => (
              <a
                key={idx}
                href={recurso.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f5f5f5] rounded-lg p-6 hover:bg-white hover:shadow-md border border-transparent hover:border-[#bb1f1f] transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#bb1f1f]/10 rounded-lg flex items-center justify-center group-hover:bg-[#bb1f1f] transition-colors">
                    <recurso.icono size={22} className="text-[#bb1f1f] group-hover:text-white transition-colors" />
                  </div>
                  <ExternalLink size={16} className="text-[#999] group-hover:text-[#bb1f1f] transition-colors" />
                </div>
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                  {recurso.nombre}
                </h3>
                <p className="text-[#666666] mb-3" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                  {recurso.desc}
                </p>
                <div className="inline-block bg-[#034991]/10 text-[#034991] px-3 py-1 rounded" style={{ fontSize: '11px', fontWeight: 600 }}>
                  Brinda: {recurso.brinda}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Salud y Bienestar */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="mb-8 pb-3 border-b-2 border-[#bb1f1f]" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            Salud y bienestar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {recursos.saludBienestar.map((recurso, idx) => (
              <a
                key={idx}
                href={recurso.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-5 hover:shadow-md border border-[#dddddd] hover:border-[#bb1f1f] transition-all group"
              >
                <div className="w-10 h-10 bg-[#bb1f1f]/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#bb1f1f] transition-colors">
                  <recurso.icono size={18} className="text-[#bb1f1f] group-hover:text-white transition-colors" />
                </div>
                <h4 className="mb-2" style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.3 }}>
                  {recurso.nombre}
                </h4>
                <p className="text-[#666666] mb-2" style={{ fontSize: '12px', lineHeight: 1.4 }}>
                  {recurso.desc}
                </p>
                <div className="inline-block bg-[#034991]/10 text-[#034991] px-2 py-0.5 rounded" style={{ fontSize: '10px', fontWeight: 600 }}>
                  {recurso.brinda}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos Académicos */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="mb-8 pb-3 border-b-2 border-[#bb1f1f]" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            Recursos académicos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recursos.academicos.map((recurso, idx) => (
              <a
                key={idx}
                href={recurso.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f5f5f5] rounded-lg p-6 hover:bg-white hover:shadow-md border border-transparent hover:border-[#bb1f1f] transition-all group"
              >
                <div className="w-12 h-12 bg-[#bb1f1f]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#bb1f1f] transition-colors">
                  <recurso.icono size={20} className="text-[#bb1f1f] group-hover:text-white transition-colors" />
                </div>
                <h4 className="mb-2" style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>
                  {recurso.nombre}
                </h4>
                <p className="text-[#666666] mb-3" style={{ fontSize: '13px', lineHeight: 1.5 }}>
                  {recurso.desc}
                </p>
                <div className="inline-block bg-[#034991]/10 text-[#034991] px-2 py-1 rounded" style={{ fontSize: '11px', fontWeight: 600 }}>
                  {recurso.brinda}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Nota de apoyo FEUNA */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-[#034991]/5 border-l-4 border-[#034991] rounded-lg p-8">
            <h3 className="mb-3" style={{ fontSize: '20px', fontWeight: 700, color: '#034991' }}>
              La FEUNA puede ayudarte
            </h3>
            <p className="text-[#666666] mb-4" style={{ fontSize: '15px', lineHeight: 1.7 }}>
              Aunque estos son servicios que brinda directamente la Universidad Nacional, <strong>la FEUNA puede orientarte, 
              acompañarte o apoyarte</strong> si tenés dificultades para acceder a ellos, si enfrentás barreras o si necesitás 
              gestionar alguna situación especial.
            </p>
            <p className="text-[#666666]" style={{ fontSize: '15px', lineHeight: 1.7 }}>
              <strong>No dudes en contactarnos</strong> si necesitás ayuda para navegar los servicios universitarios.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#034991] to-[#023166]">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: '28px', fontWeight: 700 }}>
            ¿Necesitás orientación sobre recursos UNA?
          </h2>
          <p className="text-white/90 mb-8" style={{ fontSize: '16px', lineHeight: 1.7 }}>
            Si tenés dudas sobre cómo acceder a estos servicios o enfrentás dificultades, la FEUNA puede ayudarte.
          </p>
          <Link
            to="/apoyo-recursos/orientacion"
            className="inline-flex items-center gap-2 bg-white text-[#034991] px-8 py-4 rounded hover:bg-white/95 transition-colors"
            style={{ fontSize: '16px', fontWeight: 700 }}
          >
            Solicitar orientación
            <ExternalLink size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
