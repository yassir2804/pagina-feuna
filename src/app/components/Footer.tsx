import { Link } from "react-router";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1200px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <h3 className="text-white" style={{ fontSize: '16px', fontWeight: 600 }}>FEUNA</h3>
            </div>
            <ul className="space-y-2">
              <li><Link to="/feuna" className="text-[#999] hover:text-white transition-colors" style={{ fontSize: '14px' }}>¿Qué es la FEUNA?</Link></li>
              <li><Link to="/deuna" className="text-[#999] hover:text-white transition-colors" style={{ fontSize: '14px' }}>Estructura organizativa</Link></li>
              <li><Link to="/historia" className="text-[#999] hover:text-white transition-colors" style={{ fontSize: '14px' }}>Historia</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white mb-4" style={{ fontSize: '16px', fontWeight: 600 }}>Participa</h3>
            <ul className="space-y-2">
              <li><Link to="/participa/sumate" className="text-[#999] hover:text-white transition-colors" style={{ fontSize: '14px' }}>Sumate</Link></li>
              <li><Link to="/participa/propone" className="text-[#999] hover:text-white transition-colors" style={{ fontSize: '14px' }}>Proponé</Link></li>
              <li><Link to="/participa/espacios" className="text-[#999] hover:text-white transition-colors" style={{ fontSize: '14px' }}>Espacios</Link></li>
              <li><Link to="/oportunidades" className="text-[#999] hover:text-white transition-colors" style={{ fontSize: '14px' }}>Oportunidades</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white mb-4" style={{ fontSize: '16px', fontWeight: 600 }}>Apoyo y recursos</h3>
            <ul className="space-y-2">
              <li><Link to="/apoyo-recursos/orientacion" className="text-[#999] hover:text-white transition-colors" style={{ fontSize: '14px' }}>Te orientamos</Link></li>
              <li><Link to="/apoyo-recursos/servicios" className="text-[#999] hover:text-white transition-colors" style={{ fontSize: '14px' }}>Servicios FEUNA</Link></li>
              <li><Link to="/apoyo-recursos/recursos-una" className="text-[#999] hover:text-white transition-colors" style={{ fontSize: '14px' }}>Recursos UNA</Link></li>
              <li><Link to="/apoyo-recursos/denuncias" className="text-[#999] hover:text-white transition-colors" style={{ fontSize: '14px' }}>Denuncias</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white mb-4" style={{ fontSize: '16px', fontWeight: 600 }}>Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#999]" style={{ fontSize: '14px' }}><Phone size={14} /> (506) 2277-3236</li>
              <li className="flex items-center gap-2 text-[#999]" style={{ fontSize: '14px' }}><Mail size={14} /> feuna@una.cr</li>
              <li className="flex items-center gap-2 text-[#999]" style={{ fontSize: '14px' }}><MapPin size={14} /> Heredia, Costa Rica</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <h3 className="text-white mb-4" style={{ fontSize: '14px', fontWeight: 600 }}>Redes Sociales</h3>
          <div className="flex justify-center gap-4 mb-6">
            <a href="https://www.facebook.com/feuna.cr/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center text-[#999] hover:text-white hover:bg-white/10 rounded-full transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/feuna.cr/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center text-[#999] hover:text-white hover:bg-white/10 rounded-full transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="https://www.tiktok.com/@feuna.cr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center text-[#999] hover:text-white hover:bg-white/10 rounded-full transition-colors" aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@feuna_cr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center text-[#999] hover:text-white hover:bg-white/10 rounded-full transition-colors" aria-label="YouTube"><Youtube size={20} /></a>
          </div>
          <p className="text-[#666]" style={{ fontSize: '13px' }}>© 2025 FEUNA - Todos los derechos reservados</p>
          <div className="flex justify-center gap-6 mt-2">
            <a href="#" className="text-[#666] hover:text-white transition-colors" style={{ fontSize: '13px' }}>Política de Privacidad</a>
            <a href="#" className="text-[#666] hover:text-white transition-colors" style={{ fontSize: '13px' }}>Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}