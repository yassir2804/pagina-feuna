import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  FileText, Users, Heart, Newspaper, Shield,
  PieChart, GraduationCap, Calendar, ArrowRight, ChevronRight,
  Megaphone, BookOpen, MapPin, Clock, X, Tag, Share2, ExternalLink,
  HelpCircle, Briefcase, BarChart3
} from "lucide-react";
import { useState } from "react";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { eventos as eventosCompletos, getCategoriaColor, categorias, type Evento } from "../../data/eventosData";
import heroImage from "../../../assets/banner-acerca-de-feuna.png";

const accesosRapidos = [
  { icon: Calendar, label: "Eventos", href: "/eventos", color: "#034991" },
  { icon: Briefcase, label: "Oportunidades", href: "/oportunidades", color: "#2d7a3e" },
  { icon: FileText, label: "Documentos", href: "/tramites", color: "#bb1f1f" },
  { icon: Heart, label: "Participá", href: "/participa/sumate", color: "#3d5a80" },
  { icon: Users, label: "Representación", href: "/deuna", color: "#8b1515" },
  { icon: HelpCircle, label: "FAQ", href: "/faq", color: "#c75b12" },
];

const noticias = [
  { id: 1, title: "Convocatoria de becas para el II ciclo 2026", category: "Becas", date: "28 Mar 2026", img: "https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwbGlicmFyeSUyMHVuaXZlcnNpdHl8ZW58MXx8fHwxNzc1MDY3NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 2, title: "Resultados de las elecciones estudiantiles 2026", category: "FEUNA", date: "25 Mar 2026", img: "https://images.unsplash.com/photo-1551731409-43eb3e517a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbWVldGluZyUyMGRpc2N1c3Npb24lMjBncm91cHxlbnwxfHx8fDE3NzUwNjc2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 3, title: "Programa de voluntariado comunitario abre inscripciones", category: "Oportunidades", date: "20 Mar 2026", img: "https://images.unsplash.com/photo-1544928938-6852c1925194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwdm9sdW50ZWVyaW5nJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzc1MDI4NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
];

const eventos = [
  { dia: "05", mes: "ABR", titulo: "Foro: Futuro de la educación superior pública", lugar: "Auditorio Clodomiro Picado" },
  { dia: "12", mes: "ABR", titulo: "Taller de primeros auxilios emocionales", lugar: "Edificio de Vida Estudiantil" },
  { dia: "18", mes: "ABR", titulo: "Asamblea General Estudiantil", lugar: "Gimnasio UNA" },
];

const apoyoYRecursos = [
  { icon: HelpCircle, title: "Te orientamos", desc: "Te ayudamos a encontrar la instancia correcta para tu caso y te explicamos los pasos a seguir.", href: "/apoyo-recursos/orientacion", color: "#034991" },
  { icon: Heart, title: "Servicios FEUNA", desc: "Conocé los servicios y apoyos que gestiona directamente la Federación para el estudiantado.", href: "/apoyo-recursos/servicios", color: "#bb1f1f" },
  { icon: BookOpen, title: "Recursos UNA", desc: "Directorio de recursos y servicios institucionales de la Universidad Nacional.", href: "/apoyo-recursos/recursos-una", color: "#2d7a3e" },
  { icon: Shield, title: "Denuncias y sugerencias", desc: "Canal seguro para reportar situaciones o enviar propuestas de mejora.", href: "/apoyo-recursos/denuncias", color: "#c75b12" },
];

export function HomePage() {
  const [eventoSeleccionado, setEventoSeleccionado] = useState<Evento | null>(null);
  
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[500px] md:min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImage} alt="FEUNA" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/80 via-[#1a1a1a]/55 to-transparent" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 py-20">
          <div className="max-w-xl">
            <div className="inline-block bg-[#bb1f1f] text-white px-4 py-1.5 rounded mb-6" style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.5px' }}>
              FEDERACIÓN DE ESTUDIANTES UNA
            </div>
            <h1 className="text-white mb-4" style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.15 }}>
              ¡ATRÉVETE A VIVIR LA U MÁS ALLÁ DE LAS AULAS!
            </h1>
            <p className="text-white/80 mb-8" style={{ fontSize: '18px', lineHeight: 1.6 }}>
              Tu gobierno estudiantil al servicio de la comunidad universitaria. Representación, servicios, participación y transparencia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/participa/sumate" className="inline-flex items-center gap-2 bg-[#bb1f1f] text-white px-6 py-3 rounded hover:bg-[#8b1515] transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
                Participá ahora <ArrowRight size={18} />
              </Link>
              <Link to="/apoyo-recursos/servicios" className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 px-6 py-3 rounded hover:bg-white/20 transition-colors" style={{ fontSize: '15px', fontWeight: 500 }}>
                Ver apoyo y recursos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="bg-white py-12 -mt-12 relative z-10">
        <div className="max-w-[1200px] mx-auto px-5">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-center mb-6" style={{ fontSize: '14px', fontWeight: 600, color: '#666666', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Acceso rápido
            </h2>
            <div className="mx-auto grid max-w-5xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
              {accesosRapidos.map((item) => (
                <Link key={item.label} to={item.href} className="flex w-full max-w-[140px] flex-col items-center gap-2 p-3 rounded-lg hover:bg-[#f5f5f5] transition-colors group">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: item.color + '10' }}>
                    <item.icon size={22} style={{ color: item.color }} />
                  </div>
                  <span className="text-center text-[#333333]" style={{ fontSize: '12px', fontWeight: 500 }}>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apoyo y recursos destacados */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1a1a1a' }}>Apoyo y recursos</h2>
              <p className="text-[#666666] mt-1" style={{ fontSize: '15px' }}>Orientación, servicios y recursos para tu vida universitaria</p>
            </div>
            <Link to="/apoyo-recursos/orientacion" className="hidden md:flex items-center gap-1 text-[#bb1f1f] hover:underline" style={{ fontSize: '14px', fontWeight: 500 }}>
              Ver todo <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {apoyoYRecursos.map((item) => (
              <Link key={item.title} to={item.href} className="bg-white rounded-lg p-6 border border-[#dddddd] hover:shadow-md hover:border-[#bb1f1f]/30 transition-all group">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-colors" style={{ backgroundColor: item.color + '10' }}>
                  <item.icon size={20} style={{ color: item.color }} className="transition-colors" />
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>{item.title}</h3>
                <p className="text-[#666666] mt-2" style={{ fontSize: '14px', lineHeight: 1.5 }}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1a1a1a' }}>Noticias recientes</h2>
              <p className="text-[#666666] mt-1" style={{ fontSize: '15px' }}>Mantente informado sobre lo que pasa en la FEUNA</p>
            </div>
            <Link to="/noticias" className="hidden md:flex items-center gap-1 text-[#bb1f1f] hover:underline" style={{ fontSize: '14px', fontWeight: 500 }}>
              Ver todas <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {noticias.map((n) => (
              <article key={n.id} className="bg-white rounded-lg border border-[#dddddd] overflow-hidden hover:shadow-md transition-shadow group">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback src={n.img} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#bb1f1f]/10 text-[#bb1f1f] px-2.5 py-0.5 rounded" style={{ fontSize: '12px', fontWeight: 600 }}>{n.category}</span>
                    <span className="text-[#999]" style={{ fontSize: '12px' }}>{n.date}</span>
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a', lineHeight: 1.4 }}>{n.title}</h3>
                  <Link to="/noticias" className="inline-flex items-center gap-1 text-[#bb1f1f] mt-3 hover:underline" style={{ fontSize: '14px', fontWeight: 500 }}>
                    Leer más <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Eventos + Participación */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Eventos */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a' }}>Próximos eventos</h2>
                <Link to="/eventos" className="flex items-center gap-1 text-[#bb1f1f] hover:underline" style={{ fontSize: '14px', fontWeight: 500 }}>
                  Ver calendario <ChevronRight size={16} />
                </Link>
              </div>
              <div className="space-y-4">
                {eventosCompletos.slice(0, 3).map((evento) => (
                  <button
                    key={evento.id}
                    onClick={() => setEventoSeleccionado(evento)}
                    className="w-full bg-white rounded-lg p-4 border-2 hover:shadow-md transition-all flex items-center gap-4 text-left"
                    style={{ borderColor: getCategoriaColor(evento.categoria) }}
                  >
                    <div
                      className="w-16 h-16 rounded-lg flex flex-col items-center justify-center text-white shrink-0"
                      style={{ backgroundColor: getCategoriaColor(evento.categoria) }}
                    >
                      <span style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1 }}>
                        {format(parseISO(evento.fecha), 'd')}
                      </span>
                      <span style={{ fontSize: '11px', fontWeight: 600 }}>
                        {format(parseISO(evento.fecha), 'MMM', { locale: es }).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="px-2 py-0.5 rounded text-white text-[10px] font-semibold uppercase"
                          style={{ backgroundColor: getCategoriaColor(evento.categoria) }}
                        >
                          {categorias.find(c => c.id === evento.categoria)?.nombre}
                        </span>
                      </div>
                      <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a', lineHeight: 1.3 }}>
                        {evento.titulo}
                      </h4>
                      <div className="flex items-center gap-4 mt-2 text-[#666666]">
                        <div className="flex items-center gap-1" style={{ fontSize: '12px' }}>
                          <Clock size={12} />
                          {evento.horaInicio}
                        </div>
                        <div className="flex items-center gap-1" style={{ fontSize: '12px' }}>
                          <MapPin size={12} />
                          {evento.lugar}
                        </div>
                      </div>
                    </div>
                    <ExternalLink size={16} className="text-[#666666] shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Participación */}
            <div>
              <h2 className="mb-6" style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a' }}>Tu voz importa</h2>
              <div className="bg-white rounded-lg border border-[#dddddd] p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#034991]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Megaphone size={22} className="text-[#034991]" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#1a1a1a' }}>Participá</h3>
                    <p className="text-[#666666] mt-1" style={{ fontSize: '14px', lineHeight: 1.5 }}>
                      La FEUNA es tu espacio. Sumate, proponé, encontrá espacios para participar y conocé oportunidades para involucrarte.
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <Link to="/participa/sumate" className="flex items-center justify-between p-3 rounded-lg bg-[#f5f5f5] hover:bg-[#bb1f1f]/5 transition-colors group">
                    <span style={{ fontSize: '14px', fontWeight: 500, color: '#333333' }}>Sumate</span>
                    <ArrowRight size={16} className="text-[#999] group-hover:text-[#bb1f1f] transition-colors" />
                  </Link>
                  <Link to="/participa/propone" className="flex items-center justify-between p-3 rounded-lg bg-[#f5f5f5] hover:bg-[#bb1f1f]/5 transition-colors group">
                    <span style={{ fontSize: '14px', fontWeight: 500, color: '#333333' }}>Proponé</span>
                    <ArrowRight size={16} className="text-[#999] group-hover:text-[#bb1f1f] transition-colors" />
                  </Link>
                  <Link to="/participa/espacios" className="flex items-center justify-between p-3 rounded-lg bg-[#f5f5f5] hover:bg-[#bb1f1f]/5 transition-colors group">
                    <span style={{ fontSize: '14px', fontWeight: 500, color: '#333333' }}>Espacios de participación</span>
                    <ArrowRight size={16} className="text-[#999] group-hover:text-[#bb1f1f] transition-colors" />
                  </Link>
                  <Link to="/oportunidades" className="flex items-center justify-between p-3 rounded-lg bg-[#f5f5f5] hover:bg-[#bb1f1f]/5 transition-colors group">
                    <span style={{ fontSize: '14px', fontWeight: 500, color: '#333333' }}>Oportunidades</span>
                    <ArrowRight size={16} className="text-[#999] group-hover:text-[#bb1f1f] transition-colors" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Transparencia */}
      <section className="bg-[#034991] py-14">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-white mb-3" style={{ fontSize: '24px', fontWeight: 700 }}>Transparencia y rendición de cuentas</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-6" style={{ fontSize: '15px', lineHeight: 1.6 }}>
            Creemos en la transparencia como pilar de la representación estudiantil. Consultá presupuestos, actas, informes y acuerdos.
          </p>
          <Link to="/transparencia" className="inline-flex items-center gap-2 bg-white text-[#034991] px-6 py-3 rounded hover:bg-white/90 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
            Ver documentos <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Modal de detalle de evento */}
      {eventoSeleccionado && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
          onClick={() => setEventoSeleccionado(null)}
        >
          <div
            className="bg-white rounded-lg max-w-[900px] w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal con imagen */}
            <div
              className="relative h-64 bg-gradient-to-br from-[#bb1f1f] to-[#8a1717] overflow-hidden"
              style={{ backgroundColor: getCategoriaColor(eventoSeleccionado.categoria) }}
            >
              {/* Placeholder para imagen */}
              <div className="absolute inset-0 flex items-center justify-center">
                {eventoSeleccionado.imagen ? (
                  <ImageWithFallback
                    src={`https://via.placeholder.com/900x400/666666/FFFFFF?text=${encodeURIComponent(eventoSeleccionado.imagen)}`}
                    alt={eventoSeleccionado.titulo}
                    className="w-full h-full object-cover opacity-30"
                  />
                ) : (
                  <Calendar size={80} className="text-white/20" />
                )}
              </div>

              {/* Overlay con botón cerrar */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setEventoSeleccionado(null)}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Etiqueta de categoría */}
              <div className="absolute top-4 left-4">
                <span
                  className="px-4 py-2 rounded text-white backdrop-blur-sm"
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    backgroundColor: 'rgba(255,255,255,0.2)'
                  }}
                >
                  {categorias.find(c => c.id === eventoSeleccionado.categoria)?.nombre}
                </span>
              </div>

              {/* Fecha grande */}
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg">
                <div style={{ fontSize: '32px', fontWeight: 700, color: getCategoriaColor(eventoSeleccionado.categoria), lineHeight: 1 }}>
                  {format(parseISO(eventoSeleccionado.fecha), 'd')}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#666666', textTransform: 'uppercase' }}>
                  {format(parseISO(eventoSeleccionado.fecha), 'MMM yyyy', { locale: es })}
                </div>
              </div>
            </div>

            {/* Contenido del modal */}
            <div className="p-8">
              {/* Título */}
              <h2 className="mb-6" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.3 }}>
                {eventoSeleccionado.titulo}
              </h2>

              {/* Información básica */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3 bg-[#f5f5f5] p-4 rounded-lg">
                  <Calendar size={20} className="shrink-0 mt-0.5" style={{ color: getCategoriaColor(eventoSeleccionado.categoria) }} />
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Fecha
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a' }}>
                      {format(parseISO(eventoSeleccionado.fecha), "d 'de' MMMM, yyyy", { locale: es })}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#f5f5f5] p-4 rounded-lg">
                  <Clock size={20} className="shrink-0 mt-0.5" style={{ color: getCategoriaColor(eventoSeleccionado.categoria) }} />
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Horario
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a' }}>
                      {eventoSeleccionado.horaInicio} - {eventoSeleccionado.horaFin}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#f5f5f5] p-4 rounded-lg">
                  <MapPin size={20} className="shrink-0 mt-0.5" style={{ color: getCategoriaColor(eventoSeleccionado.categoria) }} />
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Lugar
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a' }}>
                      {eventoSeleccionado.lugar}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#f5f5f5] p-4 rounded-lg">
                  <Users size={20} className="shrink-0 mt-0.5" style={{ color: getCategoriaColor(eventoSeleccionado.categoria) }} />
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Organiza
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a' }}>
                      {eventoSeleccionado.organizador}
                    </div>
                  </div>
                </div>
              </div>

              {/* Alertas de inscripción */}
              {(eventoSeleccionado.inscripcionRequerida || eventoSeleccionado.cupoLimitado) && (
                <div className="flex flex-wrap gap-3 mb-6">
                  {eventoSeleccionado.inscripcionRequerida && (
                    <div className="bg-[#034991]/10 border-l-4 border-[#034991] px-4 py-2 rounded flex items-center gap-2">
                      <Tag size={16} className="text-[#034991]" />
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#034991' }}>
                        Inscripción requerida
                      </span>
                    </div>
                  )}
                  {eventoSeleccionado.cupoLimitado && (
                    <div className="bg-[#c75b12]/10 border-l-4 border-[#c75b12] px-4 py-2 rounded flex items-center gap-2">
                      <Users size={16} className="text-[#c75b12]" />
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#c75b12' }}>
                        Cupo limitado
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Descripción larga */}
              <div className="mb-6">
                <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>
                  Sobre este evento
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#666666' }}>
                  {eventoSeleccionado.descripcionLarga || eventoSeleccionado.descripcion}
                </p>
              </div>

              {/* Requisitos */}
              {eventoSeleccionado.requisitos && eventoSeleccionado.requisitos.length > 0 && (
                <div className="mb-6 bg-[#f5f5f5] p-6 rounded-lg">
                  <h3 className="mb-4" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>
                    Requisitos y consideraciones
                  </h3>
                  <ul className="space-y-2">
                    {eventoSeleccionado.requisitos.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full shrink-0 mt-2" style={{ backgroundColor: getCategoriaColor(eventoSeleccionado.categoria) }} />
                        <span style={{ fontSize: '14px', lineHeight: 1.7, color: '#666666' }}>
                          {req}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Contacto */}
              {eventoSeleccionado.contacto && (
                <div className="bg-[#034991]/5 rounded-lg border-l-4 border-[#034991] p-4 mb-6">
                  <h4 className="mb-2" style={{ fontSize: '14px', fontWeight: 700, color: '#034991' }}>
                    Información y consultas
                  </h4>
                  <p style={{ fontSize: '14px', color: '#666666' }}>
                    Para más información sobre este evento, contactá a:{' '}
                    <a
                      href={`mailto:${eventoSeleccionado.contacto}`}
                      className="text-[#034991] hover:underline font-semibold"
                    >
                      {eventoSeleccionado.contacto}
                    </a>
                  </p>
                </div>
              )}

              {/* Botones de acción */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setEventoSeleccionado(null)}
                  className="flex-1 bg-[#f5f5f5] text-[#1a1a1a] px-6 py-3 rounded hover:bg-[#eeeeee] transition-colors"
                  style={{ fontSize: '15px', fontWeight: 600 }}
                >
                  Cerrar
                </button>
                <button
                  className="flex-1 text-white px-6 py-3 rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    backgroundColor: getCategoriaColor(eventoSeleccionado.categoria)
                  }}
                >
                  <Share2 size={18} />
                  Compartir evento
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}