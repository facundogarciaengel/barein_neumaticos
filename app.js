/*Este es el archivo principal de tu aplicación. Aquí escribirás el
 código que se encargará de manejar las solicitudes HTTP y las
  respuestas del servidor.*/
  const express = require("express");
const app = express();
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "barein_jcp",
  password: "1234",
  port: 5432,
});


pool.connect((err, client, done) => {
  if (err) {
    console.log("Error al conectarse a la base de datos: ", err);
  } else {
    console.log("Conexión exitosa a la base de datos");
  }
  done();
});


app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM clientes");
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
