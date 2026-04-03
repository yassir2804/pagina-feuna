import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

interface HeroInternalProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function HeroInternal({ title, subtitle, breadcrumbs }: HeroInternalProps) {
  return (
    <section className="bg-gradient-to-r from-[#bb1f1f] to-[#8b1515] text-white py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-5">
        {breadcrumbs && (
          <nav className="flex items-center gap-1 mb-4 text-white/70" style={{ fontSize: '13px' }}>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight size={14} />}
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.2 }}>{title}</h1>
        {subtitle && <p className="mt-3 text-white/80 max-w-2xl" style={{ fontSize: '16px' }}>{subtitle}</p>}
      </div>
    </section>
  );
}
