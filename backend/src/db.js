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

async function postAgente(nombre, especie, fecha_de_ingreso, estado, nivel_de_habilidad) {
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

async function getAllMisiones() {
    const result = await dbClient.query('SELECT * FROM misiones');
    return result.rows;
}

async function getOneMision(id) {
    const result = await dbClient.query('SELECT * FROM misiones WHERE id = $1', [id]);
    return result.rows[0];
}

async function postMision(id_agente, id_villano, fecha, titulo, descripcion, estado, coste, dificultad) {
    const result = await dbClient.query(
        'INSERT INTO misiones (id_agente, id_villano, fecha, titulo, descripcion, estado, coste, dificultad) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
        [id_agente, id_villano, fecha, titulo, descripcion, estado, coste, dificultad]);
    
    if (result.rowCount === 0) {
        return undefined;
    }

    return {
        id_agente: result.rows[0].id_agente,
        id_villano: result.rows[0].id_villano,
        fecha: result.rows[0].fecha,
        titulo: result.rows[0].titulo,
        descripcion: result.rows[0].descripcion,
        estado: result.rows[0].estado,
        coste: result.rows[0].coste,
        dificultad: result.rows[0].dificultad
    };
}

async function putMision(id, id_agente, id_villano, fecha, titulo, descripcion, estado, coste, dificultad) {
    const result = await dbClient.query(
        'UPDATE misiones SET id_agente = $2, id_villano = $3, fecha = $4, titulo = $5, descripcion = $6, estado = $7, coste = $8, dificultad = $9 WHERE id = $1',
    [id, id_agente, id_villano, fecha, titulo, descripcion, estado, coste, dificultad]);

    if (result.rowCount === 0) {
        return undefined;
    }

    return {
        id: id,
        id_agente: id_agente,
        id_villano: id_villano,
        fecha: fecha,
        titulo: titulo,
        descripcion: descripcion,
        estado: estado,
        coste: coste,
        dificultad: dificultad
    }
}

async function deleteMision(id) {
    const result = await dbClient.query('DELETE FROM misiones WHERE id = $1', [id]);

    if (result.rowCount === 0) {
        return undefined;
    }

    return id;
}

//------------VILLANOS------------------

async function getAllVillanos() {
    const result = await dbClient.query('SELECT * FROM villanos;')
    return result.rows;
}

async function getOneVillano(id) {
    const result = await dbClient.query('SELECT * FROM villanos WHERE id = $1;', [id])

    if (result.rows.length === 0) {
        return undefined;
    }

    return result.rows[0];
}

async function postVillano(nombre, edad, ocupacion, ubicacion, estado, apodo) {
    const result = await dbClient.query(
        'INSERT INTO villanos (nombre, edad, ocupacion, ubicacion, estado, apodo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [nombre, edad, ocupacion, ubicacion, estado, apodo]);
    
    if (result.rowCount === 0) {
        return undefined;
    }

    return {
        id: result.rows[0].id,
        nombre: result.rows[0].nombre,
        edad: result.rows[0].edad,
        ocupacion: result.rows[0].ocupacion,
        ubicacion: result.rows[0].ubicacion,
        estado: result.rows[0].estado,
        apodo: result.rows[0].apodo
    };
}

async function putVillano(id, nombre, edad, ocupacion, ubicacion, estado, apodo) {
    const result = await dbClient.query(
        'UPDATE villanos SET nombre = $2, edad = $3, ocupacion = $4, ubicacion = $5, estado = $6, apodo = $7 WHERE id = $1',
        [id, nombre, edad, ocupacion, ubicacion, estado, apodo]);
    
    if (result.rowCount === 0) {
        return undefined;
    }

    return {
        id: id,
        nombre: nombre,
        edad: edad,
        ocupacion: ocupacion,
        ubicacion: ubicacion,
        estado: estado,
        apodo: apodo
    };
}

async function deleteVillano(id) {
    const resut = await dbClient.query('DELETE FROM villanos WHERE id = $1', [id]);

    if (result.rowCount === 0) {
        return undefined;
    }

    return id;
}

//-------EXPORTACION DE FUNCIONES-------

module.exports = {
    getAllAgentes,
    getOneAgente,
    putAgente,
    postAgente,
    deleteAgente
};