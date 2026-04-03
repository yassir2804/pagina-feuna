import { HeroInternal } from "../HeroInternal";
import { Construction } from "lucide-react";
import { Link } from "react-router";

interface GenericPageProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  content?: string;
}

export function GenericPage({ title, subtitle, breadcrumbs, content }: GenericPageProps) {
  return (
    <div>
      <HeroInternal
        title={title}
        subtitle={subtitle || "Contenido por completar con información oficial."}
        breadcrumbs={breadcrumbs || [{ label: "Inicio", href: "/" }, { label: title }]}
      />
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-[#f5f5f5] rounded-lg p-10 text-center">
            <Construction size={48} className="text-[#999] mx-auto mb-4" />
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#333333' }}>Página en construcción</h2>
            <p className="text-[#666666] mt-2 max-w-lg mx-auto" style={{ fontSize: '15px', lineHeight: 1.6 }}>
              {content || "Esta sección está siendo desarrollada con información oficial. Pronto estará disponible con contenido completo y actualizado."}
            </p>
            <Link to="/" className="inline-flex items-center gap-2 bg-[#bb1f1f] text-white px-5 py-2.5 rounded mt-6 hover:bg-[#8b1515] transition-colors" style={{ fontSize: '14px', fontWeight: 500 }}>
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
