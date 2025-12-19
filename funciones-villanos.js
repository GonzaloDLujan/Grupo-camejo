export const API_URL = "http://localhost:3000/api";

export async function getVillanos() {
    const response = await fetch(`${API_URL}/villanos`);
    return response.json();
}

export async function getVillano(id) {
  const response = await fetch(`${API_URL}/villanos/${id}`);
  if (!response.ok) {
    throw new Error("Ese villano no existe");
  }
  return response.json();
}

export async function crearVillano(villano) {
  const response = await fetch(`${API_URL}/villanos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(villano)
  });
  if (!response.ok) {
    throw new Error("Error al crear villano");
  }
  return response.json();
}

export async function editarVillano(id, villano) {
  const response = await fetch(`${API_URL}/villanos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(villano)
  });
  return response.json();
}

export async function eliminarVillano(id) {
  const response = await fetch(`${API_URL}/villanos/${id}`, {
    method: "DELETE"
  });
  return response.json();
}