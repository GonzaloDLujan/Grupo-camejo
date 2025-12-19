import express from "express"
import cors from "cors"
import {
  getAllAgentes,
  getOneAgente,
  putAgente,
  postAgente,
  deleteAgente,
  getAllVillanos,
  getOneVillano,
  postVillano,
  putVillano,
  deleteVillano,
  getAllMisiones,
  getOneMision,
  postMision,
  putMision,
  deleteMision
} from "./db.js"

const app = express()
const port = 3000

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!asdasdasd')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//Endpoints de Agentes

//Ver todos los Agentes
app.get('/api/agentes', async (req, res) => {
  const agentes = await getAllAgentes()
  res.json(agentes)
})

//Ver un Agente
app.get('/api/agentes/:id', async (req, res) => {
  const agente = await getOneAgente(req.params.id)
  if (!agente) {
    return res.status(404).json({ error: 'Agente No Encontrado' })
  } else {
    return res.json(agente)
  }
})

//Insertar Agente
app.post('/api/agentes', async (req, res) => {
  const {
    nombre,
    especie,
    fecha_de_ingreso,
    estado,
    nivel_de_habilidad
  } = req.body;

  if (!nombre || !especie || !fecha_de_ingreso || !estado || !nivel_de_habilidad) {
    return res.status(400).json({ error: "Missing Required Fields" });
  }

  const agente = await postAgente(
    nombre,
    especie,
    fecha_de_ingreso,
    estado,
    nivel_de_habilidad
  );

  if (!agente) {
    return res.status(500).json({ error: 'Failed To Create Agente' });
  }

  return res.status(201).json(agente);
});

//Editar Agente
app.put('/api/agentes/:id', async (req, res) => {
  let agente = await getOneAgente(req.params.id);

  if (agente === undefined) {
    return res.sendStatus(404);
  }

  if (req.body === undefined) {
    return res.status(400).send("No body was provided");
  }
  const {
    nombre,
    especie,
    fecha_de_ingreso,
    estado,
    nivel_de_habilidad
  } = req.body;

  if (nombre === undefined) {
    return res.status(400).send("Name not provided");
  }

  if (especie === undefined) {
    return res.status(400).send("Especie not provided");
  }

  if (fecha_de_ingreso === undefined) {
    return res.status(400).send("Fecha de ingreso not provided");
  }

  if (estado === undefined) {
    return res.status(400).send("Status not provided");
  }

  if (nivel_de_habilidad === undefined) {
    return res.status(400).send("Nivel De Habilidad not provided");
  }

  agente = await putAgente(req.params.id, nombre, especie, fecha_de_ingreso, estado, nivel_de_habilidad);

  if (agente === undefined) {
    return res.sendStatus(500);
  }

  res.json(agente);
})

//Borrar Agente
app.delete('/api/agentes/:id', async (req, res) => {
  const agente = await deleteAgente(req.params.id)
  if (!agente) {
    return res.status(404).json({ error: 'Agente id: ' + req.params.id + ' No Encontrado' })
  } else {
    return res.json({ status: 'OK', id: agente })
  }
})

//END POINTS VILLANOS

//VER TODOS LOS VILLANOS
app.get('/api/villanos', async (req, res) => {
  const villanos = await getAllVillanos();
  res.json(villanos);
});

//VER UN VILLANO
app.get('/api/villanos/:id', async (req, res) => {
  const villano = await getOneVillano(req.params.id);

  if (villano === undefined) {
    res.sendStatus(404);
  }

  res.json(villano);
});

//CREAR UN VILLANO
app.post('/api/villanos', async (req, res) => {
  if (req.body === undefined) {
    return res.status(400).send("No body was provided");
  }

  const {
    nombre,
    edad,
    ocupacion,
    ubicacion,
    estado,
    apodo
  } = req.body

  if (nombre === undefined) {
    return res.status(400).send("Name not provided");
  }

  if (edad === undefined) {
    return res.status(400).send("Age not provided");
  }

  if (ocupacion === undefined) {
    return res.status(400).send("Occupation not provided");
  }

  if (ubicacion === undefined) {
    return res.status(400).send("Location not provided");
  }

  if (estado === undefined) {
    return res.status(400).send("Status not provided");
  }

  if (apodo === undefined) {
    return res.status(400).send("Nickname not provided");
  }

  const villano = await postVillano(nombre, edad, ocupacion, ubicacion, estado, apodo);

  res.status(201).json(villano);
});

