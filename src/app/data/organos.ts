import { Scale, Lightbulb, Shield, UserCircle, Flower } from "lucide-react";

export type Organo = {
  id: string;
  nombre: string;
  sigla: string;
  descripcion: string;
  telefono?: string;
  email: string;
  direccion: string;
  horario: string;
  color: string;
  icono: any;
  facebook?: string;
  instagram: string;
  tiktok?: string;
};

export const organos: Organo[] = [
  {
    id: "deuna",
    nombre: "Delegación de Estudiantes UNA",
    sigla: "DEUNA",
    descripcion: "Máximo órgano legislativo estudiantil. Representantes de todas las facultades y sedes.",
    email: "deuna@una.cr",
    direccion: "Edificio FEUNA, Campus Omar Dengo, Heredia",
    horario: "Lunes a viernes, 8:00 a.m. - 4:00 p.m.",
    color: "#bb1f1f",
    icono: Scale,
    instagram: "https://www.instagram.com/feuna.cr/"
  },
  {
    id: "caeuna",
    nombre: "Consejo de Asociaciones Estudiantiles",
    sigla: "CAEUNA",
    descripcion: "Espacio de coordinación y articulación de las asociaciones estudiantiles de la UNA.",
    email: "caeuna@una.cr",
    direccion: "Edificio FEUNA, Campus Omar Dengo, Heredia",
    horario: "Lunes a viernes, 8:00 a.m. - 4:00 p.m.",
    color: "#2d7a3e",
    icono: Lightbulb,
    instagram: "https://www.instagram.com/caeuna.cr/",
    facebook: "https://www.facebook.com/caeuna.mesacoordinadora/"
  },
  {
    id: "teeuna",
    nombre: "Tribunal Electoral Estudiantil",
    sigla: "TEEUNA",
    descripcion: "Órgano encargado de organizar y garantizar procesos electorales estudiantiles transparentes.",
    email: "teeuna@una.cr",
    direccion: "Edificio FEUNA, Campus Omar Dengo, Heredia",
    horario: "Lunes a viernes, 8:00 a.m. - 4:00 p.m.",
    color: "#8e44ad",
    icono: Scale,
    instagram: "https://www.instagram.com/teeuna.cr/",
    facebook: "https://www.facebook.com/TribunalElectoralEstudiantilUNA/"
  },
  {
    id: "cefeuna",
    nombre: "Contraloría Estudiantil FEUNA",
    sigla: "CEFEUNA",
    descripcion: "Órgano ejecutivo de la FEUNA encargado de implementar políticas y gestionar el día a día.",
    telefono: "(506) 2277-3236",
    email: "cefeuna@una.cr",
    direccion: "Edificio FEUNA, Campus Omar Dengo, Heredia",
    horario: "Lunes a viernes, 8:00 a.m. - 4:00 p.m.",
    color: "#c75b12",
    icono: UserCircle,
    instagram: "https://www.instagram.com/cefeuna.cr/"
  },
  {
    id: "defeuna",
    nombre: "Defensoría Estudiantil FEUNA",
    sigla: "DEFEUNA",
    descripcion: "Instancia de protección y defensa de derechos estudiantiles ante violaciones o injusticias dentro de la FEUNA.",
    telefono: "(506) 2277-3240",
    email: "defensoria.feuna@una.cr",
    direccion: "Edificio FEUNA, Campus Omar Dengo, Heredia",
    horario: "Lunes a viernes, 8:00 a.m. - 4:00 p.m.",
    color: "#3d5a80",
    icono: Shield,
    instagram: "https://www.instagram.com/defeuna.cr/"
  },
  {
    id: "mei",
    nombre: "Movimiento Estudiantil Indígena",
    sigla: "MEI",
    descripcion: "Espacio de organización, visibilización y defensa de los derechos de las y los estudiantes indígenas de la UNA.",
    email: "asomei@una.cr",
    direccion: "Edificio FEUNA, Campus Omar Dengo, Heredia",
    horario: "Lunes a viernes, 8:00 a.m. - 4:00 p.m.",
    color: "#7c3f00",
    icono: Flower,
    instagram: "https://www.instagram.com/movimiento_indigena_una/",
    facebook: "https://www.facebook.com/indigenasUNAcr/"
  }
];

export default organos;
