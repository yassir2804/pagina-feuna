import { useState } from "react";
import { HeroInternal } from "../HeroInternal";
import { ChevronDown } from "lucide-react";

const faqSections = [
  {
    categoria: "General",
    preguntas: [
      { q: "¿Qué es la FEUNA?", a: "La FEUNA es la Federación de Estudiantes de la Universidad Nacional de Costa Rica. Es el gobierno estudiantil autónomo que representa, defiende y promueve los intereses del estudiantado." },
      { q: "¿Cómo puedo solicitar la exoneración de matrícula?", a: "Podés solicitar la exoneración de matrícula a través de la sección de Trámites en este sitio web. También podés acercarte presencialmente a las oficinas de la FEUNA en el Campus Omar Dengo." },
      { q: "¿Cómo puedo participar en la FEUNA?", a: "Hay muchas formas: asistir a asambleas, enviar propuestas, participar en comisiones, voluntariados, o postularte a cargos de representación estudiantil." },
      { q: "¿La FEUNA es parte de la administración de la UNA?", a: "No. La FEUNA es un ente autónomo e independiente. No es una dependencia administrativa de la UNA, sino el gobierno estudiantil elegido democráticamente." },
      { q: "¿Qué servicios ofrece la FEUNA directamente?", a: "La FEUNA gestiona directamente: exoneración de matrícula, defensoría estudiantil, orientación y servicios de apoyo. Además facilita acceso a servicios UNA como becas, salud y vida estudiantil." },
      { q: "¿Dónde puedo ver el presupuesto de la FEUNA?", a: "En la sección de Transparencia encontrarás presupuestos, informes de ejecución, actas y acuerdos disponibles para descarga." },
    ]
  },
  {
    categoria: "DEUNA (Directorio Ejecutivo)",
    preguntas: [
      { q: "¿Qué es el DEUNA?", a: "El DEUNA (Directorio Ejecutivo de la UNA) es el órgano ejecutivo de la FEUNA. Es el equipo que ejecuta y administra las decisiones, políticas y servicios del gobierno estudiantil." },
      { q: "¿Cómo me comunico con mi representante del DEUNA?", a: "En la sección DEUNA podés encontrar el directorio completo de representantes por comisión. También podés escribir a deuna@una.cr." },
      { q: "¿Quién preside el DEUNA?", a: "El DEUNA es presidido por la Presidencia de la FEUNA, que ejerce la representación legal y política del gobierno estudiantil." },
      { q: "¿Cómo envío una E-Petición al DEUNA?", a: "Ingresá a la sección E-Peticiones, completá el formulario con tu solicitud y enviálo. Cada petición es atendida y respondida oficialmente por el DEUNA." },
    ]
  },
  {
    categoria: "CAEUNA (Consejo de Asociaciones)",
    preguntas: [
      { q: "¿Qué es el CAEUNA?", a: "El CAEUNA (Consejo de Asociaciones Estudiantiles de la UNA) es el órgano legislativo del movimiento estudiantil. Reúne a las asociaciones para coordinar representación, aprobar reglamentos, asignar presupuesto y ejercer control político." },
      { q: "¿Qué es la Mesa Coordinadora?", a: "La Mesa Coordinadora es el equipo operativo-político que dirige, documenta, articula y da seguimiento al trabajo del CAEUNA. Está compuesta por 7 coordinaciones funcionales." },
      { q: "¿Cuál es la diferencia entre CAEUNA y Mesa Coordinadora?", a: "El CAEUNA es el órgano plenario donde deliberan las asociaciones. La Mesa Coordinadora es el equipo que ejecuta, coordina y da seguimiento a las decisiones del CAEUNA." },
      { q: "¿Mi asociación participa en el CAEUNA?", a: "Sí. Todas las asociaciones estudiantiles adscritas a la FEUNA tienen representación en el CAEUNA y participan del cogobierno estudiantil." },
      { q: "¿Qué coordinación ve el presupuesto?", a: "La Coordinación de Finanzas custodia fondos, elabora informes y coordina apoyos económicos. Las decisiones presupuestarias se toman en el plenario del CAEUNA." },
      { q: "¿Qué coordinación atiende asuntos regionales?", a: "La Coordinación de Asuntos Regionales atiende la agenda regional, defiende derechos en sedes y coordina fondos para las regiones." },
      { q: "¿Dónde consulto reglamentos o acuerdos del CAEUNA?", a: "En la sección de Transparencia del sitio web encontrarás todos los documentos normativos, reglamentos y acuerdos del CAEUNA disponibles para descarga." },
    ]
  },
  {
    categoria: "TEEUNA (Tribunal Electoral)",
    preguntas: [
      { q: "¿Qué es el TEEUNA?", a: "El TEEUNA (Tribunal Electoral Estudiantil de la UNA) es el órgano electoral que organiza, supervisa y certifica los procesos electorales estudiantiles en la Universidad Nacional." },
      { q: "¿Cuándo se realizan las elecciones estudiantiles?", a: "Las elecciones estudiantiles se realizan según el calendario electoral aprobado por el TEEUNA, generalmente una vez al año para renovar los cargos de representación." },
      { q: "¿Cómo puedo postularme a un cargo de representación?", a: "Debés cumplir con los requisitos establecidos en el reglamento electoral y presentar tu inscripción ante el TEEUNA dentro de los plazos establecidos en la convocatoria." },
      { q: "¿Dónde voto en las elecciones estudiantiles?", a: "El TEEUNA publica las mesas de votación habilitadas en cada campus y sede regional antes del día de elecciones. Podés consultar la información en el sitio web." },
      { q: "¿El TEEUNA es independiente?", a: "Sí. El TEEUNA es independiente en el desempeño de sus funciones, aunque es juramentado por el CAEUNA y su reglamento es aprobado por ese mismo órgano." },
      { q: "¿Qué hace una Junta Electoral de Asociación?", a: "Las Juntas Electorales son la base organizativa del sistema electoral. Fiscalizan y acompañan elecciones locales en sus asociaciones y son el vínculo entre asociaciones y el TEEUNA." },
      { q: "¿Cómo puedo recibir capacitación electoral?", a: "El TEEUNA ofrece formación, manuales, tutoriales y materiales para quienes asumen puestos de representación. Podés consultarlo directamente con el Tribunal." },
    ]
  },
  {
    categoria: "Contraloría Estudiantil",
    preguntas: [
      { q: "¿Qué es la Contraloría Estudiantil?", a: "La Contraloría Estudiantil FEUNA es la instancia fiscalizadora de las finanzas y espacios estudiantiles de la FEUNA. Cuenta con plena autonomía en estas materias." },
      { q: "¿Qué fiscaliza la Contraloría Estudiantil?", a: "Fiscaliza informes financieros de instancias federadas, informes de labores de órganos FEUNA, uso de fondos, viáticos, justificaciones de viajes y vela por que los espacios estudiantiles sean ocupados por estudiantes." },
      { q: "¿La Contraloría es independiente?", a: "Sí. La Contraloría Estudiantil es autónoma en sus materias de fiscalización financiera y de espacios estudiantiles, aunque sus integrantes son electos en el CAEUNA." },
      { q: "¿Cómo denuncio un mal uso de fondos estudiantiles?", a: "Podés contactar directamente a la Contraloría Estudiantil en contraloria@feuna.cr. Ellos tienen la facultad de revisar, investigar y elevar denuncias ante instancias universitarias." },
      { q: "¿Qué pasa si un espacio estudiantil está siendo ocupado indebidamente?", a: "La Contraloría Estudiantil vela por que los espacios estudiantiles sean ocupados por estudiantes. Podés reportar la situación y ellos pueden elevar denuncias a la Contraloría Universitaria." },
      { q: "¿Cada cuánto revisa informes la Contraloría?", a: "La Contraloría revisa semestralmente los informes de labores del DEUNA, coordinación del CAEUNA, TEEUNA y Defensoría Estudiantil, además de revisar informes financieros cuando corresponda." },
    ]
  },
  {
    categoria: "Asociaciones Estudiantiles",
    preguntas: [
      { q: "¿Qué es una asociación estudiantil?", a: "Las asociaciones estudiantiles son organizaciones autónomas de estudiantes adscritas a la FEUNA que representan a la población estudiantil de una carrera, facultad o sede." },
      { q: "¿Cómo creo una asociación estudiantil?", a: "Debés reunir los requisitos establecidos en el Reglamento de Asociaciones Estudiantiles y presentar la solicitud ante el CAEUNA, que evalúa y aprueba nuevas asociaciones." },
      { q: "¿Mi carrera tiene asociación estudiantil?", a: "Podés consultar el directorio de asociaciones estudiantiles en la sección correspondiente del sitio web para verificar si tu carrera o facultad cuenta con una asociación activa." },
      { q: "¿Cómo participo en mi asociación estudiantil?", a: "Podés asistir a las asambleas de tu asociación, participar en actividades, enviar propuestas o postularte para formar parte de la junta directiva." },
    ]
  }
];

