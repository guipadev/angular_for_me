export class Location {
  id?: number;
  name?: string;
  type?: string;
  dimension?: string;
  residents?: string[]; // Un array de URLs de personajes que residen en esta ubicación
  url?: string;
  created?: string; // Una fecha en formato ISO
}
