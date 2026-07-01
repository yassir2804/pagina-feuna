import { useState, useMemo } from "react";
import { Link } from "react-router";
import { HeroInternal } from "../HeroInternal";
import {
  Users, ChevronRight, Building2, Scale, ShieldCheck, HandCoins,
  FileText, Landmark, Vote, Megaphone, Wallet, Gavel, MapPin, Mail, Search,
} from "lucide-react";

const NOMBRE_PENDIENTE = "[Nombre pendiente]";

type Asociacion = { nombre: string; sigla: string; sede: string; regional: boolean };

const asociacionesSedeCentral: Asociacion[] = [
  { nombre: "Asociación de Estudiantes de Economía", sigla: "AEECO", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Planificación y Promoción Social", sigla: "ASOPPS", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Administración", sigla: "ASOEDA", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Relaciones Internacionales", sigla: "ASORRII", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Comercio y Negocios Internacionales", sigla: "ASONIC", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Psicología", sigla: "ASEP", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Historia y Estudios Sociales", sigla: "ASOEESSH", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Sociología", sigla: "AESOCIO", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Inteligencia y Estrategia Global", sigla: "ASOIEG", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Administración de Oficina y Educación Comercial", sigla: "ASOAOEC", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Educación Rural", sigla: "ASEDER", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Educación Básica", sigla: "ASEDEBA", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Educación para el Trabajo", sigla: "ASEDETASO", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Artes Escénicas", sigla: "ASOESCENICAS", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Danza", sigla: "ASODANZA", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Artes y Comunicación Visual", sigla: "ASOACV", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Música", sigla: "ASOEMU", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Ciencias del Movimiento Humano", sigla: "ASOCIEMHCAVI", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Veterinaria", sigla: "ASOVETE", sede: "Campus Benjamín Núñez", regional: false },
  { nombre: "Asociación de Estudiantes de Ciencias Ambientales", sigla: "AEDECA", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Geografía", sigla: "AEGECA", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Ciencias Agrarias", sigla: "ASOECAS", sede: "Campus Benjamín Núñez", regional: false },
  { nombre: "Asociación de Estudiantes de Bibliotecología", sigla: "ASOEBDI", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Teología", sigla: "ASOTEO", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Español", sigla: "ASOESPA", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Filosofía", sigla: "ASOFILO", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Género", sigla: "ASOGEDE", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Literatura y Lenguaje", sigla: "ASELYL", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Residencias", sigla: "ASORESIS", sede: "Campus Omar Dengo", regional: false },
];

const asociacionesRegionales: Asociacion[] = [
  { nombre: "Asociación de Estudiantes de Liberia", sigla: "ASEUNAL", sede: "Sede Regional Chorotega, Liberia", regional: true },
  { nombre: "Asociación de Estudiantes de Pérez Zeledón", sigla: "ASEUNAPZ", sede: "Sede Regional Brunca, Pérez Zeledón", regional: true },
  { nombre: "Asociación de Estudiantes de Nicoya", sigla: "ASEUNAN", sede: "Sede Regional Chorotega, Nicoya", regional: true },
  { nombre: "Asociación de Estudiantes de Intersede", sigla: "ASEINTER", sede: "Sede Interuniversitaria de Alajuela", regional: true },
  { nombre: "Asociación de Estudiantes de Sarapiquí", sigla: "ASOECAS-SAR", sede: "Sede Interuniversitaria de Sarapiquí", regional: true },
  { nombre: "Asociación de Estudiantes de Coto", sigla: "ASOCOTO", sede: "Sede Regional Brunca, Coto", regional: true },
];

const puestosCompletosSedeCentral = [
  { label: "Presidencia" },
  { label: "Vicepresidencia" },
  { label: "Representación 1 ante el CAEUNA" },
  { label: "Representación 2 ante el CAEUNA" },
  { label: "Representación en el consejo de unidad académica" },
  { label: "Representación en el consejo de facultad" },
  { label: "Secretaría" },
  { label: "Tesorería" },
  { label: "Suplencia uno" },
  { label: "Suplencia dos" },
  { label: "Fiscalía" },
];

