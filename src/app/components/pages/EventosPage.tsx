import { HeroInternal } from "../HeroInternal";
import { Calendar, MapPin, Clock, Users, Tag, ChevronLeft, ChevronRight, Filter, X, ExternalLink, Share2, Download } from "lucide-react";
import { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, addMonths, subMonths, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { eventos, categorias, getCategoriaColor, type Evento } from "../../data/eventosData";

export function EventosPage() {
  const [mesActual, setMesActual] = useState(new Date(2026, 3, 1)); // Abril 2026
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todas");
  const [diaSeleccionado, setDiaSeleccionado] = useState<Date | null>(null);
  const [eventoSeleccionado, setEventoSeleccionado] = useState<Evento | null>(null);

  const diasDelMes = eachDayOfInterval({
    start: startOfMonth(mesActual),
    end: endOfMonth(mesActual),
  });

  const primerDiaSemana = startOfMonth(mesActual).getDay();

  const eventosFiltrados = categoriaSeleccionada === "todas"
    ? eventos
    : eventos.filter(e => e.categoria === categoriaSeleccionada);

  const eventosDelDia = diaSeleccionado
    ? eventosFiltrados.filter(e => isSameDay(parseISO(e.fecha), diaSeleccionado))
    : [];

  const tieneEventos = (dia: Date) => {
    return eventosFiltrados.some(e => isSameDay(parseISO(e.fecha), dia));
  };

  return (
    <div>
      <HeroInternal
        title="Eventos y calendario"
        subtitle="Calendario de actividades, asambleas, talleres y eventos estudiantiles de la FEUNA"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Eventos y calendario" }]}
      />

      {/* Filtros */}
      <section className="py-8 bg-white border-b border-[#dddddd]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex items-center gap-3 mb-4">
            <Filter size={20} className="text-[#666666]" />
            <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Filtrar por categoría
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {categorias.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategoriaSeleccionada(cat.id)}
                className={`px-4 py-2 rounded transition-all ${
                  categoriaSeleccionada === cat.id
                    ? 'text-white shadow-md'
                    : 'bg-white text-[#333333] hover:bg-[#f5f5f5] border border-[#dddddd]'
                }`}
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  backgroundColor: categoriaSeleccionada === cat.id ? cat.color : undefined,
                }}
              >
                {cat.nombre}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Calendario + Lista */}
      <section className="py-12 bg-[#f5f5f5]">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendario */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-[#dddddd] overflow-hidden">
                {/* Header del calendario */}
                <div className="bg-[#bb1f1f] text-white px-6 py-4 flex items-center justify-between">
                  <button
                    onClick={() => setMesActual(subMonths(mesActual, 1))}
                    className="p-2 hover:bg-white/10 rounded transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <h2 style={{ fontSize: '20px', fontWeight: 700, textTransform: 'capitalize' }}>
                    {format(mesActual, 'MMMM yyyy', { locale: es })}
                  </h2>
                  <button
                    onClick={() => setMesActual(addMonths(mesActual, 1))}
                    className="p-2 hover:bg-white/10 rounded transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Días de la semana */}
                <div className="grid grid-cols-7 bg-[#f5f5f5] border-b border-[#dddddd]">
                  {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(dia => (
                    <div
                      key={dia}
                      className="p-3 text-center"
                      style={{ fontSize: '12px', fontWeight: 600, color: '#666666' }}
                    >
                      {dia}
                    </div>
                  ))}
                </div>

                {/* Grid de días */}
                <div className="grid grid-cols-7">
                  {/* Espacios vacíos antes del primer día */}
                  {Array.from({ length: primerDiaSemana }).map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square border-b border-r border-[#eeeeee] bg-[#fafafa]" />
                  ))}
                  
                  {/* Días del mes */}
                  {diasDelMes.map((dia, i) => {
                    const esHoy = isToday(dia);
                    const seleccionado = diaSeleccionado && isSameDay(dia, diaSeleccionado);
                    const hayEventos = tieneEventos(dia);
                    const eventosDelDiaActual = eventosFiltrados.filter(e => isSameDay(parseISO(e.fecha), dia));

                    return (
                      <button
                        key={i}
                        onClick={() => setDiaSeleccionado(dia)}
                        className={`aspect-square border-b border-r border-[#eeeeee] p-2 hover:bg-[#f5f5f5] transition-colors relative ${
                          seleccionado ? 'bg-[#034991]/10' : ''
                        } ${esHoy ? 'bg-[#fff9e6]' : ''}`}
                      >
                        <div className="h-full flex flex-col">
                          <div
                            className={`text-center mb-1 ${
                              esHoy ? 'bg-[#bb1f1f] text-white rounded-full w-7 h-7 flex items-center justify-center mx-auto' : ''
                            }`}
                            style={{
                              fontSize: '14px',
                              fontWeight: esHoy ? 700 : 500,
                              color: esHoy ? 'white' : '#1a1a1a'
                            }}
                          >
                            {format(dia, 'd')}
                          </div>
                          
                          {/* Indicadores de eventos */}
                          {hayEventos && (
                            <div className="flex flex-wrap gap-1 justify-center">
                              {eventosDelDiaActual.slice(0, 3).map((evento, idx) => (
                                <div
                                  key={idx}
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ backgroundColor: getCategoriaColor(evento.categoria) }}
                                />
                              ))}
                              {eventosDelDiaActual.length > 3 && (
                                <div className="text-[10px] text-[#666666] font-semibold">
                                  +{eventosDelDiaActual.length - 3}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Leyenda */}
              <div className="mt-4 bg-white rounded-lg shadow-sm border border-[#dddddd] p-4">
                <h3 className="mb-3" style={{ fontSize: '14px', fontWeight: 600, color: '#1a1a1a' }}>
                  Leyenda de categorías
                </h3>
                <div className="flex flex-wrap gap-4">
                  {categorias.filter(c => c.id !== "todas").map(cat => (
                    <div key={cat.id} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: cat.color }}
                      />
                      <span style={{ fontSize: '13px', color: '#666666' }}>{cat.nombre}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Lista de eventos */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-[#dddddd] p-5">
                <h3 className="mb-4 flex items-center gap-2" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>
                  <Calendar size={20} className="text-[#bb1f1f]" />
                  {diaSeleccionado
                    ? format(diaSeleccionado, "d 'de' MMMM", { locale: es })
                    : 'Próximos eventos'}
                </h3>

                {diaSeleccionado && eventosDelDia.length === 0 && (
                  <div className="text-center py-8">
                    <Calendar size={48} className="text-[#dddddd] mx-auto mb-3" />
                    <p style={{ fontSize: '14px', color: '#666666' }}>
                      No hay eventos este día
                    </p>
                  </div>
                )}

                <div className="space-y-3">
                  {(diaSeleccionado ? eventosDelDia : eventosFiltrados.slice(0, 5)).map(evento => (
                    <div
                      key={evento.id}
                      className="border-l-4 bg-[#f5f5f5] p-3 rounded hover:shadow-sm transition-shadow"
                      style={{ borderColor: getCategoriaColor(evento.categoria) }}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#1a1a1a', lineHeight: 1.4 }}>
                          {evento.titulo}
                        </h4>
                        <span
                          className="px-2 py-0.5 rounded text-white shrink-0"
                          style={{
                            fontSize: '10px',
                            fontWeight: 600,
                            backgroundColor: getCategoriaColor(evento.categoria)
                          }}
                        >
                          {categorias.find(c => c.id === evento.categoria)?.nombre}
                        </span>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[#666666]" style={{ fontSize: '12px' }}>
                          <Calendar size={12} className="shrink-0" />
                          <span>{format(parseISO(evento.fecha), "d 'de' MMMM, yyyy", { locale: es })}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#666666]" style={{ fontSize: '12px' }}>
                          <Clock size={12} className="shrink-0" />
                          <span>{evento.horaInicio} - {evento.horaFin}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#666666]" style={{ fontSize: '12px' }}>
                          <MapPin size={12} className="shrink-0" />
                          <span>{evento.lugar}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#666666]" style={{ fontSize: '12px' }}>
                          <Users size={12} className="shrink-0" />
                          <span>{evento.organizador}</span>
                        </div>
                      </div>

                      <p className="mt-2 text-[#666666]" style={{ fontSize: '12px', lineHeight: 1.5 }}>
                        {evento.descripcion}
                      </p>
                    </div>
                  ))}
                </div>

                {!diaSeleccionado && eventosFiltrados.length > 5 && (
                  <div className="mt-4 text-center">
                    <p style={{ fontSize: '12px', color: '#666666' }}>
                      Mostrando 5 de {eventosFiltrados.length} eventos
                    </p>
                  </div>
                )}
              </div>

              {/* Info adicional */}
              <div className="mt-4 bg-[#034991]/5 rounded-lg border-l-4 border-[#034991] p-4">
                <h4 className="mb-2" style={{ fontSize: '14px', fontWeight: 600, color: '#034991' }}>
                  ¿Querés publicar un evento?
                </h4>
                <p className="mb-3" style={{ fontSize: '12px', lineHeight: 1.6, color: '#666666' }}>
                  Si tu asociación u organización estudiantil organiza un evento, podés enviarlo para publicación en el calendario oficial.
                </p>
                <a
                  href="/contacto"
                  className="inline-flex items-center gap-2 text-[#034991] hover:underline"
                  style={{ fontSize: '13px', fontWeight: 600 }}
                >
                  Contactar FEUNA
                  <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lista completa de próximos eventos */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="mb-8 text-center" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            Todos los próximos eventos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventosFiltrados.map(evento => (
              <div
                key={evento.id}
                className="bg-white border border-[#dddddd] rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Header con fecha */}
                <div
                  className="text-white p-4"
                  style={{ backgroundColor: getCategoriaColor(evento.categoria) }}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 rounded-lg p-3 text-center">
                      <div style={{ fontSize: '24px', fontWeight: 700, lineHeight: 1 }}>
                        {format(parseISO(evento.fecha), 'd')}
                      </div>
                      <div style={{ fontSize: '12px', fontWeight: 500, textTransform: 'uppercase' }}>
                        {format(parseISO(evento.fecha), 'MMM', { locale: es })}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div style={{ fontSize: '11px', fontWeight: 600, opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {categorias.find(c => c.id === evento.categoria)?.nombre}
                      </div>
                      <div className="flex items-center gap-1 mt-1" style={{ fontSize: '13px', fontWeight: 500 }}>
                        <Clock size={12} />
                        {evento.horaInicio} - {evento.horaFin}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-4">
                  <h3 className="mb-3" style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a', lineHeight: 1.4 }}>
                    {evento.titulo}
                  </h3>

                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 text-[#666666]" style={{ fontSize: '13px' }}>
                      <MapPin size={14} className="shrink-0" />
                      <span>{evento.lugar}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#666666]" style={{ fontSize: '13px' }}>
                      <Users size={14} className="shrink-0" />
                      <span>{evento.organizador}</span>
                    </div>
                  </div>

                  <p className="text-[#666666] mb-4" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                    {evento.descripcion}
                  </p>

                  <button
                    onClick={() => setEventoSeleccionado(evento)}
                    className="w-full bg-white border-2 text-[#1a1a1a] hover:bg-[#f5f5f5] px-4 py-2 rounded transition-colors flex items-center justify-center gap-2"
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      borderColor: getCategoriaColor(evento.categoria)
                    }}
                  >
                    Ver detalles completos
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#bb1f1f] text-white">
        <div className="max-w-[900px] mx-auto px-5 text-center">
          <Calendar size={48} className="mx-auto mb-4 opacity-90" />
          <h2 className="mb-4" style={{ fontSize: '28px', fontWeight: 700 }}>
            Mantente informado
          </h2>
          <p className="mb-8" style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.95 }}>
            No te perdás ninguna actividad estudiantil. Seguí el calendario oficial de la FEUNA y participá en las asambleas, talleres y eventos culturales.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/participa/espacios"
              className="inline-flex items-center gap-2 bg-white text-[#bb1f1f] px-6 py-3 rounded hover:bg-[#f5f5f5] transition-colors"
              style={{ fontSize: '15px', fontWeight: 600 }}
            >
              <Users size={18} />
              Ver participación
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/20 px-6 py-3 rounded hover:bg-white/20 transition-colors"
              style={{ fontSize: '15px', fontWeight: 600 }}
            >
              <Tag size={18} />
              Contactar
            </a>
          </div>
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