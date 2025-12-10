import express from "express"
const app = express()
const port = process.env.PORT || 3000 //Que use el puerto de la variable de entorno o el 300 por default

app.get('/', (req, res) => {
  res.send('Hello World!asdasdasd')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
