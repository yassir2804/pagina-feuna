import { HeroInternal } from "../HeroInternal";
import { 
  Users, FileCheck, Layers, Settings, TrendingUp, MapPin,
  Leaf, GraduationCap, Heart, Palette, UsersRound, DollarSign,
  Megaphone, Globe, Mail, Building2, ChevronRight, FileText, UserCircle
} from "lucide-react";
import { useState } from "react";

const funcionesDeuna = [
  { icono: FileCheck, titulo: "Ejecución de acuerdos", desc: "Pone en práctica resoluciones y acuerdos de la Asamblea General, el Congreso y el CAEUNA" },
  { icono: Users, titulo: "Representación general", desc: "Representa en forma general al estudiantado universitario" },
  { icono: Layers, titulo: "Coordinación interna", desc: "Articula Presidencia, Secretaría General, comisiones y áreas de trabajo" },
  { icono: Settings, titulo: "Gestión administrativa", desc: "Acuerda y ejecuta medidas administrativas para el funcionamiento del Directorio" },
  { icono: TrendingUp, titulo: "Atención de problemáticas", desc: "Coordina con asociaciones la resolución de temas no resueltos directamente" },
  { icono: MapPin, titulo: "Vinculación territorial", desc: "Mantiene presencia en sedes regionales y seguimiento universitario" },
];

const areas = [
  {
    id: "todas",
    nombre: "Todas las áreas",
    desc: "Visión general del Directorio Estudiantil y de sus áreas de trabajo, conducción política y representación institucional.",
    icono: Users,
  },
  {
    id: "presidencia",
    nombre: "Presidencia",
    desc: "Conducción política general del DEUNA. Preside sesiones, representa oficialmente a la FEUNA, firma junto con Finanzas órdenes de pago, rinde informes al CAEUNA, visita asociaciones y sostiene representación política del Directorio.",
    icono: UserCircle,
  },
  {
    id: "secretaria-general",
    nombre: "Secretaría General",
    desc: "Articulación ejecutiva del Directorio. Coordina el trabajo general del DEUNA, colabora con Presidencia y comisiones, suscribe actas y correspondencia, articula con otros órganos y participa en la representación universitaria del Directorio.",
    icono: FileText,
  },
  {
    id: "asuntos-ecologicos",
    nombre: "Asuntos Ecológicos",
    desc: "Área enfocada en discusión crítica de problemáticas ambientales, defensa de recursos naturales, sostenibilidad, foros y acompañamiento a proyectos de conservación.",
    icono: Leaf,
  },
  {
    id: "asuntos-regionales",
    nombre: "Asuntos Regionales",
    desc: "Área enfocada en problemáticas de sedes regionales, articulación entre sede central y regiones, movilidad, visitas periódicas, seguimiento de proyectos regionales y defensa de representación estudiantil territorial.",
    icono: MapPin,
  },
  {
    id: "asuntos-universitarios",
    nombre: "Asuntos Universitarios",
    desc: "Área vinculada con bienestar estudiantil, servicios, quejas, solicitudes, inducción al movimiento estudiantil y mejoramiento de la vida universitaria.",
    icono: GraduationCap,
  },
  {
    id: "cultura-recreacion-deporte",
    nombre: "Cultura, Recreación y Deporte",
    desc: "Área enfocada en integración estudiantil, actividades culturales, recreativas y deportivas, así como articulación con grupos y espacios universitarios.",
    icono: Palette,
  },
  {
    id: "diversidad-equidad-genero",
    nombre: "Diversidad, Equidad y Género",
    desc: "Área enfocada en igualdad, diversidad, campañas contra discriminación, defensa de derechos y promoción de espacios inclusivos.",
    icono: UsersRound,
  },
  {
    id: "finanzas",
    nombre: "Finanzas",
    desc: "Área encargada del resguardo de fondos, planificación presupuestaria, informes financieros, administración económica y coordinación de apoyos estudiantiles.",
    icono: DollarSign,
  },
  {
    id: "politica-nacional-internacional",
    nombre: "Política Nacional e Internacional",
    desc: "Área orientada a derechos humanos, análisis de coyuntura nacional, discusión pública, crítica estudiantil y vínculos con luchas sociales e internacionales.",
    icono: Globe,
  },
  {
    id: "comunicacion",
    nombre: "Comunicación",
    desc: "Área encargada de informar a la comunidad estudiantil, divulgar acuerdos, dar visibilidad a actividades estudiantiles y articular comunicación con las distintas áreas del DEUNA.",
    icono: Megaphone,
  },
  {
    id: "consejo-universitario",
    nombre: "Consejo Universitario",
    desc: "Espacio de representación estudiantil del DEUNA ante el Consejo Universitario. Bloque integrado de 4 personas centrado en seguimiento de acuerdos, divulgación, defensa de derechos y articulación con el movimiento estudiantil.",
    icono: Building2,
  },
  {
    id: "consaca",
    nombre: "CONSACA",
    desc: "Espacio de representación estudiantil del DEUNA ante el Consejo Académico de la Universidad Nacional. Bloque integrado de 8 personas centrado en articulación de agenda estudiantil, trabajo con facultades y sedes, rendición de cuentas y defensa de derechos estudiantiles.",
    icono: Building2,
  },
];

