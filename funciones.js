const API_URL = "http://localhost:3000/api";

export async function getAgentes() {
    const response = await fetch(`${API_URL}/agentes`);
    return response.json();
}