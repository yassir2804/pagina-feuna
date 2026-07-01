import { useState, useMemo } from "react";
import { Link } from "react-router";
import { HeroInternal } from "../HeroInternal";
import {
  Users, ChevronRight, Building2, Scale, ShieldCheck, HandCoins,
  FileText, Landmark, Vote, Megaphone, Wallet, Gavel, MapPin, Search, AlertTriangle,
} from "lucide-react";

type Integrante = { puesto: string; nombre: string; correo?: string };
type Asociacion = { nombre: string; sigla: string; sede: string; regional: boolean; acreditada?: boolean; integrantes?: Integrante[] };

const asociacionesSedeCentral: Asociacion[] = [
  {
    nombre: "Asociación de Estudiantes de Educación Rural", sigla: "ASEDER", sede: "CIDE", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Naomy Elizabeth Molina Chinchilla", correo: "naomy.molina.chinchilla@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Kendall Josué Villalobos Ortiz", correo: "kendall.villalobos.ortiz@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Johana Ríos Céspedes", correo: "johana.rios.cespedes@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Viviana Isabel Blanco Castillo", correo: "viviana.blanco.castillo@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "Abigail Solis Madrigal", correo: "abigail.solis.madrigal@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "Larry Leonel Alemán Cruz", correo: "larry.aleman.cruz@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Jahaira María Rojas Reyes", correo: "jahaira.rojas.reyes@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Marisol Alvarado Salas", correo: "marisol.alvarado.salas@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Berny de Jesús Martínez Bravo", correo: "berny.martinez.bravo@est.una.ac.cr" },
      { puesto: "Suplencia dos", nombre: "Andreina Lozano Romero", correo: "andreina.lozano.romero@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Oscar Daniel Jimenez Vanegas", correo: "oscar.jimenez.vanegas@est.una.ac.cr" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Educación para el Trabajo", sigla: "ASEDETASO", sede: "CIDE", regional: false, acreditada: false,
    integrantes: [{ puesto: "Presidencia", nombre: "Angely Fabiola Jiménez Vargas", correo: "angely.jimenez.vargas@est.una.ac.cr" }],
  },
  { nombre: "Asociación de Estudiantes de Educación Básica", sigla: "ASEDEBA", sede: "CIDE", regional: false, acreditada: true },
  {
    nombre: "Asociación de Estudiantes de Artes Escénicas", sigla: "ASOESCENICAS", sede: "CIDEA", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Aldana Zumbado Rodríguez", correo: "aldana.zumbado.rodriguez@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Daniel Díaz Castro" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Jimena Torres Perez", correo: "jimena.torres.perez@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "Edén Prendas Ramírez", correo: "eden.prendas.ramirez@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "Mariel Miranda Jiménez", correo: "mariel.miranda.jimenez@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Derian Gabriel Carpio Zamora", correo: "derien.carpio.zamora@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Fiorella Castillo Calvo", correo: "fiorella.castillo.calvo@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Cristian Pérez Luna", correo: "cristian.perez.luna@est.una.ac.cr" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Artes y Comunicación Visual", sigla: "ASOACV", sede: "CIDEA", regional: false, acreditada: false,
    integrantes: [{ puesto: "Presidencia", nombre: "Valentina Rojas Luna", correo: "valentina.rojas.luna@est.una.ac.cr" }],
  },
  {
    nombre: "Asociación de Estudiantes de Música", sigla: "ASOEMU", sede: "CIDEA", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Angelica Delgado Rodríguez", correo: "angelica.delgado.rodriguez@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Leonardo Cruz González", correo: "leonardo.cruz.gonzalez@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Susan Arias Guerrero", correo: "susan.arias.guerrero@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "Isaac Mora Cabezas", correo: "isaac.mora.cabezas@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "Isaac Flores Chaverri", correo: "isaac.flores.chaverri@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Abigail Rojas Aguirre", correo: "abigail.rojas.aguirre@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Dayana Soto Fuentes", correo: "dayana.soto.fuentes@est.una.ac.cr" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Danza", sigla: "ASODANZA", sede: "CIDEA", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Paula Rojas Brenes", correo: "paula.rojas.brenes@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Irina Quirós Espinoza", correo: "susan.quiros.espinoza@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Jivan Jimenez Prado", correo: "jivan.jimenez.prado@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Natalia Leticia Bonilla Araya", correo: "natalia.bonilla.araya@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "Leilany Alfaro Rojas", correo: "leilany.alfaro.rojas@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "Karen María Guido Mayorga", correo: "karen.guido.mayorga@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Ariana Aguilar Guang", correo: "ariana.aguilar.guang@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Jimena Muñoz Mesén", correo: "jimena.munoz.mesen@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Dylan Estrada Marchena", correo: "dylan.estrada.marchena@est.una.ac.cr" },
      { puesto: "Suplencia dos", nombre: "María Reneé Flores Rivera", correo: "maria.flores.rivera@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Ximena Rucavado Stadthagen", correo: "ximena.rucavado.stadthagen@est.una.ac.cr" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Veterinaria", sigla: "ASOVETE", sede: "Ciencias de la Salud", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Danny Fonseca Alvarado", correo: "danny.fonseca.alvarado@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Isaac Villalobos Alpizar", correo: "isaac.villalobos.alpizar@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Paola Loría Marín", correo: "paola.loria.marin@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Carlos Andrés Carballo Chavarría", correo: "carlos.carballo.chavarria@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "Valery Espinoza Castro", correo: "valery.espinoza.castro@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "Marian Meléndez López", correo: "marian.melendez.lopez@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Daniela Montero Salas", correo: "daniela.montero.salas@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Margarita Solis Quintanilla", correo: "margarita.solis.quintanilla@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Adrián Emilio Rodríguez Valverde", correo: "adrian.rodriguez.valverde@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Fabián Esteban Cortés Gutiérrez" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Ciencias del Movimiento Humano", sigla: "ASOCIEMHCAVI", sede: "Ciencias de la Salud", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Darío López Hernández", correo: "dario.lopez.hernandez@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Byanka Reyes Alfaro", correo: "byanka.reyes.alfaro@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Steve Fung Lai", correo: "steve.fung.lai@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Susana Arce Oviedo", correo: "susana.arce.oviedo@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "John Torres López", correo: "john.torres.lopez@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "Alex Soto Cascante", correo: "alex.soto.cascante@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Vivian Mariana Peraza Garita", correo: "vivian.peraza.garita@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Gabriel Vermeer Cubero", correo: "gabriel.vermeer.cubero@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Oliver Baltodano Martínez", correo: "oliver.baltodano.martinez@est.una.ac.cr" },
      { puesto: "Suplencia dos", nombre: "Vanessa Gómez Ampié", correo: "vanessa.gomez.ampie@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Esteban José Jiménez Mora", correo: "esteban.jimenez.mora@est.una.ac.cr" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Informática", sigla: "ASOINFO", sede: "Ciencias Naturales y Exactas", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Myriam Jara Watson", correo: "myriam.jara.watson@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Samuel Novoa Badilla", correo: "samuel.novoa.badilla@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Carlos Andrés Badilla Arias", correo: "carlos.badilla.arias@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Kendall Rosales Badilla", correo: "kendall.rosales.badilla@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "Alexander Fallas Cascante", correo: "alexander.fallas.cascante@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "Jorge Luis Navarro Vega", correo: "jorge.navarro.vega@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Helen Andrea Gutiérrez Rojas", correo: "helen.gutierrez.rojas@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Amanda Nayeli Solano Mendoza", correo: "amanda.solano.mendoza@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Abigail Segura Arce", correo: "abigail.segura.arce@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Mathias Arce Rojas", correo: "mathias.arce.rojas@est.una.ac.cr" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Topografía, Catastro y Geodesia", sigla: "ASOTOPO", sede: "Ciencias Naturales y Exactas", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Lawrence Jaffeth Montiel Obando", correo: "lawrence.montiel.obando@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Sariel Gámez Paniagua", correo: "sariel.gamez.paniagua@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Michelle Vargas Palacios", correo: "michelle.vargas.palacios@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "María Daniela Porras Quirós", correo: "maria.porras.quiros@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "Steven Lopez Vargas", correo: "steven.lopez.vargas@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Xochil Laguna Ponce", correo: "xoxil.laguna.ponce@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Sofia Aguilar Gamboa", correo: "noilyn.aguilar.gamboa@est.una.ac.cr" },
      { puesto: "Suplencia dos", nombre: "Meibool Quesada Fernandez", correo: "meibool.quesada.fernandez@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Emmanuel Rivera Chavarria", correo: "emmanuel.rivera.chavarria@est.una.ac.cr" },
    ],
  },
  { nombre: "Asociación de Estudiantes de Ciencias Biológicas", sigla: "ASOBIO", sede: "Ciencias Naturales y Exactas", regional: false, acreditada: true },
  {
    nombre: "Asociación de Estudiantes de Matemáticas", sigla: "ASOMATE", sede: "Ciencias Naturales y Exactas", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Carlos Eduardo Brenes Carvajal", correo: "carlos.brenes.carvajal@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Michael Sting Pérez Cantarero", correo: "michael.perez.cantarero@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Michelle Alexandra Jiménez Ureña", correo: "michelle.jimenez.urena@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Brenda Melissa Arguedas Murillo", correo: "brenda.arguedas.murillo@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "Sharon Michelle Rodríguez Montero", correo: "sharon.rodriguez.montero@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "Freyser Rojas Castro", correo: "freyser.rojas.castro@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Avril Dennise Lizano Molina", correo: "avril.lizano.molina@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "David Bolaños Hernández", correo: "david.bolanos.hernandez@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Ally Juliana Solano Picado", correo: "ally.solano.picado@est.una.ac.cr" },
      { puesto: "Suplencia dos", nombre: "Benilda Murillo Gamboa", correo: "benilda.murillo.gamboa@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Emanuel Francisco Garro Saborío", correo: "emanuel.garro.saborio@est.una.ac.cr" },
    ],
  },
  { nombre: "Asociación de Estudiantes de Química", sigla: "ASOQUIM", sede: "Ciencias Naturales y Exactas", regional: false, acreditada: true },
  {
    nombre: "Asociación de Estudiantes de Ciencias Ambientales", sigla: "AEDECA", sede: "Tierra y Mar", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Tamara Jiménez Naranjo", correo: "tamara.jimenez.naranjo@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Jefferson Ortiz Sevilla", correo: "jefferson.ortiz.sevilla@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Ian Ramírez Vargas", correo: "ian.ramirez.vargas@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Monserrat Durán Briceño", correo: "monserrat.duran.briceno@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "Alonso Obregón Araya", correo: "ernesto.obregon.araya@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "Carolina Guevara Alpízar", correo: "carolina.guevara.alpizar@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Zianny Alvarado Chacón", correo: "zianny.alvarado.chacon@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Eduardo Hernandez Martinez", correo: "eduardo.hernandez.martinez@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Marco Álvarez Jiménez", correo: "marco.alvarez.jimenez@est.una.ac.cr" },
      { puesto: "Suplencia dos", nombre: "Andres González Montoya", correo: "andres.gonzalez.montoya@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Emma Leon Paez", correo: "emma.leon.paez@est.una.ac.cr" },
    ],
  },
  { nombre: "Asociación de Estudiantes de Geografía y Cartografía", sigla: "AEGECA", sede: "Tierra y Mar", regional: false, acreditada: true },
  {
    nombre: "Asociación de Estudiantes de Ciencias Agrarias", sigla: "ASOECAS", sede: "Tierra y Mar", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Soley Josette Solano Cruz", correo: "josette.solano.cruz@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Roy Anthony Quiros Viquez", correo: "roy.quiros.viquez@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Cristopher Daniel Rodríguez Álvarez", correo: "cristopher.rodriguez.alvarez@es.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "Nayzeth Morales Madrigal", correo: "nayzeth.morales.madrigal@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Sintia Carolina Valverde Venegas", correo: "sintia.valverde.venegas@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Natalia Chavarría García", correo: "natalia.chavarria.garcia@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Merlin Alina Hidalgo Diaz", correo: "merlin.hidalgo.diaz@est.una.ac.cr" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Economía", sigla: "AEECO", sede: "Ciencias Sociales", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Darwing Israel Ortiz Valdez", correo: "darwing.ortiz.valdez@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Joseph Fabián Flores Sáenz", correo: "joseph.flores.saenz@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Felipe Vargas Sáenz", correo: "felipe.vargas.saenz@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Melissa Güendel Soto", correo: "melissa.guendel.soto@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "Nahigell Josue Segura Rosales", correo: "nahigell.segura.rosales@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "Susan Stacy Sirias Muñoz", correo: "susan.sirias.munoz@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Joyner Manuel Carranza Ruiz", correo: "joyner.carranza.ruiz@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Oscar Morales Estrada", correo: "oscar.morales.estrada@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Luis Daniel Rodríguez Morales", correo: "luis.rodriguez.morales@est.una.ac.cr" },
      { puesto: "Suplencia dos", nombre: "Jose Paulo Aguilar Ruiz", correo: "jose.aguilar.ruiz@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Kenner Montenegro Montenegro", correo: "kenner.montenegro.montenegro@est.una.ac.cr" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Relaciones Internacionales", sigla: "ASORRII", sede: "Ciencias Sociales", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Michelle María Meneses Guillén", correo: "michelle.meneses.guillen@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Santiago Mora Alarcón", correo: "santiago.mora.alarcon@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Brandon Pérez Calderón", correo: "brandon.perez.calderon@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Hana María Cubillo Komarovova", correo: "hana.cubillo.komarovova@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "José Andrés Solís Hernández", correo: "jose.solis.hernandez@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "André Sibaja Monterrey", correo: "andre.sibaja.monterrey@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "María Fernanda Jiménez Fernández", correo: "maria.jimenez.fernandez@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Christopher Alberto Chacón Mora", correo: "christopher.chacon.mora@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Ana Laura Otárola Ruiz", correo: "ana.otarola.ruiz@est.una.ac.cr" },
      { puesto: "Suplencia dos", nombre: "Diana Flores Ávila", correo: "diana.flores.avila@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Aaron Rosales Villalobos", correo: "aaron.rosales.villalobos@est.una.ac.cr" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Historia", sigla: "ASOEESSH", sede: "Ciencias Sociales", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Diego Andres Zuñiga Campos", correo: "diego.zuniga.campos@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Manuel de Jesus Montenegro Solano", correo: "manuel.montenegro.solano@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "María Jose Ruiz Morales", correo: "maria.ruiz.morales@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Rachel Valeria Vega Arburola", correo: "rachel.vega.arburola@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "Arlinee Brenes Calvo", correo: "arlinee.brenes.calvo@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "Brittany Jimena Sandí Montero", correo: "brithanny.sandi.montero@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Leonardo Maroto Angulo", correo: "leonardo.maroto.angulo@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Mariana de los Ángeles Muñoz Camacho", correo: "mariana.munoz.camacho@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Harold Francisco Cruz Céspedes", correo: "harold.cruz.cespedes@est.una.ac.cr" },
      { puesto: "Suplencia dos", nombre: "Samantha Teresita Monge Castro", correo: "samantha.monge.castro@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Jeffry Aurelio Esquivel Vega", correo: "jeffry.esquivel.vega@est.una.ac.cr" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Planificación y Promoción Social", sigla: "ASOPPS", sede: "Ciencias Sociales", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Johan Josué Lara Corrales", correo: "johan.lara.corrales@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Naomi Mariana Quirós Castillo", correo: "naomi.quiros.castillo@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Yaslín Yicsela Araya Pérez", correo: "yaslin.araya.perez@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Avril Dalila Maroto Fernández", correo: "avril.maroto.fernandez@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "Andrey Ottón Fallas Godínez", correo: "andrey.fallas.godinez@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "Sharon Díaz Vega", correo: "sharon.diaz.vega@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Melissa Monge Artavia", correo: "melissa.monge.artavia@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Evelyn Hernández Benavides", correo: "evelyn.hernandez.benavides@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Dioney Axel Rocha Molina", correo: "dioney.rocha.molina@est.una.ac.cr" },
      { puesto: "Suplencia dos", nombre: "Jackdaniel Guerrero Figueroa", correo: "jackdaniel.guerrero.figueroa@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Saúl Andrés Jiménez Ruíz", correo: "saul.jimenez.ruiz@est.una.ac.cr" },
    ],
  },
  { nombre: "Asociación de Estudiantes de Comercio y Negocios Internacionales", sigla: "ASONIC", sede: "Ciencias Sociales", regional: false, acreditada: true },
  {
    nombre: "Asociación de Estudiantes de Sociología", sigla: "AESOCIO", sede: "Ciencias Sociales", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Randall Quirós Gerardo Rodríguez", correo: "randall.rodriguez.quiro@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Javiera Quiroz Leiva", correo: "javiera.quiroz.leiva@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Noah Alessandro Madrigal Reyes", correo: "noah.madrigal.reyes@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Michelle Miranda Fonseca López", correo: "michelle.fonseca.lopez@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "Lizbeth Lisseth Berrocal Martínez", correo: "lizbeth.berrocal.martinez@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "Javier Alonso Monge Castro", correo: "javier.monge.castro@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Ling Sumei Murillo Aguilar", correo: "ling.murillo.aguilar@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Pablo Rodríguez Pérez", correo: "pablo.rodriguez.perez@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Valeria Aguilar Sánchez", correo: "valeria.aguilar.sanchez@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Francisco Javier Montero Flores", correo: "francisco.montero.flores@est.una.ac.cr" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Administración", sigla: "ASOEDA", sede: "Ciencias Sociales", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Tayra María Vargas Núñez", correo: "tayra.vargas.nunez@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Genesis Yadely Robles Vargas", correo: "genesis.robles.vargas@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Ronald Andrés Arias Ugalde", correo: "ronald.arias.ugalde@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "María Paula García Delgado", correo: "mario.garcia.delgado@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "Miguel Aarón Sánchez Montes", correo: "miguel.sanchez.montes@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "Dennis Diaz Aguero", correo: "dennis.diaz.aguero@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Sarita Daniela León Bonilla", correo: "sarita.leon.bonilla@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Ryan Joel Quesada Cruz", correo: "ryan.quesada.cruz@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Soley Michelle Rosales Morales", correo: "soley.rosales.morales@est.una.ac.cr" },
      { puesto: "Suplencia dos", nombre: "Dylan Hernández Quesada", correo: "dylan.hernandez.quesada@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Sofía Sachel González Murillo", correo: "sofia.gonzalez.murillo@est.una.ac.cr" },
    ],
  },
  { nombre: "Asociación de Estudiantes de Psicología", sigla: "ASEP", sede: "Ciencias Sociales", regional: false, acreditada: false },
  {
    nombre: "Asociación de Estudiantes de Secretariado", sigla: "ASOSECRE", sede: "Ciencias Sociales", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Angie Guerrero Rizo", correo: "angie.guerrero.rizo@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Jefferson Gómez Vargas", correo: "jeferson.gomez.vargas@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Marisol Gonzalez Duran", correo: "marisol.gonzalez.duran@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Stefany Gómez Arauz", correo: "stefany.gomez.arauz@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "Steven Rojas Gonzalez", correo: "steven.rojas.gonzalez@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "Johnny Antonio Soza Sánchez", correo: "johnny.soza.sanchez@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Valeria Berrocal", correo: "valeria.berrocal.martinez@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Denzel Ponce Sanabria", correo: "denzel.ponce.sanabria@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Laura Monge Cambronero", correo: "maria.monge.cambronero@est.una.ac.cr" },
      { puesto: "Suplencia dos", nombre: "Briggitte Vega Calderón", correo: "briggitte.vega.calderon@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Hazel Chávez Pérez", correo: "hazel.chavez.perez@est.una.ac.cr" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Bibliotecología", sigla: "ASOEBDI", sede: "Filosofía y Letras", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Amanda Muñoz Cerdas", correo: "amanda.munoz.cerdas@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Elizabeth Alvarado Orocú", correo: "elizabeth.alvarado.orocu@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Tiffany Vargas Salazar", correo: "tiffany.vargas.salazar@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Luis Hernández Pérez", correo: "luis.hernandez.perez@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "Gerardo Isaias Mercado Montenegro", correo: "gerardo.mercado.montenegro@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Lindsey Nicolle Umaña Peck", correo: "lindsey.umana.peck@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Sebastian Sequeira Bustamante", correo: "sebastian.sequeira.bustamante@est.una.ac.cr" },
      { puesto: "Suplencia dos", nombre: "Esteicy Solorzano Nuñez", correo: "esteicy.solorzano.nunez@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Andrea Camacho Calderón", correo: "andrea.camacho.calderon@est.una.ac.cr" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Español", sigla: "ASOESPA", sede: "Filosofía y Letras", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Irina María Quesada Brenes", correo: "irina.quesada.brenes@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Ericka Naomi Alvarado Arias", correo: "ericka.alvarado.arias@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Bianca Francini Tapia Rojas", correo: "bianca.tapia.rojas@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "María Paola Vargas Reyes", correo: "maria.vargas.reyes@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "María Fernanda Sancho Montero", correo: "maria.sancho.montero@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "Allan David Arguedas Cordero", correo: "allan.arguedas.cordero@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Catalina Zuñiga Rodríguez", correo: "catalina.zuniga.rodriguez@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Krystel Naomi Torres Naranjo", correo: "krystel.torres.naranjo@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Luis Felipe Alvarado Segura", correo: "luis.alvarado@est.una.ac.cr" },
      { puesto: "Suplencia dos", nombre: "Sebastián Pineda Cascante", correo: "sebastian.pineda.cascante@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Jimena Sánchez Salas", correo: "jimena.sanchez.salas@est.una.ac.cr" },
    ],
  },
  { nombre: "Asociación de Estudiantes del Instituto en Estudios de la Mujer", sigla: "ASOIEM", sede: "Filosofía y Letras", regional: false, acreditada: false },
  {
    nombre: "Asociación de Estudiantes de Teología", sigla: "ASOTEO", sede: "Filosofía y Letras", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Ana Sosa Rodríguez", correo: "ana.sosa.rodriguez@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Kenneth Marín Martínez", correo: "kenneth.marin.martinez@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Olger Barquero Quesada", correo: "olger.barquero.quesada@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Adriana Chavarría Araya", correo: "adriana.chavarria.araya@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "Ester Gámez Guzmán", correo: "ester.gamez.guzman@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "Astrid Madriz Sánchez", correo: "astrid.madriz.sanchez@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Rocío Chacón Vega", correo: "rocio.chacon.vega@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Isabel Guillen Espinoza", correo: "isabel.guillen.espinoza@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Joselyn Fallas Rivera", correo: "joselyn.fallas.rivera@est.una.ac.cr" },
      { puesto: "Suplencia dos", nombre: "Mildred Torrez Arguedas", correo: "mildred.torres.arguedas@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Rosibel Brenes García", correo: "rosibel.brenes.garcia@est.una.ac.cr" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Filosofía", sigla: "ASOFILO", sede: "Filosofía y Letras", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Guido Castro Hernández", correo: "guido.castro.hernandez@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Melissa Flores Brenes", correo: "keren.flores.briones@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Kershall Cubillo Reyes", correo: "kershall.cubillo.reyes@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Gerson Cruz Montenegro", correo: "gerson.cruz.montenegro@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "Siswo Martínez Torres", correo: "siswo.martinez.torres@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "Johann Alvarado Castro", correo: "johann.alvarado.castro@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Tracy Arroyo Estrella", correo: "tracy.arroyo.estrella@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Hediel Rodríguez Reyes", correo: "hediel.rodriguez.reyes@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "María Garro González", correo: "maria.garro.gonzalez@est.una.ac.cr" },
      { puesto: "Suplencia dos", nombre: "Epsy Dávila Aragón", correo: "epsy.davila.aragon@est.una.ac.cr" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Lenguas y Literatura", sigla: "ASELYL", sede: "Filosofía y Letras", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Ignacio Badilla López", correo: "ignacio.badilla.lopez@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Ariana Soto León", correo: "ariana.soto.lon@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Andres Felipe Hernandez Escobar", correo: "andres.hernandez.escobar@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Sara Gabriela Porras Solano", correo: "sara.porras.solano@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "Sherlyn Arelys Vasquez Morera", correo: "sherlyn.vasquez.moreira@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "Fernando Danil Calderón Clark", correo: "fernando.calderon.clark@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Selef José Solera Chaves", correo: "selef.solera.chaves@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Ashy Shirley Rojas Granados", correo: "ashy.rojas.granados@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Valery Gutiérrez Fallas", correo: "valery.gutierrez.fallas@est.una.ac.cr" },
      { puesto: "Suplencia dos", nombre: "Shannery Morris Morace", correo: "shannery.morris.morace@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Kervin Enrique Montoya García", correo: "kervin.montoya.garcia@est.una.ac.cr" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Inteligencia y Estrategia Global", sigla: "ASOIEG", sede: "Ciencias Sociales", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Paula Rebeca Umaña Bermúdez", correo: "paula.umana.bermudez@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "María Fernanda Pérez Barquero", correo: "maria.perez.barquero@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Ana Sofía Valdivieso Peña", correo: "ana.valdivieso.pena@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Fiorella Morales Álvarez", correo: "fiorella.morales.alvarez@est.una.ac.cr" },
      { puesto: "Representación en el consejo de unidad académica", nombre: "Amanda Sofía González Bolívar", correo: "amanda.gonzalez.bolivar@est.una.ac.cr" },
      { puesto: "Representación en el consejo de facultad", nombre: "Justin Adrián Aviles Quesada", correo: "justin.aviles.quesada@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "María Belén Carballo González", correo: "maria.carballo.gonzalez@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Bayron Andrés Cordero Soto", correo: "bayron.cordero.soto@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Karina Gamboa Meza", correo: "karina.gamboa.meza@est.una.ac.cr" },
      { puesto: "Suplencia dos", nombre: "Lucka Alejandro Picado Torres", correo: "lucka.picado.torres@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Denzel Fabricio González Conejo", correo: "denzel.gonzalez.conejo@est.una.ac.cr" },
    ],
  },
  { nombre: "Asociación de Estudiantes de Género", sigla: "ASOGEDE", sede: "Campus Omar Dengo", regional: false },
  { nombre: "Asociación de Estudiantes de Administración de Oficina y Educación Comercial", sigla: "ASOAOEC", sede: "Campus Omar Dengo", regional: false },
  {
    nombre: "Asociación de Estudiantes de Residencias", sigla: "ASORESIS", sede: "Campus Omar Dengo", regional: false, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Brandon Alberto Calderón Rojas", correo: "brandon.calderon.rojas@est.ac.una.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Diego José Ballestero Centeno", correo: "diego.ballestero.centeno@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Jose Leandro Azofeifa Delgado", correo: "jose.azofeifa.delgado@est.una.ac.cr" },
    ],
  },
];

const asociacionesRegionales: Asociacion[] = [
  {
    nombre: "Asociación de Estudiantes de Liberia", sigla: "ASEUNAL", sede: "Regional, Liberia", regional: true, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Lillian Cardona Baltodano", correo: "lillian.cardona.baltodano@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Nahomy Gonzalez Jimenez", correo: "nahomy.gonzalez.jimenez@est.una.ac.cr" },
      { puesto: "Representación del consejo de sede regional, interuniversitaria o sección", nombre: "Jonathan Orozco Calvo", correo: "jonathan.orozco.calvo@est.una.ac.cr" },
      { puesto: "Suplencia de la representación de sede", nombre: "Roberth Morales Ruiz", correo: "robert.morales.ruiz@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Edward Sibaja Jiménez", correo: "edward.sibaja.jimenez@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Oscar Oporto Robles", correo: "oscar.oporto.robles@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Mery Sinai Varela Sierra", correo: "mery.varela.sierra@est.una.ac.cr" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Pérez Zeledón", sigla: "ASEUNAPZ", sede: "Regional, Pérez Zeledón", regional: true, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Camila Zeledón Morales", correo: "camila.zeledon.morales@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Dana Paola Chaves Monge", correo: "dana.chaves.monge@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Luis Daniel Jiménez Arias", correo: "luis.jimenez.arias@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "María Jesús Vargas Jiménez", correo: "maria.vargas.jim@est.una.ac.cr" },
      { puesto: "Representación del consejo de sede regional, interuniversitaria o sección", nombre: "Noemí Fiorella Murillo Godinez", correo: "noemi.murillo.godinez@est.una.ac.cr" },
      { puesto: "Suplencia de la representación de sede", nombre: "Emilie Valeria Álvarez Vargas", correo: "emilie.alvarez.vargas@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Andy Josué Sancho Granados", correo: "andy.sancho.granados@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Hanzel Isaac Gamboa Segura", correo: "hanzel.gamboa.segura@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Ángel Leonardo Salazar Segura", correo: "angel.salazar.segura@est.una.ac.cr" },
      { puesto: "Suplencia dos", nombre: "Sara Alfaro González", correo: "sara.alfaro.gonzalez@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Sofia Michelle Carranza Jiménez", correo: "sofia.carranza.jimenez@est.una.ac.cr" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Nicoya", sigla: "ASEUNAN", sede: "Regional, Nicoya", regional: true, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Carlos Andrés Ruiz Galagarza", correo: "carlos.ruiz.galagarza@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Leslie Vanesa Ulloa Urbina", correo: "leslie.ulloa.urbina@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Aaron Solano Cordero", correo: "aaron.solano.cordero@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Nicolle Vega Orozco", correo: "nicolle.vega.orozco@est.una.ac.cr" },
      { puesto: "Representación del consejo de sede regional, interuniversitaria o sección", nombre: "Albert Rodríguez Rodríguez", correo: "albert.rodriguez.rodriguez@est.una.ac.cr" },
      { puesto: "Suplencia de la representación de sede", nombre: "Dilan Castrillo Mora", correo: "dilan.castrillo.mora@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Luis Ángel Rodríguez Márquez", correo: "luis.rodriguez.marquez@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Joshua Solórzano Díaz", correo: "joshua.solorzano.diaz@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "María Fernanda Díaz Galagarza", correo: "maria.diaz.galagarza@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Derick Tenorio Acuña", correo: "derick.tenorio.acuna@est.una.ac.cr" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Intersede", sigla: "ASEINTER", sede: "Regional, Intersede", regional: true, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Etsmi Soto López", correo: "etsmi.soto.lopez@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Sury Sarai Múñoz Espinoza", correo: "sury.munoz.espinoza@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Dariush Jabbari Caceres", correo: "dariush.jabbari.caceres@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Jimena Delgado Arce", correo: "jimena.delgado.arce@est.una.ac.cr" },
      { puesto: "Representación del consejo de sede regional, interuniversitaria o sección", nombre: "Diego Alejandro Páramo Lira", correo: "diego.paramo.lira@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Valeria Bahena Mújica", correo: "valeria.bahena.mujica@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Fabiola González Madrigal", correo: "fabiola.gonzalez.madrigal@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Kenan Joel Solís Brenes", correo: "kenan.solis.brenes@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Ricardo Daniel Altamirano Ramírez", correo: "ricardo.altamirano.ramirez@est.una.ac.cr" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Sarapiquí", sigla: "ASOECAS-SAR", sede: "Regional, Sarapiquí", regional: true, acreditada: true,
    integrantes: [
      { puesto: "Presidencia", nombre: "Jordan Castro Aguirre", correo: "jordan.castro.aguirre@est.una.ac.cr" },
      { puesto: "Vicepresidencia", nombre: "Jeremy Brenes Chaves", correo: "jeremy.brenes.chaves@est.una.ac.cr" },
      { puesto: "Representación 1 ante el CAEUNA", nombre: "Ruth Vanessa Acuña Ortega", correo: "ruth.acuna.ortega@est.una.ac.cr" },
      { puesto: "Representación 2 ante el CAEUNA", nombre: "Rashany Bustos Angulo", correo: "rashany.bustos.angulo@est.una.ac.cr" },
      { puesto: "Representación del consejo de sede regional, interuniversitaria o sección", nombre: "Kevin Steven Salazar Monge", correo: "kevin.salazar.monge@est.una.ac.cr" },
      { puesto: "Suplencia de la representación de sede", nombre: "Deyna Dayan Castro Mejías", correo: "deyna.castro.mejia@est.una.ac.cr" },
      { puesto: "Secretaría", nombre: "Reichel Elena Corrales Vindas", correo: "reichel.corrales.vindas@est.una.ac.cr" },
      { puesto: "Tesorería", nombre: "Keyna Mariel Castro Fuentes", correo: "keyna.castro.fuentes@est.una.ac.cr" },
      { puesto: "Suplencia uno", nombre: "Karen Vanessa López López", correo: "karen.lopez.lopez@est.una.ac.cr" },
      { puesto: "Suplencia dos", nombre: "Joe Josué Padilla Castrillo", correo: "joe.padilla.castrillo@est.una.ac.cr" },
      { puesto: "Fiscalía", nombre: "Thierry Galdamez Serrano", correo: "thierry.galdamez.serrano@est.una.ac.cr" },
    ],
  },
  {
    nombre: "Asociación de Estudiantes de Coto", sigla: "ASOCOTO", sede: "Regional, Coto", regional: true, acreditada: false,
    integrantes: [{ puesto: "Presidencia", nombre: "Emily Sofia Mora Patiño", correo: "emily.mora.patino@est.una.ac.cr" }],
  },
];

const puestosCompletosSedeCentral = [
  { label: "Presidencia" },
  { label: "Vicepresidencia" },
  { label: "Representación 1 ante el CAEUNA" },
  { label: "Representación 2 ante el CAEUNA" },
  { label: "Representación en el consejo de unidad académica" },
  { label: "Representación en el consejo de facultad" },
  { label: "Secretaría" },
  { label: "Tesorería" },
  { label: "Suplencia uno" },
  { label: "Suplencia dos" },
  { label: "Fiscalía" },
];

const puestosCompletosRegionales = [
  { label: "Presidencia" },
  { label: "Vicepresidencia" },
  { label: "Representación 1 ante el CAEUNA" },
  { label: "Representación 2 ante el CAEUNA" },
  { label: "Representación del consejo de sede regional, interuniversitaria o sección" },
  { label: "Suplencia de la representación de sede" },
  { label: "Fiscalía" },
  { label: "Secretaría" },
  { label: "Tesorería" },
  { label: "Suplencia uno" },
  { label: "Suplencia dos" },
];

const finesAsociaciones = [
  { icono: ShieldCheck, titulo: "Autonomía universitaria", desc: "Promover y defender la autonomía universitaria y la independencia estudiantil dentro de los espacios universitarios." },
  { icono: Megaphone, titulo: "Divulgación", desc: "Divulgar información sobre actividades académicas y el panorama regional y nacional para la comunidad estudiantil." },
  { icono: Users, titulo: "Resolución de problemáticas", desc: "Procurar resolver los problemas individuales y colectivos de la comunidad estudiantil de su unidad académica, facultad y sede." },
  { icono: Scale, titulo: "Defensa de derechos", desc: "Procurar la lucha y defensa de los derechos de la comunidad estudiantil y tomar una posición activa en la defensa de los Derechos Humanos." },
  { icono: Gavel, titulo: "Cero tolerancia", desc: "Rechazar y actuar ante cualquier manifestación de acoso, hostigamiento o discriminación de cualquier tipo." },
  { icono: Landmark, titulo: "Extensión universitaria", desc: "Facilitar espacios de extensión para colaborar con la academia, la investigación, la cultura y el deporte." },
];

const puestosSedeCentral = [
  "Presidencia",
  "Vicepresidencia",
  "Dos representaciones ante el CAEUNA",
  "Representación en el consejo de unidad académica",
  "Representación en el consejo de facultad",
  "Secretaría",
  "Tesorería",
  "Suplencia uno",
  "Suplencia dos",
  "Fiscalía",
];

const puestosRegionales = [
  "Presidencia",
  "Vicepresidencia",
  "Dos representaciones ante el CAEUNA",
  "Representación del consejo de sede regional, interuniversitaria o sección, y su suplencia",
  "Fiscalía",
  "Secretaría",
  "Tesorería",
  "Suplencia uno",
  "Suplencia dos",
];

const funcionesPuestos = [
  { cargo: "Presidencia", desc: "Representa jerárquicamente a la asociación ante la UNA, dirige las reuniones internas y las Asambleas de Estudiantes, y convoca a las sesiones de la Junta Directiva." },
  { cargo: "Vicepresidencia", desc: "Trabaja junto a la presidencia en la gestión de la asociación, la sustituye en ausencia temporal o permanente y apoya la coordinación de actividades." },
  { cargo: "Secretaría", desc: "Lleva el control de la correspondencia y documentación, redacta y custodia las actas de reuniones y Asambleas Generales, y gestiona la agenda de actividades." },
  { cargo: "Tesorería", desc: "Administra los recursos financieros, elabora informes financieros periódicos, controla ingresos y egresos, y coordina con el CAEUNA la solicitud de presupuesto." },
  { cargo: "Fiscalía", desc: "Vela por el orden y buen funcionamiento de la asociación, audita la ejecución de fondos, fiscaliza el cumplimiento de labores y lleva el control de activos y asistencia." },
  { cargo: "Representaciones ante el CAEUNA", desc: "Asisten obligatoriamente a las sesiones del CAEUNA, informan a la asociación sobre los acuerdos tomados y coordinan con tesorería y presidencia la solicitud de presupuesto." },
  { cargo: "Representaciones de consejo (unidad, facultad o sede)", desc: "Asisten obligatoriamente a las reuniones de su consejo, informan a la asociación sobre los acuerdos y llevan un control de las actas de cada sesión." },
  { cargo: "Suplencias", desc: "Apoyan la ejecución de actividades y proyectos, asumen funciones específicas según las necesidades de la Junta Directiva y sustituyen a otros integrantes en ausencias temporales." },
];

const derechos = [
  "Participar activamente en los espacios de los órganos de la FEUNA que traten temas de interés estudiantil.",
  "Ejercer el voto en los procesos electorales internos, con voz que debe ser escuchada y respetada.",
  "Ser reconocidas oficialmente por la institución educativa, con voz y voto en las decisiones de su escuela.",
  "Definir su propia estructura, objetivos y plan de trabajo, siempre alineados con los principios del reglamento.",
  "Expresar libremente sus ideas sobre temas académicos, políticos y sociales de interés estudiantil.",
];

const deberes = [
  "Actuar en beneficio de la población estudiantil, promoviendo entornos de respeto e inclusión.",
  "Operar dentro del Reglamento de Asociaciones, el Estatuto Orgánico de la FEUNA y el Reglamento del TEEUNA.",
  "Brindar espacios y oportunidades reales de participación para la comunidad estudiantil.",
  "Cuidar del espacio físico y de los activos asignados a la asociación.",
  "Promover valores de empatía, respeto, compañerismo, solidaridad y tolerancia.",
];

const todasLasAsociaciones = [...asociacionesSedeCentral, ...asociacionesRegionales];

export function AsociacionesPage() {
  const [busqueda, setBusqueda] = useState("");
  const [asociacionSeleccionada, setAsociacionSeleccionada] = useState(asociacionesSedeCentral[0].sigla);

  const asociacionesFiltradas = useMemo(() => {
    const termino = busqueda.trim().toLowerCase();
    if (!termino) return todasLasAsociaciones;
    return todasLasAsociaciones.filter(
      (a) => a.nombre.toLowerCase().includes(termino) || a.sigla.toLowerCase().includes(termino)
    );
  }, [busqueda]);

  const asociacionActiva = todasLasAsociaciones.find((a) => a.sigla === asociacionSeleccionada);
  const puestos = asociacionActiva?.regional ? puestosCompletosRegionales : puestosCompletosSedeCentral;

  return (
    <div>
      <HeroInternal
        title="Asociaciones Estudiantiles"
        subtitle="Gobiernos estudiantiles autónomos de cada unidad académica, centro, campus o sede, adscritos a la FEUNA."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Órganos" }, { label: "Asociaciones" }]}
      />

      {/* Introducción */}
      <section className="py-12 bg-white">
        <div className="max-w-[1000px] mx-auto px-5 text-center">
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333333' }}>
            Las asociaciones estudiantiles son los <strong>gobiernos estudiantiles autónomos</strong> de cada unidad académica,
            centro, campus regional, sección o residencia de la Universidad Nacional. Forman parte de la FEUNA y son la base
            de la representación estudiantil ante el <Link to="/caeuna" className="text-[#bb1f1f] hover:underline font-semibold">CAEUNA</Link>.
          </p>
        </div>
      </section>

      {/* Fines */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Fines de las asociaciones</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              Según el Reglamento General de Asociaciones Estudiantiles de la FEUNA, cada asociación existe para cumplir estos fines.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {finesAsociaciones.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-[#dddddd]">
                <f.icono size={28} className="text-[#bb1f1f] mb-3" />
                <h3 className="mb-2" style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>{f.titulo}</h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#666666' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo se organiza / Composición de juntas directivas */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Composición de la Junta Directiva</h2>
            <p className="max-w-[800px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              Los puestos varían según se trate de una asociación de la sede central (Campus Omar Dengo y Benjamín Núñez)
              o de un campus regional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f5f5f5] rounded-lg p-8 border-t-4 border-[#034991]">
              <div className="flex items-center gap-3 mb-5">
                <Building2 size={24} className="text-[#034991]" />
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>Sede central</h3>
              </div>
              <ul className="space-y-2.5">
                {puestosSedeCentral.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronRight size={16} className="text-[#034991] mt-0.5 shrink-0" />
                    <span style={{ fontSize: '14px', color: '#333333' }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f5f5f5] rounded-lg p-8 border-t-4 border-[#bb1f1f]">
              <div className="flex items-center gap-3 mb-5">
                <MapPin size={24} className="text-[#bb1f1f]" />
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>Campus y sedes regionales</h3>
              </div>
              <ul className="space-y-2.5">
                {puestosRegionales.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronRight size={16} className="text-[#bb1f1f] mt-0.5 shrink-0" />
                    <span style={{ fontSize: '14px', color: '#333333' }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center mt-8" style={{ fontSize: '13px', color: '#999' }}>
            El período de las Juntas Directivas es de un año y medio, según el Estatuto Orgánico de la FEUNA.
          </p>
        </div>
      </section>

      {/* Directorio de asociaciones */}
      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Directorio de asociaciones</h2>
            <p className="max-w-[700px] mx-auto" style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              Buscá y elegí una asociación estudiantil para ver los puestos de su Junta Directiva.
              Los nombres y correos se irán completando a medida que cada asociación los facilite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6">
            {/* Buscador y lista */}
            <div>
              <div className="relative mb-3">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]" />
                <input
                  type="text"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  placeholder="Buscar por nombre o sigla..."
                  className="w-full border border-[#dddddd] rounded pl-9 pr-3 py-2.5"
                  style={{ fontSize: '14px' }}
                />
              </div>
              <div className="border border-[#dddddd] rounded-lg overflow-y-auto" style={{ maxHeight: '420px' }}>
                {asociacionesFiltradas.length === 0 && (
                  <p className="px-4 py-4 text-center text-[#999]" style={{ fontSize: '13px' }}>
                    No se encontró ninguna asociación.
                  </p>
                )}
                {asociacionesFiltradas.map((a) => (
                  <button
                    key={a.sigla}
                    onClick={() => setAsociacionSeleccionada(a.sigla)}
                    className={`w-full text-left px-4 py-3 border-b border-[#f0f0f0] last:border-b-0 transition-colors ${
                      asociacionSeleccionada === a.sigla ? 'bg-[#bb1f1f]/10' : 'hover:bg-[#f5f5f5]'
                    }`}
                  >
                    <div style={{ fontSize: '13px', fontWeight: 600, color: asociacionSeleccionada === a.sigla ? '#bb1f1f' : '#1a1a1a' }}>
                      {a.nombre}
                    </div>
                    <div className="flex items-center gap-1" style={{ fontSize: '12px', color: '#999' }}>
                      <span>{a.sigla} · {a.sede}</span>
                      {a.acreditada === false && <AlertTriangle size={12} className="text-[#c75b12] shrink-0" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Detalle de la asociación seleccionada */}
            {asociacionActiva && (
              <div className="bg-[#f5f5f5] rounded-lg border border-[#dddddd] p-6 h-fit">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.3 }}>{asociacionActiva.nombre}</h3>
                  <span className="shrink-0 bg-[#bb1f1f]/10 text-[#bb1f1f] px-2 py-1 rounded" style={{ fontSize: '12px', fontWeight: 700 }}>
                    {asociacionActiva.sigla}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[#666666] mb-5" style={{ fontSize: '13px' }}>
                  <MapPin size={13} className="shrink-0" />
                  <span>{asociacionActiva.sede}</span>
                </div>

                {!asociacionActiva.integrantes || asociacionActiva.integrantes.length === 0 ? (
                  <div className="bg-white rounded-lg p-5" style={{ fontSize: '14px', color: '#333333' }}>
                    <div className="flex items-start gap-3">
                      <AlertTriangle size={20} className="text-[#c75b12] shrink-0 mt-0.5" />
                      <div>
                        <p style={{ fontWeight: 600, color: '#c75b12' }}>
                          {asociacionActiva.acreditada === false ? "Sin Junta Directiva vigente" : "Integrantes por confirmar"}
                        </p>
                        <p className="mt-1 text-[#666666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                          {asociacionActiva.acreditada === false
                            ? "Según el registro de acreditación del TEEUNA, esta asociación no cuenta actualmente con una Junta Directiva acreditada. Consultá con el TEEUNA o el CAEUNA para conocer el proceso de reactivación."
                            : "Aún no contamos con el listado de integrantes de esta Junta Directiva. Se actualizará en cuanto la asociación lo facilite."}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-lg p-5 space-y-2" style={{ fontSize: '14px', color: '#333333' }}>
                    {puestos.map((p) => {
                      const integrante = asociacionActiva.integrantes!.find((i) => i.puesto === p.label);
                      return (
                        <div key={p.label} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-1.5">
                          <strong className="shrink-0">{p.label}:</strong>
                          {integrante ? (
                            <span>
                              {integrante.nombre}
                              {integrante.correo && (
                                <a href={`mailto:${integrante.correo}`} className="ml-1.5 text-[#034991] hover:underline" style={{ fontSize: '13px' }}>
                                  ({integrante.correo})
                                </a>
                              )}
                            </span>
                          ) : (
                            <span className="text-[#999]">Vacante</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Funciones por puesto */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Funciones de cada puesto</h2>
          </div>
          <div className="space-y-4 max-w-[900px] mx-auto">
            {funcionesPuestos.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border-l-4 border-[#bb1f1f]">
                <h3 className="mb-1.5" style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>{f.cargo}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666666' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Derechos y deberes */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Derechos y deberes de las asociaciones</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f5f5f5] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-5">
                <Vote size={24} className="text-[#2d7a3e]" />
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>Derechos</h3>
              </div>
              <ul className="space-y-3">
                {derechos.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronRight size={16} className="text-[#2d7a3e] mt-0.5 shrink-0" />
                    <span style={{ fontSize: '14px', lineHeight: 1.5, color: '#333333' }}>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f5f5f5] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-5">
                <ShieldCheck size={24} className="text-[#8e44ad]" />
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>Deberes</h3>
              </div>
              <ul className="space-y-3">
                {deberes.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronRight size={16} className="text-[#8e44ad] mt-0.5 shrink-0" />
                    <span style={{ fontSize: '14px', lineHeight: 1.5, color: '#333333' }}>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Presupuesto */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1000px] mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>Presupuesto de las asociaciones</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#666666' }}>
              El Estatuto Orgánico de la FEUNA (Art. 129) destina un porcentaje del presupuesto ordinario exclusivamente
              a las asociaciones estudiantiles, para promover actividades, proyectos y programas de desarrollo estudiantil.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-8 text-center border-t-4 border-[#034991]">
              <Wallet size={32} className="text-[#034991] mx-auto mb-3" />
              <div style={{ fontSize: '36px', fontWeight: 700, color: '#034991' }}>40%</div>
              <p className="mt-2" style={{ fontSize: '14px', color: '#666666' }}>del presupuesto ordinario para las Asociaciones de la Sede Central</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center border-t-4 border-[#bb1f1f]">
              <HandCoins size={32} className="text-[#bb1f1f] mx-auto mb-3" />
              <div style={{ fontSize: '36px', fontWeight: 700, color: '#bb1f1f' }}>20%</div>
              <p className="mt-2" style={{ fontSize: '14px', color: '#666666' }}>del presupuesto ordinario para las Asociaciones de las Sedes Regionales</p>
            </div>
          </div>
          <p className="text-center mt-6" style={{ fontSize: '13px', color: '#999' }}>
            Las asociaciones administran estos recursos de forma transparente y presentan informes semestrales
            a la Mesa Coordinadora del CAEUNA y a su Asamblea General.
          </p>
        </div>
      </section>

      {/* Cómo participar */}
      <section className="py-16 bg-white">
        <div className="max-w-[1000px] mx-auto px-5">
          <div className="bg-gradient-to-r from-[#034991] to-[#023166] rounded-lg p-8 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <Users size={24} />
              </div>
              <div>
                <h3 className="mb-3" style={{ fontSize: '20px', fontWeight: 700 }}>¿Cómo participar en tu asociación?</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.95 }}>
                  Todo el estudiantado regular, debidamente empadronado y matriculado en su unidad académica, tiene derecho
                  a participar en la asociación de su carrera: asistiendo a asambleas generales, postulándote a la Junta
                  Directiva o proponiendo iniciativas a través de tus representantes.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="mb-3" style={{ fontSize: '20px', fontWeight: 700 }}>Marco normativo</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.95 }}>
                  Las asociaciones se rigen por el Reglamento General de Asociaciones Estudiantiles de la FEUNA, el
                  Estatuto Orgánico de la FEUNA y el Reglamento del TEEUNA. Consultá estos documentos en la sección
                  de <Link to="/estatuto" className="underline font-semibold">Estatuto y reglamentos</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-gradient-to-r from-[#bb1f1f] to-[#8b1515]">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: '28px', fontWeight: 700 }}>
            ¿Querés sumarte a tu asociación estudiantil?
          </h2>
          <p className="text-white/90 mb-8" style={{ fontSize: '16px', lineHeight: 1.7 }}>
            Conocé las formas de participar en la vida organizativa de la FEUNA, desde tu asociación hasta las
            comisiones del Directorio.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/participa/sumate"
              className="inline-flex items-center gap-2 bg-white text-[#bb1f1f] px-8 py-4 rounded hover:bg-white/95 transition-colors"
              style={{ fontSize: '16px', fontWeight: 700 }}
            >
              <Users size={20} />
              Sumate a la FEUNA
            </Link>
            <Link
              to="/caeuna"
              className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded hover:bg-white/20 transition-colors"
              style={{ fontSize: '16px', fontWeight: 600 }}
            >
              Ver el CAEUNA
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
