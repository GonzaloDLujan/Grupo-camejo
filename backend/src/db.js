//Este archivo se encarga de la comunicacion entre la DB y el Backend

import { Pool } from pg

//Conexion con la DB
const dbClient = new Pool({
    user: 'postgres',
    port: 5432,
    host: 'localhost',
    database: 'OWCA',
    password: 'postgres'
});


async function getAllAgentes() {
    const res = await dbClient.query('SELECT * FROM agentes')
    return res.rows
}

async function getOneAgente(id) {
    const res = await dbClient.query('SELECT * FROM agentes WHERE id = $1 LIMIT 1', [id])
    return res.rows[0]
}

async function putAgente(id) {

}

async function postAgente() {

}

async function deleteAgente(id) {

}

module.exports = {
    getAllAgentes,
    getOneAgente,
    putAgente,
    postAgente,
    deleteAgente
};