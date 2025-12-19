export default class Agente {
  constructor(id, nombre, especie, fecha_de_ingreso, estado, nivel_de_habilidad) {
    if (typeof id !== "number" || !Number.isInteger(id) || id <= 0)
      throw new Error("id inválido: debe ser un entero positivo");

    if (typeof nombre !== "string" || nombre.length === 0)
      throw new Error("nombre inválido: debe ser un string no vacío");

    if (typeof especie !== "string" || especie.length === 0)
      throw new Error("especie inválida: debe ser un string no vacío");

    if (fecha_de_ingreso && !(typeof fecha_de_ingreso instanceof Date))
      throw new Error("fecha_de_ingreso inválida");

    if (typeof estado !== "string" || estado.length === 0)
      throw new Error("estado inválido: debe ser un string no vacío");

    if (typeof nivel_de_habilidad !== "number" || nivel_de_habilidad < 1 || nivel_de_habilidad > 10)
      throw new Error("nivel_de_habilidad inválido: debe estar entre 1 y 10");

    this.id = id;
    this.nombre = nombre;
    this.especie = especie;
    this.fecha_de_ingreso = fecha_de_ingreso;
    this.estado = estado;
    this.nivel_de_habilidad = nivel_de_habilidad;
  }
}