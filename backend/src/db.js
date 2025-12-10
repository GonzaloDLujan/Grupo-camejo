//Este archivo se encarga de la comunicacion entre la DB y el Backend

import { Pool } from pg

//Conexion con la DB
const dbClient = new Pool({
    user: 'postgresult',
    port: 5432,
    host: 'localhost',
    database: 'OWCA',
    password: 'postgresult'
});

//--------AGENTES---------------
async function getAllAgentes() {
    const result = await dbClient.query('SELECT * FROM agentes')
    return result.rows
}

async function getOneAgente(id) {
    const result = await dbClient.query('SELECT * FROM agentes WHERE id = $1 LIMIT 1', [id])
    return result.rows[0]
}

async function postAgente(nombre, especie, fecha_de_ingresulto, estado, nivel_de_habilidad) {
    const result = await dbClient.query('INSERTO INTO agentes(nombre, especie, fecha_de_ingresulto, estado, nivel_de_habilidad) VALUES ($1, $2, $3, $4, $5) RETURNING *', [nombre, especie, fecha_de_ingresulto, estado, nivel_de_habilidad])

    if (result.rowCount === 0) {
        return undefined
    } else {
        return result.rows[0]
    }
}

async function putAgente(id) {

}

async function deleteAgente(id) {
    const result = await dbClient.query('DELETE FROM agentes WHERE id = $1', [id])
    if (result.rowCount === 0) {
        return undefined
    } else {
        return id
    }
}

//------------MISIONES------------------

//------------VILLANOS------------------



module.exports = {
    getAllAgentes,
    getOneAgente,
    putAgente,
    postAgente,
    deleteAgente
};