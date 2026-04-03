import { HeroInternal } from "../HeroInternal";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Send } from "lucide-react";
import { useState } from "react";
import organos, { Organo } from "../../data/organos";

export function ContactoPage() {
  const [enviado, setEnviado] = useState(false);
  const [organoSeleccionado, setOrganoSeleccionado] = useState<Organo>(organos[0]);

  return (
    <div>
      <HeroInternal
        title="Contacto"
        subtitle="Comunicate con la FEUNA y sus órganos. Estamos para ayudarte."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]}
      />

      {/* Selector de instancia */}
      <section className="py-10 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center mb-6" style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a' }}>
            ¿A qué instancia querés contactar?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {organos.map((organo) => {
              const Icono = organo.icono;
              const isSelected = organoSeleccionado.id === organo.id;
              return (
                <button
                  key={organo.id}
                  onClick={() => setOrganoSeleccionado(organo)}
                  className={`flex flex-col items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                    isSelected 
                      ? 'bg-white shadow-md' 
                      : 'bg-white hover:shadow-sm'
                  }`}
                  style={{
                    borderColor: isSelected ? organo.color : '#dddddd'
                  }}
                >
                  <div 
                    className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                      isSelected ? 'text-white' : ''
                    }`}
                    style={{
                      backgroundColor: isSelected ? organo.color : organo.color + '15',
                      color: isSelected ? 'white' : organo.color
                    }}
                  >
                    <Icono size={22} />
                  </div>
                  <div className="text-center">
                    <p style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>
                      {organo.sigla}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Banner del órgano seleccionado */}
          <div 
            className="rounded-lg p-6 mb-10 text-white"
            style={{ backgroundColor: organoSeleccionado.color }}
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                <organoSeleccionado.icono size={26} className="text-white" />
              </div>
              <div>
                <h2 className="mb-2" style={{ fontSize: '24px', fontWeight: 700 }}>
                  {organoSeleccionado.nombre}
                </h2>
                <p className="text-white/90" style={{ fontSize: '15px', lineHeight: 1.6 }}>
                  {organoSeleccionado.descripcion}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Info */}
            <div>
              <h3 className="mb-6" style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a' }}>
                Información de contacto
              </h3>
              <div className="space-y-5">
                {organoSeleccionado.telefono && (
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: organoSeleccionado.color + '15' }}
                    >
                      <Phone size={18} style={{ color: organoSeleccionado.color }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '13px', color: '#666666' }}>Teléfono</p>
                      <p style={{ fontSize: '15px', fontWeight: 500, color: '#1a1a1a' }}>
                        {organoSeleccionado.telefono}
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: organoSeleccionado.color + '15' }}
                  >
                    <Mail size={18} style={{ color: organoSeleccionado.color }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', color: '#666666' }}>Correo electrónico</p>
                    <a 
                      href={`mailto:${organoSeleccionado.email}`}
                      className="hover:underline"
                      style={{ fontSize: '15px', fontWeight: 500, color: '#1a1a1a' }}
                    >
                      {organoSeleccionado.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: organoSeleccionado.color + '15' }}
                  >
                    <MapPin size={18} style={{ color: organoSeleccionado.color }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', color: '#666666' }}>Dirección</p>
                    <p style={{ fontSize: '15px', fontWeight: 500, color: '#1a1a1a' }}>
                      {organoSeleccionado.direccion}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: organoSeleccionado.color + '15' }}
                  >
                    <Clock size={18} style={{ color: organoSeleccionado.color }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', color: '#666666' }}>Horario</p>
                    <p style={{ fontSize: '15px', fontWeight: 500, color: '#1a1a1a' }}>
                      {organoSeleccionado.horario}
                    </p>
                  </div>
                </div>
              </div>

              {/* Redes sociales - siempre mostrar porque todos tienen Instagram */}
              <div className="mt-8">
                <p className="mb-3" style={{ fontSize: '14px', fontWeight: 600, color: '#1a1a1a' }}>
                  Redes sociales
                </p>
                <div className="flex gap-2">
                  {organoSeleccionado.facebook && (
                    <a 
                      href={organoSeleccionado.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-[#f5f5f5] text-[#333] hover:text-white rounded transition-colors"
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = organoSeleccionado.color}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                    >
                      <Facebook size={18} />
                    </a>
                  )}
                  <a 
                    href={organoSeleccionado.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-[#f5f5f5] text-[#333] hover:text-white rounded transition-colors"
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = organoSeleccionado.color}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                  >
                    <Instagram size={18} />
                  </a>
                  {organoSeleccionado.tiktok && (
                    <a 
                      href={organoSeleccionado.tiktok} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-[#f5f5f5] text-[#333] hover:text-white rounded transition-colors"
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = organoSeleccionado.color}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="lg:col-span-2">
              <h3 className="mb-6" style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a' }}>
                Envianos un mensaje
              </h3>
              {enviado ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <p style={{ fontSize: '18px', fontWeight: 600, color: '#166534' }}>¡Mensaje enviado!</p>
                  <p className="text-green-700 mt-2" style={{ fontSize: '14px' }}>
                    Gracias por contactarnos. {organoSeleccionado.sigla} te responderá lo antes posible.
                  </p>
                  <button
                    onClick={() => setEnviado(false)}
                    className="mt-4 text-green-700 hover:underline"
                    style={{ fontSize: '14px', fontWeight: 500 }}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setEnviado(true); }} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block mb-1.5" style={{ fontSize: '14px', fontWeight: 500, color: '#333333' }}>
                        Nombre completo
                      </label>
                      <input 
                        type="text" 
                        required 
                        className="w-full px-4 py-2.5 border border-[#dddddd] rounded bg-white focus:outline-none transition-colors" 
                        style={{ fontSize: '14px' }}
                        onFocus={(e) => e.currentTarget.style.borderColor = organoSeleccionado.color}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#dddddd'}
                      />
                    </div>
                    <div>
                      <label className="block mb-1.5" style={{ fontSize: '14px', fontWeight: 500, color: '#333333' }}>
                        Correo electrónico
                      </label>
                      <input 
                        type="email" 
                        required 
                        className="w-full px-4 py-2.5 border border-[#dddddd] rounded bg-white focus:outline-none transition-colors" 
                        style={{ fontSize: '14px' }}
                        onFocus={(e) => e.currentTarget.style.borderColor = organoSeleccionado.color}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#dddddd'}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-1.5" style={{ fontSize: '14px', fontWeight: 500, color: '#333333' }}>
                      Asunto
                    </label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-2.5 border border-[#dddddd] rounded bg-white focus:outline-none transition-colors" 
                      style={{ fontSize: '14px' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = organoSeleccionado.color}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#dddddd'}
                    />
                  </div>
                  <div>
                    <label className="block mb-1.5" style={{ fontSize: '14px', fontWeight: 500, color: '#333333' }}>
                      Mensaje
                    </label>
                    <textarea 
                      required 
                      rows={5} 
                      className="w-full px-4 py-2.5 border border-[#dddddd] rounded bg-white focus:outline-none transition-colors resize-none" 
                      style={{ fontSize: '14px' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = organoSeleccionado.color}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#dddddd'}
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="inline-flex items-center gap-2 text-white px-6 py-3 rounded hover:opacity-90 transition-opacity" 
                    style={{ 
                      fontSize: '15px', 
                      fontWeight: 600,
                      backgroundColor: organoSeleccionado.color
                    }}
                  >
                    Enviar mensaje <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}