const PASSPORT_BASE = "/images/fotos-pasaporte/deuna/";

const integrantes = [
  {
    nombre: "Marco Viquez Fallas",
    area: "presidencia",
    cargo: "Presidencia",
    asociacion: "Directorio Estudiantil FEUNA",
    sede: "Campus Omar Dengo",
    periodo: "2025-2027",
    email: "marco.viquez.fallas@est.una.ac.cr",
    iniciales: "PF",
    foto: `${PASSPORT_BASE}Marco%20V%C3%ADquez.jpeg`,
  },
  {
    nombre: "Daniela Chaves Matamoros",
    area: "secretaria-general",
    cargo: "Secretaría General",
    asociacion: "Directorio Estudiantil FEUNA",
    sede: "Campus Omar Dengo",
    periodo: "2025-2027",
    email: "daniela.chaves.matamoros@est.una.ac.cr",
    iniciales: "SG",
    foto: `${PASSPORT_BASE}Daniela.jpeg`,
  },
  {
    nombre: "Mery Ann Fonseca Lopez",
    area: "asuntos-ecologicos",
    cargo: "Comisión de Asuntos Ecológicos",
    asociacion: "Asociación de Estudiantes",
    sede: "Campus Omar Dengo",
    periodo: "2025-2027",
    email: "mery.fonseca.lopez@est.una.ac.cr",
    iniciales: "AE",
    foto: `${PASSPORT_BASE}Mery.jpg`,
  },
  {
    nombre: "Yariel Miranda Chaves",
    area: "asuntos-regionales",
    cargo: "Comisión de Asuntos Regionales",
    asociacion: "Asociación de Estudiantes",
    sede: "Campus Coto",
    periodo: "2025-2027",
    email: "yariel.miranda.chaves@est.una.ac.cr",
    iniciales: "AR",
    foto: `${PASSPORT_BASE}Yariel.png`,
  },
  {
    nombre: "Cristofer Guerrero Lepiz",
    area: "asuntos-universitarios",
    cargo: "Comisión de Asuntos Universitarios",
    asociacion: "Asociación de Estudiantes",
    sede: "Campus Alajuela",
    periodo: "2025-2027",
    email: "cristofer.guerrero.lepiz@est.una.ac.cr",
    iniciales: "AU",
    foto: `${PASSPORT_BASE}Cristofer%20Guerrero.jpg`,
  },
  {
    nombre: "Cristofer Castro Fallas",
    area: "cultura-recreacion-deporte",
    cargo: "Comisión de Cultura, Recreación y Deporte",
    asociacion: "Asociación de Estudiantes",
    sede: "Campus Omar Dengo",
    periodo: "2025-2027",
    email: "cristofer.castro.fallas@est.una.ac.cr",
    iniciales: "CR",
    foto: `${PASSPORT_BASE}Cris%20Castro.png`,
  },
  {
    nombre: "Isabel Sanchez Lizano",
    area: "cultura-recreacion-deporte",
    cargo: "Comisión de Cultura, Recreación y Deporte",
    asociacion: "Asociación de Estudiantes",
    sede: "Campus Omar Dengo",
    periodo: "2025-2027",
    email: "isabel.sanchez.lizano@est.una.ac.cr",
    iniciales: "IS",
    foto: `${PASSPORT_BASE}Isabel_.jpg`,
  },
  {
    nombre: "Andrea Sisfontes Sandi",
    area: "diversidad-equidad-genero",
    cargo: "Comisión de Diversidad, Equidad y Género",
    asociacion: "Asociación de Estudiantes",
    sede: "Campus Omar Dengo",
    periodo: "2025-2027",
    email: "andrea.sisfontes.sandi@est.una.ac.cr",
    iniciales: "DG",
    foto: `${PASSPORT_BASE}Andrea%20Sisfontes.jpg`,
  },
  {
    nombre: "Dilan Gomez Arias",
    area: "finanzas",
    cargo: "Comisión de Finanzas",
    asociacion: "Asociación de Estudiantes",
    sede: "Campus Alajuela",
    periodo: "2025-2027",
    email: "dilan.gomez.arias@est.una.ac.cr",
    iniciales: "CF",
    foto: `${PASSPORT_BASE}Dilan%20G%C3%B3mez_.jpg`,
  },
  {
    nombre: "Einer Canales Campos",
    area: "finanzas",
    cargo: "Comisión de Finanzas",
    asociacion: "Asociación de Estudiantes",
    sede: "Campus Omar Dengo",
    periodo: "2025-2027",
    email: "einer.canales.campos@est.una.ac.cr",
    iniciales: "EC",
    foto: `${PASSPORT_BASE}Einer%20Canales%20Campos.jpg`,
  },
  {
    nombre: "Avril Flores Chaves",
    area: "politica-nacional-internacional",
    cargo: "Comisión de Política Nacional e Internacional",
    asociacion: "Asociación de Estudiantes",
    sede: "Campus Omar Dengo",
    periodo: "2025-2027",
    email: "avril.flores.chaves@est.una.ac.cr",
    iniciales: "PN",
    foto: `${PASSPORT_BASE}Avril_.jpg`,
  },
  {
    nombre: "Gabriel Sancho Quintanilla",
    area: "comunicacion",
    cargo: "Oficina de Comunicación e Información",
    asociacion: "Asociación de Estudiantes",
    sede: "Campus Omar Dengo",
    periodo: "2025-2027",
    email: "gabriel.sancho.quintanilla@est.una.ac.cr",
    iniciales: "CO",
    foto: `${PASSPORT_BASE}Gabriel%20Sancho.jpg`,
  },
  {
    nombre: "Stephanie Ruiz Matamoros",
    area: "comunicacion",
    cargo: "Oficina de Comunicación e Información",
    asociacion: "Asociación de Estudiantes",
    sede: "Campus Omar Dengo",
    periodo: "2025-2027",
    email: "stephanie.ruiz.matamoros@est.una.ac.cr",
    iniciales: "SR",
    foto: `${PASSPORT_BASE}Stephanie.jpg`,
  },
  {
    nombre: "Nataly Mendoza Hernandez",
    area: "consejo-universitario",
    cargo: "Consejo Universitario (Propiedad 1°)",
    asociacion: "Representación institucional",
    sede: "Campus Omar Dengo",
    periodo: "2025-2027",
    email: "nataly.mendoza.hernandez@est.una.ac.cr",
    iniciales: "R1",
    foto: `${PASSPORT_BASE}Nataly%20Mendoza%20Hern%C3%A1ndez.png`,
  },
  {
    nombre: "Omar Morales Torres",
    area: "consejo-universitario",
    cargo: "Consejo Universitario (Suplencia 1°)",
    asociacion: "Representación institucional",
    sede: "Campus Sarapiquí",
    periodo: "2025-2027",
    email: "omar.morales.torres@est.una.ac.cr",
    iniciales: "R2",
    foto: `${PASSPORT_BASE}Omar.jpg`,
  },
  {
    nombre: "Christopher Ulate Orozco",
    area: "consejo-universitario",
    cargo: "Consejo Universitario (Propiedad 2°)",
    asociacion: "Representación institucional",
    sede: "Campus Omar Dengo",
    periodo: "2025-2027",
    email: "christopher.ulate.orozco@est.una.ac.cr",
    iniciales: "R3",
    foto: `${PASSPORT_BASE}Cristofer%20Ulate.jpg`,
  },
  {
    nombre: "Iris Lopez Cruz",
    area: "consejo-universitario",
    cargo: "Consejo Universitario (Suplencia 2°)",
    asociacion: "Representación institucional",
    sede: "Campus Nicoya",
    periodo: "2025-2027",
    email: "iris.lopez.cruz@est.una.ac.cr",
    iniciales: "R4",
    foto: `${PASSPORT_BASE}Iris%20Lopez%20.jpeg`,
  },
  {
    nombre: "Laura Flores Barrantes",
    area: "consaca",
    cargo: "CONSACA (Propiedad 1°)",
    asociacion: "Representación institucional",
    sede: "Campus Benjamín Núñez",
    periodo: "2025-2027",
    email: "laura.flores.barrantes@est.una.ac.cr",
    iniciales: "C1",
    foto: `${PASSPORT_BASE}Foto%20Lau.jpg`,
  },
  {
    nombre: "Sebastian Sanchez Padilla",
    area: "consaca",
    cargo: "CONSACA (Suplencia 1°)",
    asociacion: "Representación institucional",
    sede: "Campus Pérez Zeledón",
    periodo: "2025-2027",
    email: "sebastian.sanchez.padilla@est.una.ac.cr",
    iniciales: "C2",
    foto: `${PASSPORT_BASE}Sebasti%C3%A1n.jpg`,
  },
  {
    nombre: "Yassir Jimenez Carballo",
    area: "consaca",
    cargo: "CONSACA (Propiedad 2°)",
    asociacion: "Representación institucional",
    sede: "Campus Benjamín Núñez",
    periodo: "2025-2027",
    email: "yassir.jimenez.carballo@est.una.ac.cr",
    iniciales: "C3",
    foto: `${PASSPORT_BASE}Yassir.jpg`,
  },
  {
    nombre: "Ariana Esquivel Flores",
    area: "consaca",
    cargo: "CONSACA (Suplencia 2°)",
    asociacion: "Representación institucional",
    sede: "Campus Omar Dengo",
    periodo: "2025-2027",
    email: "ariana.esquivel.flores@est.una.ac.cr",
    iniciales: "C4",
    foto: `${PASSPORT_BASE}Ariana.png`,
  },
  {
    nombre: "Valeria Espinoza Aguilar",
    area: "consaca",
    cargo: "CONSACA (Propiedad 3°)",
    asociacion: "Representación institucional",
    sede: "Campus Liberia",
    periodo: "2025-2027",
    email: "valeria.espinoza.aguilar@est.una.ac.cr",
    iniciales: "C5",
    foto: `${PASSPORT_BASE}Valeria_.jpg`,
  },
  {
    nombre: "Pablo Carballo Chaves",
    area: "consaca",
    cargo: "CONSACA (Suplencia 3°)",
    asociacion: "Representación institucional",
    sede: "Campus Omar Dengo",
    periodo: "2025-2027",
    email: "pablo.carballo.chaves@est.una.ac.cr",
    iniciales: "C6",
    foto: `${PASSPORT_BASE}Pablo Carballo.jpg`,
  },
  {
    nombre: "Bryam Bejarano Rucavado",
    area: "consaca",
    cargo: "CONSACA (Propiedad 4°)",
    asociacion: "Representación institucional",
    sede: "Campus Omar Dengo",
    periodo: "2025-2027",
    email: "bryam.bejarano.rucavado@est.una.ac.cr",
    iniciales: "C7",
    foto: `${PASSPORT_BASE}Bryam.jpg`,
  },
  {
    nombre: "Carolina Arrieta Angulo",
    area: "consaca",
    cargo: "CONSACA (Suplencia 4°)",
    asociacion: "Representación institucional",
    sede: "Campus Omar Dengo",
    periodo: "2025-2027",
    email: "carolina.arrieta.angulo@est.una.ac.cr",
    iniciales: "C8",
    foto: `${PASSPORT_BASE}Carolina%20Arrieta_.jpg`,
  },
];

