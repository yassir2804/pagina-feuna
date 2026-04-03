import { Link } from "react-router";
import { HeroInternal } from "../HeroInternal";
import { HelpCircle, DollarSign, Heart, FileText, Phone } from "lucide-react";

const orientacion = [
  { pregunta: "Tengo un problema con mi beca", respuesta: "Te orientamos sobre el proceso de apelación, requisitos y contacto con la Oficina de Becas UNA.", icono: DollarSign },
  { pregunta: "Necesito apoyo psicológico", respuesta: "Te ayudamos a acceder a servicios de salud mental de la UNA y convenios con el Colegio de Psicólogos.", icono: Heart },
  { pregunta: "Tengo dudas con matrícula", respuesta: "Te explicamos el proceso, plazos y te conectamos con Registro o tu unidad académica.", icono: FileText },
  { pregunta: "No sé a dónde acudir", respuesta: "La FEUNA te orienta y te ayuda a identificar la instancia universitaria correcta.", icono: HelpCircle },
];

export function ApoyoOrientacionPage() {
  return (
    <div>
      <HeroInternal
        title="Te orientamos"
        subtitle="¿No sabés a qué instancia acudir? La FEUNA te ayuda a encontrar el recurso o servicio que necesitás."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Apoyo y recursos", href: "/apoyo-recursos/orientacion" }, { label: "Te orientamos" }]}
      />

      {/* Introducción */}
      <section className="py-12 bg-white">
        <div className="max-w-[1000px] mx-auto px-5">
          <p className="text-[#666666] text-center max-w-[800px] mx-auto mb-8" style={{ fontSize: '16px', lineHeight: 1.8 }}>
            La universidad puede ser compleja y a veces no es fácil saber a quién acudir. 
            <strong> La FEUNA está para ayudarte.</strong> Te orientamos, te explicamos los procesos y te conectamos 
            con las instancias correctas. No estás solo.
          </p>
        </div>
      </section>

      {/* Casos comunes */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center mb-10" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            Casos comunes de orientación
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {orientacion.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-[#dddddd] hover:border-[#034991] hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#034991]/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icono size={22} className="text-[#034991]" />
                  </div>
                  <div>
                    <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                      {item.pregunta}
                    </h3>
                    <p className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                      {item.respuesta}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Cómo te ayudamos? */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center mb-12" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            ¿Cómo te ayudamos?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#bb1f1f] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                1
              </div>
              <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                Escuchamos tu caso
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                Nos contás tu situación y necesidades.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#bb1f1f] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                2
              </div>
              <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                Identificamos opciones
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                Analizamos qué instancia o recurso te puede ayudar.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#bb1f1f] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                3
              </div>
              <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                Te guiamos
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                Te explicamos procesos, requisitos y pasos a seguir.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#bb1f1f] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                4
              </div>
              <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                Te acompañamos
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                Si es necesario, te apoyamos en el proceso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de orientación */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center mb-10" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            Te orientamos en múltiples áreas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#034991]">
              <h4 className="mb-3" style={{ fontSize: '17px', fontWeight: 700, color: '#1a1a1a' }}>
                Asuntos académicos
              </h4>
              <ul className="space-y-2 text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                <li>• Matrícula y cambios de curso</li>
                <li>• Problemas con notas o evaluaciones</li>
                <li>• Procesos disciplinarios</li>
                <li>• Trabajo final de graduación</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-[#bb1f1f]">
              <h4 className="mb-3" style={{ fontSize: '17px', fontWeight: 700, color: '#1a1a1a' }}>
                Asuntos socioeconómicos
              </h4>
              <ul className="space-y-2 text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                <li>• Becas y apelaciones</li>
                <li>• Exoneración de matrícula</li>
                <li>• Ayudas económicas</li>
                <li>• Residencias estudiantiles</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-[#2d7a3e]">
              <h4 className="mb-3" style={{ fontSize: '17px', fontWeight: 700, color: '#1a1a1a' }}>
                Vida estudiantil y bienestar
              </h4>
              <ul className="space-y-2 text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                <li>• Salud mental y apoyo psicológico</li>
                <li>• Servicios médicos y nutrición</li>
                <li>• Situaciones de discriminación</li>
                <li>• Acceso a recursos de bienestar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA de contacto */}
      <section className="py-16 bg-gradient-to-r from-[#034991] to-[#023166]">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Phone size={36} className="text-white" />
          </div>
          <h2 className="text-white mb-4" style={{ fontSize: '28px', fontWeight: 700 }}>
            ¿Necesitás orientación personalizada?
          </h2>
          <p className="text-white/90 mb-8" style={{ fontSize: '16px', lineHeight: 1.7 }}>
            Contactanos y te ayudaremos a encontrar la solución o la instancia correcta para tu situación específica.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-white text-[#034991] px-8 py-4 rounded hover:bg-white/95 transition-colors"
            style={{ fontSize: '16px', fontWeight: 700 }}
          >
            Contactar FEUNA
            <Phone size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
