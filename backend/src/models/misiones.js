export default class Mision {
  constructor(id, id_agente, id_villano, titulo, descripcion, estado, coste, nivel_de_dificultad) {
    if (typeof id !== "number" || !Number.isInteger(id) || id <= 0)
      throw new Error("id inválido: debe ser un entero positivo");

    if (typeof id_agente !== "number" || id_agente <= 0)
      throw new Error("id del agente inválido: debe ser un entero positivo");

    if (typeof id_villano !== "number" || id_villano <= 0)
      throw new Error("id del villano inválido: debe ser un entero positivo");

    if (typeof titulo !== "string" || titulo.length === 0)
      throw new Error("titulo inválido: debe ser un string no vacío");

    if (descripcion && typeof descripcion !== "string")
      throw new Error("descripcion inválida: debe ser un string");

    if (typeof estado !== "string" || estado.length === 0)
      throw new Error("estado inválido: debe ser un string no vacío");

    if (coste && (typeof coste !== "number" || coste < 0))
      throw new Error("coste inválido: debe ser un número positivo");

    if (typeof nivel_de_dificultad !== "number" || nivel_de_dificultad < 1 || nivel_de_dificultad > 10)
      throw new Error("nivel_de_dificultad inválido: debe estar entre 1 y 10");

    this.id = id;
    this.id_agente = id_agente;
    this.id_villano = id_villano;
    this.titulo = titulo;
    this.descripcion = descripcion || null;
    this.estado = estado;
    this.coste = coste || null;
    this.nivel_de_dificultad = nivel_de_dificultad;
  }
}