export function FaqPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("general-0");

  const toggleFaq = (sectionIndex: number, faqIndex: number) => {
    const key = `${sectionIndex}-${faqIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div>
      <HeroInternal
        title="Preguntas frecuentes"
        subtitle="Respuestas a las dudas más comunes sobre la FEUNA, órganos, trámites, servicios y participación."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Información general" }, { label: "FAQ" }]}
      />
      <section className="py-12 bg-white">
        <div className="max-w-[900px] mx-auto px-5">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12 last:mb-0">
              {/* Título de sección */}
              <div className="mb-6">
                <h2 className="mb-2" style={{ fontSize: '24px', fontWeight: 700, color: '#1a1a1a' }}>
                  {section.categoria}
                </h2>
                <div className="w-16 h-1 bg-[#bb1f1f] rounded"></div>
              </div>

              {/* Preguntas de la sección */}
              <div className="space-y-3">
                {section.preguntas.map((faq, faqIndex) => {
                  const key = `${sectionIndex}-${faqIndex}`;
                  const isOpen = openIndex === key;
                  
                  return (
                    <div key={faqIndex} className="bg-white rounded-lg border border-[#dddddd] overflow-hidden">
                      <button
                        onClick={() => toggleFaq(sectionIndex, faqIndex)}
                        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#f5f5f5] transition-colors"
                      >
                        <span style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a' }}>{faq.q}</span>
                        <ChevronDown size={20} className={`text-[#999] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4 border-t border-[#f5f5f5]">
                          <p className="text-[#666666] pt-3" style={{ fontSize: '14px', lineHeight: 1.7 }}>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#f5f5f5]">
        <div className="max-w-[700px] mx-auto px-5 text-center">
          <h3 className="mb-3" style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a' }}>
            ¿No encontraste tu respuesta?
          </h3>
          <p className="mb-6" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
            Escribinos a <a href="mailto:deuna@una.cr" className="text-[#bb1f1f] hover:underline font-semibold">deuna@una.cr</a> o visitá nuestras oficinas en el Campus Omar Dengo.
          </p>
          <a 
            href="/contacto" 
            className="inline-block bg-[#bb1f1f] text-white px-6 py-3 rounded hover:bg-[#8b1515] transition-colors"
            style={{ fontSize: '15px', fontWeight: 600 }}
          >
            Ir a Contacto
          </a>
        </div>
      </section>
    </div>
  );
}