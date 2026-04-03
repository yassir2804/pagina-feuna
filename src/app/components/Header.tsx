import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router";
import {
  Search, Menu, X, Facebook, Instagram,
  ChevronDown, Info, Archive, Gavel, Users, Landmark,
  Scale, SearchIcon, Feather, Shield, University,
  FileSignature, Heart, ListTodo, PieChart, Megaphone,
  FileText, Handshake, HelpCircle, DollarSign, HeartPulse,
  BookOpen, GraduationCap, Monitor, Newspaper, Calendar,
  Mail, Phone, MapPin, Lightbulb, MessageSquare, Briefcase, BarChart3
} from "lucide-react";

const logoFeuna = new URL("../../assets/logo-feuna.png", import.meta.url).href;

const navItems = [
  { label: "Inicio", href: "/" },
  {
    label: "Información general", href: "/feuna", children: [
      { label: "¿Qué es la FEUNA?", href: "/feuna", icon: Info },
      { label: "Historia y archivos", href: "/historia", icon: Archive },
      { label: "Estatuto y reglamentos", href: "/estatuto", icon: Gavel },
      { label: "Preguntas frecuentes", href: "/faq", icon: HelpCircle },
    ]
  },
  {
    label: "Órganos", href: "/deuna", children: [
      { label: "DEUNA (Directorio Ejecutivo)", href: "/deuna", icon: Users },
      { label: "CAEUNA (Consejo de Asociaciones)", href: "/caeuna", icon: Landmark },
      { label: "TEEUNA (Tribunal Electoral)", href: "/teeuna", icon: Scale },
      { label: "CEFEUNA (Contraloría Estudiantil)", href: "/cefeuna", icon: SearchIcon },
      { label: "MEI (Mov. Est. Indígena)", href: "/mei", icon: Feather },
      { label: "DEFEUNA (Defensoría Estudiantil)", href: "/defensoria", icon: Shield },
      { label: "Asociaciones estudiantiles", href: "/asociaciones", icon: Users },
    ]
  },
  {
    label: "Participa", href: "/participa/sumate", children: [
      { label: "Sumate", href: "/participa/sumate", icon: Heart },
      { label: "Proponé", href: "/participa/propone", icon: Lightbulb },
      { label: "Espacios de participación", href: "/participa/espacios", icon: Users },
      { label: "Oportunidades", href: "/oportunidades", icon: Briefcase },
      { label: "---", href: "", icon: null },
      { label: "Transparencia", href: "/transparencia", icon: PieChart },
    ]
  },
  {
    label: "Apoyo y recursos", href: "/apoyo-recursos/orientacion", children: [
      { label: "Te orientamos", href: "/apoyo-recursos/orientacion", icon: HelpCircle },
      { label: "Servicios FEUNA", href: "/apoyo-recursos/servicios", icon: Heart },
      { label: "Recursos UNA", href: "/apoyo-recursos/recursos-una", icon: BookOpen },
      { label: "Denuncias y sugerencias", href: "/apoyo-recursos/denuncias", icon: MessageSquare },
      { label: "---", href: "", icon: null },
      { label: "Plantillas y formularios", href: "/tramites", icon: FileText },
      { label: "Encuestas estudiantiles", href: "/encuestas", icon: BarChart3 },
    ]
  },
  {
    label: "Noticias", href: "/noticias", children: [
      { label: "Todas las noticias", href: "/noticias", icon: Newspaper },
      { label: "Eventos y calendario", href: "/eventos", icon: Calendar },
    ]
  },
  { label: "Contacto", href: "/contacto" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <header className="relative bg-white z-50">
      {/* Top Bar */}
      <div className="border-b border-[#dddddd]">
        <div className="max-w-[1400px] mx-auto px-5 py-3 flex items-center justify-between gap-8">
          <Link to="/" className="flex items-center shrink-0">
            <img src={logoFeuna} alt="Logo FEUNA" className="w-[150px] sm:w-[180px] md:w-[220px] h-auto object-contain" />
          </Link>
          <div className="flex items-center gap-6 ml-auto">
            <div className="hidden md:flex items-center gap-2 bg-[#f5f5f5] px-4 py-2.5 rounded border border-[#dddddd] min-w-[260px] lg:min-w-[300px]">
              <Search size={16} className="text-[#666666]" />
              <input type="text" placeholder="Buscar..." className="bg-transparent border-none outline-none flex-1 min-w-0" style={{ fontSize: '14px' }} />
            </div>
            <div className="flex gap-1 shrink-0">
              <a href="https://www.facebook.com/feuna.cr/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center text-[#333333] hover:text-[#bb1f1f] hover:bg-[#f5f5f5] rounded transition-colors" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/feuna.cr/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center text-[#333333] hover:text-[#bb1f1f] hover:bg-[#f5f5f5] rounded transition-colors" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://www.tiktok.com/@feuna.cr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center text-[#333333] hover:text-[#bb1f1f] hover:bg-[#f5f5f5] rounded transition-colors" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Nav Bar */}
      <div className="sticky top-0 z-[1000]" style={{ background: 'linear-gradient(135deg, #bb1f1f 0%, #8b1515 100%)' }}>
        <div className="max-w-full mx-auto px-5">
          <div className="flex items-center justify-center">
            <nav className="hidden lg:block w-full">
              <ul className="flex justify-center list-none">
                {navItems.map((item) => (
                  <li
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setOpenDropdown(item.label); }}
                    onMouseLeave={() => { timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150); }}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center gap-1 px-5 py-4 text-white hover:bg-black/10 transition-colors whitespace-nowrap ${location.pathname === item.href ? 'bg-black/15' : ''}`}
                      style={{ fontSize: '14px', fontWeight: 500 }}
                    >
                      {item.label}
                      {item.children && <ChevronDown size={14} />}
                    </Link>
                    {item.children && openDropdown === item.label && (
                      <ul className="absolute top-full left-0 bg-white min-w-[260px] shadow-lg border-t-[3px] border-[#bb1f1f] py-3 z-[1001] list-none">
                        {item.children.map((child) => (
                          child.label === "---" ? (
                            <li key="divider" className="h-px bg-[#dddddd] my-2" />
                          ) : (
                            <li key={child.label}>
                              <Link to={child.href} className="flex items-center gap-3 px-5 py-2.5 text-[#1a1a1a] hover:bg-[#f5f5f5] hover:text-[#bb1f1f] hover:pl-6 transition-all" style={{ fontSize: '14px' }}>
                                {child.icon && <child.icon size={16} className="text-[#666666]" />}
                                {child.label}
                              </Link>
                            </li>
                          )
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <button className="lg:hidden p-4 text-white" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menú">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[120px] bg-white z-[999] overflow-y-auto">
          <nav className="py-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link to={item.href} className="block px-6 py-3 text-[#1a1a1a] hover:bg-[#f5f5f5] hover:text-[#bb1f1f]" style={{ fontSize: '16px', fontWeight: 500 }}>
                  {item.label}
                </Link>
                {item.children && (
                  <div className="bg-[#f5f5f5]">
                    {item.children.filter(c => c.label !== "---").map((child) => (
                      <Link key={child.label} to={child.href} className="flex items-center gap-3 px-10 py-2.5 text-[#333333] hover:text-[#bb1f1f]" style={{ fontSize: '14px' }}>
                        {child.icon && <child.icon size={14} />}
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}