//EDITAR VILLANO
app.put('/api/villanos/:id', async (req, res) => {
  let villano = await getOneVillano(req.params.id);

  if (villano === undefined) {
    return res.sendStatus(404);
  }

  if (req.body === undefined) {
    return res.status(400).send("No body was provided");
  }

  const {
    nombre,
    edad,
    ocupacion,
    ubicacion,
    estado, apodo
  } = req.body

  if (nombre === undefined) {
    return res.status(400).send("Name not provided");
  }

  if (edad === undefined) {
    return res.status(400).send("Age not provided");
  }

  if (ocupacion === undefined) {
    return res.status(400).send("Occupation not provided");
  }

  if (ubicacion === undefined) {
    return res.status(400).send("Location not provided");
  }

  if (estado === undefined) {
    return res.status(400).send("Status not provided");
  }

  if (apodo === undefined) {
    return res.status(400).send("Nickname not provided");
  }

  villano = await putVillano(req.params.id, nombre, edad, ocupacion, ubicacion, estado, apodo);

  if (villano === undefined) {
    return res.sendStatus(500);
  }

  res.json(villano);
});

//ELIMINAR VILLANO
app.delete('/api/villanos/:id', async (req, res) => {
  const villano = await getOneVillano(req.params.id);

  if (villano === undefined) {
    return res.sendStatus(404);
  }

  if (!(await deleteVillano(req.params.id))) {
    return res.sendStatus(500);
  }

  return res.json(villano);
})

//END POINTS MISIONES

//VER TODAS LAS MISIONES 
app.get('/api/misiones', async (req, res) => {
  const misiones = await getAllMisiones();
  return res.json(misiones);
});

//VER UNA MISION
app.get('/api/misiones/:id', async (req, res) => {
  const mision = await getOneMision(req.params.id);

  if (mision === undefined) {
    return res.sendStatus(404);
  }

  return res.json(mision);
})

//CREAR UNA MISION
app.post('/api/misiones', async (req, res) => {
  if (req.body === undefined) {
    return res.status(400).send("No body was provided");
  }

  const {
    id_agente,
    id_villano,
    fecha,
    titulo,
    descripcion,
    estado,
    coste,
    dificultad
  } = req.body

  if ((await getOneMision(id)) !== undefined) {
    return res.status(409).send("The mission already exists");
  }

  if (id_agente === undefined) {
    return res.status(400).send("Agent ID not provided");
  }

  if (id_villano === undefined) {
    return res.status(400).send("Villain ID not provided");
  }

  if (fecha === undefined) {
    return res.status(400).send("Date not provided");
  }

  if (titulo === undefined) {
    return res.status(400).send("Title not provided");
  }

  if (descripcion === undefined) {
    return res.status(400).send("Description not provided");
  }

  if (estado === undefined) {
    return res.status(400).send("Status not provided");
  }

  if (coste === undefined) {
    return res.status(400).send("Cost not provided");
  }

  if (dificultad === undefined) {
    return res.status(400).send("Difficulty  not provided");
  }

  const mision = await postMision(id_agente, id_villano, fecha, titulo, descripcion, estado, coste, dificultad);

  res.status(201).json(mision);
})

//EDITAR UNA MISION
app.put('/api/misiones/:id', async (req, res) => {
  let mision = await getOneMision(req.params.id);

  if (mision === undefined) {
    return res.sendStatus(404);
  }

  if (req.body === undefined) {
    return res.status(400).send("No body was provided");
  }

  const {
    id_agente,
    id_villano,
    fecha,
    titulo,
    descripcion,
    estado,
    coste,
    dificultad
  } = req.body

  if (id_agente === undefined) {
    return res.status(400).send("Agent ID not provided");
  }

  if (id_villano === undefined) {
    return res.status(400).send("Villain ID not provided");
  }

  if (fecha === undefined) {
    return res.status(400).send("Date not provided");
  }

  if (titulo === undefined) {
    return res.status(400).send("Title not provided");
  }

  if (descripcion === undefined) {
    return res.status(400).send("Description not provided");
  }

  if (estado === undefined) {
    return res.status(400).send("Status not provided");
  }

  if (coste === undefined) {
    return res.status(400).send("Cost not provided");
  }

  if (dificultad === undefined) {
    return res.status(400).send("Difficulty  not provided");
  }

  mision = await putMision(req.params.id, id_agente, id_villano, fecha, titulo, descripcion, estado, coste, dificultad);

  if (mision === undefined) {
    return res.sendStatus(500);
  }

  res.json(mision);
});

//ELIMINAR MISION
app.delete('/api/misiones/:id', async (req, res) => {
  const mision = await getOneMision(req.params.id);

  if (mision === undefined) {
    return res.sendStatus(404);
  }

  if (!(await deleteMision(req.params.id))) {
    return res.sendStatus(500);
  }

  return res.json(mision);
})