const puestosCompletosRegionales = [
  { label: "Presidencia" },
  { label: "Vicepresidencia" },
  { label: "Representación 1 ante el CAEUNA" },
  { label: "Representación 2 ante el CAEUNA" },
  { label: "Representación del consejo de sede regional, interuniversitaria o sección" },
  { label: "Suplencia de la representación de sede" },
  { label: "Fiscalía" },
  { label: "Secretaría" },
  { label: "Tesorería" },
  { label: "Suplencia uno" },
  { label: "Suplencia dos" },
];

const finesAsociaciones = [
  { icono: ShieldCheck, titulo: "Autonomía universitaria", desc: "Promover y defender la autonomía universitaria y la independencia estudiantil dentro de los espacios universitarios." },
  { icono: Megaphone, titulo: "Divulgación", desc: "Divulgar información sobre actividades académicas y el panorama regional y nacional para la comunidad estudiantil." },
  { icono: Users, titulo: "Resolución de problemáticas", desc: "Procurar resolver los problemas individuales y colectivos de la comunidad estudiantil de su unidad académica, facultad y sede." },
  { icono: Scale, titulo: "Defensa de derechos", desc: "Procurar la lucha y defensa de los derechos de la comunidad estudiantil y tomar una posición activa en la defensa de los Derechos Humanos." },
  { icono: Gavel, titulo: "Cero tolerancia", desc: "Rechazar y actuar ante cualquier manifestación de acoso, hostigamiento o discriminación de cualquier tipo." },
  { icono: Landmark, titulo: "Extensión universitaria", desc: "Facilitar espacios de extensión para colaborar con la academia, la investigación, la cultura y el deporte." },
];

const puestosSedeCentral = [
  "Presidencia",
  "Vicepresidencia",
  "Dos representaciones ante el CAEUNA",
  "Representación en el consejo de unidad académica",
  "Representación en el consejo de facultad",
  "Secretaría",
  "Tesorería",
  "Suplencia uno",
  "Suplencia dos",
  "Fiscalía",
];

const puestosRegionales = [
  "Presidencia",
  "Vicepresidencia",
  "Dos representaciones ante el CAEUNA",
  "Representación del consejo de sede regional, interuniversitaria o sección, y su suplencia",
  "Fiscalía",
  "Secretaría",
  "Tesorería",
  "Suplencia uno",
  "Suplencia dos",
];

const funcionesPuestos = [
  { cargo: "Presidencia", desc: "Representa jerárquicamente a la asociación ante la UNA, dirige las reuniones internas y las Asambleas de Estudiantes, y convoca a las sesiones de la Junta Directiva." },
  { cargo: "Vicepresidencia", desc: "Trabaja junto a la presidencia en la gestión de la asociación, la sustituye en ausencia temporal o permanente y apoya la coordinación de actividades." },
  { cargo: "Secretaría", desc: "Lleva el control de la correspondencia y documentación, redacta y custodia las actas de reuniones y Asambleas Generales, y gestiona la agenda de actividades." },
  { cargo: "Tesorería", desc: "Administra los recursos financieros, elabora informes financieros periódicos, controla ingresos y egresos, y coordina con el CAEUNA la solicitud de presupuesto." },
  { cargo: "Fiscalía", desc: "Vela por el orden y buen funcionamiento de la asociación, audita la ejecución de fondos, fiscaliza el cumplimiento de labores y lleva el control de activos y asistencia." },
  { cargo: "Representaciones ante el CAEUNA", desc: "Asisten obligatoriamente a las sesiones del CAEUNA, informan a la asociación sobre los acuerdos tomados y coordinan con tesorería y presidencia la solicitud de presupuesto." },
  { cargo: "Representaciones de consejo (unidad, facultad o sede)", desc: "Asisten obligatoriamente a las reuniones de su consejo, informan a la asociación sobre los acuerdos y llevan un control de las actas de cada sesión." },
  { cargo: "Suplencias", desc: "Apoyan la ejecución de actividades y proyectos, asumen funciones específicas según las necesidades de la Junta Directiva y sustituyen a otros integrantes en ausencias temporales." },
];

