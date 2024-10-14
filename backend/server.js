

// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const process = require("dotenv").config();

const app = express();
//const port = process.env.PORT || 9000;
const port = 9000;

// Middleware
app.use(express.json());
app.use(cors());

//Conexión a MongoDB Atlas
// const DATABASE_URL = process.env.MONGODB_URI;

// const connect = async () => {
//   try {
//     await mongoose.connect(DATABASE_URL);
//     console.log("Connected to database");
//   } catch (error) {
//     console.log(error);
//   }
// };
//connect();

// const authenticationMiddleware = (req, res, next) => {
//   if (req.session.user) {
//     console.log('logueado')
//     next();
//   } else {
//     res.redirect("/login");
//   }
// };

const logMiddleware = (req, res, next) => {
  //para loguear los request
  console.log(`${req.method} request for '${req.url}'`);
  next();
};

app.use(logMiddleware);

mongoose
  .connect(
    "mongodb+srv://Alexis1982:Alexis1982@clustercevesita.looptnu.mongodb.net/back6",
    // "mongodb+srv://Alexis1982:Alexis1982@clustercevesita.looptnu.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((error) => console.error("Error al conectar a MongoDB Atlas", error));

// Modelo de Usuario
const Usuario = mongoose.model("Usuario", {
  nombre: String,
  apellido: String,
  email: String,
  password: String,
});

// Ruta para obtener todos los usuarios
app.get("/Contactanos", async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuarios", error });
  }
});

// Ruta para crear un usuario
app.post("/Contactanos", async (req, res) => {
  const { nombre, apellido, email, password } = req.body;
  const usuario = new Usuario({ nombre, apellido, email, password });
  try {
    await usuario.save();
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ message: "Error al crear usuario", error });
  }
});

// Ruta para actualizar un usuario
app.put("/Contactanos/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, email, password } = req.body;
  try {
    const usuario = await Usuario.findByIdAndUpdate(
      id,
      { nombre, apellido, email, password },
      { new: true }
    );
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar usuario", error });
  }
});

// Ruta para eliminar un usuario
app.delete("/Contactanos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    console.log("trying to delete user");
    console.log("id", id);
    console.log("---------");
    console.log("---------");
    const usuario = await Usuario.findByIdAndDelete(id);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json({ message: "Usuario eliminado" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error al eliminar usuario", error });
  }
});

app.get("/promo", async (req, res) => {
  const cocktail = await fetch(
    "http://www.thecocktaildb.com/api/json/v1/1/random.php",
    {}
  );
  console.log(cocktail);
  //response.data.drinks[0];
});

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
