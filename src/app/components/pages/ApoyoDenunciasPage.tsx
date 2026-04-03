import { Link } from "react-router";
import { HeroInternal } from "../HeroInternal";
import { MessageSquare, Lightbulb, Send, Shield, Lock, AlertCircle } from "lucide-react";

export function ApoyoDenunciasPage() {
  return (
    <div>
      <HeroInternal
        title="Denuncias y sugerencias"
        subtitle="Espacio seguro y confidencial para reportar problemáticas estudiantiles o enviar sugerencias que ayuden a mejorar la FEUNA."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Apoyo y recursos", href: "/apoyo-recursos/orientacion" }, { label: "Denuncias y sugerencias" }]}
      />

      {/* Introducción */}
      <section className="py-12 bg-white">
        <div className="max-w-[1000px] mx-auto px-5">
          <p className="text-[#666666] text-center max-w-[800px] mx-auto mb-8" style={{ fontSize: '16px', lineHeight: 1.8 }}>
            Este es un espacio seguro y confidencial para reportar problemáticas estudiantiles, situaciones que afecten 
            tus derechos o enviar sugerencias que ayuden a mejorar el trabajo de la FEUNA. <strong>Tu voz es importante y será escuchada.</strong>
          </p>
        </div>
      </section>

      {/* Opciones principales */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Reportar situación */}
            <div className="bg-white rounded-lg p-10 border border-[#dddddd] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#c75b12]/10 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare size={32} className="text-[#c75b12]" />
              </div>
              <h2 className="mb-4" style={{ fontSize: '24px', fontWeight: 700, color: '#1a1a1a' }}>
                Reportar una situación
              </h2>
              <p className="text-[#666666] mb-6" style={{ fontSize: '15px', lineHeight: 1.7 }}>
                Si enfrentás una problemática estudiantil, irregularidad académica o administrativa, 
                o necesitás apoyo de la FEUNA, podés reportarlo de forma confidencial.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c75b12] mt-2 shrink-0" />
                  <span className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                    Problemas con procesos académicos o administrativos
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c75b12] mt-2 shrink-0" />
                  <span className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                    Irregularidades en becas, matrícula o servicios estudiantiles
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c75b12] mt-2 shrink-0" />
                  <span className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                    Situaciones de vulneración de derechos estudiantiles
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c75b12] mt-2 shrink-0" />
                  <span className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                    Necesidad de acompañamiento ante instancias universitarias
                  </span>
                </div>
              </div>

              <Link
                to="/apoyo-recursos/reportar"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#c75b12] text-white px-6 py-4 rounded hover:bg-[#a04a0e] transition-colors"
                style={{ fontSize: '16px', fontWeight: 600 }}
              >
                <Send size={18} />
                Reportar situación
              </Link>
            </div>

            {/* Enviar sugerencia */}
            <div className="bg-white rounded-lg p-10 border border-[#dddddd] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#034991]/10 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb size={32} className="text-[#034991]" />
              </div>
              <h2 className="mb-4" style={{ fontSize: '24px', fontWeight: 700, color: '#1a1a1a' }}>
                Enviar una sugerencia
              </h2>
              <p className="text-[#666666] mb-6" style={{ fontSize: '15px', lineHeight: 1.7 }}>
                ¿Tenés una idea para mejorar el trabajo de la FEUNA? ¿Observaste algo que podríamos hacer mejor? 
                Tus sugerencias son bienvenidas y valoradas.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#034991] mt-2 shrink-0" />
                  <span className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                    Mejoras en servicios, trámites o atención estudiantil
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#034991] mt-2 shrink-0" />
                  <span className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                    Sugerencias sobre comunicación y transparencia
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#034991] mt-2 shrink-0" />
                  <span className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                    Ideas para optimizar procesos internos
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#034991] mt-2 shrink-0" />
                  <span className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                    Observaciones constructivas sobre gestión estudiantil
                  </span>
                </div>
              </div>

              <Link
                to="/apoyo-recursos/sugerir"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#034991] text-white px-6 py-4 rounded hover:bg-[#023166] transition-colors"
                style={{ fontSize: '16px', fontWeight: 600 }}
              >
                <Send size={18} />
                Enviar sugerencia
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Garantías y proceso */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center mb-12" style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
            Garantías y compromisos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#f5f5f5] rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#2d7a3e]/10 rounded-lg flex items-center justify-center mx-auto mb-5">
                <Lock size={28} className="text-[#2d7a3e]" />
              </div>
              <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>
                Confidencialidad
              </h3>
              <p className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                Tu información se maneja de forma confidencial. Podés elegir si querés que tu reporte sea anónimo.
              </p>
            </div>

            <div className="bg-[#f5f5f5] rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#034991]/10 rounded-lg flex items-center justify-center mx-auto mb-5">
                <Shield size={28} className="text-[#034991]" />
              </div>
              <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>
                Protección
              </h3>
              <p className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                No habrá represalias por reportar situaciones. La FEUNA protege el derecho a denunciar.
              </p>
            </div>

            <div className="bg-[#f5f5f5] rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#bb1f1f]/10 rounded-lg flex items-center justify-center mx-auto mb-5">
                <AlertCircle size={28} className="text-[#bb1f1f]" />
              </div>
              <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>
                Seguimiento
              </h3>
              <p className="text-[#666666]" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                Todo reporte es revisado. Se te informará sobre acciones tomadas y avances en el proceso.
              </p>
            </div>
          </div>

          {/* Proceso */}
          <div className="bg-[#f5f5f5] rounded-lg p-10">
            <h3 className="text-center mb-8" style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a' }}>
              ¿Qué pasa después de enviar un reporte?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#c75b12] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                  1
                </div>
                <h4 className="mb-2" style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>
                  Recepción
                </h4>
                <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                  Tu reporte se registra de forma segura y se asigna responsable de seguimiento.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-[#c75b12] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                  2
                </div>
                <h4 className="mb-2" style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>
                  Análisis
                </h4>
                <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                  Se analiza el caso, se recopila información y se define estrategia de acción.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-[#c75b12] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                  3
                </div>
                <h4 className="mb-2" style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>
                  Acción
                </h4>
                <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                  Se toman acciones: orientación, acompañamiento, canalización o gestión directa.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-[#c75b12] text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                  4
                </div>
                <h4 className="mb-2" style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>
                  Respuesta
                </h4>
                <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                  Se te informa sobre las acciones realizadas y resultados obtenidos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instancias especializadas */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-[#034991]/5 border-l-4 border-[#034991] rounded-lg p-8">
            <h3 className="mb-4" style={{ fontSize: '20px', fontWeight: 700, color: '#034991' }}>
              Casos que requieren instancias especializadas
            </h3>
            <p className="text-[#666666] mb-6" style={{ fontSize: '15px', lineHeight: 1.7 }}>
              Para algunos casos, la FEUNA te orientará hacia instancias universitarias especializadas que tienen competencia legal y protocolos específicos:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-5 border border-[#dddddd]">
                <h4 className="mb-2" style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>
                  Defensoría Estudiantil
                </h4>
                <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                  Para procesos académicos disciplinarios, apelaciones, defensa de derechos estudiantiles ante instancias oficiales.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 border border-[#dddddd]">
                <h4 className="mb-2" style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>
                  Fiscalía contra el Hostigamiento Sexual
                </h4>
                <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                  Para denuncias de hostigamiento sexual, acoso o violencia de género en el ámbito universitario.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 border border-[#dddddd]">
                <h4 className="mb-2" style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>
                  Fiscalía de Investigación de Faltas Comunes y Acoso Laboral
                </h4>
                <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                  Para denuncias de acoso laboral, faltas administrativas y otros casos de conducta inapropiada en el ámbito universitario.
                </p>
              </div>
            </div>
            <p className="text-[#666666] mt-6" style={{ fontSize: '14px', lineHeight: 1.7 }}>
              <strong>La FEUNA puede acompañarte</strong> en el proceso de acudir a estas instancias, orientarte sobre tus derechos y brindarte apoyo durante el procedimiento.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#c75b12] to-[#a04a0e]">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: '28px', fontWeight: 700 }}>
            Tu voz importa
          </h2>
          <p className="text-white/90 mb-8" style={{ fontSize: '16px', lineHeight: 1.7 }}>
            Reportar problemáticas y enviar sugerencias fortalece la representación estudiantil y mejora las condiciones para toda la comunidad universitaria.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-white text-[#c75b12] px-8 py-4 rounded hover:bg-white/95 transition-colors"
            style={{ fontSize: '16px', fontWeight: 700 }}
          >
            Contactar FEUNA
            <MessageSquare size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}