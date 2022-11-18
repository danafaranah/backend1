import express from "express";
import cors from "cors"
import morgan from "morgan";

// Ruta de usuarios

import userRoute from "./routes/ejemploRoutes.js"

const app = express();

app.set("port", 4000)

app.use(morgan("dev"))
app.use(cors({ origin: "*" }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/usuarios", userRoute)

app.listen(app.get("port"), () => {
    console.log("Servidor escuchando por el puerto", app.get("port"))
})