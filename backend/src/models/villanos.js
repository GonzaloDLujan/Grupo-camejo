export default class Villano {
  constructor(id, nombre, edad, ocupacion, ubicacion, estado, apodo) {
    if (typeof id !== "number" || !Number.isInteger(id) || id <= 0)
      throw new Error("id inválido: debe ser un entero positivo");

    if (typeof nombre !== "string" || nombre.length === 0)
      throw new Error("nombre inválido: debe ser un string no vacío");

    if (typeof edad !== "number" || edad <= 0)
      throw new Error("edad inválida: debe ser un número positivo");

    if (ocupacion && typeof ocupacion !== "string")
      throw new Error("ocupacion inválida: debe ser un string");

    if (ubicacion && typeof ubicacion !== "string")
      throw new Error("ubicacion inválida: debe ser un string");

    if (typeof estado !== "string" || estado.length === 0)
      throw new Error("estado inválido: debe ser un string no vacío");

    if (apodo && typeof apodo !== "string")
      throw new Error("apodo inválido: debe ser un string");

    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.ocupacion = ocupacion || null;
    this.ubicacion = ubicacion || null;
    this.estado = estado;
    this.apodo = apodo || null;
  }
}