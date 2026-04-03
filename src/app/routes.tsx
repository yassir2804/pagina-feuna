import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/pages/HomePage";
import { FeunaPage } from "./components/pages/FeunaPage";
import { DeunaPage } from "./components/pages/DeunaPage";
import { NoticiasPage } from "./components/pages/NoticiasPage";
import { NoticiaDetallePage } from "./components/pages/NoticiaDetallePage";
import { ApoyoOrientacionPage } from "./components/pages/ApoyoOrientacionPage";
import { ApoyoServiciosPage } from "./components/pages/ApoyoServiciosPage";
import { ApoyoRecursosUNAPage } from "./components/pages/ApoyoRecursosUNAPage";
import { ApoyoDenunciasPage } from "./components/pages/ApoyoDenunciasPage";
import { ParticipaSumatePage } from "./components/pages/ParticipaSumatePage";
import { ParticipaProponePage } from "./components/pages/ParticipaProponePage";
import { ParticipaEspaciosPage } from "./components/pages/ParticipaEspaciosPage";
import { OportunidadesPage } from "./components/pages/OportunidadesPage";
import { TransparenciaPage } from "./components/pages/TransparenciaPage";
import { ContactoPage } from "./components/pages/ContactoPage";
import { FaqPage } from "./components/pages/FaqPage";
import { HistoriaPage } from "./components/pages/HistoriaPage";
import { EstatutoPage } from "./components/pages/EstatutoPage";
import { CaeunaPage } from "./components/pages/CaeunaPage";
import { TeeUnaPage } from "./components/pages/TeeUnaPage";
import { CefeunaPage } from "./components/pages/CefeunaPage";
import { DefensoriaPage } from "./components/pages/DefensoriaPage";
import { MovimientoIndigenPage } from "./components/pages/MovimientoIndigenPage";
import { EventosPage } from "./components/pages/EventosPage";
import { TramitesPage } from "./components/pages/TramitesPage";
import { EncuestasPage } from "./components/pages/EncuestasPage";
import { GenericPage } from "./components/pages/GenericPage";
import { Navigate } from "react-router";

const genericPages: { path: string; title: string; subtitle?: string; breadcrumbs?: { label: string; href?: string }[] }[] = [
  { path: "asociaciones", title: "Asociaciones Estudiantiles", subtitle: "Directorio de asociaciones estudiantiles de la UNA.", breadcrumbs: [{ label: "Inicio", href: "/" }, { label: "Órganos" }, { label: "Asociaciones" }] },
  { path: "representacion-cu", title: "Representación en órganos UNA", subtitle: "Representantes estudiantiles en Consejo Universitario y CONSACA.", breadcrumbs: [{ label: "Inicio", href: "/" }, { label: "Órganos" }, { label: "Representación UNA" }] },
  { path: "plan-trabajo", title: "Plan de trabajo", subtitle: "Ejes y metas del gobierno estudiantil actual." },
  { path: "epeticiones", title: "E-Peticiones", subtitle: "Enviá una petición formal al gobierno estudiantil." },
  { path: "becas", title: "Becas y apoyo económico", subtitle: "Información sobre becas socioeconómicas y apoyo financiero." },
  { path: "salud", title: "Salud y bienestar", subtitle: "Servicios de salud, atención psicológica y bienestar estudiantil." },
  { path: "guias", title: "Guías y recursos", subtitle: "Material de apoyo académico y recursos prácticos." },
  { path: "vida-universitaria", title: "Vida universitaria", subtitle: "Actividades culturales, deportivas y de vida estudiantil." },
  { path: "sistemas", title: "Plataformas y sistemas", subtitle: "Acceso a sistemas de matrícula, notas y aulas virtuales." },
  { path: "reservas", title: "Reservas", subtitle: "Reserva de espacios y recursos estudiantiles." },
  { path: "denuncias", title: "Denuncias", subtitle: "Canal seguro y confidencial para denuncias." },
];

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "feuna", Component: FeunaPage },
      { path: "deuna", Component: DeunaPage },
      { path: "noticias", Component: NoticiasPage },
      { path: "noticias/:id", Component: NoticiaDetallePage },
      
      // Apoyo y recursos - redirige a orientacion por defecto
      { path: "apoyo-recursos", element: <Navigate to="/apoyo-recursos/orientacion" replace /> },
      { path: "apoyo-recursos/orientacion", Component: ApoyoOrientacionPage },
      { path: "apoyo-recursos/servicios", Component: ApoyoServiciosPage },
      { path: "apoyo-recursos/recursos-una", Component: ApoyoRecursosUNAPage },
      { path: "apoyo-recursos/denuncias", Component: ApoyoDenunciasPage },
      
      // Participa - redirige a sumate por defecto
      { path: "participa", element: <Navigate to="/participa/sumate" replace /> },
      { path: "participa/sumate", Component: ParticipaSumatePage },
      { path: "participa/propone", Component: ParticipaProponePage },
      { path: "participa/espacios", Component: ParticipaEspaciosPage },
      
      { path: "oportunidades", Component: OportunidadesPage },
      { path: "transparencia", Component: TransparenciaPage },
      { path: "contacto", Component: ContactoPage },
      { path: "faq", Component: FaqPage },
      { path: "historia", Component: HistoriaPage },
      { path: "estatuto", Component: EstatutoPage },
      { path: "caeuna", Component: CaeunaPage },
      { path: "teeuna", Component: TeeUnaPage },
      { path: "cefeuna", Component: CefeunaPage },
      { path: "defensoria", Component: DefensoriaPage },
      { path: "mei", Component: MovimientoIndigenPage },
      { path: "eventos", Component: EventosPage },
      { path: "tramites", Component: TramitesPage },
      { path: "encuestas", Component: EncuestasPage },
      ...genericPages.map((p) => ({
        path: p.path,
        element: <GenericPage title={p.title} subtitle={p.subtitle} breadcrumbs={p.breadcrumbs} />,
      })),
      {
        path: "*",
        element: <GenericPage title="Página no encontrada" subtitle="La página que buscás no existe o fue movida." content="Verificá la dirección o regresá al inicio para navegar el sitio." />,
      },
    ],
  },
]);