function splitEmail(email: string) {
  const [user, domain] = email.split("@");
  return { user, domain: domain ? `@${domain}` : "" };
}

export function DeunaPage() {
  const [areaSeleccionada, setAreaSeleccionada] = useState("todas");

  const integrantesFiltrados = areaSeleccionada === "todas"
    ? integrantes
    : integrantes.filter(m => m.area === areaSeleccionada);

  const areaActiva = areas.find(c => c.id === areaSeleccionada);

  return (
    <div>
      {/* Hero */}
      <HeroInternal
        title="Directorio Estudiantil de la FEUNA (DEUNA)"
        subtitle="Órgano ejecutivo de la Federación de Estudiantes de la Universidad Nacional"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Órganos" }, { label: "DEUNA" }]}
      />

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-[900px] mx-auto text-center">
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#333333' }}>
              El DEUNA es el <strong>órgano ejecutivo</strong> de la FEUNA que ejecuta acuerdos y resoluciones del movimiento estudiantil, 
              coordina áreas de trabajo y <strong>seguimiento político</strong>, y combina trabajo interno con <strong>representación institucional</strong>{' '}
              ante órganos universitarios clave.
            </p>
          </div>
        </div>
      </section>

      {/* ¿Qué es el DEUNA? */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>¿Qué es el DEUNA?</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              El DEUNA es el órgano ejecutivo que pone en práctica las decisiones del movimiento estudiantil y coordina la agenda de la FEUNA.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funcionesDeuna.map((func, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-[#dddddd]">
                <func.icono size={32} className="text-[#bb1f1f] mb-3" />
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>{func.titulo}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>{func.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Cómo se organiza? */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>¿Cómo se organiza?</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              El DEUNA convierte las demandas estudiantiles en acciones concretas a través de conducción política, comisiones y representación institucional.
            </p>
          </div>
          <div className="max-w-[1100px] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <div className="bg-[#f5f5f5] px-6 py-4 rounded-lg text-center border-2 border-[#dddddd]">
                <Users size={32} className="text-[#666] mx-auto mb-2" />
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>Estudiantado</div>
              </div>
              <ChevronRight size={24} className="text-[#999] rotate-90 md:rotate-0" />
              <div className="bg-[#f5f5f5] px-6 py-4 rounded-lg text-center border-2 border-[#dddddd]">
                <Building2 size={32} className="text-[#666] mx-auto mb-2" />
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>FEUNA</div>
              </div>
              <ChevronRight size={24} className="text-[#999] rotate-90 md:rotate-0" />
              <div className="bg-[#bb1f1f] text-white px-6 py-4 rounded-lg text-center border-2 border-[#bb1f1f]">
                <UserCircle size={32} className="text-white mx-auto mb-2" />
                <div style={{ fontSize: '15px', fontWeight: 700 }}>DEUNA</div>
              </div>
              <ChevronRight size={24} className="text-[#999] rotate-90 md:rotate-0" />
              <div className="bg-[#034991] text-white px-6 py-4 rounded-lg text-center border-2 border-[#034991]">
                <Layers size={32} className="text-white mx-auto mb-2" />
                <div style={{ fontSize: '15px', fontWeight: 700 }}>Comisiones</div>
              </div>
              <ChevronRight size={24} className="text-[#999] rotate-90 md:rotate-0" />
              <div className="bg-[#034991] text-white px-6 py-4 rounded-lg text-center border-2 border-[#034991]">
                <Building2 size={32} className="text-white mx-auto mb-2" />
                <div style={{ fontSize: '15px', fontWeight: 700 }}>Representación</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrantes del DEUNA */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Directorio Ejecutivo DEUNA</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              Integrantes del Directorio Ejecutivo que conducen, coordinan y representan al estudiantado de la Universidad Nacional.
            </p>
          </div>

          {/* Filtros */}
          <div className="mb-8">
            <h3 className="mb-3" style={{ fontSize: '13px', fontWeight: 600, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Filtrar por área o representación
            </h3>
            <div className="flex flex-wrap gap-2">
              {areas.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setAreaSeleccionada(c.id)}
                  className={`px-4 py-2 rounded transition-colors ${
                    areaSeleccionada === c.id
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
          {areaActiva && (
            <div className="bg-white rounded-lg p-5 mb-8 border-l-4 border-[#bb1f1f]">
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>{areaActiva.nombre}</h3>
              <p className="text-[#666666] mt-1" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                {areaActiva.desc}
              </p>
            </div>
          )}

          {/* Grid de Integrantes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {integrantesFiltrados.map((miembro) => (
              <div key={miembro.email} className="bg-white rounded-lg border border-[#dddddd] overflow-hidden hover:shadow-md transition-shadow">
                {/* Foto tipo pasaporte - rectangular */}
                <div className="bg-[#f5f5f5] flex items-center justify-center" style={{ height: '200px' }}>
                  {miembro.foto ? (
                    <img
                      src={miembro.foto}
                      alt={miembro.nombre}
                      className="w-24 h-28 rounded object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-24 h-28 bg-[#dddddd] rounded flex items-center justify-center">
                      <span className="text-[#999]" style={{ fontSize: '28px', fontWeight: 600 }}>{miembro.iniciales}</span>
                    </div>
                  )}
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
                    {(() => {
                      const emailParts = splitEmail(miembro.email);
                      return (
                    <a 
                      href={`mailto:${miembro.email}`} 
                      className="flex items-start gap-2 text-[#034991] hover:underline w-full rounded bg-[#f7f9fc] px-2 py-1 max-w-[190px] mx-auto" 
                      style={{ fontSize: '11px', fontWeight: 500, lineHeight: 1.2 }}
                      title={miembro.email}
                    >
                      <Mail size={12} className="shrink-0 mt-0.5" />
                      <span className="flex flex-col min-w-0">
                        <span className="break-all">{emailParts.user}</span>
                        <span className="text-[#5a7390]">{emailParts.domain}</span>
                      </span>
                    </a>
                      );
                    })()}
                  </div>
                  <span className="inline-block mt-3 bg-[#f5f5f5] text-[#666666] px-2 py-0.5 rounded" style={{ fontSize: '11px', fontWeight: 500 }}>
                    {areas.find(c => c.id === miembro.area)?.nombre}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funciones de cada área */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Funciones de cada área y representación</h2>
          </div>
          <div className="space-y-4">
            {areas.slice(1).map((area, i) => (
              <div key={i} className="bg-[#f5f5f5] p-6 rounded-lg border-l-4 border-[#bb1f1f]">
                <div className="flex items-start gap-4">
                  <area.icono size={28} className="text-[#bb1f1f] shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="mb-2" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>
                      {area.nombre}
                    </h3>
                    <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                      {area.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comisiones internas y representación institucional */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Comisiones internas y representación institucional</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              El DEUNA articula trabajo ejecutivo interno y representación estudiantil en órganos universitarios clave.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bloque A: Comisiones Internas */}
            <div className="bg-white p-8 rounded-lg border border-[#dddddd]">
              <div className="flex items-start gap-3 mb-4">
                <Layers size={32} className="text-[#bb1f1f] shrink-0" />
                <div>
                  <h3 className="mb-2" style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a' }}>Comisiones Internas</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                    Las comisiones sostienen el trabajo cotidiano del Directorio, desarrollan líneas temáticas, impulsan proyectos, 
                    atienden problemáticas específicas y convierten la agenda estudiantil en acciones concretas.
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-[#666666]" style={{ fontSize: '13px' }}>
                  <ChevronRight size={16} className="text-[#bb1f1f]" />
                  Asuntos Ecológicos
                </li>
                <li className="flex items-center gap-2 text-[#666666]" style={{ fontSize: '13px' }}>
                  <ChevronRight size={16} className="text-[#bb1f1f]" />
                  Asuntos Regionales
                </li>
                <li className="flex items-center gap-2 text-[#666666]" style={{ fontSize: '13px' }}>
                  <ChevronRight size={16} className="text-[#bb1f1f]" />
                  Asuntos Universitarios
                </li>
                <li className="flex items-center gap-2 text-[#666666]" style={{ fontSize: '13px' }}>
                  <ChevronRight size={16} className="text-[#bb1f1f]" />
                  Cultura, Recreación y Deporte
                </li>
                <li className="flex items-center gap-2 text-[#666666]" style={{ fontSize: '13px' }}>
                  <ChevronRight size={16} className="text-[#bb1f1f]" />
                  Diversidad, Equidad y Género
                </li>
                <li className="flex items-center gap-2 text-[#666666]" style={{ fontSize: '13px' }}>
                  <ChevronRight size={16} className="text-[#bb1f1f]" />
                  Finanzas
                </li>
                <li className="flex items-center gap-2 text-[#666666]" style={{ fontSize: '13px' }}>
                  <ChevronRight size={16} className="text-[#bb1f1f]" />
                  Política Nacional e Internacional
                </li>
                <li className="flex items-center gap-2 text-[#666666]" style={{ fontSize: '13px' }}>
                  <ChevronRight size={16} className="text-[#bb1f1f]" />
                  Comunicación
                </li>
              </ul>
            </div>

            {/* Bloque B: Representación Institucional */}
            <div className="bg-white p-8 rounded-lg border border-[#dddddd]">
              <div className="flex items-start gap-3 mb-4">
                <Building2 size={32} className="text-[#034991] shrink-0" />
                <div>
                  <h3 className="mb-2" style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a' }}>Representación Institucional</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                    El DEUNA proyecta la representación estudiantil en espacios universitarios estratégicos donde se toman decisiones 
                    que afectan directamente al estudiantado.
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="bg-[#034991]/5 p-4 rounded-lg border-l-4 border-[#034991]">
                  <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#034991' }}>Consejo Universitario</h4>
                  <p className="mt-1" style={{ fontSize: '13px', lineHeight: 1.6, color: '#666666' }}>
                    <strong>4 personas</strong> que representan al estudiantado ante el máximo órgano de toma de decisiones de la UNA.
                  </p>
                </div>
                <div className="bg-[#034991]/5 p-4 rounded-lg border-l-4 border-[#034991]">
                  <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#034991' }}>CONSACA</h4>
                  <p className="mt-1" style={{ fontSize: '13px', lineHeight: 1.6, color: '#666666' }}>
                    <strong>8 personas</strong> que representan al estudiantado ante el Consejo Académico de la Universidad Nacional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estructuras de apoyo */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Estructuras de apoyo del DEUNA</h2>
          </div>
          <div className="max-w-[900px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#f5f5f5] p-6 rounded-lg border border-[#dddddd] text-center">
                <Layers size={32} className="text-[#bb1f1f] mx-auto mb-3" />
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>Comisiones de trabajo</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  Áreas que sostienen líneas temáticas, proyectos y seguimiento político
                </p>
              </div>
              <div className="bg-[#f5f5f5] p-6 rounded-lg border border-[#dddddd] text-center">
                <Building2 size={32} className="text-[#bb1f1f] mx-auto mb-3" />
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>Representación institucional</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  Presencia estudiantil del Directorio en órganos universitarios clave
                </p>
              </div>
              <div className="bg-[#f5f5f5] p-6 rounded-lg border border-[#dddddd] text-center">
                <Megaphone size={32} className="text-[#bb1f1f] mx-auto mb-3" />
                <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>Comunicación y seguimiento</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>
                  Divulgación, transparencia, cercanía con el estudiantado y continuidad de agenda
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[#034991] text-white">
        <div className="max-w-[900px] mx-auto px-5 text-center">
          <h2 className="mb-4" style={{ fontSize: '28px', fontWeight: 700 }}>¿Querés saber más sobre el DEUNA?</h2>
          <p className="mb-8" style={{ fontSize: '15px', lineHeight: 1.7 }}>
            Un espacio para seguir el trabajo del Directorio, conocer otras formas de participación y acceder a información relacionada con representación estudiantil.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/transparencia" className="inline-flex items-center gap-2 bg-white text-[#034991] px-6 py-3 rounded hover:bg-white/90 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <FileText size={18} />
              Ver transparencia
            </a>
            <a href="/participa/sumate" className="inline-flex items-center gap-2 bg-[#bb1f1f] text-white px-6 py-3 rounded hover:bg-[#8b1515] transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <Heart size={18} />
              Conocer participación estudiantil
            </a>
            <a href="/faq" className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/20 px-6 py-3 rounded hover:bg-white/20 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              <Users size={18} />
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