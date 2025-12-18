const API_URL = "http://localhost:3000/api";

export async function getAgentes() {
    const response = await fetch(`${API_URL}/agentes`);
    return response.json();
}

export async function getAgente(id) {
  const response = await fetch(`${API_URL}/agentes/${id}`);
  if (!response.ok) {
    throw new Error("Ese agente no existe");
  }
  return response.json();
}

export async function crearAgente(agente) {
  const response = await fetch(`${API_URL}/agentes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(agente)
  });
  if (!response.ok) {
    throw new Error("Error al crear agente");
  }
  return response.json();
}

export async function editarAgente(id, agente) {
  const response = await fetch(`${API_URL}/agentes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(agente)
  });
  return response.json();
}

export async function eliminarAgente(id) {
  const response = await fetch(`${API_URL}/agentes/${id}`, {
    method: "DELETE"
  });
  return response.json();
}

// IMPORTAMOS LAS FUNCIONES DE LA API
import {
  getAgentes,
  getAgente,
  crearAgente,
  editarAgente,
  eliminarAgente
} from "./api.js";

// REFERENCIAS AL DOM
const btnCargar = document.getElementById("btnCargar");
const listaAgentes = document.getElementById("listaAgentes");
const formAgente = document.getElementById("formAgente");

async function cargarAgentes() {
  listaAgentes.innerHTML = "";

  try {
    const agentes = await getAgentes();
    agentes.forEach(agente => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${agente.nombre}</strong>
        (${agente.especie}) - Nivel: ${agente.nivel}
      `;
      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "Eliminar";

      btnEliminar.addEventListener("click", async () => {
        const confirmar = confirm("¿Seguro que querés eliminar este agente?");
        if (!confirmar) return;

        await eliminarAgente(agente.id);
        cargarAgentes();
      });
      const btnEditar = document.createElement("button");
      btnEditar.textContent = "Editar";
      btnEditar.addEventListener("click", async () => {
        const nuevoNombre = prompt("Nuevo nombre:", agente.nombre);
        if (!nuevoNombre) return;
        await editarAgente(agente.id, {
          ...agente,
          nombre: nuevoNombre
        });
        cargarAgentes();
      });
      li.appendChild(btnEditar);
      li.appendChild(btnEliminar);
      listaAgentes.appendChild(li);
    });
  } catch (error) {
    alert("Error cargando agentes");
    console.error(error);
  }
}

btnCargar.addEventListener("click", cargarAgentes);

formAgente.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nuevoAgente = {
    nombre: document.getElementById("nombre").value,
    especie: document.getElementById("especie").value,
    fechaIngreso: document.getElementById("fecha").value,
    estado: document.getElementById("estado").value,
    nivel: Number(document.getElementById("nivel").value)
  };

  try {
    await crearAgente(nuevoAgente);
    alert("Agente creado correctamente");
    formAgente.reset();
    cargarAgentes();
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});