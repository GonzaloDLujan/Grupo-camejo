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