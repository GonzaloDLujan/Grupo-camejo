import express from "express"

import {
  getAllAgentes,
  getOneAgente,
  putAgente,
  postAgente,
  deleteAgente
} from "db"

const app = express()
const port = 3000

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

  if (!req.params.nombre || !req.params.especie || !req.params.fecha_de_ingreso || !req.params.estado || !req.params.nivel_de_habilidad) {
    return res.status(400).json({ error: "Missing Required Fields" })
  }
  const agente = await postAgente(req.params.nombre, req.params.especie, req.params.fecha_de_ingreso, req.params.estado, req.params.nivel_de_habilidad)

  if (!agente) {
    return res.status(500).json({ error: 'Failed To Create Agente' })
  } else {
    return res.json(agente)
  }
})

//Editar Agente
app.put('/api/agentes', (req, res) => {

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