const derechos = [
  "Participar activamente en los espacios de los órganos de la FEUNA que traten temas de interés estudiantil.",
  "Ejercer el voto en los procesos electorales internos, con voz que debe ser escuchada y respetada.",
  "Ser reconocidas oficialmente por la institución educativa, con voz y voto en las decisiones de su escuela.",
  "Definir su propia estructura, objetivos y plan de trabajo, siempre alineados con los principios del reglamento.",
  "Expresar libremente sus ideas sobre temas académicos, políticos y sociales de interés estudiantil.",
];

const deberes = [
  "Actuar en beneficio de la población estudiantil, promoviendo entornos de respeto e inclusión.",
  "Operar dentro del Reglamento de Asociaciones, el Estatuto Orgánico de la FEUNA y el Reglamento del TEEUNA.",
  "Brindar espacios y oportunidades reales de participación para la comunidad estudiantil.",
  "Cuidar del espacio físico y de los activos asignados a la asociación.",
  "Promover valores de empatía, respeto, compañerismo, solidaridad y tolerancia.",
];

const todasLasAsociaciones = [...asociacionesSedeCentral, ...asociacionesRegionales];

export function AsociacionesPage() {
  const [busqueda, setBusqueda] = useState("");
  const [asociacionSeleccionada, setAsociacionSeleccionada] = useState(asociacionesSedeCentral[0].sigla);

  const asociacionesFiltradas = useMemo(() => {
    const termino = busqueda.trim().toLowerCase();
    if (!termino) return todasLasAsociaciones;
    return todasLasAsociaciones.filter(
      (a) => a.nombre.toLowerCase().includes(termino) || a.sigla.toLowerCase().includes(termino)
    );
  }, [busqueda]);

  const asociacionActiva = todasLasAsociaciones.find((a) => a.sigla === asociacionSeleccionada);
  const puestos = asociacionActiva?.regional ? puestosCompletosRegionales : puestosCompletosSedeCentral;

  return (
    <div>
      <HeroInternal
        title="Asociaciones Estudiantiles"
        subtitle="Gobiernos estudiantiles autónomos de cada unidad académica, centro, campus o sede, adscritos a la FEUNA."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Órganos" }, { label: "Asociaciones" }]}
      />

      {/* Introducción */}
      <section className="py-12 bg-white">
        <div className="max-w-[1000px] mx-auto px-5 text-center">
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333333' }}>
            Las asociaciones estudiantiles son los <strong>gobiernos estudiantiles autónomos</strong> de cada unidad académica,
            centro, campus regional, sección o residencia de la Universidad Nacional. Forman parte de la FEUNA y son la base
            de la representación estudiantil ante el <Link to="/caeuna" className="text-[#bb1f1f] hover:underline font-semibold">CAEUNA</Link>.
          </p>
        </div>
      </section>

      {/* Fines */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Fines de las asociaciones</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              Según el Reglamento General de Asociaciones Estudiantiles de la FEUNA, cada asociación existe para cumplir estos fines.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {finesAsociaciones.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-[#dddddd]">
                <f.icono size={28} className="text-[#bb1f1f] mb-3" />
                <h3 className="mb-2" style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>{f.titulo}</h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#666666' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo se organiza / Composición de juntas directivas */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Composición de la Junta Directiva</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              Los puestos varían según se trate de una asociación de la sede central (Campus Omar Dengo y Benjamín Núñez)
              o de un campus regional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f5f5f5] rounded-lg p-8 border-t-4 border-[#034991]">
              <div className="flex items-center gap-3 mb-5">
                <Building2 size={24} className="text-[#034991]" />
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>Sede central</h3>
              </div>
              <ul className="space-y-2.5">
                {puestosSedeCentral.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronRight size={16} className="text-[#034991] mt-0.5 shrink-0" />
                    <span style={{ fontSize: '14px', color: '#333333' }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f5f5f5] rounded-lg p-8 border-t-4 border-[#bb1f1f]">
              <div className="flex items-center gap-3 mb-5">
                <MapPin size={24} className="text-[#bb1f1f]" />
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>Campus y sedes regionales</h3>
              </div>
              <ul className="space-y-2.5">
                {puestosRegionales.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronRight size={16} className="text-[#bb1f1f] mt-0.5 shrink-0" />
                    <span style={{ fontSize: '14px', color: '#333333' }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center mt-8" style={{ fontSize: '13px', color: '#999' }}>
            El período de las Juntas Directivas es de un año y medio, según el Estatuto Orgánico de la FEUNA.
          </p>
        </div>
      </section>

      {/* Directorio de asociaciones */}
      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Directorio de asociaciones</h2>
            <p className="max-w-[700px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              Buscá y elegí una asociación estudiantil para ver los puestos de su Junta Directiva.
              Los nombres y correos se irán completando a medida que cada asociación los facilite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6">
            {/* Buscador y lista */}
            <div>
              <div className="relative mb-3">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]" />
                <input
                  type="text"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  placeholder="Buscar por nombre o sigla..."
                  className="w-full border border-[#dddddd] rounded pl-9 pr-3 py-2.5"
                  style={{ fontSize: '14px' }}
                />
              </div>
              <div className="border border-[#dddddd] rounded-lg overflow-y-auto" style={{ maxHeight: '420px' }}>
                {asociacionesFiltradas.length === 0 && (
                  <p className="px-4 py-4 text-center text-[#999]" style={{ fontSize: '13px' }}>
                    No se encontró ninguna asociación.
                  </p>
                )}
                {asociacionesFiltradas.map((a) => (
                  <button
                    key={a.sigla}
                    onClick={() => setAsociacionSeleccionada(a.sigla)}
                    className={`w-full text-left px-4 py-3 border-b border-[#f0f0f0] last:border-b-0 transition-colors ${
                      asociacionSeleccionada === a.sigla ? 'bg-[#bb1f1f]/10' : 'hover:bg-[#f5f5f5]'
                    }`}
                  >
                    <div style={{ fontSize: '13px', fontWeight: 600, color: asociacionSeleccionada === a.sigla ? '#bb1f1f' : '#1a1a1a' }}>
                      {a.nombre}
                    </div>
                    <div style={{ fontSize: '12px', color: '#999' }}>{a.sigla} · {a.sede}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Detalle de la asociación seleccionada */}
            {asociacionActiva && (
              <div className="bg-[#f5f5f5] rounded-lg border border-[#dddddd] p-6 h-fit">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.3 }}>{asociacionActiva.nombre}</h3>
                  <span className="shrink-0 bg-[#bb1f1f]/10 text-[#bb1f1f] px-2 py-1 rounded" style={{ fontSize: '12px', fontWeight: 700 }}>
                    {asociacionActiva.sigla}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[#666666] mb-5" style={{ fontSize: '13px' }}>
                  <MapPin size={13} className="shrink-0" />
                  <span>{asociacionActiva.sede}</span>
                </div>
                <div className="bg-white rounded-lg p-5 space-y-2" style={{ fontSize: '14px', color: '#333333' }}>
                  {puestos.map((p) => (
                    <div key={p.label}>
                      <strong>{p.label}:</strong> {NOMBRE_PENDIENTE}
                    </div>
                  ))}
                  <div className="flex items-center gap-1.5 pt-2 mt-2 border-t border-[#eeeeee] text-[#999]">
                    <Mail size={13} className="shrink-0" />
                    <span>[correo pendiente]</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Funciones por puesto */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Funciones de cada puesto</h2>
          </div>
          <div className="space-y-4 max-w-[900px] mx-auto">
            {funcionesPuestos.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border-l-4 border-[#bb1f1f]">
                <h3 className="mb-1.5" style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>{f.cargo}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Derechos y deberes */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Derechos y deberes de las asociaciones</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f5f5f5] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-5">
                <Vote size={24} className="text-[#2d7a3e]" />
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>Derechos</h3>
              </div>
              <ul className="space-y-3">
                {derechos.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronRight size={16} className="text-[#2d7a3e] mt-0.5 shrink-0" />
                    <span style={{ fontSize: '14px', lineHeight: 1.5, color: '#333333' }}>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f5f5f5] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-5">
                <ShieldCheck size={24} className="text-[#8e44ad]" />
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>Deberes</h3>
              </div>
              <ul className="space-y-3">
                {deberes.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronRight size={16} className="text-[#8e44ad] mt-0.5 shrink-0" />
                    <span style={{ fontSize: '14px', lineHeight: 1.5, color: '#333333' }}>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Presupuesto */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1000px] mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Presupuesto de las asociaciones</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              El Estatuto Orgánico de la FEUNA (Art. 129) destina un porcentaje del presupuesto ordinario exclusivamente
              a las asociaciones estudiantiles, para promover actividades, proyectos y programas de desarrollo estudiantil.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-8 text-center border-t-4 border-[#034991]">
              <Wallet size={32} className="text-[#034991] mx-auto mb-3" />
              <div style={{ fontSize: '36px', fontWeight: 700, color: '#034991' }}>40%</div>
              <p className="mt-2" style={{ fontSize: '14px', color: '#666666' }}>del presupuesto ordinario para las Asociaciones de la Sede Central</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center border-t-4 border-[#bb1f1f]">
              <HandCoins size={32} className="text-[#bb1f1f] mx-auto mb-3" />
              <div style={{ fontSize: '36px', fontWeight: 700, color: '#bb1f1f' }}>20%</div>
              <p className="mt-2" style={{ fontSize: '14px', color: '#666666' }}>del presupuesto ordinario para las Asociaciones de las Sedes Regionales</p>
            </div>
          </div>
          <p className="text-center mt-6" style={{ fontSize: '13px', color: '#999' }}>
            Las asociaciones administran estos recursos de forma transparente y presentan informes semestrales
            a la Mesa Coordinadora del CAEUNA y a su Asamblea General.
          </p>
        </div>
      </section>

      {/* Cómo participar */}
      <section className="py-16 bg-white">
        <div className="max-w-[1000px] mx-auto px-5">
          <div className="bg-gradient-to-r from-[#034991] to-[#023166] rounded-lg p-8 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <Users size={24} />
              </div>
              <div>
                <h3 className="mb-3" style={{ fontSize: '20px', fontWeight: 700 }}>¿Cómo participar en tu asociación?</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.95 }}>
                  Todo el estudiantado regular, debidamente empadronado y matriculado en su unidad académica, tiene derecho
                  a participar en la asociación de su carrera: asistiendo a asambleas generales, postulándote a la Junta
                  Directiva o proponiendo iniciativas a través de tus representantes.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="mb-3" style={{ fontSize: '20px', fontWeight: 700 }}>Marco normativo</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.95 }}>
                  Las asociaciones se rigen por el Reglamento General de Asociaciones Estudiantiles de la FEUNA, el
                  Estatuto Orgánico de la FEUNA y el Reglamento del TEEUNA. Consultá estos documentos en la sección
                  de <Link to="/estatuto" className="underline font-semibold">Estatuto y reglamentos</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-gradient-to-r from-[#bb1f1f] to-[#8b1515]">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: '28px', fontWeight: 700 }}>
            ¿Querés sumarte a tu asociación estudiantil?
          </h2>
          <p className="text-white/90 mb-8" style={{ fontSize: '16px', lineHeight: 1.7 }}>
            Conocé las formas de participar en la vida organizativa de la FEUNA, desde tu asociación hasta las
            comisiones del Directorio.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/participa/sumate"
              className="inline-flex items-center gap-2 bg-white text-[#bb1f1f] px-8 py-4 rounded hover:bg-white/95 transition-colors"
              style={{ fontSize: '16px', fontWeight: 700 }}
            >
              <Users size={20} />
              Sumate a la FEUNA
            </Link>
            <Link
              to="/caeuna"
              className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded hover:bg-white/20 transition-colors"
              style={{ fontSize: '16px', fontWeight: 600 }}
            >
              Ver el CAEUNA
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
